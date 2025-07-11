"use client";

import { useFeedback } from "@/context/FeedbackContext";

const FeedbackBox = () => {
    const { message, type } = useFeedback();

    if (!message || !type) return null;

    const colors = {
        success: "bg-green-500",
        error: "bg-red-500",
    };

    return (
        <div
            className={`fixed top-4 right-4 px-4 py-2 rounded text-white shadow-lg ${colors[type]}`}
        >
            {message}
        </div>
    );
};

export default FeedbackBox;
