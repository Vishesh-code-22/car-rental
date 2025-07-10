import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditForm from "@/components/EditForm";

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
            <EditForm listing={listing} />
        </div>
    );
};

export default page;
