"use client";

import { useRef, useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await subscribeToNewsletter(formData);

        if (result.success) {
            setStatus("success");
            setMessage(result.message || "Thanks for subscribing!");
            formRef.current?.reset();
        } else {
            setStatus("error");
            setMessage(result.error || "Something went wrong.");
        }
    }

    if (status === "success") {
        return (
            <div className="flex items-center justify-center gap-2 py-3 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{message}</span>
            </div>
        );
    }

    return (
        <form ref={formRef} action={handleSubmit} className="w-full">
            <div className="flex gap-3">
                <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-400" />
                    <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-royal-300 focus:border-gold-400"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-gold-500 hover:bg-gold-600 text-royal-900 font-semibold whitespace-nowrap"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        "Subscribe"
                    )}
                </Button>
            </div>
            {status === "error" && (
                <p className="text-red-400 text-sm mt-2">{message}</p>
            )}
        </form>
    );
}
