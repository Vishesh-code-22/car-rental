"use client";

import { useFeedback } from "@/context/FeedbackContext";
import { City, FleetSize, JobTitle, ListingStatus } from "@/lib/data";
import { Listing } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditForm = ({ listing }: { listing: Listing }) => {
    const { showMessage } = useFeedback();
    const [formData, setFormData] = useState({
        name: listing.name,
        companyName: listing.companyName,
        jobTitle: listing.jobTitle,
        fleetSize: listing.fleetSize,
        contactNumber: listing.contactNumber,
        email: listing.email,
        country: listing.country,
        city: listing.city,
        status: listing.status,
    });

    const router = useRouter();

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`/api/edit/${listing.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            showMessage("success", "Data is updated");
            router.push("/");
        } else {
            showMessage("error", "Data could not be updated");
            alert("Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-6 px-8 py-8 w-8/12 bg-white rounded-2xl shadow-2xl mx-auto mt-20">
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1 block mb-1">
                        Id:
                    </label>
                    <input
                        type="text"
                        name="id"
                        value={listing.id}
                        disabled
                        className="text-xl font-medium text-gray-800 w-full p-2 bg-gray-100 border border-gray-300 rounded cursor-not-allowed"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1 block mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1 block mb-1">
                        Company Name:
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        jobTitle:
                    </label>
                    <select
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 px-2 py-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {JobTitle.map((title) => (
                            <option key={title} value={title}>
                                {title.replace(/_/g, " ")}{" "}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        fleetSize:
                    </label>
                    <select
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 px-2 py-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {FleetSize.map((title) => (
                            <option key={title} value={title}>
                                {title.replace(/_/g, " ")}{" "}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        contactNumber:
                    </label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        country:
                    </label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        city:
                    </label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="text-xl font-medium text-gray-800 px-2 py-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {City.map((title) => (
                            <option key={title} value={title}>
                                {title.replace(/_/g, " ")}{" "}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                        status:
                    </label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        disabled
                        className="text-xl font-medium text-gray-800 px-2 py-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {ListingStatus.map((title) => (
                            <option key={title} value={title}>
                                {title.replace(/_/g, " ")}{" "}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EditForm;
