import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets, roomsDummyData, facilityIcons } from "../assets/assets";
import Title from "../components/Title";
import StarRating from "../components/StarRating";

function AllRooms() {
    const navigate = useNavigate();
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedSort, setSelectedSort] = useState("");

    // Define filter options
    const filterOptions = [
        "Single Bed",
        "Family Suite",
        "Double Bed",
        "Luxury Room"
    ];

    const priceRanges = [
        { label: "$50 to $100", min: 50, max: 100 },
        { label: "$100 to $150", min: 100, max: 150 },
        { label: "$150 to $250", min: 150, max: 250 }
    ];

    const sortOptions = [
        { label: "Price Low to High", value: "price-asc" },
        { label: "Price High to Low", value: "price-desc" },
        { label: "Newest First", value: "newest" }
    ];

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Handle filter checkbox changes
    const handleFilterChange = (filter) => {
        setSelectedFilters(prev =>
            prev.includes(filter)
                ? prev.filter(item => item !== filter)
                : [...prev, filter]
        );
        scrollToTop();
    };

    // Handle price checkbox changes
    const handlePriceChange = (priceRange) => {
        setSelectedPrices(prev =>
            prev.includes(priceRange)
                ? prev.filter(item => item !== priceRange)
                : [...prev, priceRange]
        );
        scrollToTop();
    };

    // Handle sort change (radio buttons)
    const handleSortChange = (sortValue) => {
        setSelectedSort(sortValue === selectedSort ? "" : sortValue);
        scrollToTop();
    };

    // Clear all filters
    const clearAllFilters = () => {
        setSelectedFilters([]);
        setSelectedPrices([]);
        setSelectedSort("");
        scrollToTop();
    };

    // Filter and sort rooms
    const filteredRooms = useMemo(() => {
        let filtered = [...roomsDummyData];

        // Filter by amenities
        if (selectedFilters.length > 0) {
            filtered = filtered.filter(room =>
                selectedFilters.some(filter =>
                    room.amenities.includes(filter) ||
                    room.roomType?.includes(filter)
                )
            );
        }

        // Filter by price range
        if (selectedPrices.length > 0) {
            filtered = filtered.filter(room => {
                return selectedPrices.some(priceRange => {
                    const [min, max] = priceRange.replace(/[^0-9.]/g, '').split(' to ').map(Number);
                    return room.pricePerNight >= min && room.pricePerNight <= max;
                });
            });
        }

        // Sort
        if (selectedSort) {
            switch (selectedSort) {
                case "price-asc":
                    filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
                    break;
                case "price-desc":
                    filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
                    break;
                case "newest":
                    // Assuming there's a createdAt or similar field
                    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
                default:
                    break;
            }
        }

        return filtered;
    }, [selectedFilters, selectedPrices, selectedSort]);

    return (
        <section className="pt-28 md:pt-36 px-6 md:px-16 lg:px-24 xl:px-32 mb-12">
            <div className="flex flex-col lg:flex-row gap-10">

                {/* Left Content */}
                <div className="flex-1">

                    <Title
                        align="left"
                        title="Hotel Rooms"
                        subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                    />

                    {/* Results count */}
                    <p className="text-gray-600 mt-4 mb-6">
                        Showing {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'}
                    </p>

                    <div className="mt-6 space-y-8">
                        {filteredRooms.length > 0 ? (
                            filteredRooms.map((room) => (
                                <div
                                    key={room._id}
                                    className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                                >
                                    {/* Image */}
                                    <img
                                        onClick={() => {
                                            navigate(`/rooms/${room._id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                        src={room.images[0]}
                                        alt={room.hotel.name}
                                        title="View Room Details"
                                        className="w-full md:w-1/2 h-64 object-cover rounded-xl cursor-pointer"
                                    />

                                    {/* Content */}
                                    <div className="md:w-1/2 flex flex-col">

                                        <p className="text-sm text-gray-500">
                                            {room.hotel.city}
                                        </p>

                                        <h2
                                            onClick={() => {
                                                navigate(`/rooms/${room._id}`);
                                                window.scrollTo(0, 0);
                                            }}
                                            className="text-3xl font-playfair text-gray-800 cursor-pointer hover:text-gray-600 transition mt-1"
                                        >
                                            {room.hotel.name}
                                        </h2>

                                        <div className="flex items-center mt-3">
                                            <StarRating rating={room.rating || 4} />
                                            <span className="ml-2 text-sm text-gray-500">
                                                {room.reviewCount || 200}+ Reviews
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-500 mt-3">
                                            <img
                                                src={assets.locationIcon}
                                                alt="location"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm">
                                                {room.hotel.address}
                                            </span>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-4 mt-6">
                                            {room.amenities.slice(0, 4).map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center border rounded-lg px-3 py-2"
                                                >
                                                    <img
                                                        src={facilityIcons[item]}
                                                        alt={item}
                                                        className="w-5 h-5"
                                                    />
                                                    <p className="text-xs mt-1">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center justify-between mt-8">
                                            <p className="text-gray-600">
                                                <span className="text-3xl font-semibold text-gray-900">
                                                    ${room.pricePerNight}
                                                </span>{" "}
                                                /night
                                            </p>

                                            <button
                                                onClick={() => {
                                                    navigate(`/rooms/${room._id}`);
                                                    window.scrollTo(0, 0);
                                                }}
                                                className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
                                            >
                                                View Details
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-gray-50 rounded-xl">
                                <p className="text-xl text-gray-600">No rooms match your filters</p>
                                <button
                                    onClick={clearAllFilters}
                                    className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Sidebar (Filters) */}
                <aside className="w-full lg:w-[300px] border border-gray-200 rounded-sm bg-white h-fit sticky top-32">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                        <h2 className="text-2xl font-medium text-gray-800 uppercase">
                            Filters
                        </h2>

                        <button
                            onClick={clearAllFilters}
                            className="text-sm text-gray-400 hover:text-gray-700 transition"
                        >
                            CLEAR
                        </button>
                    </div>

                    <div className="p-6 space-y-10">

                        {/* Popular Filters */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-5">
                                Popular filters
                            </h3>

                            <div className="space-y-4">
                                {filterOptions.map((item) => (
                                    <label
                                        key={item}
                                        className="flex items-center gap-3 cursor-pointer hover:text-gray-700"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.includes(item)}
                                            onChange={() => handleFilterChange(item)}
                                            className="w-5 h-5 border-gray-300 rounded accent-gray-600"
                                        />
                                        <span className="text-gray-500">
                                            {item}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-5">
                                Price
                            </h3>

                            <div className="space-y-4">
                                {priceRanges.map((price) => (
                                    <label
                                        key={price.label}
                                        className="flex items-center gap-3 cursor-pointer hover:text-gray-700"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedPrices.includes(price.label)}
                                            onChange={() => handlePriceChange(price.label)}
                                            className="w-5 h-5 border-gray-300 rounded accent-gray-600"
                                        />
                                        <span className="text-gray-500">
                                            {price.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-5">
                                Sort By
                            </h3>

                            <div className="space-y-4">
                                {sortOptions.map((sort) => (
                                    <label
                                        key={sort.value}
                                        className="flex items-center gap-3 cursor-pointer hover:text-gray-700"
                                    >
                                        <input
                                            type="radio"
                                            name="sort"
                                            checked={selectedSort === sort.value}
                                            onChange={() => handleSortChange(sort.value)}
                                            className="w-5 h-5 border-gray-300 accent-gray-600"
                                        />
                                        <span className="text-gray-500">
                                            {sort.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Active filters summary */}
                        {(selectedFilters.length > 0 || selectedPrices.length > 0 || selectedSort) && (
                            <div className="pt-4 border-t border-gray-200">
                                <h4 className="text-sm font-medium text-gray-600 mb-3">
                                    Active Filters:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedFilters.map(filter => (
                                        <span
                                            key={filter}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                                            onClick={() => handleFilterChange(filter)}
                                        >
                                            {filter} ✕
                                        </span>
                                    ))}
                                    {selectedPrices.map(price => (
                                        <span
                                            key={price}
                                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full cursor-pointer hover:bg-green-200"
                                            onClick={() => handlePriceChange(price)}
                                        >
                                            {price} ✕
                                        </span>
                                    ))}
                                    {selectedSort && (
                                        <span
                                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full cursor-pointer hover:bg-purple-200"
                                            onClick={() => {
                                                setSelectedSort("");
                                                scrollToTop();
                                            }}
                                        >
                                            {sortOptions.find(s => s.value === selectedSort)?.label} ✕
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </aside>

            </div>
        </section>
    );
}

export default AllRooms;