import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const listType = searchParams.get("listType") as "pending" | "approved" | "rejected";
    const perPage = 10;
    const skip = (page - 1) * perPage;

    const token = req.cookies.get("admin-token");
    if (!token || token.value !== "valid-token") {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const where = listType ? { status: listType } : {};

    const listings = await prisma.listing.findMany({
        where,
        skip,
        take: perPage,
        orderBy: {
            createdAt: "desc",
        }
    })

    const total = await prisma.listing.count({where});

    return NextResponse.json({
        data: listings,
        page,
        total
    });
}