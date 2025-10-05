"use client";

// Error Boundary - Global error handler
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    // Log error in development
    if (process.env.NODE_ENV === "development") {
        console.error("Global error:", error);
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Something went wrong!
                </h2>
                <button onClick={() => reset()}>Try again</button>
            </div>
        </div>
    );
}
