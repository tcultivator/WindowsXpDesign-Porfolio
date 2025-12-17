
"use client"
import Image from 'next/image'
// shadcn components
import { Label } from '@/components/ui/label'

// images
import Logo from '@/public/loadingscreenxplogo.png';

import { useState } from 'react';
const topMenuItems = ["File", "Edit", "View", "Insert", "Format", "Tools", "Message"];
const SendEmail = () => {
    const [message, setMessage] = useState('')
    const [messageFrom, setMessageFrom] = useState('')
    const [subject, setSubject] = useState('')

    const sendEmailMessage = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const sendMail = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ messageFrom: messageFrom, subject: subject, message: message })
        })
        const sendMailResult = await sendMail.json()
        if (sendMailResult.status == 500) {
            console.log('error sending email')
            return
        }
        alert('message Sent')
        setMessage('')
        setMessageFrom('')
        setSubject('')
    }
    return (
        <div className='bg-white flex flex-col w-full h-full border-x border-x-[#023bb5] border-t border-t-[#023bb5]'>
            <form onSubmit={sendEmailMessage} className='flex flex-col h-full gap-[.5px] bg-[#ffffff] '>
                <div className='bg-[#edebd8]   flex items-center justify-between border-b-[.5px] border-b-black/15'>
                    <div className='flex items-center text-black p-[2px]'>
                        {
                            topMenuItems.map((data, index) => (
                                <Label key={index} className='text-[10px] font-normal  px-2 hover:bg-[#235ddb] hover:text-white'>{data}</Label>
                            ))
                        }

                    </div>
                    <div className='px-2 border-l border-black/30 bg-white'>
                        <Image src={Logo} alt='' width={50} height={50} className='w-[15px] select-none' draggable={false} />
                    </div>
                </div>

                <div className='bg-[#edebd8] p-1 flex items-center border-b-[.5px] border-b-black/15'>
                    <div className='flex items-center w-max border-r border-black/20 pr-1'>
                        <button type='submit' disabled={message == '' || messageFrom == '' || subject == ''} className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/send.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Send</Label>
                        </button>
                    </div>
                    <div className='flex items-center gap-1 w-max border-r border-black/20 px-1'>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/Cut.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Cut</Label>
                        </button>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/Copy.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Copy</Label>
                        </button>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/Paste.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Paste</Label>
                        </button>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/Undo.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Undo</Label>
                        </button>
                    </div>

                    <div className='flex items-center gap-1 w-max border-r border-black/20 px-1'>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/OE Attatch.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Attach</Label>
                        </button>
                        <button className='text-black flex flex-col items-center  p-1 px-3 rounded cursor-pointer border hover:border-black/30'>
                            <Image src="/outlookIcons/Question.png" alt='email send icon' width={20} height={20} className='w-[25px] select-none' draggable={false} />
                            <Label className='font-light text-black text-[11px] leading-none'>Info</Label>
                        </button>

                    </div>

                </div>
                <div className="p-2 flex flex-col gap-2 text-black text-[12px]">

                    {/* From */}
                    <div className="flex items-center gap-2">
                        <Label className="w-[80px] h-[26px] text-[12px] flex justify-end bg-white border border-blue-600/70 rounded px-1 font-light shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]">
                            From:
                        </Label>
                        <input
                            value={messageFrom}
                            onChange={(e) => setMessageFrom(e.target.value)}
                            type="email"
                            className="w-full h-[26px] px-2 border border-black/50  rounded bg-gray-100"
                            placeholder='example@example.com'
                        />
                    </div>

                    {/* To */}
                    <div className="flex items-center gap-2">
                        <Label className="w-[80px] h-[26px] text-[12px] flex justify-end bg-white border border-blue-600/70 rounded px-1 font-light shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]">
                            To:
                        </Label>
                        <input
                            type="email"
                            defaultValue="lpanahon06@gmail.com"
                            disabled
                            className="w-full h-[26px] px-2 border border-black/50  rounded focus:outline-blue-600"
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex items-center gap-2">
                        <Label className="w-[80px] h-[26px] text-[12px] flex justify-end bg-white border border-blue-600/70 rounded px-1 font-light shadow-[inset_0_2px_5px_rgba(103,169,246,0.95),inset_0_-2px_6px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.5)]">
                            Subject:
                        </Label>
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text"
                            className="w-full h-[26px] px-2 border border-black/50  rounded focus:outline-blue-600"
                            placeholder='greetings...'
                        />
                    </div>
                </div>

                {/* Message Box */}
                <div className="p-2 pt-0 flex  w-full h-full">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ resize: 'none' }}
                        placeholder="Type your message..."
                        className="w-full h-full text-black text-[12px] border border-black/50  rounded p-2 outline-none resize-y focus:outline-blue-600 resize-none"
                    ></textarea>
                </div>




            </form>

        </div>
    )
}

export default SendEmail
