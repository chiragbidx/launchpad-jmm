"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Circle,
  DollarSign,
  FolderKanban,
  Search,
  TrendingUp,
  Users,
  Zap,
  Contact2,
  Briefcase,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type Metric = {
  label: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
};

type OnboardingStep = {
  title: string;
  description: string;
  href: string;
  done: boolean;
};

type ActivityItem = {
  title: string;
  detail: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
};

type MockProject = {
  id: string;
  name: string;
  owner: string;
  status: string;
};

const metrics: Metric[] = [
  { label: "Total Contacts", value: "0", trend: "+0%", icon: Users, description: "vs last month" },
  { label: "Active Pipelines", value: "0", trend: "+0%", icon: FolderKanban, description: "vs last month" },
  { label: "Revenue", value: "$0", trend: "+0%", icon: DollarSign, description: "vs last month" },
  { label: "Growth Rate", value: "0%", trend: "+0%", icon: TrendingUp, description: "vs last month" },
];

const onboardingSteps: OnboardingStep[] = [
  { title: "Complete your profile", description: "Add your name and contact details.", href: "/dashboard/settings", done: false },
  { title: "Invite team members", description: "Collaborate by sending invitations.", href: "/dashboard/team", done: false },
  { title: "Set up CRM pipelines", description: "Define your lead/opportunity flows.", href: "#", done: false },
  { title: "Set up billing", description: "Add a payment method for premium.", href: "#", done: false },
];

const quickActions = [
  { label: "Invite a member", href: "/dashboard/team", icon: Users },
  { label: "Account settings", href: "/dashboard/settings", icon: Activity },
  { label: "View activity", href: "#", icon: Bell },
];

const initialMockProjects: MockProject[] = [];

function matchesQuery(query: string, ...fields: string[]): boolean {
  const q = query.toLowerCase();
  return fields.some((f) => f.toLowerCase().includes(q));
}

export function DashboardContent({ greeting, firstName }: { greeting: string; firstName: string }) {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<MockProject[]>(initialMockProjects);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<MockProject | null>(null);

  const filteredMetrics = useMemo(
    () => (query ? metrics.filter((m) => matchesQuery(query, m.label, m.value, m.description)) : metrics),
    [query]
  );

  const filteredSteps = useMemo(
    () => (query ? onboardingSteps.filter((s) => matchesQuery(query, s.title, s.description)) : onboardingSteps),
    [query]
  );

  const showMetrics = filteredMetrics.length > 0;
  const showOnboarding = filteredSteps.length > 0;
  const showCrudExample = !query || matchesQuery(query, "crud", "dialog", "modal", "project", "create", "edit");
  const noProjects = projects.length === 0;
  const noResults = !showMetrics && !showOnboarding && !showCrudExample;

  function openCreateDialog() {
    setEditingProject(null);
    setDialogOpen(true);
  }

  function openEditDialog(project: MockProject) {
    setEditingProject(project);
    setDialogOpen(true);
  }

  function handleSaveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const owner = String(formData.get("owner") ?? "").trim();
    const status = String(formData.get("status") ?? "").trim();

    if (!name || !owner || !status) return;

    if (editingProject) {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === editingProject.id
            ? { ...project, name, owner, status }
            : project
        )
      );
    } else {
      setProjects((prev) => [{ id: `p-${Date.now()}`, name, owner, status }, ...prev]);
    }

    setDialogOpen(false);
  }

  return (
    <>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {greeting}, {firstName}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome to your ClientPilot dashboard. Start by adding contacts, inviting your team or setting up your first workflow.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-1.5"
                  disabled={action.href === "#"}
                >
                  <Link href={action.href}>
                    <Icon className="size-3.5" />
                    <span className="hidden sm:inline">{action.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search dashboard (e.g. Contacts, Team, Projects)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-10 bg-muted/50 border-muted-foreground/15 focus-visible:border-border focus-visible:bg-background"
          />
        </div>
      </div>

      {noResults && (
        <Card className="mb-8">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="size-10 text-muted-foreground/30 mb-3" />
            <p className="text-sm font-medium">No results found</p>
            <p className="text-xs text-muted-foreground mt-1">
              Try a different search term, or clear filters.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Metric cards */}
      {showMetrics && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filteredMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardDescription className="text-sm font-medium">{metric.label}</CardDescription>
                  <div className="rounded-md bg-muted p-2">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold tracking-tight">{metric.value}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Badge
                      variant="secondary"
                      className="rounded-md px-1.5 py-0 text-xs font-medium text-emerald-700 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/15 border-0"
                    >
                      {metric.trend}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{metric.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Onboarding steps */}
      {showOnboarding && (
        <div className="mb-8 grid gap-6 w-full max-w-2xl mx-auto">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Getting Started</CardTitle>
                <Badge variant="outline" className="text-xs">
                  0 / {onboardingSteps.length}
                </Badge>
              </div>
              <CardDescription>
                Let’s get your CRM running. All features are live and production-ready.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {filteredSteps.map((step) => (
                <Link
                  key={step.title}
                  href={step.href}
                  className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                >
                  {step.done ? (
                    <CheckCircle2 className="size-[18px] shrink-0 text-emerald-500" />
                  ) : (
                    <Circle className="size-[18px] shrink-0 text-muted-foreground/40" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-none">{step.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Projects/records empty state */}
      {showCrudExample && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-base">Your Records</CardTitle>
                  <CardDescription>
                    You can add “Projects,” “Accounts,” or other records for your CRM below.
                  </CardDescription>
                </div>
                <Button size="sm" onClick={openCreateDialog}>
                  Add Record
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {noProjects ? (
                <div className="flex flex-col gap-4 items-center py-8">
                  <Contact2 className="size-10 text-muted-foreground/30" />
                  <span className="text-sm text-muted-foreground">
                    Nothing here yet. Click &quot;Add Record&quot; to get started with your first CRM project or workflow!
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between rounded-md border border-border/70 p-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{project.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Owner: {project.owner} • Status: {project.status}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(project)}
                      >
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? "Edit Record" : "Add Record"}
                </DialogTitle>
                <DialogDescription>
                  This is demo data in local component state. Connect real data models to make this section actionable for your organization.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Name</Label>
                  <Input
                    id="project-name"
                    name="name"
                    defaultValue={editingProject?.name ?? ""}
                    placeholder="Q4 Pipeline"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-owner">Owner</Label>
                  <Input
                    id="project-owner"
                    name="owner"
                    defaultValue={editingProject?.owner ?? ""}
                    placeholder="Ava"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-status">Status</Label>
                  <Input
                    id="project-status"
                    name="status"
                    defaultValue={editingProject?.status ?? "Draft"}
                    placeholder="Draft"
                    required
                  />
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? "Save changes" : "Add"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}