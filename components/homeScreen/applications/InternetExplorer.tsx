
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";



export default function IframeGoogleReplica({ url }: { url: string }) {

  return (
    <div className="@container flex flex-col w-full h-full bg-white px-4">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full">

        {/* Logo */}
        <Image
          src="/googleLogo.png"
          alt="Google Logo"
          width={1000}
          height={1000}
          className="w-[70%] max-w-[300px] h-auto"
        />

        {/* Input + buttons */}
        <div className="w-[85%] max-w-[400px] flex flex-col items-center gap-3">
          <input
            type="text"
            className="w-full border border-black/70 outline-none text-black p-1 @2xl:p-2 text-[12px] @2xl:text-[13px] "
            placeholder="Search Google or type a URL"
          />

          <div className="flex flex-wrap justify-center items-center gap-2 w-full">
            <div className="bg-gradient-to-t from-slate-300 to-slate-50 text-gray-800 text-[12px] @2xl:text-[13px] px-4 py-2 rounded cursor-pointer font-sans shadow-sm text-center flex-1 min-w-[120px]">
              Google Search
            </div>
            <div className="bg-gradient-to-t from-slate-300 to-slate-50 text-gray-800 text-[12px] @2xl:text-[13px] px-4 py-2 rounded cursor-pointer font-sans shadow-sm text-center flex-1 min-w-[120px]">
              I&apos;m Feeling Lucky
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
