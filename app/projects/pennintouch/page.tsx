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
                        <span className="font-light "> <h1 className="text-6xl">pennintouch </h1></span>
                        <span className="font-bold"> <h1 className="text-6xl"> revamp</h1></span>
                    </div>
                    <div className="max-w-[512px] text-wrap">
                        <p className="font-light text-xl">redesigning the academic planning worksheet in Penn’s course registration system</p>
                    </div>
                </div>
                <div>
                    <Button variant="default">
                        <Link href="https://tinyurl.com/bdhrstbu " className="font-semibold">See demo</Link>
                    </Button>
                </div>
            </div>
        </div>
        <div className="bg-slate-900 h-fit flex">
            <div className="flex flex-row px-20 h-fit">
                <div className="flex items-center">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><span className="font-semibold">role:</span> <span className="font-light">lead product designer</span></p>
                                <p><span className="font-semibold">timeline:</span> <span className="font-light">Jan 2022 - Mar 2022</span></p>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light text-white space-y-9">
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">what is PennInTouch?</h1>
                                    <p className="font-light">PennInTouch is the University of Pennsylvania’s old course registration system. There, you can search for courses, register, see mock schedules, plan on an academic planning worksheet, and view your schedule. </p>
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
                <div className="overflow-y-hidden pl-20 py-20 flex items-center justify-center">
                    <Image src="/images/pennintouch/context.svg" width={650} height={500} alt="pit context" />
                </div>
            </div>
        </div>
        
        <div className="p-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">research</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
            </div>
            <p>I used 3 methods of research to understand the user journey and pain points</p>
            <div className="grid grid-cols-3 gap-16">
                <div className="flex flex-col space-y-6">
                    <Image src="/images/pennintouch/diagrams.png" width={500} height={500} alt="diagrams" className="drop-shadow-xl rounded-md"/>
                    <div className="flex items-center flex-col space-y-2">
                        <h2 className="font-semibold text-xl">user flow diagram</h2>
                        <p className="text-center">my first step was to diagram the user experience flow, and immediately I already noticed the number of unnecessary steps it took to use the worksheet.</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <Image src="/images/pennintouch/interviews.png" width={500} height={500} alt="interviews" className="drop-shadow-xl rounded-md"/>
                    <div className="flex items-center flex-col space-y-2">
                        <h2 className="font-semibold text-xl">interviews</h2>
                        <p className="text-center">when interviewing, I wanted to learn about the users’ experiences with PiT’s function and interface. I was surprised to learn about users’ assumptions about the worksheet and their pain points with the interface. </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <Image src="/images/pennintouch/surveys.png" width={500} height={500} alt="surveys" className="drop-shadow-xl rounded-md"/>
                    <div className="flex items-center flex-col space-y-2">
                        <h2 className="font-semibold text-xl">surveys</h2>
                        <p className="text-center">through the survey, I collected quantitative data to understand the extent of some pain points. from the survey, I learned that students found the worksheet very helpful, but hard to use.</p>
                    </div>
                </div>
            </div>
            <div className="pt-16 flex-col flex items-center space-y-8 justify-center">
                <div className="text-center flex flex-col max-w-[800px] ">
                    <h1 className="font-bold">the problem statement</h1>
                    <p><strong>how might we...</strong> create an academic planning worksheet that can help students review what requirements are already fulfilled, yet also plan ahead for the future?</p>
                </div>
                <div className="grid grid-cols-2 gap-12 max-w-[800px] ">
                    <div>
                        <h2 className="font-semibold">focus 1: function</h2>
                        <p>how might we create a system that is organized by semesters and requirements?</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">focus 2: interface</h2>
                        <p>how might we create a user friendly interface that is simple and intuitive to use without being overwhelming?</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-900 p-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl text-white">prototyping</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-12 max-w-[800px] text-white">
                        <div className="space-y-2">
                            <h2 className="font-semibold">function</h2>
                            <ul className="list-decimal pl-4 space-y-1">
                                <li><span className="font-semibold">course cart & past courses: </span><span className="font-light">allows users to plan for both the past and future</span></li>
                                <li><span className="font-semibold">toggle tab: </span><span className="font-light">easily toggle between requirements and 4-year-plan, and add new worksheets for planning purposes</span></li>
                                <li><span className="font-semibold">4 year plan: </span><span className="font-light">provides high level planning system based on semesters</span></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-semibold">interface</h2>
                            <ul className="list-decimal pl-4 space-y-1">
                                <li><span className="font-semibold">drag and drop courses </span><span className="font-light">providing an intuitive interface with colors to show advisor approval</span></li>
                                <li><span className="font-semibold">sectioned requirements: </span><span className="font-light">each type of requirement is sectioned off for easier visual understanding</span></li>
                                <li><span className="font-semibold">tabular 4 year plan: </span><span className="font-light">provides a systematic way to plan by semester </span></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Image src="/images/pennintouch/p1.png" width={700} height={900} alt="prototype 1" className="rounded-md"/>
                <Image src="/images/pennintouch/p2.png" width={700} height={900} alt="prototype 2" className="rounded-md"/>
                <Image src="/images/pennintouch/p3.png" width={700} height={900} alt="prototype 3" className="rounded-md"/>
                <Image src="/images/pennintouch/p4.png" width={700} height={900} alt="prototype 4" className="rounded-md"/>
            </div>
            <div className="flex flex-col text-white space-y-4 items-center justify-center">
                <h1 className="font-bold">feedback & revisions</h1>
                <div className="grid grid-cols-2 gap-12 max-w-[800px] text-white">
                        <div className="space-y-2">
                            <h2 className="font-semibold">feedback</h2>
                            <ul className="list-decimal pl-4 space-y-1">
                                <li><span className="font-semibold">consider edge cases: </span><span className="font-light">more than 8 semesters? less than 3 courses per semester? more than 1 minor or major?</span></li>
                                <li><span className="font-semibold">utilize space more efficiently </span><span className="font-light">create a long, scrollable screen. increase size of each requirements section</span></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-semibold">revisions</h2>
                            <ul className="list-decimal pl-4 space-y-1">
                                <li><span>implementation of color </span></li>
                                <li><span>adding options to customize requirements & semesters</span></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>

        <div className="p-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">revisions</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
            </div>
            <div>
                <Image src="/images/pennintouch/revisions.svg" width={1400} height={1400} alt="revisions" className="rounded-md"/>
            </div>
        </div>

        <div className="bg-slate-100 p-20 py-20 space-y-12">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">final</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-16"></div>
            </div>
            <div className="flex flex-row space-x-20">
                <Image src="/images/pennintouch/final1.svg" width={700} height={900} alt="final 1" className="rounded-lg drop-shadow-xl basis-3/5"/>
                <Image src="/images/pennintouch/final1-modal.svg" width={700} height={900} alt="final 1 modal" className="rounded-lg drop-shadow-xl"/>
            </div>
            <div className="flex flex-row space-x-20">
                <Image src="/images/pennintouch/final2.svg" width={700} height={900} alt="final 2" className="rounded-lg drop-shadow-xl basis-3/5"/>
                <Image src="/images/pennintouch/final2-modal.svg" width={500} height={900} alt="final 2 modal" className="rounded-lg drop-shadow-xl"/>
            </div>
        </div>
        <div className="p-20 py-20 space-y-16">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">reflections</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-12 max-w-[1000px]">
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-semibold">problem #1</h2>
                                <p>create planning worksheet for past requirements and for future planning</p>
                            </div>
                            <div>
                                <h2 className="font-semibold">solution</h2>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><p>course cart & past courses</p></li>
                                    <li><p>easy to see which fulfill requirements</p></li>
                                    <li><p>advisor approval indicators</p></li>
                                    <li><p>flexible addition of requirements for planning</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-semibold">problem #2</h2>
                                <p>create system organized by semesters and requirements</p>
                            </div>
                            <div>
                                <h2 className="font-semibold">solution</h2>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><p>toggle tab for 4 year plan and requirements</p></li>
                                    <li><p>tabular format for 4 year plan</p></li>
                                    <li><p>customizable requirements</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-semibold">problem #3</h2>
                                <p>create user friendly and intuitive system that is not overwhelming</p>
                            </div>
                            <div>
                                <h2 className="font-semibold">solution</h2>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><p>minimal use of colors (colors indicate status)</p></li>
                                    <li><p>drag and drop function</p></li>
                                    <li><p>easy to adapt, tabs are similar to Excel</p></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
                <h1 className="font-bold">challenges</h1>
                <div className="grid grid-cols-2 gap-12 max-w-[1000px]">
                        <div className="space-y-2">
                            <h2 className="font-semibold">how do you visually show the function of an element?</h2>
                            <p>in my high-fidelity mockups, I received feedback on improving the UI to reflect the function of an element. For example, I struggled a lot with how to make a button look like a button, or how to make something look draggable. </p>
                            <p>I discussed with my peers to see how they might have done it, and was inspired to use subtle effects like drop shadows and grey strokes.</p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-semibold">how do you indicate status without solely relying on color?</h2>
                            <p>in these mockups, I relied heavily on color to indicate status, for example whether it was approved by an advisor or whether it was double counting or not. To better accomodate for the color-blinded and increase ease of accessibility, I struggled to think of ways to indicate status through icons or hover states.</p>
                            <p>I spent a lot of time thinking of what kind of icons would best represent the status of double counting specifically. It had to be simple, small, yet effective in its meaning without being conventionally confusing. I settled on using the double checkmark, but this is one area I would try to improve on next time.</p>
                        </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
