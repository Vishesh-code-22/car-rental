"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type FeedbackType = "success" | "error" | null;

type FeedbackContextType = {
    message: string;
    type: FeedbackType;
    showMessage: (type: FeedbackType, message: string) => void;
    clearMessage: () => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(
    undefined
);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState("");
    const [type, setType] = useState<FeedbackType>(null);

    const showMessage = (type: FeedbackType, message: string) => {
        setType(type);
        setMessage(message);
        setTimeout(() => clearMessage(), 3000);
    };

    const clearMessage = () => {
        setType(null);
        setMessage("");
    };

    return (
        <FeedbackContext.Provider
            value={{ message, type, showMessage, clearMessage }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => {
    const context = useContext(FeedbackContext);
    if (!context)
        throw new Error("useFeedback must be used within FeedbackProvider");
    return context;
};
