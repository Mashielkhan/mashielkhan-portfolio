"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/content/projects";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const sections = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Featured Work", href: "/#featured-work" },
    { name: "Contact", href: "/#contact" },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSections = sections.filter((section) =>
    section.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = (href: string) => {
    router.push(href);
    setOpen(false);
    setSearch("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent showCloseButton={false} className="max-w-lg p-0">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>
        <input
          className="w-full bg-transparent p-4 text-h4 outline-none placeholder:text-text-4"
          placeholder="Search projects or sections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="max-h-[300px] overflow-y-auto border-t border-border-subtle p-2">
          {filteredSections.length > 0 && (
            <div className="pb-2">
              <div className="px-2 py-1 text-small text-text-3">Navigation</div>
              {filteredSections.map((s) => (
                <button
                  key={s.name}
                  onClick={() => navigate(s.href)}
                  className="w-full rounded-md px-2 py-2 text-left text-small hover:bg-bg-3"
                >
                  {s.name}
                </button>
              ))}
            </div>
          )}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 py-1 text-small text-text-3">Projects</div>
              {filteredProjects.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  className="w-full rounded-md px-2 py-2 text-left text-small hover:bg-bg-3"
                >
                  {p.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
