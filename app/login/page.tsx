"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const userLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            router.push("/");
        } else {
            alert("Wrong password or email");
        }
    };
    return (
        <div className="w-screen h-screen bg-grayBg flex justify-center items-center">
            <form
                onSubmit={userLogin}
                className="bg-white flex flex-col p-10 rounded-xl w-4/12 border-primaryOrange border"
            >
                <img
                    src="/one-logo.svg"
                    alt="brand logo"
                    className="h-6 mb-8"
                />
                <label htmlFor="email" className="text-2xl font-semibold mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded px-3 py-2 bg-gray-50 focus:outline-none focus:border-blue-500 mb-6"
                />
                <label
                    htmlFor="password"
                    className="text-2xl font-semibold mb-2"
                >
                    Password:
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded px-3 py-2 bg-gray-50  focus:outline-none focus:border-blue-500 mb-5"
                />
                <button
                    type="submit"
                    className="px-3 py-2 text-xl rounded-md w-4/12 mx-auto bg-primaryOrange hover:bg-hoverGray text-white"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
