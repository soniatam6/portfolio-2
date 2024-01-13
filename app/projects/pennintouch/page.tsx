import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className="max-w-[1440px]">
        <div className="bg-[url('/images/pennintouch/hero.svg')] flex h-[650px]">
                <div className="space-y-10 pl-20 pt-40">
                    <div className="space-y-3">
                        <div>
                            <span className="font-light text-7xl">pennintouch</span>
                            <span className="font-extrabold text-7xl"> revamp</span>
                        </div>
                        <div className="max-w-[512px] text-wrap">
                            <p className="font-light text-xl">redesigning the academic planning worksheet in Penn’s course registration system</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="default">
                            <Link href="https://tinyurl.com/bdhrstbu " className="font-semibold">See dsemo</Link>
                        </Button>
                    </div>
                </div>
        </div>
        <div className="bg-slate-900 h-fit flex">
            <div className="flex flex-row px-20 max-h-[625px]">
                <div className="flex items-center bg-slate-800">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><span className="font-semibold">role:</span> <span className="font-light">lead designer</span></p>
                                <p><span className="font-semibold">timeline:</span> <span className="font-light">Jan 2022 - Mar 2023</span></p>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light text-white space-y-5">
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">what is PennInTouch?</h1>
                                    <p className="font-light">PennInTouch is the University of Pennsylvania’s course registration system. There, you can search for courses, register, see mock schedules, plan on an academic planning worksheet, and view your schedule. </p>
                                </div>
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">what is the academic planning worksheet?</h1>
                                    <p className="font-light">the academic planning worksheet is where you can see which courses fulfil which graduation requirements, and use it to plan ahead for which courses you need to take next. the current system requires a complex process in order to fulfill requirements</p>
                                </div>
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">my objective</h1>
                                    <p className="font-light">discover the current pain points with the academic planning worksheet and redesign PennInTouch to address these pain points.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[625px] px-16 pt-24 overflow-y-hidden flex items-center justify-center bg-blue-800">
                    <Image src="/images/pennintouch/context.svg" width={600} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
                </div>
            </div>
        </div>
    </div>
  )
}
