"use client"
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LucideFileText, LucideSettings, LucideBookOpen, LucideMessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen bg-white">
      <div className="text-center py-20 bg-gradient-to-b from-white to-gray-50">
        <p className="text-sm font-medium text-gray-700 mb-2">
          <Button 
            variant="outline" 
            className="rounded-full text-xs px-4 py-1"
            onClick={() => router.push('/dashboard')}
          >
            Ai Content Generator Membership - Join Now
          </Button>
        </p>
        <h1 className="text-5xl font-bold text-gray-800">
          AI Content <span className="text-primary">Generator</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <div className="mt-8">
          <Button onClick={() => router.push('/dashboard')} className="bg-primary text-white px-6 py-2 rounded-full">Get started</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center py-43 px-12 bg-white">
        <Feature
          Icon={LucideFileText}
          title="25+ templates"
          desc="Responsive, and mobile-first project on the web."
        />
        <Feature
          Icon={LucideSettings}
          title="Customizable"
          desc="Components are easily customized and extendable."
        />
        <Feature
          Icon={LucideBookOpen}
          title="Free to Use"
          desc="Every component and plugin is well documented."
        />
        <Feature
          Icon={LucideMessageSquare}
          title="24/7 Support"
          desc="Contact us 24 hours a day, 7 days a week."
        />
      </div>
    </div>
  );
}

function Feature({ Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">{desc}</p>
      <a href="#" className="text-primary mt-2 text-sm font-medium">Learn more</a>
    </div>
  );
}