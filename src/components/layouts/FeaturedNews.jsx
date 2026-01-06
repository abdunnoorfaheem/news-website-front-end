import React from 'react'
import Container from '../Container';
import Image from '../Image';
import Featured from "/src/assets/featuredImg.avif"
import { Link } from 'react-router-dom';
import Inter from "/src/assets/inter.avif"
import Coach from "/src/assets/coach.avif"
import BFF from "/src/assets/bff.avif"
import { CiSearch } from "react-icons/ci";
const FeaturedNews = () => {
    return (
        <>
            <section>
                <Container>
                    <div className=" ">
                        <div className="bg-[url('/src/assets/featuredImg.avif')] h-185 bg-cover bg-no-repeat bg-center relative">
                            <div className="md:pl-12 px-3 absolute inset-0 bg-black/40">
                                <h3 className='text-white text-4xl font-bold font-playfairDisplay pt-80'>Man City's Gvardiol out with broken leg</h3>
                                <p className='font-merriweather text-white md:w-[550px] my-4'>Manchester City have confirmed defender Josko Gvardiol suffered a broken leg in Sunday's 1-1 draw with Chelsea at the Etihad Stadium.</p>
                                <Link to={"/newsDetails"}><button className='text-white font-merriweather bg-sky-800 px-8 py-2 rounded-2xl  '>Read More..</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 md:flex justify-between ">
                        <div className="shadow px-5 md:w-[30%]">
                            <div className="flex items-center gap-x-8">
                                <div className="relative ">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="border rounded-full pl-4 pr-10 py-1 text-sm outline-none focus:border-blue-500"
                                    />
                                    <CiSearch className="absolute md:right-6 right-6 top-1/2 -translate-y-1/2 text-xl text-blue-500 cursor-pointer" />
                                </div>
                                <div className="">
                                    <select name="" id="" className='border-2'>
                                        <option value="" selected>All</option>
                                        <option value="">Sports</option>
                                        <option value="">Technology</option>
                                    </select>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold py-5'>Trending Now</h3>
                            <div className="shadow-2xl  px-5 py-4 ">
                                <h4 className='text-[18px] font-medium font-playfairDisplay'>Real teenager Endrick targets Brazil <Link><span>return..</span></Link></h4>
                                <h5>jan 4,2026</h5>
                            </div>
                            <div className="shadow-xl  px-5 py-4 mt-5">
                                <h4 className='text-[18px] font-medium font-playfairDisplay'>Cameroon again overcoming <Link><span>adversity to flourish..</span></Link></h4>
                                <h5>jan 5,2026</h5>
                            </div>
                        </div>
                        <div className="md:w-[68%] md:flex justify-between">
                            <div className="shadow-lg md:w-[32%] px-5 py-3 rounded-2xl">
                                <div className="">
                                    <Image imgSrc={Inter} className={"w-full"} />
                                </div>
                                <h3 className='py-3 text-xl font-bold font-playfairDisplay'>Inter Milan reclaim Serie</h3>
                                <p className='text-gray-500 py-3'>Inter Milan returned to the top of Serie A after a 3-1 win over Bologna at the San Siro on Sunday.</p>
                                <div className="flex gap-x-6">
                                    <h6 className='bg-sky-800 px-2 text-white'>Sports</h6>
                                    <h5>jan 5,2026</h5>
                                </div>
                            </div>
                            <div className="shadow-lg md:w-[32%] px-5 py-3 rounded-2xl">
                                <div className="">
                                    <Image imgSrc={Coach} className={"w-full"} />
                                </div>
                                <h3 className='py-3 text-xl font-bold font-playfairDisplay'>Chelsea announce   coach</h3>
                                <p className='text-gray-500 py-3'>Chelsea confirmed on Tuesday that the little-known Liam Rosenior will be their new head six-year deal. </p>
                                <div className="flex gap-x-6">
                                    <h6 className='bg-sky-800 px-2 text-white'>Sports</h6>
                                    <h5>jan 6,2026</h5>
                                </div>
                            </div>
                            <div className="shadow-lg md:w-[32%] px-5 py-3 rounded-2xl">
                                <div className="">
                                    <Image imgSrc={BFF} className={"w-full"} />
                                </div>
                                <h3 className='py-3 text-xl font-bold font-playfairDisplay'>Maldives invite for BD </h3>
                                <p className='text-gray-500 py-3'>The Football Association of Maldives (FAM) has invited the Bangladesh Football Federation (BFF) </p>
                                <div className="flex gap-x-6">
                                    <h6 className='bg-sky-800 px-2 text-white'>Sports</h6>
                                    <h5>jan 5,2026</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FeaturedNews;
