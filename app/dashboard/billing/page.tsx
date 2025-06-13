'use client';

import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Loader2Icon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/Schema';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);

  const createSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/create-subscription', {});
      console.log('Subscription ID:', response.data.id);
      onPayment(response.data.id);
    } catch (error) {
      console.error('Subscription creation failed:', error);
      setLoading(false);
    }
  };

  const onPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? '',
      subscription_id: subId,
      name: 'AI - Content Generation',
      description: 'Monthly Subscription',
      handler: async (resp: any) => {
        console.log('Payment response:', resp);
        if (resp) {
          await saveSubscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const saveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress || '',
        userName: user?.fullName || '',
        active: true,
        paymentId,
        joinDate: moment().format('DD/MM/YYYY'),
      });
      console.log('Subscription saved:', result);
       if(result){
        window.location.reload();
    }
    } catch (err) {
      console.error('Error saving subscription:', err);
    }
   
  };

  return (
    <div className="bg-[#f4f6fa]">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-center font-bold text-3xl mb-10">
          Upgrade With Monthly Plan
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Free Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-8 text-center shadow-md">
            <h2 className="text-lg font-semibold text-gray-900">Free</h2>
            <p className="mt-2 text-4xl font-bold text-gray-900">
              0<span className="text-base font-medium">$/month</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700 text-left">
              {[
                '10,000 Words/Month',
                '50+ Content Templates',
                'Unlimited Download & Copy',
                '1 Month of History',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="mt-8 w-full rounded-full bg-gray-800 text-white py-2 font-medium cursor-not-allowed"
            >
              Currently Active Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-8 text-center shadow-md">
            <h2 className="text-lg font-semibold text-gray-900">Monthly</h2>
            <p className="mt-2 text-4xl font-bold text-gray-900">
              9.99<span className="text-base font-medium">$/month</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700 text-left">
              {[
                '1,00,000 Words/Month',
                '50+ Template Access',
                'Unlimited Download & Copy',
                '1 Year of History',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              disabled={loading}
              onClick={createSubscription}
              className="mt-8 w-full rounded-full border border-indigo-600 text-indigo-600 gap-2 flex justify-center items-center py-2 font-medium hover:bg-indigo-50 transition"
            >
              {loading && <Loader2Icon className="animate-spin h-5 w-5 mr-2" />}
              {userSubscription ?'Active Plan' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
