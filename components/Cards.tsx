"use client";

import { Listing, ListingStatus } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

type CardProps = {
    listing: Listing;
    onStatusUpdated: (id: string) => void;
};

const Card = ({ listing, onStatusUpdated }: CardProps) => {
    const [selectStatus, setSelectStatus] = useState<ListingStatus>(
        listing.status
    );
    return (
        <div className="flex p-4 bg-white shadow-lg hover:shadow-orange-200 duration-100 rounded-lg text-xl">
            <p className="pr-2 w-8">{listing.id}</p>
            <h2 className="font-semibold pr-6 w-52">{listing.name}</h2>
            <p className="pr-6 w-52">{listing.companyName}</p>
            <p className="pr-6 w-52">{listing.fleetSize}</p>
            <select
                value={selectStatus}
                onChange={(e) =>
                    setSelectStatus(e.target.value as ListingStatus)
                }
                disabled={listing.status !== "pending"}
                className={`ml-52 text-black text-base font-medium border border-gray-300 rounded-md px-4 py-1 ${
                    listing.status !== "pending" ? "bg-gray-50" : "bg-white"
                } shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 hover:bg-gray-50 transition-colors duration-200`}
            >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>
            <Link
                href={`/viewItem/${listing.id}`}
                className="ml-12 bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white rounded-md duration-150"
            >
                View
            </Link>
            {listing.status === "pending" ? (
                <Link
                    href={`/editItem/${listing.id}`}
                    className="ml-12 bg-yellow-500 hover:bg-yellow-600 px-3 py-1 text-white rounded-md duration-150"
                >
                    Edit
                </Link>
            ) : (
                <span className="ml-12 bg-gray-300 px-3 py-1 text-white rounded-md duration-150">
                    Edit
                </span>
            )}
            <button
                disabled={listing.status !== "pending"}
                onClick={async () => {
                    if (selectStatus === "pending") {
                        alert(
                            "Select either 'Approved' or 'Rejected' on submit"
                        );
                        return;
                    }

                    try {
                        const res = await fetch(
                            `/api/setStatus/${listing.id}`,
                            {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ status: selectStatus }),
                            }
                        );
                        if (res.ok) {
                            onStatusUpdated(listing.id);
                        }
                    } catch (err) {
                        console.error(err);
                        alert("Something went wrong");
                    }
                }}
                className={`ml-12 ${
                    listing.status !== "pending"
                        ? "bg-gray-300"
                        : "bg-green-500 hover:bg-green-600"
                }  px-3 py-1 text-white rounded-md duration-150`}
            >
                Done
            </button>
        </div>
    );
};

export default Card;
