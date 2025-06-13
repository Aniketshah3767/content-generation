'use client';
import React, { useContext, useState, useEffect } from 'react';
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

interface PageProps {
  params: Promise<{ 'template-slug': string }>;
}

export default function CreateNewContent({ params }: PageProps) {
  const [slug, setSlug] = useState<string>('');
  const [selectedTemplete, setSelectedTemplete] = useState<TEMPLETE | undefined>(undefined);
  const [aiOutput, setAIOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription } = useContext(UserSubscriptionContext);
  const { setUpdateCreitUsage } = useContext(UpdateCreditUsageContext);

  // Handle async params
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      const templateSlug = resolvedParams['template-slug'];
      setSlug(templateSlug);
      
      const foundTemplate = Templetes.find(
        (item) => item.slug === templateSlug
      );
      setSelectedTemplete(foundTemplate);
    };
    
    resolveParams();
  }, [params]);

  const generateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      router.push('/dashboard/billing');
      return;
    }
    setLoading(true);
    try {
      const selectedPrompt = selectedTemplete?.aiPrompt || '';
      const finalAIPrompt = JSON.stringify(formData) + ',' + selectedPrompt;
      const result = await generateText(finalAIPrompt);
      setAIOutput(result);
      await db.insert(AIOutput).values({
        formData,
        templeteSlug: slug,
        aiResponse: result,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD/MM/YYYY'),
      });
      setUpdateCreitUsage(Date.now());
    } catch (error) {
      console.error('Error:', error);
      setAIOutput('Failed to generate content.');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while params are being resolved
  if (!slug || !selectedTemplete) {
    return (
      <div className="p-5">
        <div>Loading...</div>
      </div>
    );
  }

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
