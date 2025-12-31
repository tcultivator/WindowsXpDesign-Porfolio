import React, { useRef, useState, useEffect, ReactNode } from 'react'
import { Label } from '@/components/ui/label'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { useWindowsMediaPlayerStore } from '@/stores/windowsMediaPlayerStore';
import { useSystemTrayStore } from '@/stores/systemTrayStore';
import { IoListSharp } from "react-icons/io5";
import { ScaleLoader } from 'react-spinners'
const topMenuItems = ['File', 'View', 'Play', 'Tools', 'Help']



const WindowsMediaPlayer = () => {
    const playerRef = useRef<AudioPlayer>(null)
    const vidRef = useRef<HTMLVideoElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volumeMute, setVolumeMute] = useState(false)
    const volumeStatus = useSystemTrayStore((state) => state.volumeStatus)

    const currentMusicPlaying = useWindowsMediaPlayerStore((state) => state.currentMusicPlaying)
    const setCurrentMusicPlaying = useWindowsMediaPlayerStore((state) => state.setCurrentMusicPlaying)
    const togglePlay = () => {

        const audio = playerRef.current?.audio.current
        if (!audio) return

        if (audio.paused) {
            audio.play()
            vidRef.current?.play()
            setIsPlaying(true)

        } else {
            audio.pause()
            setIsPlaying(false)
            vidRef.current?.pause()

        }
    }

    useEffect(() => {
        if (!volumeStatus) {
            const audio = playerRef.current?.audio.current;
            if (audio) audio.volume = 0;
        } else {
            if (volumeMute) {
                const audio = playerRef.current?.audio.current;
                if (audio) audio.volume = 0;
                setVolume(0);
            } else {
                const audio = playerRef.current?.audio.current;
                if (audio) audio.volume = 1;
                setVolume(1);
            }
        }

    }, [volumeMute, volumeStatus])

    // Sync audio events
    useEffect(() => {

        const audio = playerRef.current?.audio.current
        if (!audio) return

        const onTimeUpdate = () => {
            setCurrentTime(audio.currentTime)
            setDuration(audio.duration || 0)
        }

        const onEnded = () => {
            setIsPlaying(false)
            audio.currentTime = 0
            vidRef.current?.pause()
        }

        audio.addEventListener('timeupdate', onTimeUpdate)
        audio.addEventListener('ended', onEnded)

        return () => {
            audio.removeEventListener('timeupdate', onTimeUpdate)
            audio.removeEventListener('ended', onEnded)
        }
    }, [])

    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const audio = playerRef.current?.audio.current
        if (!audio || !currentMusicPlaying) return

        audio.currentTime = 0
        if (musicListToggle) {
            audio.play()
            vidRef.current?.play()
            setIsPlaying(true)
        }

    }, [currentMusicPlaying])


    const [musicListToggle, setMusicListToggle] = useState(false)


    return (
        <div className="flex-1 h-full bg-[#ece9d8] flex flex-col border border-black/30">

            {/* Main Content */}
            <div className="flex-1 flex bg-black  items-center justify-center relative">
                {currentMusicPlaying ? (
                    <video
                        ref={vidRef}
                        src="/video/bgvid.mp4"
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                ) :
                    <div className='p-3 bg-white/50 w-full max-w-[150px]'>
                        <Image src="/windowsMediaPlayer/Windows Media Player 9.png" alt='' width={500} height={500} />
                    </div>}


                <div className='p-1 bg-black flex items-center border border-t-white/30 w-full absolute bottom-0'>
                    <div className='w-[50px] flex items-center justify-center'>
                        <FaPlay className='text-green-700 text-[12px]' />
                    </div>
                    <div className=' w-full max-w-[280px]'>
                        <Marquee className=' ' play={isPlaying}>
                            <Label className='font-normal text-green-500 text-[11px]'>{currentMusicPlaying ? currentMusicPlaying.split('/')[2] : 'No Music Playing'}</Label>
                        </Marquee>
                    </div>
                </div>

                {/* sidebar / selecting music */}

                <div className={`${musicListToggle ? 'w-[170px] p-1' : 'w-[0%]'} bg-black  h-full absolute right-0  transition-all duration-300 overflow-hidden`}>
                    <div className='flex flex-col gap-2 text-green-500 text-[11px] justify-start items-start p-2 py-5'>

                        <button onClick={() => { setCurrentMusicPlaying('/musics/bring me back.mp3') }} type='button' className='cursor-pointer flex gap-1 whitespace-nowrap items-center overflow-ellipsis'>{currentMusicPlaying == '/musics/bring me back.mp3' && isPlaying && <ScaleLoader color='white' width={2} height={7} margin={1} barCount={3} />} bring me back.mp3</button>
                        <button onClick={() => setCurrentMusicPlaying('/musics/die with a smile.mp3')} type='button' className='cursor-pointer flex gap-1 whitespace-nowrap items-center overflow-ellipsis'>{currentMusicPlaying == '/musics/die with a smile.mp3' && isPlaying && <ScaleLoader color='white' width={2} height={7} margin={1} barCount={3} />}die with a smile.mp3</button>
                        <button onClick={() => setCurrentMusicPlaying('/musics/viva la vida.mp3')} type='button' className='cursor-pointer flex gap-1 whitespace-nowrap items-center overflow-ellipsis'>{currentMusicPlaying == '/musics/viva la vida.mp3' && isPlaying && <ScaleLoader color='white' width={2} height={7} margin={1} barCount={3} />}viva la vida.mp3</button>
                    </div>
                </div>
            </div>

            {/* Control Bar */}
            <div className="h-[65px]  border-t border-black/30 flex flex-col gap-2 relative">

                {/* Hidden Audio Engine */}
                {currentMusicPlaying && <AudioPlayer
                    ref={playerRef}
                    src={currentMusicPlaying || ''}
                    customControlsSection={[]}
                    customProgressBarSection={[]}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    className=''
                />}
                <div className='absolute bg-[#727CE3] w-full h-full windows-media-player-bar'>
                    <div className='flex items-center gap-2 px-2'>
                        <div>
                            <button
                                onClick={togglePlay}
                                className="cursor-pointer windows-media-player-Button hover:brightness-110 text-[#140F60] windows-media-player-Button1 p-3 rounded-full bg-gradient-to-t from-[#727CE3] to-white flex items-center justify-center"
                            >
                                {isPlaying ? <IoIosPause className=' ml-[2px]' /> : <FaPlay className=' ml-[2px]' />}
                            </button>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='w-full'>
                                <input
                                    type="range"
                                    min={0}
                                    max={duration || 0}
                                    step={0.00001}
                                    value={currentTime}
                                    onChange={(e) => {
                                        const audio = playerRef.current?.audio.current
                                        if (audio) audio.currentTime = Number(e.target.value)
                                    }}
                                    className="w-full transition duration-300 progress-slider"
                                    style={{ background: `linear-gradient(to right, #1cbd24ff ${((currentTime / duration) * 100).toFixed(2)}%, rgba(0, 0, 0, 1) 0%)` }}
                                />
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <XpButton label={<BiSkipPrevious className='text-[#140F60]' />} />
                                        <XpButton label={<BiSkipNext className='text-[#140F60]' />} />
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <button onClick={() => setVolumeMute(prev => !prev)} className="hover:brightness-110 cursor-pointer h-4 px-1 rounded-[10px] bg-gradient-to-t from-[#727CE3] to-white windows-media-player-Button  windows-media-player-Button1 flex items-center justify-center">
                                            {volumeMute ? <IoVolumeMute className='text-red-700 text-[12px]' /> : <IoVolumeHigh className='text-[#140F60] text-[12px]' />}
                                        </button>

                                        <input
                                            type="range"
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            value={volume || 0}
                                            disabled={!volumeStatus}
                                            onChange={(e) => {

                                                const newVolume = Number(e.target.value);
                                                const audio = playerRef.current?.audio.current;
                                                if (audio) audio.volume = newVolume;
                                                setVolume(newVolume);
                                            }}
                                            className="w-24 volume-slider"
                                            style={{
                                                background: `linear-gradient(to right, #1cbd24 ${volume * 100}%, rgba(0, 0, 0, 0.18) ${volume * 100}%)`
                                            }}
                                        />
                                    </div>
                                </div>
                                <button onClick={() => setMusicListToggle(prev => !prev)} className='cursor-pointer h-4 px-1 rounded-[10px] bg-gradient-to-t from-[#727CE3] to-white windows-media-player-Button hover:brightness-110  windows-media-player-Button1 flex items-center justify-center'><IoListSharp className='text-[#140F60] text-[12px]' /></button>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default WindowsMediaPlayer

function XpButton({ label }: { label: ReactNode }) {
    return (
        <button type='button' disabled className="h-4 px-1 rounded-[10px] bg-gradient-to-t from-[#727CE3] to-white windows-media-player-Button text-[#140F60] windows-media-player-Button1 flex items-center justify-center">
            {label}
        </button>
    )
}
