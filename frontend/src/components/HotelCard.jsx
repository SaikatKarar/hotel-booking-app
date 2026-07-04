import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function HotelCard({ room, index }) {
    return (
        <Link
            to={`/rooms/${room._id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
        >
            <div className="relative overflow-hidden">

                <img
                    src={room.images[0]}
                    alt={room.hotel.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {index % 2 === 0 && (
                    <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold">
                        Best Seller
                    </span>
                )}
            </div>

            <div className="p-5">

                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                        {room.hotel.name}
                    </h3>

                    <div className="flex items-center gap-1">
                        <img
                            src={assets.starIconFilled}
                            className="w-4"
                            alt=""
                        />
                        <span>4.5</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 mt-3">
                    <img
                        src={assets.locationIcon}
                        className="w-4"
                        alt=""
                    />
                    <p className="text-sm">
                        {room.hotel.address}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <p>
                        <span className="text-2xl font-bold text-gray-900">
                            ${room.pricePerNight}
                        </span>
                        <span className="text-gray-500"> / night</span>
                    </p>

                    <button className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
                        Book Now
                    </button>
                </div>

            </div>
        </Link>
    );
}

export default HotelCard;