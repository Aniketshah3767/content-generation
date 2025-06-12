// import React, { useEffect } from 'react'
// import '@toast-ui/editor/dist/toastui-editor.css';

// import { Editor } from '@toast-ui/react-editor';
// import { Button } from '@/components/ui/button';
// import { Copy } from 'lucide-react';

// interface props{
//   aiOutput:string;
// }


// function OutputSection(aiOutput:props) {

//   const editorRef = React.useRef<Editor>(null);

//   useEffect(()=>{
//     const editorInstance = editorRef.current?.getInstance()
//     editorInstance.setMarkdown(aiOutput);
//   },[aiOutput])

//   return (
//     <div className='bg-white shadow-lg border'>
//         <div className='flex justify-between items-center p-5 border-b '>
//             <h2 className='font-medium text-lg'>Your Output</h2>
//             <Button className='flex gap-2'><Copy className='w-4 h-4' />Copy</Button>
//         </div>
//       <Editor
//       ref={editorRef}
//     initialValue="Your Output will be displayed here..."
//     height="600px"
//     initialEditType="wysiwyg"
//     useCommandShortcut={true}
//     onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
//   />
//     </div>
//   )
// }

// export default OutputSection




import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="font-medium text-lg">Your Output</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Output will be displayed here..."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
