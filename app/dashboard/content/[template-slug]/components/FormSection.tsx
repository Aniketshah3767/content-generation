// "use client"
// import { TEMPLETE } from '@/app/dashboard/_components/TempleteListSection'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { on } from 'events'
// import { LoaderIcon } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'
// interface PROPS {
//     selectedTemplete?: TEMPLETE
//     userFormInput: any
//     loading: boolean
// }

// function FormSection({ selectedTemplete,userFormInput ,loading }: PROPS) {

//     const [formData, setFormData] = React.useState<any>({});



//     const handleInputChange = (event: any) => {
//         const { name, value } = event.target;
//         setFormData({ ...FormDataEvent, [name]: value })
//     }

//     const onSubmit = (e: any) => {
//         e.preventDefault();
//         // console.log('Form Data:', formData);
//         userFormInput(formData);
//     }

//     return (
//         <div className='p-5 shadow-md border rounded-lg bg-accent'>
//             <Image src={selectedTemplete?.icon} alt='icon' width={70} height={70} />
//             <h2 className='font-bold text-2xl mb-2 text-black'>{selectedTemplete?.name}</h2>
//             <p className='text-gray-500 text-sm'>{selectedTemplete?.desc}</p>
//             <form className='mt-6 ' onSubmit={onSubmit}>
//                 {selectedTemplete?.form?.map((item, index) => (
//                     <div className='my-2 flex flex-col gap-2 mb-7'>
//                         <label className='font-bold'>{item.label}</label>
//                         {item.field == 'input' ?
//                             <Input name={item.name} required={item?.required}
//                                 onChange={handleInputChange} />
//                             : item.field == 'textarea' ?
//                                 <Textarea name={item.name} required={item?.required}
//                                     onChange={handleInputChange} /> : null
//                         }
//                     </div>
//                 ))}

//                 <Button type='submit' 
//                 className='w-full py-6'
//                 disabled={loading}>
//                     {loading&& <LoaderIcon className='animate-spin'/>}    
//                 Generate Content</Button>
//             </form>
//         </div>
//     )
// }

// export default FormSection


"use client";
import { TEMPLETE } from '@/app/dashboard/_components/TempleteListSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface PROPS {
  selectedTemplete?: TEMPLETE;
  userFormInput: (data: any) => void;
  loading: boolean;
}

function FormSection({ selectedTemplete, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = React.useState<any>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-accent">
      {selectedTemplete?.icon && (
        <Image src={selectedTemplete.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-black">{selectedTemplete?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplete?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplete?.form?.map((item, index) => (
          <div key={item.name || index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === 'input' ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === 'textarea' ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <LoaderIcon className="animate-spin" />} Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
