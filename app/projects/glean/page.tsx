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
    <div>
        <div className="flex  flex-row pl-20">
            <div className="flex items-center basis-[600px]">
                <div className="space-y-10 ">
                    <div className="space-y-3">
                        <div className='pb-3'>
                            <p className="text-slate-300 font-semibold text-sm">CASE STUDY</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-light text-7xl">glean</h1>
                            <h1 className="font-extrabold text-7xl">search redesign</h1>
                        </div>
                        <div className="max-w-[512px] text-wrap">
                            <p className="text-xl">redesigning glean&apos;s traditional search and AI powered search result page.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex overflow-x-hidden  h-[650px] w-[800px] justify-center items-center">
                <Image src="/images/glean/hero.svg" width={1000} height={500} alt="glean hero" className="absolute inset-y-14 left-20 right-0 drop-shadow-2xl rounded-md " />
            </div>
        </div>
        <div className="bg-slate-900 pt-20 text-white space-y-10">
            <div className="pl-20 space-y-1">
                <h1 className="font-bold text-3xl">introduction</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div className="pl-20 grid grid-cols-2 max-h-[625px]">
                <div className="flex items-center ">
                    <div className="space-y-10 ">
                        <div className="space-y-8">
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><strong>role:</strong> product designer, user researcher</p>
                                <p><strong>timeline:</strong> a week in Jan 2024</p>
                            </div>
                            <div className="max-w-[600px] text-wrap  text-white space-y-3">
                                <p>Glean is an AI-powered work assistant that can search across your entire company’s data. Glean connects to multitude of different apps and builds a company’s knowledge graph to give the best personalized search results for a company’s employees. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/glean/glean-logo.svg" width={275} height={500} alt="glean logo"/>
                </div>
            </div>
            <div>
                <div className="pt-14 grid grid-cols-2">
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <Image src="/images/glean/cabrium.svg" width={625} height={500} alt="cabrium" className="drop-shadow-xl rounded-md" />
                        <p className='text-slate-400'>cabrium&apos;s platform</p>
                    </div>
                    <div className="pr-20 pl-4 flex items-center">
                        <div className="space-y-5">
                            <div className="space-y-3 text-wrap">
                                <h1>Why redesign Glean?</h1>
                                <p>When I was a product designer at Airwallex, I often found myself needing to reference past projects to understand why certain design decisions were made and the rationale behind them. However, the process was often very messy and tedious -- I would have to sift through hundreds of different Figma files, Confluence pages, and Slack channel histories before finding the answer I wanted. </p>
                                <p>In the past two months, I worked with two other friends to build and design Cabrium, a decision documentation platform, in order to solve this problem. We built Cabrium to automatically document the entire decision making journey for designers, from receiving feedback from stakeholders to the back and forth between designers and stakeholders, to generating summary reports about key decisions made in a project once completed. You can read more about my startup here:</p>
                            </div>
                            <div>
                                <Button variant="secondary">
                                    <Link href="https://drive.google.com/file/d/1f7DXO7ijqyfs4lYVBsliADTyCbLAePFC/view" className="font-semibold">Read more</Link>
                                </Button>
                            </div>
                            <div className="space-y-3 text-wrap">
                                <p>So when I first read about Glean, I got really excited. Glean’s product was exactly what I would’ve wanted to use as a designer, and it shared similar goals to Cabrium in giving users easy access to company data. The more I read about Glean’s product, the more I thought to myself: if only I had this as a designer! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="pt-14 pl-20 grid grid-cols-2">
                    <div className="pr-20 pl-4 flex items-center">
                        <div className="space-y-5">
                            <div className="space-y-3 text-wrap">
                                <h1>Why the search results page?</h1>
                                <p>As like most people, the explosion of AI in the past year has made me think. a lot. it’s made me ponder a lot about human relationship with technology and has led me down numerous existential crises. one recent pondering came about when I noticed more people talking about Perplexity AI, an AI search engine aimed to basically replace Google. it made me think a lot about how humans interact with information, and how the AI powered chat interface is another revolution in our human relationship with data. i wrote about my ponderings here:</p>
                            </div>
                            <div>
                                <Button variant="secondary">
                                    <Link href="https://soniatam.substack.com/p/our-relationship-with-information" className="font-semibold">Read more</Link>
                                </Button>
                            </div>
                            <div className="space-y-3 text-wrap">
                                <p>when looking into Glean, i noticed how it was facing the same challenge that Google faces today: how do you integrate the user experience of an AI-powered chat interface with the user experience of a traditional search engine? curious, i decided to challenge myself to redesign Glean’s search results page to explore this question deeper. </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <Image src="/images/glean/google-ux.svg" width={625} height={500} alt="cabrium" className="drop-shadow-xl rounded-md" />
                        <p className='text-slate-400'>Google&apos;s &apos;generative search&apos; design</p>
                    </div>
                </div>
            </div>
            <div className='pt-14 pb-20 flex flex-col space-y-3 justify-center items-center'>
                <div className='text-center max-w-[900px]'>
                    <h1>disclaimers</h1>
                    <p>before we dive in, this is a full disclaimer that i had <strong>no actual access</strong> to Glean’s product, since it is a B2B software. hence everything that I use in this post to redesign Glean’s search results page is <strong>taken from and only from Glean’s website</strong>. i don’t know what Glean’s search results page is actually like, so this is more of a reconstruction of what I envision it to be based on Glean’s online content (i would love to use it someday though!)</p>
                </div>
            </div>
        </div>
        <div className="p-20 space-y-8">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">user research</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div>
                <div className="space-y-3">
                    <p>to tackle the challenge, there were three main questions I wanted to focus my user research around: </p>
                    <ul className="list-decimal pl-4">
                        <li><p><strong>traditional search: </strong>how do users interact with traditional search engines? </p></li>
                        <li><p><strong>AI powered chat interface: </strong>how do users interact with AI powered chat interfaces? </p></li>
                        <li><p><strong>integration of user experiences</strong>how do these two user experiences differ, and how can we harmoniously integrate them?</p></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="space-y-3">
                    <h1>user interviews</h1>
                    <p>since I didn’t have access to actual Glean users, a lot of my questions were more focused on the user experience of generic traditional search engines & AI chat interfaces. </p>
                    <p>i interviewed 5 people, most of whom were either software engineers or designers. these are some of my key takeaways:</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/images/glean/interviews.svg" width={1200} height={500} alt="interviews"/>
            </div>
        </div>


        <div className="bg-slate-100 p-20 space-y-8">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">product research</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-60"></div>
            </div>
            <p>now that i had a good sense of what users may want for each user experience, i wanted to specify it to Glean. but first, i wanted to understand more about Glean’s product. more specifically, I wanted to understand what were the building blocks that I had to play with, and what kind of scenarios and use cases the search result page would encounter.</p>
            <div className="grid grid-cols-2 space-x-16">
                <div className=''>
                    <Image src="/images/glean/jtbd.svg" width={700} height={500} alt="jtbd"/>
                </div>
                <div className='space-y-6'>
                    <h2>Jobs to be done:</h2>
                    <p>the search results page is a product, and as with any product, it has its inputs and outputs. I wanted to map out what the inputs and outputs are for the search results page in order to understand its jobs to be done</p>
                    <p>as a functional product, the JTBD of a search results page was to retrieve <strong>input queries</strong> and <strong>display output data</strong>.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 py-10 space-x-16">
                <div className='space-y-6'>
                    <h2>Types of Input Queries:</h2>
                    <ul className='list-decimal pl-4 space-y-1'>
                        <li><p><strong>Questions</strong> that expect an action or a direct answer</p></li>
                        <ul className='list-disc pl-8 space-y-1'>
                            <li><p>Example: What is the status of this week’s backend release?</p></li>
                            <li><p>Example: ‘Help me solve this customer issue’ </p></li>
                        </ul>
                        <li><p><strong>Keyword searches</strong> where users want to see all relevant results with those keywords</p></li>
                        <ul className='list-disc pl-8 space-y-1'>
                            <li><p>Example: New user onboarding</p></li>
                            <li><p>Example: ‘#4243 An error occurred, Please check..’</p></li>
                        </ul>
                        <li><p><strong>Entity searches</strong> where users want to see all summarized information about one entity</p></li>
                        <ul className='list-disc pl-8 space-y-1'>
                            <li><p>Example: &apos;Christine Kong&apos;</p></li>
                            <li><p>Example:  &apos;Acme Inc&apos; </p></li>
                        </ul>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Image src="/images/glean/inputs.svg" width={400} height={500} alt="inputs" className='drop-shadow-xl rounded-md'/>
                </div>
            </div>
            <h2>Types of Output Data</h2>
            <div className="pb-10 grid grid-cols-3 space-x-12">
                <div className='space-y-6 flex flex-col items-center'>
                    <Image src="/images/glean/output-ga3.svg" width={380} height={300} alt="GAs" className='drop-shadow-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Glean Assistant answers</strong></p>
                        <p className='text-center text-slate-500 max-w-[350px]'>responses generated from the generative AI. This comes with the chat interface too</p>
                    </div>
                </div>
                <div className='space-y-6'>
                    <Image src="/images/glean/output-raw3.svg" width={800} height={800} alt="raw data" className='drop-shadow-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Raw data</strong></p>
                        <p className='text-center text-slate-500 max-w-[350px]'>Unpackaged data that is presented from keyword matching. Examples include documents, Slack threads, Jira tickets etc.</p>
                    </div>
                </div>
                <div className='space-y-6 flex flex-col items-center justify-center'>
                    <Image src="/images/glean/output-entity3.svg" width={800} height={800} alt="cards" className='drop-shadow-md rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Entities</strong></p>
                        <p className='text-center text-slate-500 max-w-[350px]'>Grouped results that come in a package of relevant information. Examples include projects, sales accounts, and people.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h2>Matching Input and Output Data</h2>
                <p>I’m not exactly sure how Glean decides what kind of data and the order of data to show based on user queries, so here is my own analysis and assumptions of the use cases based on my understanding of Glean’s product from the website: </p>
            </div>
            <div className="pt-2 grid grid-cols-3 space-x-12">
                <div className='pt-4 space-y-6 flex flex-col items-center justify-center'>
                    <Image src="/images/glean/questions.svg" width={380} height={300} alt="questions" className='drop-shadow-lg rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Questions</strong></p>
                        <ul className='text-center text-slate-500 max-w-[350px]'>
                            <li><p>Glean Assistant responses</p></li>
                            <li><p>Raw data</p></li>
                            <li><p>Entities (only Answers*)</p></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-6 flex flex-col items-center justify-center'>
                    <Image src="/images/glean/keyword-search.svg" width={800} height={800} alt="keyword searches" className='drop-shadow-lg rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Keyword searches</strong></p>
                        <ul className='text-center text-slate-500 max-w-[350px]'>
                            <li><p>Raw data</p></li>
                            <li><p>Entities</p></li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-6 flex flex-col items-center justify-center'>
                    <Image src="/images/glean/entity-search.svg" width={800} height={800} alt="cards" className='drop-shadow-lg rounded-md'/>
                    <div className='w-fit'>
                        <p className='text-center'><strong>Entity searches</strong></p>
                        <ul className='text-center text-slate-500 max-w-[350px]'>
                            <li><p>Raw data</p></li>
                            <li><p>Entities</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-slate-400'>*Answers is a Glean product, where employees can write specific answers to frequently asked questions</p>
        </div>
        <div>
        <div className="p-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">auditing</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
            </div>
            <div className="space-y-2">
                <p>now that I had a better understanding of Glean’s search result page, I wanted to go back to my users and conduct an initial usability test with Glean’s current search results page to see what they thought. I based by tests off these 4 JTBD of a search results page:</p>
                <p><strong>User Goals</strong></p>
                <ul className="list-decimal pl-4 space-y-1">
                    <li><p><strong>Converse with Assistant - </strong>users need to be able to ask follow up questions to Glean Assistant</p></li>
                    <li><p><strong>See source and evidence - </strong>users must be able to see where the search results came from, and trust that the information provided comes from credible sources</p></li>
                    <li><p><strong>Find relevant information fast - </strong>users should be able to quickly identify which is the most relevant piece of information to their query</p></li>
                    <li><p><strong>Navigate information easily - </strong>users should find it easy to navigate the information presented to them</p></li>
                    <li><p><strong>Customize search - </strong>users should be able to refine or configure what they want their search results to be with more advanced features</p></li>
                </ul>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                    <div className="flex px-2 items-center justify-center ">
                        <Image src="/images/glean/audit1.svg" width={750} height={500} alt="audit ga" className='drop-shadow-lg rounded-md'/>
                    </div>
                    <div className="flex items-center pl-20 w-[580px]">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">Converse with Assistant</h1>
                            </div>
                            <div className="">
                                <p><strong>Test #1: </strong>Write a follow up question to Glean Assistant</p>
                                <p><strong>Takeaways:</strong></p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Initial reactions involved a lot of searching and hesitation</p></li>
                                    <li><p>Users commented that the ‘Ask...’ button was really small and looked hidden away</p></li>
                                    <li><p>Users be confused whether they should click ‘New Chat’ to ask a question or to tap on the ‘Ask..’</p></li>
                                </ul>
                            </div>
                            <div className="">
                                <p><strong>Test #2: </strong>Tell me which sources Assistant used</p>
                                <p><strong>Takeaways:</strong></p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Users very easily identified the documents</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">Find relevant information fast</h1>
                            </div>
                            <div className="max-w-[550px]">
                                <p><strong>Test #3: </strong>Tell me who Sam Eve is</p>
                                <p><strong>Takeaways:</strong></p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Mostly very fast and positive responses</p></li>
                                    <li><p>Most really liked this card component and commented that it was very easy to identify information about the person</p></li>
                                    <li><p>One mentioned it felt similar to Google’s insights </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 items-center justify-center ">
                        <Image src="/images/glean/audit-relevant.svg" width={750} height={500} alt="audit relevant" className='drop-shadow-lg rounded-md'/>
                    </div>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                    <div className="flex px-2 items-center justify-center ">
                        <Image src="/images/glean/audit-navigate.svg" width={750} height={500} alt="audit navigate" className='drop-shadow-lg rounded-md'/>
                    </div>
                    <div className="flex items-center pl-20 w-[580px]">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">Navigate information easily</h1>
                            </div>
                            <div className="">
                                <p><strong>Test #4: </strong>Say you are on the product team and want to find the product quarterly goals. Point to where you would click</p>
                                <p><strong>Takeaways:</strong></p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>All users reacted initially saying they felt a bit overwhelmed by the amount of information</p></li>
                                    <li><p>All users pointed correctly to the second link</p></li>
                                    <li><p>Some users commented it was confusing to have ‘Company quarterly goals’ appear twice under two different contexts</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">Customize search</h1>
                            </div>
                            <div className="max-w-[550px]">
                                <p><strong>Test #5: </strong>Filter out for all results of type &apos;Notion&apos;</p>
                                <p><strong>Takeaways:</strong></p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Initial reactions were to use the top bar and select “what type”, but eventually succeeded</p></li>
                                    <li><p>One thought the ‘All’ was a search bar</p></li>
                                    <li><p>Some expected the filter button to be in the top right of the bar </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 items-center justify-center ">
                        <Image src="/images/glean/audit-customize.svg" width={750} height={500} alt="audit customize" className='drop-shadow-lg rounded-md'/>
                    </div>
            </div>
        </div>
        </div>

        <div className='bg-slate-900 p-20'>
            <div className="text-white space-y-1">
                <h1 className="font-bold text-3xl">defining the problem</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-72"></div>
            </div>
            <div className='py-16'>
                <Image src="/images/glean/problem-statement.svg" width={1200} height={500} alt="problem statement" className='drop-shadow-lg rounded-md'/>
            </div>
        </div>

        <div className='p-20 space-y-20'>
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">1. traditional search</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-72"></div>
            </div>
            <div className='grid grid-cols-2 space-y-1'>
                <p><strong>Problem</strong></p>
                <p><strong>Solution</strong></p>
                <p>Search results are feel overwhelming and very dense</p>
                <p>Reduce the number of features for each result item, and redesign to give more breathing space</p>
                <p>Design components were sometimes used inconsistently</p>
                <p>Create guidelines for card component, illustrating when it should be used</p>
            </div>
            <div className='space-y-3'>
                <h2>1.1 Redesigning traditional search results</h2>
                <p>to make each search item less dense and easier on the eye, I made the decision to prioritize only keeping certain features:</p>
                <ul className='list-decimal pl-4 space-y-1'>
                    <li><p><strong>verified green badge: </strong>this directly correlated with Glean’s verify feature, which meant we should keep it</p></li>
                    <li><p><strong>preview button: </strong>in all of Glean’s product demo videos, they highlight this ability to preview documents, meaning this features is something they wanted to highlight and promote to users. it previously wasn’t made visible until you hover, so given Glean seemed to market it to users, I wanted to make the feature more prominent </p></li>
                    <li><p><strong>author: </strong>as an employee looking for information, it makes sense I would want to look for who the author of the source I’m looking at is. </p></li>
                    <li><p><strong>time updated: </strong>as an employee looking for information, it makes sense I would want to see whether this document is up to date</p></li>
                    <li><p><strong>folder: </strong>document names often aren’t completely reliable (eg imagine a document called ‘Quarterly goals’, you wouldn’t be sure if it’s company quarterly goals or the Product team’s quarterly goals) hence having the folder name is useful and informative for the user</p></li>
                </ul>
                <p>this meant that the rest of the features - eg favoriting, adding the link, or the share feature - were excluded. I made this decision because I either didn’t see a place where Glean’s product would feature it (eg I didn’t see a favourites list) or it seemed like extraneous information. My solution if Glean wanted to keep these were to put it in the ‘more’ button.</p>
                <p>visually, to make it lighter, I used a lighter color for the body text, added more spacing, and positioned the alt info (author, time, folder) below the main body.</p>
                <div className='flex justify-center'>
                    <Image src="/images/glean/raw-redesigned.svg" width={850} height={500} alt="raw redesigned" className='drop-shadow-md rounded-md'/>
                </div>
            </div>
            <div className='space-y-3'>
                <h2>1.2 Guidelines for Card components</h2>
                <p>to make the user experience consistent, I wanted to establish guidelines for Entity type data, and in what scenarios they would appear. In general, my rule of thumb was that all Entity outputs would appear in a card component. for the scope of this project, I did not redesign the actual components themselves.</p>
                <div className='pt-8'>
                    <Image src="/images/glean/entity-system.svg" width={1200} height={500} alt="entity design system" className=''/>
                </div>
            </div>
        </div>

        <div className='bg-slate-100 p-20 space-y-12'>
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">2. traditional search</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-72"></div>
            </div>
            <div className='grid grid-cols-2 space-y-1'>
                <p><strong>Problem</strong></p>
                <p><strong>Solution</strong></p>
                <p>Users are confused how to ask follow up questions to Assistant</p>
                <p>Redesign Assistant to make the input field more prominent</p>
            </div>
            <div className="flex flex-row h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Decision: </strong>Make the Assistant response lay on the gray background  instead of a white card</p>
                                <p><strong>Rationale:</strong> I wanted to achieve a few things by getting rid of the white card component around the Assistant answer</p>
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Create color contrast with the follow up input field, so that the input field could stand out more</p></li>
                                    <li><p>Create stronger delineation between traditional search results and Assistant search results - grey = AI results, white = traditional search results</p></li>
                                    <li><p>Create a more immersive experience -- I’m aware that currently a lot of AI search tools are treated as ‘add-ons’ or ‘plugins’, to help and assist you. However, I wanted the AI powered chat interface to have its own independent experience, so I wanted to make it more immersive and make it feel like it was meant to be in the search results page, instead of feeling like an add on or plugin. </p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/ga-1.svg" width={675} height={600} alt="ga1" className='drop-shadow-lg rounded-md'/>
                        <p className=' text-slate-400 italic'>grey background</p>
                    </div>
            </div>
            <div className="flex flex-row h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Decision: </strong>to make the input field stand out, I made it much taller and longer so that it takes up more space. </p>
                                <p><strong>Iteration #1:</strong> in order to make the input field big and noticeable, I made the decision to get rid of the suggested questions that were initially next to the input field. </p>
                                <p>however, as I thought more about it, I struggled to reason why I should get rid of this feature beyond purely aesthetic reasons. there was value being added by having suggested questions there, and I also felt that this was a discussion meant more for product and strategy.</p>
                                <p><strong>Iteration #2:</strong> hence in iteration two, I included the suggested questions back in again, using the same visual language as the original. </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/ga-2.svg" width={675} height={600} alt="ga2" className='drop-shadow-lg rounded-md'/>
                        <p className=' text-slate-400 italic'>iteration #2</p>
                    </div>
            </div>
            <div className="flex flex-row h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Decision: </strong>added a toggle ability (chevron) to allow users to shrink the assistant when needed</p>
                                <p><strong>Rationale: </strong> so that users can navigate between the AI powered search versus traditional search results easily</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/ga-3.svg" width={675} height={600} alt="ga3" className='drop-shadow-lg rounded-md'/>
                        <p className=' text-slate-400 italic'>minimized AI search results</p>
                    </div>
            </div>
            <div className="flex flex-row h-[500px]">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Decision: </strong>keep the white bubbles for the user input in chat </p>
                                <p><strong>Rationale: </strong> so that users can navigate between the AI powered search versus traditional search results easily</p>
                                <p><strong>Decision: </strong>keep the pills that represent the AI search result’s source</p>
                                <p><strong>Rationale: </strong>  users found it very intuitive</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/final-ga-expand.svg" width={675} height={600} alt="ga4" className='drop-shadow-lg rounded-md'/>
                        <p className=' text-slate-400 italic'>expanded conversation</p>
                    </div>
            </div>
        </div>
        
        <div className='bg-slate-900 text-white p-20 space-y-16'>
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">3. customize search</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-72"></div>
            </div>
            <div className='grid grid-cols-2 space-y-1'>
                <p><strong>Problem</strong></p>
                <p><strong>Solution</strong></p>
                <p>Users are confused with the current UI on how to customize search</p>
                <p>research industry standards, identify where the root of confusion may be, and redesign the filter section </p>
            </div>
            <div className='space-y-5'>
                <p>to redesign the filter feature, I first looked to research how other people have done this. there were two observations I made:</p>
                <ul className='list-decimal pl-4 space-y-1'>
                    <li><p>the standard seemed to be put the filter feature on the left as a fixed bar</p></li>
                    <li><p>the space on the right was usually used to show “insights” or Entity type data, as shown by Google</p></li>
                </ul>
                <div className='grid grid-cols-2 gap-10'>
                    <Image src="/images/glean/competitor1.svg" width={585} height={500} alt="ecommerce" className='drop-shadow-lg rounded-md'/>
                    <Image src="/images/glean/competitor2.svg" width={600} height={500} alt="google" className='drop-shadow-lg rounded-md'/>
                </div>
            </div>
            <div className="flex flex-row ">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Iteration #1: </strong>inspired by others, I sought to redesign the entire layout of the search results page and have the filter feature to the left as a fixed menu bar. </p>
                                <p>The main reason I decided to do this was to take scalability into account. This meant in the future, if Glean wants to be able to allow users to filter their results by more than just type (eg filter by time, author, collection)</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/filter-v1.svg" width={675} height={600} alt="filterv1" className='rounded-md'/>
                    </div>
            </div>
            <div className='space-y-4'>
                <p>however, the more I thought about it, the more I realized this may not be ideal because I realized the search results page that I’d seen have a left filter bar tended to be of a different nature: they were used in ecommerce stores where users already had an idea of what they wanted, for example searching for a shoe brand in Amazon or searching for Azure cloud online courses in a limited database. </p>
                <p>Glean’s search experience was different in a sense that many times, the user can ask questions that they don’t know what kind of answers they’re looking for. hence the importance of insights and Entity type result data, where Glean’s engine can suggest packaged data and try to guess what they’re looking for. in many ways, Glean’s user experience was much more similar to Google than to an ecommerce store.</p>
            </div>
            <div className="flex flex-row ">
                    <div className="flex items-center w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Considerations: </strong>i revisited the drawing board to understand what the root cause of the confusion might be, and I came to the conclusion that it was because Glean’s search results resembled so much of Google’s, that users were expecting the same Google search results experience. and in Google search results, filters were placed in the top. Google prioritized giving the user what they thought would be the most relevant information, in this case an Entity type output, and they used the right hand space for that. </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 flex flex-col space-y-4 items-center justify-center pl-12">
                        <Image src="/images/glean/google-layout.svg" width={800} height={600} alt="google layout" className='rounded-md'/>
                    </div>
            </div>
            <div className="flex flex-row">
                    <div className="flex ">
                        <Image src="/images/glean/filter-features.svg" width={675} height={600} alt="filter feature" className='rounded-md'/>
                    </div>
                    <div className="flex items-center pl-12 w-[580px]">
                        <div className="space-y-12">
                            <div className="space-y-4 max-w-[550px]">
                                <p><strong>Iteration #2: </strong>so for iteration 2, I echoed Google’s page layout and put the filter feature in the top, where I put the ‘type’ as the first filter given it seemed to be of high importance to Glean. </p>
                                <p>then I left the space on the right for possible Entity search outputs.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className='bg-slate-100 p-20 space-y-20'>
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">final designs</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <div className='flex items-center justify-center'>
                <Image src="/images/glean/final-ga-total.svg" width={1440} height={500} alt="final ga designs" className='drop-shadow-2xl rounded-md'/>
            </div>
            <div className='flex items-center justify-center'>
                <Image src="/images/glean/final-ts-total.svg" width={1440} height={500} alt="final ts designs" className='drop-shadow-2xl rounded-md'/>
            </div>
        </div>

        <div className='p-20 space-y-10'>
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">reflection</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
            </div>
            <p>For next steps, I would conduct another usability test on these new designs, align with Product, Engineering, and Strategy teams, and iterate and revise again. As I was doing this project, I kept thinking that if I were to truly be the designer of Glean’s search, I would need to have constant alignment and discussion with the PMs and strategy team. There were a lot of decisions I made along the way that probably had much more farther reaching implications than I’d expect, such as removing the right hand filter feature, showing the preview button, and putting the Entity type outputs on the right hand side. As a designer, I’d make sure these discussions were had and the implications of each decision were fully explored before committing to them. </p>
            <p>Looking back, I think the biggest challenge was not having access to the product to play around, so my understanding of the product was limited to only a few flows and scenarios. I’d also never thought about or worked with search engine UI/UX before, so this was definitely new. Despite these challenges, it was really fun to dive deep, break apart problems, bump into walls, and problem solve given the constraints! This challenge definitely made me be much more aware and conscious of how I interact with information and how information is being presented to me. </p>
        
        </div>
    </div>
  )
}
