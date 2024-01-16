import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div>
        <div className="grid grid-cols-2 px-20">
            <div className="max-h-[625px] pt-72 overflow-y-hidden flex items-center justify-start">
                <Image src="/images/about/sonia-tam.jpg" width={525} height={500} alt="sonia-tam" className="saturate-500 drop-shadow-2xl" />
            </div>
            <div className="flex items-center justify-end">
                <div className="space-y-10 ">
                    <div className="space-y-3">
                        <div className="justify-end flex flex-row space-x-5">
                            <h1 className="font-light text-7xl">hi! i&apos;m </h1>
                            <h1 className="font-extrabold text-7xl"> sonia</h1>
                        </div>
                        <div className="text-slate-700 max-w-[510px] space-y-4 text-wrap">
                            <p className="text-right text-lg">a junior at UPenn studying Cognitive Science + Computer Science, with a potential minor in Philosophy. </p>
                            <p className='text-right text-lg'>i&apos;m an avid fan of <strong>music</strong> (latin guitar, classical, alt rock to name a few), <strong>dessert</strong> lover and baker, <strong>art history</strong> nerd, and amateur muay thai fighter.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-20 py-40 space-y-12 bg-gradient-to-r text-white from-teal-500 to-indigo-600">
            <div className='space-y-4'>
                <div className="space-x-3">
                    <h1 className="font-light text-5xl">my design</h1>
                    <h1 className="font-extrabold text-5xl">philosophy</h1>
                </div>
                <div>
                    <p className='text-xl'>i believe that the design is, at its core, <strong>problem solving.</strong> for me, design is less about making things beautiful or aesthetic, it is about crafting with an objective in mind. to me, design is comprised of two halves: </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-16">
                <div className="space-y-2">
                    <h1 className="font-bold text-2xl">the art of deconstruction</h1>
                    <p className='space-y-2'>the first half of the designer’s job is to identify <strong>what the problems to be solved are</strong>, a crucial skill for any designer or product minded person. i personally find this the <strong>most challenging yet exciting</strong> part of design -- identifying the JTBD, diving into multi-dimensional problems, and structurally breaking down a problem. this first half trains one to have deep curiosity, relentless persistence, and a clear mind to brush away all the noise.</p>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-2xl">the art of reconstruction</h1>
                    <p>the second half of the designer’s job is about<strong> crafting a solution</strong>. just like a baker or a carpenter, a craftsman seeks to serve <strong>quality</strong>. to be a craftsman means to know all the ins and outs of your craft, and to strive to make every aspect the best it can be. this second half requires years of practice and a development of taste, and i’m excited to be continuously learning.</p>
                </div>
            </div>
            <div>
                <p className='text-xl'>i believe that there is a lot that can be learned on training these two aspects of design, as i’ve experienced a lot of growth and learning myself in my past year as a product designer. i’m constantly looking for the next opportunity to challenge me on these two fronts, regardless of whether it is design, product, or software engineering. </p>
            </div>
        </div>
        <div className='p-20 space-y-20'>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-4xl'>work experience</h1>
            </div>
            <div className="grid grid-cols-2 gap-20">
                <div className="space-y-2">
                    <h2 className="font-semibold">internships</h2>
                    <ul className='list-disc pl-4'>
                        <li><p><strong>Sept 2022 - Aug 2023:</strong> Product Design & Product Management Intern @ Airwallex </p></li>
                        <li><p><strong>Jun 2022 - Aug 2022:</strong> Product Management Intern @ GOGOX </p></li>
                        <li><p><strong>May 2021 - Aug 2021:</strong> Product Management & Corporate Development Intern @ Oriente </p></li>
                        <li><p><strong>May 2021 - Jul 2021:</strong> VC Investment Intern @ KK Fund </p></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="font-semibold">contract</h2>
                    <ul className='list-disc pl-4'>
                        <li><p><strong>Jan 2022 - Mar 2022:</strong> Lead Product Designer @ PennInTouch </p></li>
                        <li><p><strong>Jan 2022 - Jun 2022:</strong> Lead Product Designer @ Foodboo </p></li>
                        <li><p><strong>Jan 2022 - May 2022:</strong> Senior Consultant @ MedCrypt </p></li>
                        <li><p><strong>Aug 2021 - Dec 2021:</strong> Senior Consultant @ Stel </p></li>
                        <li><p><strong>Aug 2020 - Dec 2020:</strong> Associate Consultant @ HioSocial </p></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="font-semibold">extracurriculars</h2>
                    <ul className='list-disc pl-4'>
                        <li><p>Project Leader @ Wharton Asia Exchange (Consulting) </p></li>
                        <li><p>Marketing Undergraduate Student Establishment (Generalist Consulting) </p></li>
                        <li><p>Wharton Undergraduate Data Analytics Club</p></li>
                        <li><p>Penn Spark (Design)</p></li>
                        <li><p>Alpha Kappa Psi</p></li>
                        <li><p>Sigma Eta Pi</p></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="font-semibold">interests</h2>
                    <ul className='list-disc pl-4'>
                        <li><p>Art history - Surrealism & Romanticism</p></li>
                        <li><p>Classical music - pipe organ</p></li>
                        <li><p>Philosophy of mind</p></li>
                        <li><p>Muay thai</p></li>
                        <li><p>Latin guitar music - flamenco, bossa nova</p></li>
                        <li><p>currently trying to learn the art of coffee!</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
