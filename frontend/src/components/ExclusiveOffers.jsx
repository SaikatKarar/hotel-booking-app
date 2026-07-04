import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";

function ExclusiveOffers() {
    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">

            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                <Title
                    align="left"
                    title="Exclusive Offers"
                    subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                />

                <button className="group flex items-center gap-2 text-sm font-medium cursor-pointer">
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow"
                        className="w-4 group-hover:translate-x-1 transition"
                    />
                </button>
            </div>

            {/* Offers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className="group relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-6 text-white bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                        {/* Discount Badge */}
                        <span className="absolute top-5 left-5 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full z-10">
                            {item.priceOff}% OFF
                        </span>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-100 mt-2">
                                {item.description}
                            </p>

                            <p className="text-sm mt-3">
                                Expires {item.expiryDate}
                            </p>

                            <button className="group mt-5 flex items-center gap-2 font-medium">
                                View Offers

                                <img
                                    src={assets.arrowIcon}
                                    alt="arrow"
                                    className="w-4 invert group-hover:translate-x-1 transition"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default ExclusiveOffers;