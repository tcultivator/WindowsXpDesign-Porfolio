import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { openEmail } from '@/utils/OpenApplication'
const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max)

const Resume = () => {
    const [zoomed, setZoomed] = useState(false)
    const [origin, setOrigin] = useState('50% 50%')
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const startPos = useRef({ x: 0, y: 0 })
    const hasMoved = useRef(false)

    const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
        if (hasMoved.current) {
            hasMoved.current = false
            return
        }

        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        setOrigin(`${x}% ${y}%`)
        setZoomed((prev) => !prev)

        if (zoomed) setPosition({ x: 0, y: 0 })
    }

    const handleMouseDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!zoomed) return

        e.currentTarget.setPointerCapture(e.pointerId) // ✅
        setDragging(true)
        hasMoved.current = false

        startPos.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        }
    }


    const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging || !zoomed || !containerRef.current || !imageRef.current)
            return

        const container = containerRef.current.getBoundingClientRect()
        const image = imageRef.current.getBoundingClientRect()

        const nextX = e.clientX - startPos.current.x
        const nextY = e.clientY - startPos.current.y

        const scale = zoomed ? 2 : 1

        const maxX = image.width * scale - container.width
        const maxY = image.height * scale - container.height


        hasMoved.current = true

        setPosition({
            x: clamp(nextX, -maxX, maxX),
            y: clamp(nextY, -maxY, maxY),
        })
    }


    const handleMouseUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId)
    setDragging(false)
}

    const handleDownload = () => {

        const link = document.createElement('a')
        link.href = '/Luigie Panahon-Web Developer.pdf'
        link.download = 'Luigie Panahon-Web Developer.pdf'
        link.click()
    }

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='flex items-center bg-[#edebd8] p-1 gap-1'>
                <div className='border-r border-r-black/10 flex items-center justify-center px-1'>
                    <button onClick={() => {
                        if (zoomed) setPosition({ x: 0, y: 0 })
                        setZoomed((prev) => !prev)

                    }} className={`${zoomed && 'border-black/20'} hover:border-black/20 active:border-black/20  rounded border text-black flex items-center gap-[3px] @2xl:text-[11px] text-[10px]  p-1 cursor-pointer hover:brightness-110 active:brightness-110`}>
                        <Image src={'/searchIcon.ico'} alt='folder icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='font-light text-black/60  @2xl:text-[11px] text-[10px]'>Zoom</Label>
                    </button>
                </div>

                <div className='border-r border-r-black/10 flex items-center justify-center px-1'>
                    <button onClick={handleDownload} className='hover:border-black/20 active:border-black/20  rounded border text-black flex items-center gap-[3px] @2xl:text-[11px] text-[10px]  p-1 cursor-pointer hover:brightness-110 active:brightness-110'>
                        <Image src={'/Save.png'} alt='folder icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='font-light text-black/60  @2xl:text-[11px] text-[10px]'>Save</Label>
                    </button>
                </div>
                <div className='border-r border-r-black/10 flex items-center justify-center px-1'>
                    <button className='opacity-50 text-black flex items-center gap-[3px] @2xl:text-[11px] text-[10px]  p-1 cursor-pointer'>
                        <Image src={'/internetExplorerHeaderTab/print.ico'} alt='folder icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='font-light text-black/60  @2xl:text-[11px] text-[10px]'>Print</Label>
                    </button>
                </div>
                <div>
                    <button onClick={openEmail} className='hover:border-black/20 active:border-black/20  rounded border text-black flex items-center gap-[3px] @2xl:text-[11px] text-[10px]  p-1 cursor-pointer hover:brightness-110 active:brightness-110'>
                        <Image src={'/Outlook Express.png'} alt='folder icon' width={20} height={20} className='w-[18px] select-none drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black] drop-shadow-[0_0_.5px_black]' draggable={false} />
                        <Label className='font-light text-black/60  @2xl:text-[11px] text-[10px]'>E-mail</Label>
                    </button>
                </div>
            </div>
            <div
                ref={containerRef}
                className="w-full h-full flex flex-col justify-start items-start bg-black py-[2px] overflow-hidden"
            >

                <div
                    ref={imageRef}
                    onClick={handleClick}
                    onPointerDown={handleMouseDown}
                    onPointerMove={handleMouseMove}
                    onPointerUp={handleMouseUp}
                    onPointerLeave={handleMouseUp}
                    style={{
                        touchAction: 'none',
                        transformOrigin: origin,
                        transform: `translate(${position.x}px, ${position.y}px) scale(${zoomed ? 2 : 1})`,
                    }}
                    className={`select-none w-full max-w-full h-max max-h-full ${zoomed
                        ? dragging
                            ? 'cursor-grabbing'
                            : 'cursor-grab'
                        : 'cursor-zoom-in'
                        }`}
                >
                    <Image
                        src="/Luigie Panahon-Web Developer.jpg"
                        alt="Resume"
                        width={3000}
                        height={4000}
                        className="w-full max-w-full h-max max-h-full object-contain pointer-events-none"
                        draggable={false}
                    />
                </div>
            </div>
        </div>

    )
}

export default Resume
