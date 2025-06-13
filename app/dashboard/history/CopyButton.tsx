'use client';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="link" className="text-violet-600 p-0 h-auto" onClick={handleCopy}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </Button>
  );
}
