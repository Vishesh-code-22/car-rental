"use client";

import { Listing } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import Card from "./Cards";
const ListingCards = ({ listings }: { listings: Listing[] }) => {
    const [data, setData] = useState(listings);
    console.log(listings);
    useEffect(() => {
        setData(listings);
    }, [listings]);
    const removeListing = useCallback((id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return (
        <div className="flex flex-col mx-8 gap-4 ">
            {data.map((listing) => (
                <Card
                    listing={listing}
                    onStatusUpdated={removeListing}
                    key={listing.id}
                />
            ))}
        </div>
    );
};

export default ListingCards;
