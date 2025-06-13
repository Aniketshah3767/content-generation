'use client';
import React, { useContext, useState } from 'react';
import FormSection from './components/FormSection';
import OutputSection from './components/OutputSection';
import { TEMPLETE } from '../../_components/TempleteListSection';
import Templetes from '@/app/(data)/Templetes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { generateText } from '@/utils/AiModel';
import { AIOutput } from '@/utils/Schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useRouter } from 'next/navigation';

export default function CreateNewContent({
  params,
}: {
  params: { 'templete-slug': string };
}) {
  const selectedTemplete: TEMPLETE | undefined = Templetes?.find(
    (item) => item.slug === params['templete-slug']
  );

  const [aiOutput, setAIOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const router = useRouter();

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const { updateCreitUsage, setUpdateCreitUsage } = useContext(UpdateCreditUsageContext);

  const generateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      console.log('Please Upgrade');
      router.push('/dashboard/billing');
      return;
    }
    setLoading(true);
    let result = '';
    try {
      const selectedPrompt = selectedTemplete?.aiPrompt || '';
      const finalAIPrompt = JSON.stringify(formData) + ',' + selectedPrompt;
      result = await generateText(finalAIPrompt);
      setAIOutput(result);
    } catch (error) {
      console.error('Error generating AI content:', error);
      setAIOutput('Failed to generate content.');
      setLoading(false);
      return;
    }

    try {
      await SaveInDb(formData, selectedTemplete?.slug, result);
    } catch (error) {
      console.error('Error saving to DB:', error);
    } finally {
      setLoading(false);
      setUpdateCreitUsage(Date.now());
    }
  };

  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData,
      templeteSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY'),
    });
    console.log(result);
  };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>Back</Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplete={selectedTemplete}
          userFormInput={generateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
