'use client';
import Image from 'next/image'
import { useState } from 'react';
import { Badge } from "@/components/ui/badge"

export default function Home() {
const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className=' h-[500px] md:h-[800px] flex items-center justify-center p-6 md:p-10 bg-burgundy_v3'>
        <div className="md:space-y-12 flex flex-col justify-center">
          <div className='text-center space-y-2'>
            <h1 className='text-cream_v3 text-4xl md:text-7xl text-center mb-4 font-serif'>sonia tam</h1>
            <p className='text-cream_v3 text-xl md:text-2xl font-serif font-extralight'>cog sci + cs @ upenn &apos;25</p>
          </div>
          <div className='space-y-2 text-center'>
            <p className='text-cream_v3 text-xl md:text-2xl font-serif'><strong>thinker</strong> and <strong>doer</strong></p>
            <p className='text-cream_v3 text-xl md:text-2xl font-serif max-w-[470px] font-light'>i love breaking down complex problems, and thrive on the journey of solving them.</p>
          </div>
        </div>
      </div>
      <div className="bg-cream_v3 dark:bg-slate-900 flex justify-center items-center">
        <div className="bg-cream_v3 dark:bg-slate-900 space-y-8 lg:space-y-0 lg:inline-grid lg:grid-cols-2 gap-8 p-8 lg:p-24">
          <div className='bg-beige_v3 dark:bg-black_v3 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/glean"> 
              <div>
                <div className="p-7 pb-0 h-fit lg:h-80">
                  <img src="/images/glean.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-black_v3 dark:text-white font-bold">redesigning AI search experience</h1>
                  <p className="text-stone-500 py-2 text">
                    redesigning the user experience for Glean&apos;s traditional search and AI powered search result page.
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
          <div className='bg-beige_v3 dark:bg-black_v3 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/website-revamp"> 
              <div>
                <div className="p-7 pb-0 h-fit lg:h-80">
                  <img src="/images/awx-website-revamp.jpg" className="drop-shadow-md rounded-md w-full lg:w-auto"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-black_v3 dark:text-white font-bold">designing product narratives </h1>
                  <p className="text-stone-500 py-2 text">
                    redefining, designing, and revamping the product narratives and messaging for Airwallex&apos;s 17 fintech products.
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
          <div className='bg-beige_v3 dark:bg-black_v3 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/foodboo"> 
              <div>
                <div className="p-7 pb-0 h-fit lg:h-80">
                  <img src="/images/foodboo.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-black_v3 dark:text-white font-bold">tackling food truck discovery </h1>
                  <p className="text-stone-500 py-2 text">
                    designing a food truck directory app for Penn students to better discover food trucks.
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
          <div className='bg-beige_v3 dark:bg-black_v3 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/pennintouch"> 
              <div>
                <div className="p-7 pb-0 h-fit lg:h-80">
                  <img src="/images/pennintouch.svg" className="drop-shadow-md rounded-md h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-black_v3 dark:text-white font-bold">optimizing course planning </h1>
                  <p className="text-stone-500 py-2 text">
                    redesigning the academic course planning in Penn&apos;s course registration system
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
          <div className='bg-beige_v3 dark:bg-black_v3 rounded-md max-h-[650px] max-w-[500px]'>
            <a href="/projects/localization"> 
              <div>
                <div className="p-7 pb-0 h-fit lg:h-80">
                  <img src="/images/localization.svg" className="h-fit"/>
                </div>
                <div className="p-7">
                  <h1 className="text-2xl text-black_v3 dark:text-white font-bold">automating image localization </h1>
                  <p className="text-stone-500 py-2 text">
                    leading an initiative to build an image localization tool for Airwallex within 1 week.
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
          
        </div>
      </div>
      
      
    </div>
  )
}
