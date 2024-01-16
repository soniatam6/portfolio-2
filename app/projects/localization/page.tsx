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
    <div className='max-w-[1440px]'>
        <div className="flex flex-row pl-20">
            <div className="flex items-center basis-[600px]">
                <div className="space-y-10 ">
                    <div className="space-y-3">
                        <div className="flex flex-col">
                            <h1 className="font-light text-7xl">localization</h1>
                            <h1 className="font-extrabold text-7xl">automation tool</h1>
                        </div>
                        <div className="max-w-[512px] text-wrap">
                            <p className="font-light text-xl">leading an initiative to build an image localization Figma plugin for the airwallex website revamp project</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="default">
                            <Link href="https://youtu.be/Jimy1GPWg6g?si=O3KnR52a3CbSqKzC&t=32" className="font-semibold">See demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-h-[650px] px-24 pt-48 overflow-y-hidden flex items-center justify-center">
                <Image src="/images/localization/hero.svg" width={600} height={500} alt="localization hero" className="drop-shadow-xl rounded-md" />
            </div>
        </div>

        <div className="bg-slate-900 py-8">
            <div className="grid grid-cols-2 py-16">
                <div className="flex items-center pl-20 ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><span className="font-semibold">role:</span> <span className="font-light">product management intern</span></p>
                                <p><span className="font-semibold">timeline:</span> <span className="font-light">Apr 2023 - Jun 2023</span></p>
                            </div>
                            <div className="max-w-[600px] text-wrap text-white space-y-9">
                                <div className="space-y-3">
                                    <div>
                                        <h1 className="font-semibold text-xl">my role</h1>
                                        <p>As the main designer for the Airwallex website revamp project, I was faced with the challenge of manually localizing over 1000+ images for 11 regions within 2 weeks under pressure from executives. Knowing that the manual route wouldn’t work, I led the initiative to build a localization automation tool to help with the process, leading a team of two other designers and a senior developer to build the tool. </p>
                                    </div>
                                    <p>As the <strong>product manager and primary user</strong> for the product, I worked to define the requirements, design the backend solution, prioritize tasks, track interdependencies, oversee implementation, and manage stakeholder expectations. </p>
                                </div>
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">the product</h1>
                                    <p className="font-light">The localization automation tool is a Figma plugin with a few key functionalities: </p>
                                    <ul className="list-disc pl-4">
                                        <li><p>Generates localized designs with one click </p></li>
                                        <li><p>Bulk upload and assign images on CMS</p></li>
                                        <li><p>Bulk update CMS assets directly from Figma</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/localization/context.svg" width={600} height={500} alt="awx logo"/>
                </div>
            </div>
        </div>

        <div className="py-8">
            <div className="grid grid-cols-2 py-16">
                <div className="flex items-center pl-20 ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl">the problem</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[650px] text-wrap space-y-9">
                                <div>
                                    <p>One of the main challenges of the Airwallex website revamp project was the localization of images. For each of the 11 regions, designers previously had to <strong>manually</strong> do the following:</p>
                                    <ul className="list-decimal pl-4">
                                        <li><p>Localize visuals in Figma </p></li>
                                        <li><p>Export, upload, and assign images in Contentful (CMS)</p></li>
                                        <li><p>Revise images and repeat for any changes</p></li>
                                    </ul>
                                </div>
                                <div>
                                    <p>The previous effort estimates looked like:</p>
                                    <ul className="list-disc pl-4">
                                        <li><p>Asset localization = 4+ weeks</p></li>
                                        <li><p>Contentful uploading = 2 days</p></li>
                                        <li><p>Contentful asset updates = 1 week per revision round</p></li>
                                    </ul>
                                </div>
                                <p>Around end of April, we were facing a lot of stakeholder pressure from the CEO to launch the website, as he was about to attend large investor events and wanted to show the refreshed website then. Waiting around 4-6 more weeks for manual localization was not an option -- we needed a solution optimized for speed and accuracy. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/localization/problem.svg" width={500} height={500} alt="awx logo"/>
                </div>
            </div>
        </div>

        <div className="bg-slate-100 p-20 space-y-8">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">defining user requirements</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-80"></div>
            </div>
            <p>The first step was to break down what ‘localization’ really meant for images. As the main user of the product and designer for the website, I took a step back to analyze what were the types of designs that needed to be localized. After reviewing all the designs, these were the categories of objects to be localized:</p>
            <div className="grid grid-cols-2">
                <div className='space-y-6'>
                    <p><strong>Text-based</strong></p>
                    <Image src="/images/localization/text-based.svg" width={550} height={500} alt="text-based"/>
                </div>
                <div className='space-y-6'>
                    <p><strong>Image-based</strong></p>
                    <Image src="/images/localization/image-based.svg" width={550} height={500} alt="image-based"/>
                </div>
            </div>
            <p>I also observed that there were some small modular designs that were repeatedly used, and depended on product availability or specifications for each region. Some examples include: </p>
            <div className="flex flex-row space-x-12">
                <div className='space-y-6'>
                    <Image src="/images/localization/GAs.svg" width={550} height={500} alt="GAs" className='drop-shadow-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Global Accounts</strong></p>
                        <p className='text-center text-slate-400'>account details & availabilities differ for each region</p>
                    </div>
                </div>
                <div className='space-y-6 basis-2/4'>
                    <Image src="/images/localization/transfer.svg" width={550} height={500} alt="transfer-methods" className='drop-shadow-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Transfer methods</strong></p>
                        <p className='text-center text-slate-400'>transfer details & availabilities differ for each region</p>
                    </div>
                </div>
                <div className='space-y-6 flex flex-col items-center justify-center'>
                    <Image src="/images/localization/cards.svg" width={240} height={450} alt="cards" className='drop-shadow-md rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Cards</strong></p>
                        <p className='text-center text-slate-400'>each region differs in offering physical vs virtual, Visa Business vs Visa Commercial</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    <Image src="/images/localization/payment-methods.svg" width={550} height={500} alt="payment-methods" className='drop-shadow-md rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Payment methods</strong></p>
                        <p className='text-center text-slate-400'>each region has differs in local payment acceptance methods</p>
                    </div>
                </div>
            </div>
            <div className='space-y-3'>
                <p>The second part of the user journey was regarding the manual process of uploading, updating, and assigning images in Contentful. How Contentful worked was you could upload an image to the Media, navigate to the page that you created, click into the specific section of the page, and upload the desired image there. For example, if I wanted to upload the image of the lock icon on the homepage, I would have to manually click through:</p>
                <p className='text-center'>Homepage US &gt; Compliance and Security section &gt; ‘Protected’ talking point &gt; Upload image</p>
                <p>The pain point was in having to manually click through all these pages every single time there was a small change made to the images. This was a very time costly operation since as we were conducting QA in parallel, there would often be very small revisions that need to be made to images. Consequentially, as the user, I often found myself spending hours just clicking through Contentful trying to find the appropriate place to upload all the revised images. </p>
            </div>
            <div className='space-y-8'>
                <p>With these observations above, we can write the following problem statement to summarize the JTBD of this product:</p>
                <div className="flex-row flex items-center space-x-16 justify-center">
                    <div className="w-2 h-56 bg-teal-400"></div>
                    <div className="space-y-4 items-center flex flex-col ">
                        <h1 className="font-bold">the problem statement</h1>
                        <p><strong>how might we...</strong> build a tool that can help us</p>
                        <ul className='list-disc pl-4 max-w-[500px]'>
                            <li><p>automatically transfer a mapping of data into Figma designs</p></li>
                            <li><p>bulk upload images directly from Figma </p></li>
                            <li><p>automatically update appropriate images without having to navigate Contentful</p></li>
                        </ul>
                    </div>
                    <div className="w-2 h-56 bg-teal-400"></div>
                </div>
            </div>
        </div>

        <div className="bg-slate-900 space-y-20">
            <div className="pl-20 py-20 h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-8">
                        <div className="space-y-1">
                            <h1 className="text-white font-bold text-3xl">solution design</h1>
                            <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
                        </div>
                        <div className="text-white space-y-3 max-w-[650px] text-wrap">
                            <p>To brainstorm solutions, I sat down with my engineer to discuss possible ways to address the requirements. From our conversation, we knew that we needed: </p>
                            <ol className="list-decimal pl-4">
                                <li><p>Some sort of database of flags, cards, etc </p></li>
                                <li><p>Some sort of mapping system to  list availability and specifications for each region</p></li>
                                <li><p>Some sort of API call to Contentful</p></li>
                                <li><p>Some way to read and write into Figma files </p></li>
                            </ol>
                        </div>
                        <div className='text-white'>
                            <h2>solution flow</h2>
                            <p>Together, we started drawing out how the solution might work, what kind of information is needed, and who is responsible for what. See the solution flow below, where I played the role of both PM and designer:</p>
                        </div>
                        <div className="bg-slate-800 text-white p-2 px-5 rounded-md max-w-[600px]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><p>work flow</p></AccordionTrigger>
                                    <AccordionContent>
                                    <ol className="list-decimal pl-4 space-y-2">
                                        <li><p>Designer, developer, and PM agree on a naming scheme for the Figma layers to be localized </p></li>
                                        <li><p>Designer creates a master component set of flags, cards, and payment methods</p></li>
                                        <li><p>Designer would clean up a template version of the image, switching in instances of the flags, cards, and payment methods</p></li>
                                        <li><p>PM would create a spreadsheet of all mapped data for product availability and specifications</p></li>
                                        <li><p>Developer would rename each Figma layer to be localized using naming scheme </p></li>
                                        <li><p>Developer would run their script on the specified frames, where the script reads in the mapped data and named layers to generate localized versions</p></li>
                                        <li><p>Designer would QA localized assets, developer would run the plugin again to upload assets to Contentful</p></li>
                                        <li><p>Whenever designer needs to revise the asset, they change it in Figma and developer re-uploads it to Contentful, which automatically updates it using naming scheme</p></li>
                                    </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        
                    </div>
                </div>
                <div className="space-y-6 relative flex flex-col items-center justify-center">
                    <div className='space-y-3 flex flex-col items-center'>
                        <div>
                            <Image src="/images/localization/solution-design.svg" width={450} height={700} alt="solution design" className="rounded-md" />
                        </div>
                        <div className="max-w-[340px] text-wrap">
                            <p className="font-light text-center text-slate-400"> Solution design</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex flex-col items-center'>
                        <div>
                            <Image src="/images/localization/mapping.png" width={450} height={700} alt="mapping" className="rounded-md" />
                        </div>
                        <div className="max-w-[340px] text-wrap">
                            <p className="font-light text-center text-slate-400"> Map of localized data</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex flex-col items-center'>
                        <div>
                            <Image src="/images/localization/name-template.png" width={350} height={700} alt="name-template" className="rounded-md" />
                        </div>
                        <div className="max-w-[340px] text-wrap">
                            <p className="font-light text-center text-slate-400"> Named layers in template design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-slate-100 py-20 pl-20 space-y-16">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl ">implementation & challenges</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-80"></div>
            </div>
            <div className="h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-8 ">
                        <div className="space-y-2 max-w-[625px]">
                            <p>The actual implementation involved a lot of coordination, prioritization, and general project management because we were building it within a span of 1-2 weeks. Some of the skills I learned as I led the team through implementation included:</p>
                            <ul className="list-decimal pl-8">
                                <li><p><strong>Interdependency tracking: </strong>often times people’s time and efforts are lost when their work depends on someone else’s and they’re waiting on or not waiting on the other. As a product manager, I learned to maximize everyone’s time and energy by making sure they were not wasting their time and efforts</p></li>
                                <li><p><strong>Prioritization: </strong>with so much to do, so little time, and so much pressure from stakeholders, there was a constant need to prioritize which were the most worthwhile initiatives to dedicate effort into.</p> </li>
                                <li><p><strong>Leading by example: </strong>as the main driver of this initiative, I realized how important it was to lead by example. If I wasn’t in the trenches with them, the team would not feel motivated to work with me. In that way, I learned how to gain respect from my team.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <Image src="/images/localization/timeline.svg" width={575} height={600} alt="timeline" className="drop-shadow-lg rounded-md" />
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> a little visual to help plan the week out</p>
                    </div>
                </div>
            </div>
            <div className="h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-8 ">
                        <div className="space-y-2">
                            <h2 className='font-semibold'>challenges</h2>
                            <p>one of the biggest hurdles we faced that week was naming conventions. we made two key mistakes that cost us a lot of time, wasted efforts, and confusion:</p>
                            <ul className="list-decimal pl-8">
                                <li><p>underestimated the importance of standardized naming conventions in our solution</p></li>
                                <li><p>we did not clearly communicate what we meant when naming layers, and often assumed too much</p> </li>
                            </ul>
                            <p>From these mistakes, I learned the importance of <strong>clear communication</strong> and <strong>not assuming too much</strong>. It was in these tiniest of details that we often lost hours trying to debug the code or find an error. </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <Image src="/images/localization/naming-convention.svg" width={575} height={600} alt="naming conventions" className="drop-shadow-lg" />
                    <div className="max-w-[340px] text-wrap">
                        <p className="font-light text-center text-slate-400"> naming conventions that we agreed upon</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-20 space-y-16">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl ">results & metrics</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div className="space-y-8">
                <p>With the help of this localization plugin, efficient project management, and a lot of hard work from the team, we managed to successfully launch the website within <strong>1 week turnaround</strong>, just in time for our CEO attended the investor event. We continued to use this plugin to help us localize for the other regions, and <strong>successfully launched 7 regions in a span of 3 weeks.</strong> </p>
                <p>Here is the before and after effort estimates:</p>
                <div className='flex items-center justify-center'>
                    <div className="grid grid-cols-2 gap-12 max-w-[800px]">
                            <div className="space-y-2">
                                <p className="font-semibold">before:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><p>Asset localization = 4+ weeks</p></li>
                                    <li><p>Contentful uploading = 2 days</p></li>
                                    <li><p>Contentful asset updates = 1 week per revision round</p></li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="font-semibold">after:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><p>Asset localization = 4 hours</p></li>
                                    <li><p>Contentful uploading = 1 hour</p></li>
                                    <li><p>Contentful asset updates = 1 hour per revision round</p></li>
                                </ul>
                            </div>
                    </div>
                </div>
                <p>... leading to a  <strong className="text-xl text-teal-400">97%</strong>  efficiency improvement!</p>
                <div className='space-y-3'>
                    <p className='font-semibold'>Future improvements:</p>
                    <ul className="list-disc pl-4 space-y-2">
                        <li><p>H2 roadmap: Release MVP to production for designers to use</p></li>
                        <li><p>H2 roadmap: integrating TransPerfect Figma plugin with this plugin to get a complete localization tool</p></li>
                    </ul>
                </div>
            </div>
            <div className="space-x-24 relative flex flex-row items-center justify-center">
                    <div className='space-y-3 flex flex-col items-center'>
                        <div>
                            <Image src="/images/localization/localized-assets.png" width={675} height={700} alt="localized assets" className="drop-shadow-lg rounded-md" />
                        </div>
                        <div className="max-w-[340px] text-wrap">
                            <p className="font-light text-center text-slate-400"> generated localized design assets</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex flex-col items-center'>
                        <div>
                            <Image src="/images/localization/plugin.png" width={450} height={700} alt="plugin" className="drop-shadow-lg rounded-md" />
                        </div>
                        <div className="max-w-[340px] text-wrap">
                            <p className="font-light text-center text-slate-400"> localization plugin interface</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
