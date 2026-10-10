import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export const metadata = { title: "Page not found" };

export default function NotFound() {
    return (
        <section className="py-24">
            <Container size="copy">
                <p className="font-mono text-label uppercase text-text-3">404</p>
                <h1 className="mt-3 text-h1 text-balance">This page doesn&apos;t exist.</h1>
                <p className="mt-4 text-body-lg text-text-2">The link may be broken, or the page may have moved.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                        <Link href="/">Go Home</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/projects">View projects</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}