import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const token = (await cookies()).get("admin-token");
    if (!token || token.value !== "valid-token") {
        redirect("/login");
    }
    const res = await fetch(`${process.env.NEXT_BASE_URL}/api/itemView/${id}`);
    const data = await res.json();
    const listing = data.listing;

    return (
        <div className="bg-grayBg w-10/12 flex flex-col">
            <h1 className="text-4xl mx-auto font-bold text-center my-4">
                VIEW
            </h1>
            <div className="grid grid-cols-2 gap-6 px-8 py-8 w-8/12 bg-white rounded-2xl shadow-2xl mx-auto mt-20">
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        Id:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.id}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        Name:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.name}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        Company Name:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.companyName}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        jobTitle:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.jobTitle}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        fleetSize:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.fleetSize}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        contactNumber:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.contactNumber}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        email:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.email}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        country:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.country}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        city:
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.city}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
                        status::
                    </p>
                    <p className="text-xl font-medium text-gray-800">
                        {listing.status}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
