import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary.join(" "),
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px] print:mb-4">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground print:hidden">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-y-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px] print:mt-2">
              <span className="print:mt-2">
                <span className="font-semibold">Location:</span>{" "}
                {RESUME_DATA.location}
              </span>
              <div className="flex gap-x-4">
                {RESUME_DATA.contact.email ? (
                  <span>
                    <span className="font-semibold">Email:</span>{" "}
                    {RESUME_DATA.contact.email}
                  </span>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <span>
                    <span className="font-semibold">Phone:</span>{" "}
                    {RESUME_DATA.contact.tel.replace(/(\+55)(\d{2})(\d{5})(\d{4})/, "$1 ($2) $3-$4")}
                  </span>
                ) : null}
              </div>
              <div className="flex gap-x-4">
                {RESUME_DATA.contact.social.map((social) => (
                  <span key={social.name}>
                    <span className="font-semibold">{social.name}:</span>{" "}
                    {social.url.replace(/\/$/, "").split("/").pop()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar> */}
        </div>
        <div className="rounded-lg bg-muted/50 px-4 py-3 print:bg-gray-100">
          <p className="text-sm font-medium">
            <span className="font-bold text-primary">TL;DR:</span>{" "}
            <span className="text-muted-foreground">{RESUME_DATA.tldr}</span>
          </p>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Professional Summary</h2>
          <div className="space-y-4 print:space-y-2">
            {RESUME_DATA.summary.map((paragraph, index) => (
              <p key={index} className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
        <hr></hr>
        <Section className="print:break-before-page">
          <h2 className="text-xl font-bold">Core Strengths</h2>
          <div className="space-y-3">
            {RESUME_DATA.coreStrengths.map((strength) => (
              <div key={strength.title} className="text-sm">
                <p className="font-semibold">{strength.title}:</p>
                <p className="text-muted-foreground print:text-[12px]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <hr></hr>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="space-y-3">
            {RESUME_DATA.skillCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-semibold mb-1">{category.category}</h3>
                <div className="flex flex-wrap gap-1">
                  {category.items.map((skill) => (
                    <Badge className="print:text-[10px]" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
        <hr></hr>
        <Section className="print:break-before-page">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <hr></hr>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <hr></hr>
        <Section>
          <h2 className="text-xl font-bold">Licenses & Certifications</h2>
          {RESUME_DATA.licenses.map((license) => {
            return (
              <Card key={license.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {license.name}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {license.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {license.issuer} {license.credentialId && `• ID: ${license.credentialId}`}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <hr></hr>
        <Section>
          <h2 className="text-xl font-bold">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.languages.map((lang) => (
              <div key={lang.language} className="text-sm">
                <span className="font-semibold">{lang.language}:</span>{" "}
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </Section>
        <hr></hr>
        <Section className="print:break-before-page">
          <h2 className="text-xl font-bold">Achievements</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </Section>
        <hr></hr>
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Awards</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  // link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        {/* <hr></hr>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Volunteering</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.volunteerings.map((volunteering) => {
              return (
                <ProjectCard
                  key={volunteering.event}
                  title={volunteering.organization}
                  description={volunteering.description}
                  tags={volunteering.techStack}
                  link={"link" in volunteering ? volunteering.link.href : undefined}
                />
              );
            })}
          </div>
        </Section> */}
        
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
