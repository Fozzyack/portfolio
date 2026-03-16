import {
    Braces,
    Cloud,
    Code2,
    Database,
    GitBranch,
    Monitor,
    Package,
    PenTool,
    Rocket,
    Send,
    Server,
    Terminal,
    Workflow,
} from "lucide-react";
import type { ReactNode } from "react";

const iconClassName = "h-3.5 w-3.5";

export function getToolIcon(toolName: string): ReactNode | null {
    const name = toolName.toLowerCase();

    if (["golang", "python", "typescript", "javascript", "c++", "c", "c#"].includes(name)) {
        return <Code2 className={iconClassName} strokeWidth={1.75} />;
    }

    if (["next.js", "react", "tailwind css", "asp.net core", "node.js", "express", "django", "rest apis"].includes(name)) {
        return <Braces className={iconClassName} strokeWidth={1.75} />;
    }

    if (["sql", "postgresql", "supabase", "redis"].includes(name)) {
        return <Database className={iconClassName} strokeWidth={1.75} />;
    }

    if (["vercel", "google cloud", "cloud run"].includes(name)) {
        return <Cloud className={iconClassName} strokeWidth={1.75} />;
    }

    if (["docker"].includes(name)) {
        return <Package className={iconClassName} strokeWidth={1.75} />;
    }

    if (["npm", "bun", "linux", "bash"].includes(name)) {
        return <Terminal className={iconClassName} strokeWidth={1.75} />;
    }

    if (["git", "github"].includes(name)) {
        return <GitBranch className={iconClassName} strokeWidth={1.75} />;
    }

    if (["vs code"].includes(name)) {
        return <Monitor className={iconClassName} strokeWidth={1.75} />;
    }

    if (["postman"].includes(name)) {
        return <Send className={iconClassName} strokeWidth={1.75} />;
    }

    if (["figma"].includes(name)) {
        return <PenTool className={iconClassName} strokeWidth={1.75} />;
    }

    if (["ci/cd"].includes(name)) {
        return <Workflow className={iconClassName} strokeWidth={1.75} />;
    }

    if (["server", "backend"].includes(name)) {
        return <Server className={iconClassName} strokeWidth={1.75} />;
    }

    if (["deployment"].includes(name)) {
        return <Rocket className={iconClassName} strokeWidth={1.75} />;
    }

    return null;
}
