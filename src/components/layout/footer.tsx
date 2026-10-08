import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Footer() {
    return (
        <footer className="border-t border-border-subtle py-10">
            <Container className="flex flex-col gap-3 text-small text-text-3 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {site.name}</p>
                <a href="#main" className="hover:text-text-1">Back to top ↑</a>
            </Container>
        </footer>
    );
}