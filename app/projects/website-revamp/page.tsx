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
    <div className="bg-cream_v3">
        <div className="flex flex-col md:flex-row p-6 md:p-0 md:pl-20">
            <div className="pt-10 flex items-center basis-[500px] md:basis-[600px]">
                <div className="space-y-20 ">
                    <div className="space-y-4">
                        <div className=''>
                            <p className="text-stone-400 text-md font-mono">HOW MIGHT WE...</p>
                            <h1 className='text-5xl font-semibold leading-normal'>revamp and redefine product narratives?</h1>
                        </div>
                        <div className="max-w-[512px] text-wrap">
                            <p className="text-md md:text-xl">redefining, designing, and revamping the product narratives and messaging for Airwallex&apos;s 17 fintech products.</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="default">
                            <Link href="https://www.airwallex.com/us" className="font-semibold">See website</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="py-6 md:max-h-[650px] md:px-24 md:pt-24 md:overflow-y-hidden flex items-center justify-center">
                <Image src="/images/website-revamp/hero.svg" width={600} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
            </div>
        </div>
        <div className="bg-black_v3 md:py-8">
            <div className="grid md:grid-cols-2 p-6 pt-14 md:p-20 md:max-h-[625px]">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-burgundy_v3 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><strong>role:</strong> lead designer, product manager</p>
                                <p><strong>timeline:</strong> Nov 2022 - Jun 2023</p>
                            </div>
                            <div className="max-w-[600px] text-wrap  text-white space-y-3">
                                <p>Airwallex is a fintech unicorn offering a variety of financial solutions for SMEs and enterprises, such as global money transfers, payment acceptance, and cards and expense management.</p>
                                <p>In November of 2022, Airwallex made the strategic decision to focus on enterprise customers and enter the embedded finance market. This meant that the company had to redefine how to tell the story about its products to potential customers, and rewrite its external facing product narratives. </p>
                                <p>As the main designer on this project, I was responsible for redesigning 17 product landing pages, where I worked closely with product managers, developers, product marketing, commercial and sales teams, and C-suite stakeholders. Through continuous iterations of my designs, I drove the efforts to define, visualize, and consolidate the messaging and narratives for all 17 of Airwallex’s products.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-14 md:py-0 flex items-center justify-center">
                    <Image src="/images/website-revamp/awx-logo.svg" width={350} height={500} alt="awx logo" className='md:max-w-[400px]'/>
                </div>
            </div>
        </div>
        <div className="p-6 pt-14 md:p-20 space-y-8">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">jobs to be done</h1>
                <div className="bg-burgundy_v3 h-1.5 w-56"></div>
            </div>
            <div>
                <div className="space-y-3">
                    <p>Before designing, I believe that a designer must first understand what the JTBD are of the product they are designing. To understand the JTBD of a website, we must first look at who the users and stakeholders are of a website. </p>
                    <ul className="list-disc pl-4">
                        <li><p><strong>Users: </strong>for a website, these are the viewers such as potential users or investors. From the users perspective, the website serves to give a brief overview of who the company is, what the company does, and what value can the company potentially bring to them. </p></li>
                        <li><p><strong>Stakeholders: </strong>the internal teams who use the website to do their job, such as marketing, strategy, and product team. From the stakeholders&apos; perspective, the website serves as an instrument for them to craft a brand image, explain what their products are, and ultimately funnels potential users in to sign up. </p></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/images/website-revamp/jtbd-diagram.svg" width={750} height={500} layout='responsive' alt="jtbd-diagram" className='md:max-w-[750px]'/>
            </div>
            <div>
                <p>From this, we can understand that the main JTBD of a website is to serve as a company&apos;s <strong>product story</strong>. It&apos;s the company&apos;s narrative and story to demonstrate who it is, what products it offers, and what value propositions it brings to stakeholders. In other words, when these users view the website, they need to be convinced to click the &apos;sign up&apos; or &apos;contact us&apos; button. At the same time, the website serves as a public brand and image for the company, and is the primary way for internal teams to convey to the world about who they are, what values they stand for, and what value they can bring to users.</p>
            </div>
            <div>
                <p>In summary, the job of the designer is to design a website that can:</p>
            </div>
                <div className='flex items-center justify-center pb-12'>
                    <div className="grid md:grid-cols-2 gap-4 max-w-[1000px]">
                            <div className="space-y-2">
                                <h2 className="font-semibold text-xl">convey...</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><p>company&apos;s visual brand & identity</p></li>
                                    <li><p>what the company&apos;s product offerings are</p></li>
                                    <li><p>why users should choose this company</p></li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h2 className="font-semibold text-xl">balance requirements & get alignment from...</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><p>marketing teams</p></li>
                                    <li><p>product strategy & C-suite executives</p></li>
                                    <li><p>product managers</p></li>
                                    <li><p>design team</p></li>
                                </ul>
                            </div>
                    </div>
                </div>
        </div>
        <div className="bg-beige_v3 md:px-20 md:max-h-[800px]">
            <div className="grid md:grid-cols-2 justify-center">
                <div className="md:max-h-[800px] p-10 md:p-0 md:pb-80 md:overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/baas-page-prev.jpg" width={550} height={500} alt="baas preview" className="drop-shadow-2xl rounded-md" />
                </div>
                <div className="md:max-h-[800px] p-10 md:p-0 md:pt-96 md:overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/ba-prev.jpg" width={550} height={500} alt="ba preview" className="drop-shadow-2xl rounded-md" />
                </div>
            </div>
        </div>
        <div className="bg-black_v3 p-6 pt-14 md:p-20 md:py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl text-white">overview & timeline</h1>
                <div className="bg-burgundy_v3 h-1.5 w-60"></div>
            </div>
            <div>
                <p className=" text-white">With these JTBD in mind, the next step was to design the 17 product pages. These 17 pages can be roughly categorized as the following, with 2-4 representing Airwallex&apos;s new product categories: </p>
                <ol className=" pl-4 text-white list-decimal">
                    <li><p>Homepages (4 pages)</p></li>
                    <li><p>Business Account (6 pages)</p></li>
                    <li><p>Core API (4 pages)</p></li>
                    <li><p>Embedded Finance (3 pages)</p></li>
                </ol>
            </div>
            <div className="text-white bg-stone-800 p-2 px-5 rounded-md">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger><p>Design Process Overview</p></AccordionTrigger>
                        <AccordionContent className="space-y-2">
                            <p>For each of the pages in these product categories, I roughly followed these steps to design them:</p>
                            <ol className="list-decimal pl-6 lg:pl-4 space-y-2">
                                <li><p><strong>Research & Understand</strong>-- talked to product managers and read product docs to understand what does the product do, how does it work, and what are its main value propositions. </p></li>
                                <li><p><strong>Draft a rough structure (IA proposal)</strong> -- using my understanding of the product, I drafted a rough outline of what I envisioned the page to look like. I presented these rough outlines to marketing, strategy, executives, and product managers to get alignment on the product narrative being crafted, iteratively revising and designing new outlines.  </p></li>
                                <li><p><strong>Design & Prototying</strong> -- after a general alignment was reached, I designed the pages in high fidelity on Figma, prototyping the pages to simulate a real website interactions. In this step, I would work closely with content marketers to write the copy, and with developers to understand what is feasible and what isn’t.  </p></li>
                                <li><p><strong>Present in design review</strong> -- we presented these Figma prototypes to the CEO, VP of Design, VP of Marketing, and other stakeholders for final approval on the pages, down to the details of copy, microinteractions, and animations. </p></li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
                <p className=" text-white">All in all, the 7 month project looked a little like this:</p>
            </div>
            <div className="flex items-center justify-center pb-14 md:pb-0">
                <Image src="/images/website-revamp/timeline.svg" width={1000} height={500} layout='responsive' alt="timeline" className='max-w-[1000px]'/>
            </div>
        </div>
        <div className="space-y-20">
            <div>
                <div className="pt-14 p-6 md:pl-20 md:p-0 md:h-[600px] grid md:grid-cols-2">
                    <div className="flex items-center">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">example: expense management</h1>
                                <div className="bg-burgundy_v3 h-1.5 w-80"></div>
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
                    <div className="relative flex md:overflow-x-hidden items-center">
                        <Image src="/images/website-revamp/expense-hero.svg" width={750} height={500} alt="expense hero" className="drop-shadow-xl rounded-md md:left-16 md:absolute md:right-0 pt-10" />
                    </div>
                </div>
            </div>

            <div className="md:pl-20 px-6 h-fit grid gap-6 md:gap-0 md:grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-4 md:space-y-8">
                        <h1 className="font-bold text-xl"> research & understanding</h1>
                        <div className="space-y-3 md:max-w-[600px] text-wrap">
                            <p>When trying to understand a product, there were a few key questions I would center my research around: </p>
                            <ol className="list-decimal pl-4">
                                <li><p>Who are the target users for this product?</p></li>
                                <li><p>What are the needs of these target users?</p></li>
                                <li><p>What unique value does this product bring to the user?</p></li>
                                <li><p>Which Airwallex capabilities enable this product?</p></li>
                                <li><p>How does it work behind the scenes?</p></li>
                                <li><p>What are some legal, marketing, or strategy concerns I should consider for this product?</p></li>
                            </ol>
                        </div>
                        <div className="bg-beige_v3 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><p>Example: Expense Management</p></AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For Expense Management, the analysis looked like this:</p>
                                        <ol className="list-decimal pl-6 lg:pl-4 space-y-2">
                                            <li><p><strong>Target users:</strong> Small to medium sized businesses who are using Airwallex’s Cards product for their employees and company expenses </p></li>
                                            <li><p><strong>Target user needs:</strong> Administrators want an easy way to manage and approve expenses. Employees want an easy way to see and review their expenses. </p></li>
                                            <li><p><strong>Unique value proposition:</strong> Mobile and desktop, uploading receipts, ability to customize approval workflows, integrations with accounting software</p></li>
                                            <li><p><strong>Airwallex capabilities:</strong> Expense management, borderless cards, accounting integrations</p></li>
                                            <li><p><strong>Product mechanics:</strong> The transactions recorded in the employee or company cards are aggregated in the Expense Management platform</p></li>
                                            <li><p><strong>Other considerations:</strong> This is targeted at existing customers who have Cards, so it should cross reference the product page for Cards.</p></li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div>
                        <Image src="/images/website-revamp/expense-file.jpg" width={500} height={700} layout='responsive' alt="expense file" className="drop-shadow-xl rounded-md md:max-w-[500px]" />
                    </div>
                    <div className="max-w-[340px] text-wrap">
                        <p className=" text-center text-stone-400"> Interviewing other designers to understand their product, their designs, and the user journey</p>
                    </div>
                </div>
            </div>

            <div className="px-6 md:pl-20 h-fit grid md:grid-cols-2 gap-6 md:gap-0">
                <div className="flex items-center">
                    <div className="space-y-8">
                        <h1 className="font-bold text-xl"> drafting an outline</h1>
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <p>This was most often time the most time consuming and challenging step of the design process, because this was about crafting the narrative. Usually, I followed a general structure of: </p>
                            <ol className="list-decimal pl-4">
                                <li><p><strong>Why:</strong> high level overview of the value propositions of the product </p></li>
                                <li><p><strong>What:</strong> what the main features of the product are, and what are the key propositions to call out for each feature </p></li>
                                <li><p><strong>How:</strong> how this works for developers, how this works for other customers (customer testimonials or case studies), or how to get started (CTAs)</p></li>
                            </ol>
                        </div>
                        <div className="bg-beige_v3 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><p>Example: Expense Management</p></AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For Expense Management, one of the challenges I faced was how to balance the perspective of different roles. The Expense Management product served two main types of users: </p>
                                        <ol className="list-decimal pl-6 lg:pl-4 space-y-2 ">
                                            <li><p><strong>Cardholders:</strong> employees who are using the cards to record expenses </p></li>
                                            <li><p><strong>Administrators:</strong> Administrators want an easy way to manage and approve expenses. Employees want an easy way to see and review their expenses. </p></li>
                                        </ol>
                                        <p>The original structural proposal was to have one section talk about the ‘all in one cards and expenses experience’ and discuss general value propositions. However, I noticed the value propositions were very different for both types of users, and mixing them up felt quite confusing as a viewer. One of my ideas was to have separate sections for different user types, but it also compromised the ‘all in one’ experience value proposition. </p>
                                        <p>After presenting both proposals and their tradeoffs to stakeholders, we reached alignment to have an overhead section discussing the ‘all in one experience’, and then have subsections specifically for each user type.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 relative flex flex-col md:order-first">
                    <div className="items-start justify-start">
                        <Image src="/images/website-revamp/expense-wf.svg" width={550} height={700} alt="expense file" />
                    </div>
                </div>
            </div>

            <div className="md:pl-20 h-fit grid px-6 pb-14 md:grid-cols-2 gap-6 md:gap-0 md:pb-20">
                <div className="flex items-center">
                    <div className="space-y-6">
                        <h1 className="font-bold text-xl"> design & prototyping</h1>
                        <div className="space-y-3 max-w-[600px] text-wrap">
                            <p>Once the structure was near final and I had a general idea of what kind of images to design, I would begin assembling high fidelity designs of the pages. This included details such as: </p>
                            <ul className="list-disc pl-4">
                                <li><p><strong>Design system:</strong> spacing, font sizes, colours, content width etc </p></li>
                                <li><p><strong>Iconography</strong></p></li>
                                <li><p><strong>Content modeling:</strong> making sure that we use the same content models that have been agreed upon with developers </p></li>
                                <li><p><strong>Images</strong></p></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <p>The main focus was on designing the images, and when doing so, I would approach by considering the following factors:</p>
                            <ul className="list-decimal pl-8">
                                <li><p>What kind of feature or ability is this section highlighting?</p></li>
                                <li><p>Is this feature best exemplified on desktop or mobile?</p></li>
                                <li><p>What are the key screens or symbols that would help a user identify this feature?</p></li>
                                <li><p>What are the key value propositions that is written on the side, and what are some screens that would demonstrate those points?</p></li>
                            </ul>
                            <p>Once I have collected all the product screens that address the factors above, I would find a way to assemble them in a visually pleasing, not too overwhelming yet informative.</p>
                        </div>
                        <div className="bg-beige_v3 p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><p>Example: Expense Management</p></AccordionTrigger>
                                    <AccordionContent className="space-y-2">
                                        <p>For example, for the ‘For Employers’ section, the analysis looks like this: </p>
                                        <ol className="list-decimal pl-6 lg:pl-4 space-y-2">
                                            <li><p><strong>Highlighted abilities:</strong> Employees can easily upload receipts and submit expenses </p></li>
                                            <li><p><strong>Mobile or desktop?</strong> Mobile, because that emphasizes the point that employees can submit expenses on the go </p></li>
                                            <li><p><strong>Key screens:</strong> Submitting expenses screen, scanning receipts can be identified by the camera focusing on a receipt</p></li>
                                            <li><p><strong>Key value propositions:</strong> The side mentions uploading pictures and submitting expenses, which is shown by the images</p></li>
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
                        <p className=" text-center text-stone-400"> high fidelity version with overhead section</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-black_v3 p-6 py-14 md:p-20 md:py-20 space-y-20">
            <div className="h-fit grid gap-6 md:gap-0 md:grid-cols-2">
            <div className="flex items-center">
                    <div className="space-y-8 text-white">
                        <div className="space-y-1">
                            <h1 className="font-bold text-3xl text-white">dev handoff</h1>
                            <div className="bg-burgundy_v3 h-1.5 w-40"></div>
                        </div>
                        <div className="space-y-2">
                            <p>For the website, there were 3 key things to hand off to developers:</p>
                            <ul className="list-decimal pl-8">
                                <li><p>Mobile designs</p></li>
                                <li><p>Web responsiveness</p></li>
                                <li><p>Content modeling</p></li>
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

            <div className="h-fit grid gap-6 md:gap-0 md:grid-cols-2">
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
                        <p className=" text-center text-stone-400"> mapping out responsive breakpoints and behaviours</p>
                    </div>
                </div>
            </div>

            <div className="h-fit grid gap-6 md:gap-0 md:grid-cols-2">
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
                        <p className=" text-center text-stone-400"> content modeling for the hero section</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:py-8">
            <div className="grid md:grid-cols-2 p-6 py-14 md:p-20 gap-6 md:gap-0 md:h-[625px]">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">localization</h1>
                                <div className="bg-burgundy_v3 h-1.5 w-32"></div>
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
                        <p className=" text-center text-stone-400"> generated localized images from plugin</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-beige_v3 md:px-20 h-fit md:max-h-[800px]">
            <div className="grid md:grid-cols-2 justify-center">
                <div className="md:max-h-[800px] p-6 md:pb-56 md:overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/issuing.svg" width={550} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
                </div>
                <div className="md:max-h-[800px] p-6 md:pt-72 md:overflow-y-hidden flex items-center justify-center">
                    <Image src="/images/website-revamp/payments.svg" width={550} height={500} alt="website revamp hero" className="drop-shadow-2xl rounded-md" />
                </div>
            </div>
        </div>

        <div>
            <div className="grid md:grid-cols-2 p-6 py-14 md:p-20 gap-6 md:gap-0 h-fit">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">launch</h1>
                                <div className="bg-burgundy_v3 h-1.5 w-24"></div>
                            </div>
                            <div className="max-w-[600px] text-wrap space-y-3">
                                <p>We launched in 7 regions over the course of 3 weeks, where each launch roughly followed these steps:</p>
                                <ul className="list-decimal pl-4">
                                    <li><p>Localizing designs, content, and copy</p></li>
                                    <li><p>Migrating all content into CMS</p></li>
                                    <li><p>QA on staging with stakeholders</p></li>
                                </ul>
                                <div>
                                    <p>Each launch happened under a lot of <strong>stakeholder pressure,</strong> given there were many investor events happening in that month and our CEO wanted to have the website ready to show at these events. I worked alongside my product manager to drive the launches forward, as well as led <strong>4 regional launches myself.</strong> Some of the skills I learned in the process included:</p>
                                </div>
                                <ul className="list-disc pl-4">
                                    <li><p>Prioritization</p></li>
                                    <li><p>Interdependency tracking</p></li>
                                    <li><p>Resource allocation according to strengths and weaknesses</p></li>
                                    <li><p>Negotiation of expectations</p></li>
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
                        <p className=" text-center text-stone-400"> balloon gifted to me and my PM celebrating the launches!</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-beige_v3">
            <div className="grid md:grid-cols-2 md:p-20 p-6 py-14 gap-6 md:gap-0 h-fit">
                <div className="flex items-center">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">reflection</h1>
                                <div className="bg-burgundy_v3 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[600px] text-wrap  space-y-3">
                                <div>
                                    <p>It goes without saying that this is probably the <strong>most challenging yet rewarding</strong> project that I’ve been on. I spent a majority of my gap year working on this project, and it has made me grow and mature immensely both personally and professionally.</p>
                                </div>
                                <div>
                                    <p>Some of my key takeaways from this project include:</p>
                                    <ul className="list-disc pl-4">
                                        <li><p>importance of momentum in projects</p></li>
                                        <li><p>taking the more time consuming, iterative approach often yields better</p></li>
                                        <li><p>process matters more, not results</p></li>
                                        <li><p>open and clear communication of expectations is key to teamwork</p></li>
                                        <li><p>design is not about pushing pixels and making things pretty</p></li>
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
                        <p className=" text-center text-stone-400"> farewell dinner on my last day @ airwallex</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


