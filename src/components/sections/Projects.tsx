import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";
import { ProjectCard } from "../ProjectCard";
import { projects, projectsIntro } from "@/content/site";

export function Projects() {
  return (
    <Section id="projects" bordered>
      <SectionHeading
        kicker="Projects"
        title="Where the data meets the build."
        intro={projectsIntro}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={(i % 2) * 70}
          />
        ))}
      </div>
    </Section>
  );
}
