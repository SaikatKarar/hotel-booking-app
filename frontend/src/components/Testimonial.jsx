import React from "react";
import { testimonials } from "../assets/assets";
import Title from "./Title";
import StarRating from "./StarRating";

function Testimonial() {
    return (
        <section className="bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 py-20">

            <Title
                title="What Our Guests Say"
                subTitle="Discover why thousands of travelers choose us for their unforgettable stays."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
                    >
                        {/* User */}
                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="text-lg font-semibold">
                                    {testimonial.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {testimonial.address}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mt-4">
                            <StarRating rating={testimonial.rating} />
                        </div>

                        {/* Review */}
                        <p className="mt-5 text-gray-500 leading-7">
                            "{testimonial.review}"
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Testimonial;