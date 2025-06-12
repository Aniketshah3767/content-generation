// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
//   });
//   const config = {
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-1.5-flash';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();
// Install first:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY, // Make sure this is safe to expose (use server-side if not)
});

const config = {
  responseMimeType: 'text/plain',
};

const model = 'gemini-2.5-flash-preview-05-20';

// ✅ Export this function to reuse
export async function generateText(input: string): Promise<string> {
  const contents = [
    {
      role: 'user',
      parts: [{ text: input }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let output = '';
  for await (const chunk of response) {
    output += chunk.text;
  }

  return output;
}
