"use client";
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import UsageTrack from './UsageTrack';
import Link from 'next/link';

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing"
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting"
    },
  ];

  const path = usePathname();

  return (
    <div className='h-screen relative p-5 shadow-sm border'>
      <div className='flex items-center justify-center mb-5'>
        <Image src={'/logo2.svg'} alt='logo' width={100} height={100} />
      </div>
      <hr className='my-5 border' />
      <div className='mt-3'>
        {MenuList.map((menu) => (
          <Link href={menu.path} key={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
              ${path === menu.path ? 'bg-primary text-white' : ''}`}
            >
              <menu.icon className='h-6 w-6' />
              <h2 className='text-md'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
