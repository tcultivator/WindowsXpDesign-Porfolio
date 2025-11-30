import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
//resuable components
import XPExplorerBar from '@/utils/XPExplorerBar';
const iframeContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      body {
        font-family: 'Product Sans', Arial, sans-serif;
        color: #202124;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: white;
      }
      input {
        font-size: 16px;
        padding: 10px 12px;
        border: none;
        outline: none;
        font-family: 'Product Sans', Arial, sans-serif;
        flex: 1;
      }
      form {
        display: flex;
        align-items: center;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        padding: 8px 15px;
        width: 550px;
        max-width: 90%;
        box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
      }
      .buttons {
        margin-top: 20px;
      }
      .btn {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        color: #3c4043;
        font-size: 14px;
        margin: 0 6px;
        padding: 10px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Product Sans', Arial, sans-serif;
        box-shadow: 0 1px 1px rgb(0 0 0 / 0.1);
      }
      p {
        margin-top: 30px;
        font-size: 12px;
        color: #70757a;
      }
      a {
        color: #1a0dab;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <Image 
    src="/googleLogo.png" 
    alt="Google Logo"
    width={50} 
    height={50} 
    style={{ width: '200px', height: '200px' }} 
/>

    <form onsubmit="event.preventDefault(); alert('Search submitted');">
      <input type="text" placeholder="Search Google or type a URL" spellcheck="false" autocomplete="off" />
      <button type="submit" aria-label="Google Search">🔍</button>
    </form>

    <div class="buttons">
      <button class="btn" onclick="alert('Google Search clicked')">Google Search</button>
      <button class="btn" onclick="alert('I\\'m Feeling Lucky clicked')">I'm Feeling Lucky</button>
    </div>

    <p>
      Google offered in: <a href="#">Filipino Cebuano</a>
    </p>
  </body>
  </html>
`;

export default function IframeGoogleReplica({ url }: { url: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (url == 'https://www.google.com/') {
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(iframeContent);
          doc.close();
        }
      }
    }

  }, []);

  return (
    <div className='flex flex-col w-full'>
      <XPExplorerBar
        title={url}
        icon={<Image src="/internetIcon.ico" alt='' width={20} height={20} className='w-[15px] select-none' draggable={false} />}
      />
      <iframe
        src={`${url && url}`}
        ref={iframeRef}
        title="Google Replica"
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>

  );
}
