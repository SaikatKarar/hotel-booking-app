import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";



function FeaturedDestination() {
    const navigate = useNavigate();
    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">

            {/* Heading */}
            <Title
                title="Featured Destinations"
                subTitle="Discover our hand-picked hotels and luxury stays around the world."
            />

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard
                        key={room._id}
                        room={room}
                        index={index}
                    />
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-14">
                <button onClick={() => { navigate('/room'); scrollTo(0, 0) }} className="px-8 py-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition">
                    View All Destinations
                </button>
            </div>

        </section>
    );
}

export default FeaturedDestination;