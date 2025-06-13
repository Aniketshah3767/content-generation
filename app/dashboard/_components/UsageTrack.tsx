"use client"
import { Button } from '@/components/ui/button'
import { AIOutput, UserSubscription } from '@/utils/Schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);
  const [maxWords,setMaxWords] = useState(10000);
  const {updateCreitUsage, setUpdateCreitUsage} = useContext(UpdateCreditUsageContext)

  useEffect(() => {
    if (user) {
      GetData();
      checkUserSubscribed();
    }
  }, [user]);


  useEffect(()=>{
    GetData();
  },[updateCreitUsage])

  const GetData = async () => {
    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };

  const checkUserSubscribed = async () => {
    const result = await db
      .select()
      .from(UserSubscription)
      .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
    if (result.length > 0) {
      setUserSubscription(true);
      setMaxWords(10000000)
    }
  };

  const GetTotalUsage = (historyRecords) => {
    const total = historyRecords.reduce(
      (sum, el) => sum + (el.aiResponse?.length || 0),
      0
    );
    setTotalUsage(total);
  };

  return (
    <div className='m-5'>
      <div className='bg-primary text-white rounded-lg p-3'>
        <h2 className='font-medium'>Credits Usage</h2>
        <div className='h-2 bg-[#9981f9]'>
          <div
            className='h-2 bg-white rounded-full'
            style={{ width: `${(totalUsage /maxWords) * 100}%` }}
          />
        </div>
        <h2 className='text-sm my-2'>
          {totalUsage}/
          {maxWords} Credits Used
        </h2>
      </div>
      <Button variant='secondary' color='primary' className='w-full'>
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
