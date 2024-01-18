'use client';
import Image from 'next/image'
import { useState } from 'react';
import { Badge } from "@/components/ui/badge"

export default function Home() {
const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='h-[650px] flex items-center justify-end p-10 bg-gradient-to-r from-teal-400 to-indigo-500'>
        <div className="space-y-6">
          <h1 className='text-white text-8xl text-right mb-4 font-black'>sonia tam</h1>
          <div className='space-y-3 font-light'>
            <p className='text-gray-100 text-3xl text-right'>cog sci + cs @ upenn</p>
            <p className='text-gray-100 text-3xl text-right'>product & design</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 flex justify-center items-center">
        <div className="bg-white dark:bg-slate-900 inline-grid grid-cols-2 gap-8 p-24">
          <div className='bg-slate-100 dark:bg-slate-800 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/glean"> 
              <div>
                <div className="p-7 pb-0 h-80">
                  <img src="/images/glean.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-slate-800 dark:text-white font-bold">glean search redesign </h1>
                  <p className="text-slate-400 py-2 text">
                    redesigning Glean's traditional search and AI powered search result page.
                  </p>
                  <div className="inline-grid grid-cols-2 gap-x-2 py-2">
                    <div>
                      <Badge variant="secondary">DESIGN</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='bg-slate-100 dark:bg-slate-800 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/foodboo"> 
              <div>
                <div className="p-7 pb-0 h-80">
                  <img src="/images/foodboo.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-slate-800 dark:text-white font-bold">foodboo </h1>
                  <p className="text-slate-400 py-2 text">
                    designing a food truck directory app and website for Penn students and community
                  </p>
                  <div className="inline-grid grid-cols-2 gap-x-2 py-2">
                    <div>
                      <Badge variant="secondary">DESIGN</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='bg-slate-100 dark:bg-slate-800 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/pennintouch"> 
              <div>
                <div className="p-7 pb-0 h-80">
                  <img src="/images/pennintouch.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-slate-800 dark:text-white font-bold">PennInTouch </h1>
                  <p className="text-slate-400 py-2 text">
                    redesigning the academic planning worksheet in Penn&apos;s course registration system
                  </p>
                  <div className="inline-grid grid-cols-2 gap-x-2 py-2">
                    <div>
                      <Badge variant="secondary">DESIGN</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='bg-slate-100 dark:bg-slate-800 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/localization"> 
              <div>
                <div className="p-7 pb-0 h-80">
                  <img src="/images/localization.svg" className="h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-slate-800 dark:text-white font-bold">localization automation </h1>
                  <p className="text-slate-400 py-2 text">
                    leading an iniative to build an image localization tool for the Airwallex website revamp project
                  </p>
                  <div className="inline-grid grid-cols-2 gap-x-2 py-2">
                    <div>
                      <Badge variant="default">PM</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='bg-slate-100 dark:bg-slate-800 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/website-revamp"> 
              <div>
                <div className="p-7 pb-0 h-80">
                  <img src="/images/awx-website-revamp.jpg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-slate-800 dark:text-white font-bold">airwallex website revamp </h1>
                  <p className="text-slate-400 py-2 text">
                    redesigning and revamping Airwallex&apos;s website, localizing and launching 17 product landing pages in 11 regions
                  </p>
                  <div className="inline-grid grid-cols-2 gap-x-2 py-2">
                    <div>
                      <Badge variant="secondary">DESIGN</Badge>
                    </div>
                    <div>
                      <Badge variant="default">PM</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
