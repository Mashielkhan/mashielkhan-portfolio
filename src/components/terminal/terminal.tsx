"use client";

import * as React from "react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

type Command = {
  command: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState<Command[]>([
    { command: "", output: "Welcome to Mashiel's terminal. Type 'help' for a list of commands." }
  ]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    let output: React.ReactNode;

    switch (command) {
      case "help":
        output = "Commands: help, about, skills, projects, open <slug>, github, resume, contact, clear";
        break;
      case "about":
        output = site.description;
        break;
      case "skills":
        output = "Check out the Skills section on the page for a detailed breakdown.";
        break;
      case "projects":
        output = projects.map(p => p.title).join(", ");
        break;
      case "open":
        const project = projects.find(p => p.slug === args[0]);
        if (project) {
          window.open(project.links?.code || project.links?.demo || "#", "_blank");
          output = `Opening ${project.title}...`;
        } else {
          output = "Project not found.";
        }
        break;
      case "github":
        window.open(site.socials.github, "_blank");
        output = "Opening GitHub...";
        break;
      case "resume":
        window.open("/resume.pdf", "_blank");
        output = "Opening Resume...";
        break;
      case "contact":
        output = `Email me at ${site.email}`;
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        output = "Unknown command. Type 'help' for a list of commands.";
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="font-mono text-small bg-bg-2 p-4 rounded-card border border-border h-64 flex flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2">
        {history.map((h, i) => (
          <div key={i}>
            <div className="text-accent-500">$ {h.command}</div>
            <div className="text-text-2">{h.output}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex pt-2 border-t border-border-subtle">
        <span className="text-accent-500 mr-2">$</span>
        <input
          ref={inputRef}
          className="flex-1 bg-transparent outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
