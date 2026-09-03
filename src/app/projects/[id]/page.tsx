import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project" };
  return {
    title: `${project.en.name} — ${project.en.tagline}`,
    description: project.en.overview,
    alternates: { canonical: `/projects/${id}` },
    openGraph: {
      title: `${project.en.name} | Ali Safir`,
      description: project.en.overview,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <ProjectCaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}
