import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className="max-w-[1440px]">
        <div className="flex flex-row pl-20">
            <div className="flex items-center basis-[600px]">
                <div className="space-y-10 ">
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <Image src="/images/foodboo/foodboo-logo.svg" width={400} height={500} alt="logo" />
                        </div>
                        <div className="max-w-[450px] text-wrap">
                            <p className="font-light text-xl">designing a food truck directory app and website for Penn students</p>
                        </div>
                    </div>
                    <div className="space-x-4">
                        <Button variant="default">
                            <Link href="https://drive.google.com/file/d/1kZ-kvAz971POE9w0DGlVpqeQd-OQ8Utp/view?usp=sharing" className="font-semibold">See mobile demo</Link>
                        </Button>
                        <Button variant="secondary">
                            <Link href="https://drive.google.com/file/d/1ZiRYXMb6ipKW68PSgnrJRm_kqLT88yUZ/view?usp=sharing" className="font-semibold">See desktop demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="max-h-[625px] py-24 flex items-center justify-center">
                <Image src="/images/foodboo/foodboo-hero.svg" width={1100} height={500} alt="foodboo hero" />
            </div>
        </div>
        <div className="bg-slate-900 h-fit flex">
            <div className="flex flex-row pl-20 max-h-[780px]">
                <div className="flex items-center">
                    <div className="space-y-10">
                        <div className="space-y-12">
                            <div className="space-y-1">
                                <h1 className="font-bold text-3xl text-white">context</h1>
                                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
                            </div>
                            <div className="max-w-[512px] text-wrap text-white">
                                <p><span className="font-semibold">role:</span> <span className="font-light">lead product designer</span></p>
                                <p><span className="font-semibold">timeline:</span> <span className="font-light">Jan 2022 - Jun 2022</span></p>
                            </div>
                            <div className="max-w-[600px] text-wrap font-light text-white space-y-9">
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">the problem</h1>
                                    <p className="font-light">even with the numerous and popular food trucks around the University of Pennsylvania’s campus, there is no centralized platform to gather information about these food trucks. students never know food truck’s opening hours, menus, or payment methods, and this often leads to frustration or missed opportunities for food trucks. </p>
                                </div>
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">the solution</h1>
                                    <p className="font-light">this app aims to create a centralized directory of information for all of Penn’s food trucks to let users make an informed decision on which food truck they want to go to. i wanted to explore which types of information customers needed to make informed decisions. </p>
                                </div>
                                <div className="space-y-1">
                                    <h1 className="font-semibold text-xl">the project scope</h1>
                                    <p className="font-light">for this project, this app does not include online ordering system and payment methods, and only serves to be an informational directory.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-hidden pl-16 pb-40 flex items-center justify-center">
                    <Image src="/images/foodboo/context.svg" width={700} height={500} alt="pit context" />
                </div>
            </div>
        </div>

        <div className="pl-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">research</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
            </div>
            <div className="space-y-2">
                <p>My research was focused in 2 main areas</p>
                <ul className="list-decimal pl-4 space-y-1">
                    <li><p><strong>User experience: </strong>what was the user journey like? What were some challenges they faced on the way?</p></li>
                    <li><p><strong>Operations & payment methods: </strong>what were some operational challenges the owners faced?</p></li>
                </ul>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                    <div className="flex items-center">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">user experience</h1>
                                <p className="italic text-gray-400">key takeaways</p>
                            </div>
                            <div className="max-w-[600px]">
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Food truck customers highly value <strong>low prices</strong> and <strong>efficiency </strong>when choosing food trucks</p></li>
                                    <li><p>One of the first things customers want to know is <strong>location</strong></p></li>
                                    <li><p>Customers do not have a reliable method of receiving info about food trucks, they rely heavily on memory</p></li>
                                    <li><p>To distinguish from existing apps (e.g. Snackpass), this app should emphasize wait times</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 items-center justify-center ">
                        <Image src="/images/foodboo/surveys.png" width={750} height={500} alt="surveys" />
                    </div>
            </div>
            <div className="grid grid-cols-2 h-[500px]">
                <div className="flex items-center">
                    <Image src="/images/foodboo/diagram.png" width={600} height={500} alt="diagram"/>
                </div>
                    <div className="flex items-center">
                        <div className="space-y-8">
                            <div>
                                <h1 className="font-semibold">operations & payments</h1>
                                <p className="italic text-gray-400">key takeaways</p>
                            </div>
                            <div className="max-w-[600px]">
                                <ul className="list-decimal pl-4 space-y-2">
                                    <li><p>Customers strongly prefer cashless methods, while owners prefer cash. This presents a <strong>paradox</strong> for owners: if they lower price, they lose the value they provide to customers</p></li>
                                    <li><p>For the scope of the project, it is simpler to focus on an <strong>informational food truck directory</strong> instead of including online ordering. Online ordering includes complications regarding payment methods and operational logistics.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className="py-16 flex-row flex items-center space-x-16 justify-center">
                <div className="w-2 h-40 bg-teal-400"></div>
                <div className="text-center space-y-4 flex flex-col max-w-[600px] ">
                    <h1 className="font-bold">the problem statement</h1>
                    <p><strong>how might we...</strong> create a centralized platform providing customers with all necessary information to make informed decisions on which food truck to choose?</p>
                </div>
                <div className="w-2 h-40 bg-teal-400"></div>
            </div>
        </div>

        <div className="bg-slate-900 p-20 py-20 space-y-16">
            <div className="space-y-2">
                <div className="space-y-1">
                    <h1 className="font-bold text-3xl text-white">wireframing</h1>
                    <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-40"></div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/foodboo/wireframing-table.svg" width={1000} height={500} alt="wireframing table" />
                </div>
            </div>
            <div className="h-fit grid grid-cols-2">
                <div className="flex items-center">
                    <div className="space-y-8 text-white">
                        <div className="space-y-3 max-w-[512px] text-wrap">
                            <h1 className="font-bold text-xl"> mobile wireframes</h1>
                            <p>One of the challenges I encountered early on in wireframing was how to incorporate the price of the dish in the menu section while maintaining a way to convey a clickable button. I resorted to using parentheses (“Chicken over Rice ($8)”)  </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/images/foodboo/mob-wf.svg" width={650} height={600} alt="mob wireframes" />
                </div>
            </div>
            <div className="flex flex-row space-x-10">
                <div>
                    <Image src="/images/foodboo/desktop-wf.svg" width={800} height={800} alt="desktop wireframes" />
                </div>
                <div className="flex items-center max-w-[512px]">
                    <div className="space-y-8 text-white">
                        <div className="space-y-3 text-wrap">
                            <h1 className="font-bold text-xl"> desktop wireframes</h1>
                            <p>The main decision I made when drafting up these desktop wireframes was combining the list and map view to create a main page for desktop. This was inspired by Airbnb’s approach designing their main discovery page. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="pl-20 py-20 space-y-16">
            <div className="space-y-5">
                <div className="space-y-1">
                    <h1 className="font-bold text-3xl">usability testing</h1>
                    <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-60"></div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/images/foodboo/user-testing.svg" width={1000} height={500} alt="wireframing table" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex items-center max-w-[500px]">
                    <div className="space-y-8">
                        <div className="space-y-3 text-wrap">
                            <h1 className="font-bold text-xl"> mobile high fidelity wireframes</h1>
                            <p>For the pricing issue in the second screen (“Chicken over Rice”), I decided to use a drop shadow to demonstrate that it was a clickable button. That way, I could get rid of the parentheses and put the price on the right side.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 px-8">
                    <Image src="/images/foodboo/mob-hf-wf-3.svg" width={650} height={600} alt="mob hifi wireframe 3" className='drop-shadow-lg' />
                    <Image src="/images/foodboo/mob-hf-wf-1.svg" width={650} height={600} alt="mob hifi wireframe 1" className='drop-shadow-lg' />
                    <Image src="/images/foodboo/mob-hf-wf-2.svg" width={650} height={600} alt="mob hifi wireframe 3" className='drop-shadow-lg' />
                </div>
            </div>
            <div className="flex flex-row space-x-16">
                <div className="grid grid-cols-2 gap-6 items-center justify-center max-w-[840px]">
                    <Image src="/images/foodboo/desktop-hf-wf-1.svg" width={650} height={600} alt="desktop hifi wireframe 1" className='drop-shadow-lg' />
                    <Image src="/images/foodboo/desktop-hf-wf-2.svg" width={650} height={600} alt="desktop hifi wireframe 2" className='drop-shadow-lg' />
                </div>
                <div className="flex items-center max-w-[512px]">
                    <div className="space-y-8">
                        <div className="space-y-3 text-wrap">
                            <h1 className="font-bold text-xl"> desktop high fidelity wireframes</h1>
                            <p className="max-w-[380px]">In the menu section, I decided to use color to indicate which items were being selected. The selected items would then have a preview of what the item was and a brief description of it. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
                <h1 className="font-bold">user testing feedback</h1>
                <div className="grid grid-cols-2 gap-12 max-w-[800px]">
                        <div className="space-y-2">
                            <h2 className="font-semibold">feedback (UX)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><p>Create a saved / favourites list</p></li>
                                <li><p>Add a review and ratings section</p></li>
                                <li><p>The number on the mobile landing page is unclear that it’s wait time -- decide whether it should be wait time or distance</p></li>
                                <li><p>Mobile popup does not look clickable</p></li>
                                <li><p>Seeing owner’s name is nice, but knowing how to contact the owner is more useful</p></li>
                                <li><p>Add promotions to individual food truck pages</p></li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-semibold">feedback (UI)</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><p>Add ‘map’ option to the menu bar in desktop version</p></li>
                                <li><p>Get rid of the ‘profile’ icon in desktop, just have ‘saved list’ icon</p></li>
                                <li><p>Some images look like buttons, some buttons look like images</p></li>
                                <li><p>Text on mobile popup screen is too small</p></li>
                                <li><p>Yellow bubble in mobile menu is too distracting</p></li>
                                <li><p>Heart icon is not correspondent with ‘saved’, should have corresponding labels and icons</p></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        <div className='bg-slate-100 h-[800px] relative flex justify-center'>
            <Image src="/images/foodboo/final-mob.svg" width={1000} height={800} className="w-full object-cover" alt="final mob" />
        </div>

        <div className="pl-20 py-20 space-y-6">
            <div className="space-y-1">
                <h1 className="font-bold text-3xl">challenges</h1>
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-1.5 w-32"></div>
            </div>
            <div className='max-w-[1240px] flex items-center justify-center'>
                <table className="table-auto text-left">
                    <thead className="border-b-2">
                        <tr className="border-b">
                            <th className="px-4 py-2"><h2 className="font-semibold">challenge</h2></th>
                            <th className="px-4 py-2"><h2 className="font-semibold">steps taken</h2></th>
                            <th className="px-4 py-2"><h2 className="font-semibold">final solution</h2></th>
                        </tr>
                    </thead>
                    <tbody className='space-y-10'>
                        <tr className="border-b">
                            <td className="px-4 py-3"><p>Scope of the project: should I include online ordering & payment system?</p></td>
                            <td className="px-4 py-4"><p>Conduct user research, interview and survey people, understand the operational side of food trucks</p></td>
                            <td className="px-4 py-4"><p>Got rid of online ordering & payment, focused only on informational purpose</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>UI: how to format the menu items with their price, and make it look clickable?</p></td>
                            <td className="px-4 py-4"><p>Used the right pointing arrow to indicate clickability, but price was very awkwardly placed</p></td>
                            <td className="px-4 py-4"><p>Used drop shadow to hint at a clickable button, made each option more rounded in corners</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>Placement and function of the food truck owner icon</p></td>
                            <td className="px-4 py-4"><p>Conducted user tests on this area, found that users cared more about contact info than who the owner was, icon also didn’t look clickable </p></td>
                            <td className="px-4 py-4"><p>Got rid of owner icon, added phone number of food truck to essential info</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>Navigation on desktop website was hard when menu bar was poorly designed</p></td>
                            <td className="px-4 py-4"><p>Looked to Airbnb for inspiration, realized I shouldn’t follow them, conducted user tests and saw they weren’t able to go back to map</p></td>
                            <td className="px-4 py-4"><p>Added ‘map’ option after exiting the home page. This way, users can access the map page anytime they leave</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>Saved vs Favourites: the heart icon doesn’t reflect the label ‘saved’</p></td>
                            <td className="px-4 py-4"><p>Added a saved section, however didn’t think through the wording of the label ‘saved’ versus ‘favourites’</p></td>
                            <td className="px-4 py-4"><p>Standardized everything to ‘bookmark’ icon and named it ‘My Saved’e</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>People assumed the ‘10 min’ on mobile landing page was distance instead of wait times</p></td>
                            <td className="px-4 py-4"><p>Conducted user tests to see assumptions, re-evaluated research to see if wait times were that valuable compared to distance</p></td>
                            <td className="px-4 py-4"><p>Got rid of search bar, replaced with a drop down menu where you can decide what kind of info you want to see (distance is default)</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>Popup in the mobile interface doesn’t look clickable</p></td>
                            <td className="px-4 py-4"><p>Use drop shadow to indicate clickability, but still didn’t ‘work’ in user tests</p></td>
                            <td className="px-4 py-4"><p>Replaced menu (which was too cluttering) with a general ‘view food truck’ button</p></td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-4 py-4"><p>Addition of features like ratings/reviews and promotions on individual food truck pages</p></td>
                            <td className="px-4 py-4"><p>Did not consider to cover these features in user research, had to conduct user tests to find out about these needs</p></td>
                            <td className="px-4 py-4"><p>Drew inspiration from Yelp to add a review and current promotions section</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className='bg-slate-100 h-[1200px] relative flex justify-center'>
            <Image src="/images/foodboo/final-desktop.svg" width={1000} height={800} className="w-full object-cover" alt="final mob" />
        </div>

    </div>
    
  )
}
