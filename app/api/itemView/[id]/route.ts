import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, {params} : {params : { id: string }}) {
    const { id } = await params;

    try {
        const listing = await prisma.listing.findUnique({
            where: { id }
        });

        if (!listing) {
            return NextResponse.json(
                {error: "Listing not found"},
                {status: 404}
            )
        }

        return NextResponse.json({
            success: true,
            listing: listing
        })
    } catch(error) {
        console.error('Error fetching listing:', error);
        return NextResponse.json(
            { error: 'Failed to fetch listing' },
            { status: 500 }
        );
    }
}