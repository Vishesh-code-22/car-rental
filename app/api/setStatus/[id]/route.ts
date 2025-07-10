import { prisma } from "@/lib/prisma";
import { ListingStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req:NextRequest, {params} : {params : { id: string }}) {
    const { id } = await params;
    console.log(id)
    const {status}: { status: ListingStatus } = await req.json();

    try {
        await prisma.listing.update({
            where: { id },
            data: { status }
        });
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Failed to update status: ", error);
        return NextResponse.json(
            {error: "Listing not found or failed to update"},
            {status: 400}
        )
    }

}