import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-16 md:pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster />
        </>
    );
}
