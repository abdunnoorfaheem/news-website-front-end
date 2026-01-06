import React, { useState } from 'react';
import Container from '../Container';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import Inter from "/src/assets/inter.avif";
import Coach from "/src/assets/coach.avif";
import BFF from "/src/assets/bff.avif";
import CEO from "/src/assets/ceo.avif";


const newsData = [
    {
        id: 1,
        title: "Inter Milan reclaim Serie",
        desc: "Inter Milan returned to the top of Serie A after a 3-1 win over Bologna at the San Siro on Sunday.",
        category: "Sports",
        date: "Jan 5, 2026",
        img: Inter,
    },
    {
        id: 2,
        title: "Chelsea announce new coach",
        desc: "Chelsea confirmed on Tuesday that Liam Rosenior will be their new head coach on a six-year deal.",
        category: "Sports",
        date: "Jan 6, 2026",
        img: Coach,
    },
    {
        id: 3,
        title: "Maldives invite for BD",
        desc: "The Football Association of Maldives has invited the Bangladesh Football Federation.",
        category: "Sports",
        date: "Jan 5, 2026",
        img: BFF,
    },
    
    {
        id: 4,
        title: "Microsoft CEO says to move past AI 'slop' debate",
        desc: "Microsoft CEO Satya Nadella said 2026 should mark a turning point away from the slop versus sophistication debate, urging the tech industry to stop arguing over AI output quality and focus instead on delivering real benefits in everyday life.",
        category: "Technology",
        date: "Jan 4, 2026",
        img: CEO,
    },
];

const FeaturedNews = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");


    const filteredNews = newsData.filter((item) => {
        const matchSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.desc.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "All" || item.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <>
            <section>
                <Container>
                    <div className="mb-6">
                        <div className="bg-[url('/src/assets/featuredImg.avif')] h-185 bg-cover bg-no-repeat bg-center relative">
                            <div className="absolute inset-0 bg-black/40 md:pl-12 px-3">
                                <h3 className="text-white text-4xl font-bold font-playfairDisplay pt-80">
                                    Man City's Gvardiol out with broken leg
                                </h3>
                                <p className="font-merriweather text-white md:w-[550px] my-4">
                                    Manchester City have confirmed defender Josko Gvardiol suffered a broken leg in Sunday's 1-1 draw.
                                </p>
                                <Link to="/newsDetails">
                                    <button className="text-white font-merriweather bg-sky-800 px-8 py-2 rounded-2xl">
                                        Read More..
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="mt-5 md:flex justify-between">
                        <div className="shadow px-5 md:w-[30%] py-4">
                            <div className="flex items-center gap-x-6 mb-5">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="border w-full rounded-full pl-4 pr-10 py-2 text-sm outline-none"
                                    />
                                    <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-blue-500" />
                                </div>
                            </div>

                            <select
                                className="border-2 w-full mb-6 rounded-2xl py-1"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Sports" selected>Sports</option>
                                <option value="Technology">Technology</option>
                                <option value="Business">Business</option>
                            </select>

                            <h3 className="text-xl font-bold py-3">Trending Now</h3>

                            <div className="shadow px-4 py-3 mb-4">
                                <h4 className="text-[18px] font-medium font-playfairDisplay">
                                    Real teenager Endrick targets Brazil return..
                                </h4>
                                <h5>Jan 4, 2026</h5>
                            </div>

                            <div className="shadow px-4 py-3">
                                <h4 className="text-[18px] font-medium font-playfairDisplay">
                                    Cameroon again overcoming adversity..
                                </h4>
                                <h5>Jan 5, 2026</h5>
                            </div>
                        </div>

                        {/* News Cards */}
                        <div className="md:w-[68%] md:flex justify-between flex-wrap gap-4">

                            {filteredNews.length > 0 ? (
                                filteredNews.map((item) => (
                                    <div
                                        key={item.id}
                                        className="shadow-lg md:w-[32%] px-5 py-3 rounded-2xl"
                                    >
                                        <Image imgSrc={item.img} className="w-full" />

                                        <h3 className="py-3 text-xl font-bold font-playfairDisplay">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500 py-3">
                                            {item.desc}
                                        </p>

                                        <div className="flex gap-x-6">
                                            <h6 className="bg-sky-800 px-2 text-white">
                                                {item.category}
                                            </h6>
                                            <h5>{item.date}</h5>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 w-full">
                                    Not Found
                                </p>
                            )}

                        </div>
                    </div>

                </Container>
            </section>
        </>
    );
};

export default FeaturedNews;
