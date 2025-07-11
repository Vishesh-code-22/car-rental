import ListingCards from "@/components/ListingCards";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) => {
    const token = (await cookies()).get("admin-token");
    if (!token || token.value !== "valid-token") {
        redirect("/login");
    }
    const { page } = await searchParams;
    const pageNum = Number(page || 1);
    const res = await fetch(
        `${process.env.NEXT_BASE_URL}/api/listings?page=${pageNum}&listType=pending`,
        {
            headers: {
                Cookie: `admin-token=${token.value}`,
            },
            cache: "no-store",
        }
    );
    const listings = await res.json();

    return (
        <div className="bg-grayBg w-10/12 flex flex-col">
            <h1 className="text-4xl mx-auto font-bold text-center my-4">
                LISTINGS
            </h1>
            <ListingCards listings={listings.data} />
            {listings.total > 10 && (
                <div className="flex w-full px-8 mt-4 gap-2">
                    {pageNum > 1 && (
                        <Link
                            href={`/?page=${pageNum - 1}`}
                            className="px-4 py-1 rounded-md bg-gray-900 hover:bg-gray-800 text-white flex items-center"
                        >
                            <ArrowLeft className="h-5" />
                            Prev
                        </Link>
                    )}
                    {pageNum < 2 && (
                        <Link
                            href={`/?page=${pageNum + 1}`}
                            className="px-4 py-1 rounded-md bg-gray-900 hover:bg-gray-800 text-white flex items-center"
                        >
                            Next
                            <ArrowRight className="h-5" />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default page;
