import Navbar from "@/components/Navbar";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="flex w-full h-screen">
            <Navbar />
            {children}
        </main>
    );
};

export default layout;
