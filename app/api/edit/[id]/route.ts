import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    try {
        const data = await req.json();

        const updated = await prisma.listing.update({
            where: { id },
            data: {
                name: data.name,
                companyName: data.companyName,
                jobTitle: data.jobTitle,
                fleetSize: data.fleetSize,
                contactNumber: data.contactNumber,
                email: data.email,
                country: data.country,
                city: data.city,
                status: data.status,
            },
        });

        return NextResponse.json({ success: true, listing: updated });
    } catch (error) {
        console.error("Failed to edit your listing:", error);
        return NextResponse.json(
            { error: "Failed to edit your listing" },
            { status: 500 }
        );
    }
}
