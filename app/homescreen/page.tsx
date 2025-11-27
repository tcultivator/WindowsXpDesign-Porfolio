"use client"
import React from 'react'
import StartMenu from '@/components/homeScreen/startMenu/startMenu'
const HomeScreen = () => {
    return (
        <div className="flex flex-col items-center w-screen h-screen text-white relative bg-cover bg-center"
            style={{ backgroundImage: "url('/xpbg.jpg')" }}>
            <div className='bg-gradient-to-l from-[#235ddb] to-[#0036B3] w-full max-h-10 absolute bottom-0 flex items-center inset-shadow-sm inset-shadow-[#235ddb]'>
                <StartMenu />
            </div>
        </div >
    )
}

export default HomeScreen
