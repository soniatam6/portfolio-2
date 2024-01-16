import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
export default function page() {
  return (
    <div className="">
        <div className="flex flex-row pl-20">
            <div className="flex items-center basis-[600px]">
                <div className="space-y-10 ">
                    <div className="space-y-3">
                        <div className="flex flex-col">
                            <h1 className="font-light text-7xl">airwallex</h1>
                            <h1 className="font-extrabold text-7xl">website revamp</h1>
                        </div>
                        <div className="max-w-[512px] text-wrap">
                            <p className="font-light text-xl">redesigning and revamping Airwallex&apos;s website, localizing and launching 17 landing pages in 11 regions.</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="default">
                            <Link href="https://www.airwallex.com/us" className="font-semibold">See website</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-h-[650px] px-24 pt-24 overflow-y-hidden flex items-center justify-center">
                <Image src="/images/website-revamp/hero.svg" width={600} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
            </div>
        </div>
        <div className="bg-slate-900 py-8">
            <div className="grid grid-cols-2 p-20 max-h-[625px]">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><span className="font-semibold">role:</span> <span className="font-light">lead designer, product management intern</span></p>
                                <p><span className="font-semibold">timeline:</span> <span className="font-light">Nov 2022 - Jun 2023</span></p>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light text-white space-y-3">
                                <p>Airwallex is a fintech unicorn valued offering a variety of financial solutions for SMEs and enterprises such as global money transfers, payment acceptance, and cards and expense management.</p>
                                <p>In November of 2022, Airwallex made the strategic decision to focus on enterprise customers and enter the embedded finance market. This meant that the website needed to be redesigned to reflect the changes in product offerings. As the main designer, I was responsible for redesigning 17 product landing pages, where I worked closely with product managers, developers, the marketing team, and C-suite stakeholders. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/website-revamp/awx-logo.svg" width={400} height={500} alt="awx logo"/>
                </div>
            </div>
        </div>
        <div className="p-20 py-16 space-y-8">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">jobs to be done</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-56"></div>
            </div>
            <div>
                <div className="space-y-3">
                    <p className="font-light">Before designing, I believe that a designer must first understand what the JTBD are of the product they are designing. To understand the JTBD of a website, we must first look at who the users and stakeholders are of a website. </p>
                    <ul className="list-disc pl-4">
                        <li><span className="font-semibold">Users:</span><span className="font-light"> for a website, these are the viewers such as potential users or investors. From the users perspective, the website serves to give a brief overview of who the company is, what the company does, and what value can the company potentially bring to them. </span></li>
                        <li><span className="font-semibold">Stakeholders:</span><span className="font-light"> the internal teams who use the website to do their job, such as marketing, strategy, and product team. From the stakeholders&apos; perspective, the website serves as an instrument for them to craft a brand image, explain what their products are, and ultimately funnels potential users in to sign up. </span></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/images/website-revamp/jtbd-diagram.svg" width={750} height={500} alt="jtbd-diagram"/>
            </div>
            <div>
                <p className="font-light">From this, we can understand that the main JTBD of a website is to serve as a company&apos;s <strong>product story</strong>. It&apos;s the company&apos;s narrative and story to demonstrate who it is, what products it offers, and what value propositions it brings to stakeholders. In other words, when these users view the website, they need to be convinced to click the &apos;sign up&apos; or &apos;contact us&apos; button. At the same time, the website serves as a public brand and image for the company, and is the primary way for internal teams to convey to the world about who they are, what values they stand for, and what value they can bring to users.</p>
            </div>
            <div>
                <p className="font-light">In summary, the job of the designer is to design a website that can:</p>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/images/website-revamp/jtbd-text.svg" width={750} height={500} alt="jtbd-text"/>
            </div>
        </div>
        <div className="bg-slate-100 px-20 max-h-[800px]">
            <div className="grid grid-cols-2 justify-center">
                <div className="max-h-[800px] pb-80 overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/baas-page-prev.jpg" width={550} height={500} alt="baas preview" className="drop-shadow-2xl rounded-md" />
                </div>
                <div className="max-h-[800px] pt-96 overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/ba-prev.jpg" width={550} height={500} alt="ba preview" className="drop-shadow-2xl rounded-md" />
                </div>
            </div>
        </div>
        <div className="bg-slate-900 p-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl text-white">overview & timeline</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-60"></div>
            </div>
            <div>
                <p className=" text-white">With these JTBD in mind, the next step was to design the 17 product pages. These 17 pages can be roughly categorized as the following, with 2-4 representing Airwallex&apos;s new product categories: </p>
                <ol className=" pl-4 text-white list-decimal">
                    <li>Homepages (4 pages)</li>
                    <li>Business Account (6 pages)</li>
                    <li>Core API (4 pages)</li>
                    <li>Embedded Finance (3 pages)</li>
                </ol>
            </div>
            <div className="text-white bg-slate-800 p-2 px-5 rounded-md">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Design Process Overview</AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <p>For each of the pages in these product categories, I roughly followed these steps to design them:</p>
                            <ol className="list-decimal pl-4 space-y-2">
                                <li><span className="font-semibold">Research & Understand</span><span className="font-light"> -- talked to product managers and read product docs to understand what does the product do, how does it work, and what are its main value propositions. </span></li>
                                <li><span className="font-semibold">Draft a rough structure (IA proposal)</span><span className="font-light"> -- using my understanding of the product, I drafted a rough outline of what I envisioned the page to look like. I presented these rough outlines to marketing, strategy, executives, and product managers to get alignment on the product narrative being crafted, iteratively revising and designing new outlines.  </span></li>
                                <li><span className="font-semibold">Design & Prototype</span><span className="font-light"> -- after a general alignment was reached, I designed the pages in high fidelity on Figma, prototyping the pages to simulate a real website interactions. In this step, I would work closely with content marketers to write the copy, and with developers to understand what is feasible and what isn’t.  </span></li>
                                <li><span className="font-semibold">Present in design review</span><span className="font-light"> -- we presented these Figma prototypes to the CEO, VP of Design, VP of Marketing, and other stakeholders for final approval on the pages, down to the details of copy, microinteractions, and animations. </span></li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <p className=" text-white">All in all, the 7 month project looked a little like this:</p>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/images/website-revamp/timeline.svg" width={1000} height={500} alt="timeline" />
            </div>
        </div>
        <div className="space-y-20">
            <div>
                <div className="pl-20 pt-20 h-[500px] grid grid-cols-2">
                    <div className="flex items-center">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">example: expense management</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-80"></div>
                            </div>
                            <div className="space-y-3 max-w-[600px] text-wrap">
                                <p>To demonstrate the design process, let’s take an example of how I designed the Expense Management page.</p>
                                <p>Expense Management is one of Airwallex’s Business Account products, aimed at small to medium businesses who want an easy way to manage their company and employee expenses. </p>
                            </div>
                            <div>
                                <Button variant="default">
                                    <Link href="https://www.airwallex.com/us/business-account/expense-management" className="font-semibold">See page</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex overflow-x-hidden items-center">
                        <Image src="/images/website-revamp/expense-hero.svg" width={750} height={500} alt="expense hero" className="drop-shadow-xl rounded-md left-16 absolute right-0" />
                    </div>
                </div>
            </div>

            <div className="pl-20 h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-8">
                        <h1 className="font-bold text-xl"> research & understanding</h1>
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <p>When trying to understand a product, there were a few key questions I would center my research around: </p>
                            <ol className="list-decimal pl-4">
                                <li>Who are the target users for this product? </li>
                                <li>What are the needs of these target users? </li>
                                <li>What unique value does this product bring to the user?</li>
                                <li>Which Airwallex capabilities enable this product? </li>
                                <li>How does it work behind the scenes? </li>
                                <li>What are some legal, marketing, or strategy concerns I should consider for this product?</li>
                            </ol>
                        </div>
                        <div className="bg-slate-100 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Example: Expense Management</AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For Expense Management, the analysis looked like this:</p>
                                        <ol className="list-decimal pl-4 space-y-2">
                                            <li><span className="font-semibold">Target users:</span><span> Small to medium sized businesses who are using Airwallex’s Cards product for their employees and company expenses </span></li>
                                            <li><span className="font-semibold">Target user needs:</span><span> Administrators want an easy way to manage and approve expenses. Employees want an easy way to see and review their expenses. </span></li>
                                            <li><span className="font-semibold">Unique value proposition:</span><span> Mobile and desktop, uploading receipts, ability to customize approval workflows, integrations with accounting software</span></li>
                                            <li><span className="font-semibold">Airwallex capabilities:</span><span> Expense management, borderless cards, accounting integrations</span></li>
                                            <li><span className="font-semibold">Product mechanics:</span><span> The transactions recorded in the employee or company cards are aggregated in the Expense Management platform</span></li>
                                            <li><span className="font-semibold">Other considerations:</span><span> This is targeted at existing customers who have Cards, so it should cross reference the product page for Cards.</span></li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/expense-file.jpg" width={500} height={700} alt="expense file" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> Interviewing other designers to understand their product, their designs, and the user journey</p>
                    </div>
                </div>
            </div>

            <div className="pl-20 h-fit grid grid-cols-2">
                <div className="space-y-3 relative flex flex-col">
                    <div className="items-start justify-start">
                        <Image src="/images/website-revamp/expense-wf.svg" width={550} height={700} alt="expense file" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="space-y-8">
                        <h1 className="font-bold text-xl"> drafting an outline</h1>
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <p>This was most often time the most time consuming and challenging step of the design process, because this was about crafting the narrative. Usually, I followed a general structure of: </p>
                            <ol className="list-decimal pl-4">
                                <li><span className="font-semibold">Why:</span><span> high level overview of the value propositions of the product </span></li>
                                <li><span className="font-semibold">What:</span><span> what the main features of the product are, and what are the key propositions to call out for each feature </span></li>
                                <li><span className="font-semibold">How:</span><span> how this works for developers, how this works for other customers (customer testimonials or case studies), or how to get started (CTAs)</span></li>
                            </ol>
                        </div>
                        <div className="bg-slate-100 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Example: Expense Management</AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For Expense Management, one of the challenges I faced was how to balance the perspective of different roles. The Expense Management product served two main types of users: </p>
                                        <ol className="list-decimal pl-4 space-y-2">
                                            <li><span className="font-semibold">Cardholders:</span><span> employees who are using the cards to record expenses </span></li>
                                            <li><span className="font-semibold">Administrators:</span><span> Administrators want an easy way to manage and approve expenses. Employees want an easy way to see and review their expenses. </span></li>
                                        </ol>
                                        <p>The original structural proposal was to have one section talk about the ‘all in one cards and expenses experience’ and discuss general value propositions. However, I noticed the value propositions were very different for both types of users, and mixing them up felt quite confusing as a viewer. One of my ideas was to have separate sections for different user types, but it also compromised the ‘all in one’ experience value proposition. </p>
                                        <p>After presenting both proposals and their tradeoffs to stakeholders, we reached alignment to have an overhead section discussing the ‘all in one experience’, and then have subsections specifically for each user type.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-20 h-fit grid grid-cols-2 pb-20">
                <div className="flex items-center">
                    <div className="space-y-6">
                        <h1 className="font-bold text-xl"> design & prototyping</h1>
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <p>Once the structure was near final and I had a general idea of what kind of images to design, I would begin assembling high fidelity designs of the pages. This included details such as: </p>
                            <ul className="list-disc pl-4">
                                <li><span className="font-semibold">Design system:</span><span> spacing, font sizes, colours, content width etc </span></li>
                                <li><span className="font-semibold">Iconography</span></li>
                                <li><span className="font-semibold">Content modeling:</span><span> making sure that we use the same content models that have been agreed upon with developers </span></li>
                                <li><span className="font-semibold">Images</span></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <p>The main focus was on designing the images, and when doing so, I would approach by considering the following factors:</p>
                            <ul className="list-decimal pl-8">
                                <li>What kind of feature or ability is this section highlighting?</li>
                                <li>Is this feature best exemplified on desktop or mobile?</li>
                                <li>What are the key screens or symbols that would help a user identify this feature?</li>
                                <li>What are the key value propositions that is written on the side, and what are some screens that would demonstrate those points?</li>
                            </ul>
                            <p>Once I have collected all the product screens that address the factors above, I would find a way to assemble them in a visually pleasing, not too overwhelming yet informative.</p>
                        </div>
                        <div className="bg-slate-100 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Example: Expense Management</AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For example, for the ‘For Employers’ section, the analysis looks like this: </p>
                                        <ol className="list-decimal pl-4 space-y-2">
                                            <li><span className="font-semibold">Highlighted abilities:</span><span> Employees can easily upload receipts and submit expenses </span></li>
                                            <li><span className="font-semibold">Mobile or desktop?</span><span> Mobile, because that emphasizes the point that employees can submit expenses on the go </span></li>
                                            <li><span className="font-semibold">Key screens:</span><span> Submitting expenses screen, scanning receipts can be identified by the camera focusing on a receipt</span></li>
                                            <li><span className="font-semibold">Key value propositions:</span><span> The side mentions uploading pictures and submitting expenses, which is shown by the images</span></li>
                                        </ol> 
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/admin-example.svg" width={500} height={700} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> high fidelity version with overhead section</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-900 p-20 py-20 space-y-20">
            <div className="h-fit grid grid-cols-2">
            <div className="flex items-center">
                    <div className="space-y-8 text-white">
                        <div className="space-y-1">
                            <h1 className="font-bold text-3xl text-white">dev handoff</h1>
                            <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
                        </div>
                        <div className="space-y-2">
                            <p>For the website, there were 3 key things to hand off to developers:</p>
                            <ul className="list-decimal pl-8">
                                <li>Mobile designs</li>
                                <li>Web responsiveness</li>
                                <li>Content modeling</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <h1 className="font-bold text-xl"> mobile designs</h1>
                            <p>To ensure the website was mobile friendly, I worked with another designer to create a new web design system for the mobile website. Designing for mobile had its own set of challenges, such as inability to hover, swiping interactions, and dropdown menus. </p>
                        </div>

                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                        <div>
                            <Image src="/images/website-revamp/mobile-designs.svg" width={450} height={600} alt="admin example" className="drop-shadow-xl rounded-md" />
                        </div>
                </div>
            </div>

            <div className="h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-16 text-white">
                        <div className="space-y-3 max-w-[540px] text-wrap">
                            <h1 className="font-bold text-xl"> web responsiveness</h1>
                            <p>From the visual design and branding perspective, our stakeholders thought the old website wasn’t confident enough in its image and impression. We sought to fix this by redefining the widescreen responsiveness. First, we changed all the content widths to a wider standard, then modified some content models to adapt to a wider width. Then we added a new breakpoint for wide screens so that when viewing the website on a large screen, the content won’t feel small.</p>
                            <p>Working on responsiveness was notably more challenging than I thought, as the logic can sometimes be very confusing and hard to express on Figma. We ended up spending a lot of time and effort to develop a demo version of the site with wide screen responsiveness changes just to demonstrate to stakeholders what the effects were like. </p>
                        </div>

                    </div>
                </div>
                <div className="space-y-4 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/responsiveness.jpg" width={600} height={600} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[400px] text-wrap">
                        <p className="font-light text-center text-slate-400"> mapping out responsive breakpoints and behaviours</p>
                    </div>
                </div>
            </div>

            <div className="h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-16 text-white">
                        <div className="space-y-3 max-w-[540px] text-wrap">
                            <h1 className="font-bold text-xl"> content modeling</h1>
                            <p>Airwallex used a CMS (Contentful) to manage its website, so majority of the developer work was in creating content models, or templates, for the CMS. This meant that each ‘section’ in the website was one content model, and building a new content model would cost extra dev work + CMS storage cost. Hence, when designing the structural layout of a section, it was crucial to design with scalability in mind. </p>
                            
                        </div>

                    </div>
                </div>
                <div className="space-y-4 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/content-modeling.svg" width={600} height={600} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[400px] text-wrap">
                        <p className="font-light text-center text-slate-400"> content modeling for the hero section</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-8">
            <div className="grid grid-cols-2 p-20 h-[625px]">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">localization</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[600px] text-wrap space-y-3">
                                <p>The website needed to be localized to 11 different regions, all with different product offerings, legal requirements, language translations, and image requirements. </p>
                                <p>Before, designers at Airwallex would have to spend months manually localizing the images to each region, manually changing things like currencies, flags, payment methods etc. For us, localizing manually was not an option because we were under immense pressure from stakeholders to launch the website before an investor event in the US. Hence, I led an initiative to build a 
                                    <strong> localization automation tool </strong>to help us 
                                    generate localized images, which helped speed up the process and enabled us to successfully launch within the given timeframe. </p>
                            </div>
                            <div className="space-y-4">
                                <p>Read more about the localization plugin here: </p>
                                <div className="space-x-4">
                                    <Button variant="default">
                                        <Link href="/localization" className="font-semibold">See page</Link>
                                    </Button>
                                    <Button variant="secondary">
                                        <Link href="https://youtu.be/Jimy1GPWg6g?si=O3KnR52a3CbSqKzC&t=32" className="font-semibold">See demo</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/localization.jpg" width={500} height={700} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> generated localized images from plugin</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-100 px-20 max-h-[800px]">
            <div className="grid grid-cols-2 justify-center">
                <div className="max-h-[800px] pb-56 overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/issuing.svg" width={550} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
                </div>
                <div className="max-h-[800px] pt-72 overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/payments.svg" width={550} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
                </div>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-2 p-20 h-fit">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">launch</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-24"></div>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light space-y-3">
                                <p>We launched in 7 regions over the course of 3 weeks, where each launch roughly followed these steps:</p>
                                <ul className="list-decimal pl-4">
                                    <li>Localizing designs, content, and copy</li>
                                    <li>Migrating all content into CMS</li>
                                    <li>QA on staging with stakeholders</li>
                                </ul>
                                <div>
                                    <span>Each launch happened under a lot of </span><span className="font-semibold">stakeholder pressure,</span>
                                        <span>given there were many investor events happening in that month and our CEO wanted to have the
                                            website ready to show at these events. I worked alongside my product manager to drive the
                                            launches forward, as well as led</span> <span className="font-semibold">4 regional launches myself.</span>
                                            <span> Some of the skills I learned in the process included:</span>
                                </div>
                                <ul className="list-disc pl-4">
                                    <li>Prioritization</li>
                                    <li>Interdependency tracking</li>
                                    <li>Resource allocation according to strengths and weaknesses</li>
                                    <li>Negotiation of expectations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/launch.png" width={350} height={500} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> balloon gifted to me and my PM celebrating the launches!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-100">
            <div className="grid grid-cols-2 p-20 h-fit">
                <div className="flex items-center">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">reflection</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light space-y-3">
                                <div>
                                <span>It goes without saying that this is probably the 
                                        </span><span className="font-semibold"> most challenging yet rewarding</span><span> project that I’ve been on. I spent a majority of my gap year working 
                                        on this project, and it has made me grow and mature immensely both personally and professionally. </span>
                                </div>
                                <div>
                                    <span>Some of my key takeaways from this project include:</span>
                                    <ul className="list-disc pl-4">
                                        <li>importance of momentum in projects</li>
                                        <li>taking the more time consuming, iterative approach often yields better</li>
                                        <li>process matters more, not results</li>
                                        <li>open and clear communication of expectations is key to teamwork</li>
                                        <li>design is not about pushing pixels and making things pretty</li>
                                    </ul>
                                </div>
                                <p>My experience would not be complete without the mentors I had at Airwallex who helped me grow along the way. thank you and shoutout to you guys! you know who you are :)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/reflection.png" width={350} height={500} alt="admin example" className="drop-shadow-xl rounded-md" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> farewell dinner on my last day @ airwallex</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


