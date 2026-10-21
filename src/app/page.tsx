/* eslint-disable @next/next/no-img-element -- static export, images are pre-sized */
import {
  profile, featuredProjects, openSource, skills, education,
  summaryPoints, training, certificates, achievements, experience,
} from "@/data/profile";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Split from "@/components/Split";
import Motion from "@/components/Motion";


const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const btnPrimary = "label transition-colors duration-300 inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3.5 text-bg hover:bg-accent hover:text-white";
const btnSecondary = "label transition-colors duration-300 inline-flex items-center justify-center gap-2 rounded-full border border-fg/40 px-6 py-3.5 text-fg hover:border-fg hover:bg-fg hover:text-bg";
const wrap = "mx-auto max-w-[1320px] px-5 sm:px-8";
const arrowLi = "relative pl-6 before:absolute before:left-0 before:text-accent before:content-['→']";

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-14 py-14 md:py-24">
      <div className={wrap}>
        <div data-rule className="h-px w-full bg-line" />
        <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-12">
          <Split as="h2" id={`${id}-title`} text={title} className="display text-[clamp(2rem,5vw,4.5rem)] lg:col-span-9" />
          {intro && <p data-fade className="max-w-sm self-end text-muted lg:col-span-3">{intro}</p>}
        </div>
        <div className="mt-10 md:mt-16">{children}</div>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-[70] focus:rounded focus:bg-card focus:px-3 focus:py-2">Skip to content</a>
      <Nav resume={profile.resume} />
      <Motion />


      <main id="main">
        {/* Hero */}
        <section id="home" className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-24">
          <div className={`${wrap} w-full`}>
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">

                <h1 className="display text-[clamp(3.4rem,9.4vw,9.5rem)]">
                  <Split text="Maheshwaram" hero className="block" />
                  <Split text="Ganesh." hero className="block text-accent" />
                </h1>
              </div>
              <div className="lg:col-span-4">
                <div data-hero-photo className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-sm sm:w-72 lg:ml-auto lg:mr-0 lg:w-full lg:max-w-[340px]">
                  <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={340} height={425} className="h-full w-full object-cover grayscale-[35%]" />
                </div>
              </div>
            </div>
            <div data-rule className="mt-10 h-px w-full bg-line" />
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <p data-hero-fade className="text-xl font-medium sm:text-2xl lg:col-span-5">{profile.headline}</p>
              <p data-hero-fade className="text-muted sm:text-lg lg:col-span-4">{profile.pitch}</p>
              <div data-hero-fade className="flex flex-wrap gap-3 lg:col-span-3 lg:flex-col lg:items-end">
                <a href="#projects" data-magnetic className={btnPrimary}>View Projects <Icon name="arrowRight" className="h-4 w-4" /></a>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a href={profile.github} {...ext} data-magnetic className={btnSecondary}><Icon name="github" className="h-4 w-4" /> GitHub</a>
                  <a href={profile.linkedin} {...ext} data-magnetic className={btnSecondary}><Icon name="linkedin" className="h-4 w-4" /> LinkedIn</a>
                  <a href="#contact" data-magnetic className={btnSecondary}>Contact Me</a>
                </div>
              </div>
            </div>

          </div>
        </section>



        <Section id="about" title="Professional Summary">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p data-fade className="text-2xl leading-snug sm:text-3xl">{profile.summaryLead}</p>
              <div data-fade className="mt-8 space-y-4 text-muted sm:text-lg">
                {profile.summary.map((p) => <p key={p}>{p}</p>)}
              </div>
              <ul data-stagger className="mt-10 border-t border-line">
                {summaryPoints.map((s) => (
                  <li key={s} className="flex items-center gap-4 border-b border-line py-4">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <dl data-stagger className="grid grid-cols-2 self-start border-l border-t border-line lg:col-span-5">
              {[
                ["200+", "Problems Solved"],
                [String(openSource.length), "Merged Upstream PRs"],
                [String(certificates.length), "Certifications"],
                [String(achievements.length), "Achievements"],
              ].map(([n, l]) => (
                <div key={l} className="flex flex-col justify-between gap-6 border-b border-r border-line p-5 sm:p-7">
                  <dt className="label order-2 text-muted">{l}</dt>
                  <dd className="display order-1 text-6xl sm:text-7xl">{n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <Skills skills={skills} />
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <article key={e.role} data-fade className="grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label text-accent">{e.period}</p>
                <h3 className="display mt-3 text-4xl sm:text-5xl">{e.role}</h3>
                <p className="mt-2 flex items-center gap-2 font-medium text-muted"><Icon name="briefcase" className="h-4 w-4" />{e.org}</p>
              </div>
              <div className="lg:col-span-8">
                <ul className="space-y-3 text-muted sm:text-lg">
                  {e.points.map((pt) => <li key={pt} className={arrowLi}>{pt}</li>)}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                  {e.tags.map((t) => <li key={t} className="label rounded-full border border-line px-3 py-1 text-fg">{t}</li>)}
                </ul>
                <a href={e.link} {...ext} data-magnetic className={`${btnSecondary} mt-8`}><Icon name="github" className="h-4 w-4" /> Related repo</a>
              </div>
            </article>
          ))}
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="space-y-24 md:space-y-36">
            {featuredProjects.map((p, idx) => (
              <article key={p.name} className="group grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-7 ${idx % 2 ? "lg:order-2" : ""}`}>
                  <div data-fade className="relative aspect-[4/3] overflow-hidden rounded-sm bg-bg-alt">
                    <img data-parallax src={p.image} alt={p.imageAlt} loading="lazy"
                      className={`absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${p.image.endsWith(".svg") ? "object-center" : "object-left-top"}`} />
                  </div>
                </div>
                <div className="flex flex-col lg:col-span-5">
                  <p className="label text-muted"><span className="text-accent">{p.category}{p.period && <span className="text-muted"> · {p.period}</span>}</span></p>
                  <Split as="h3" text={p.name} className="display mt-4 text-5xl sm:text-7xl" />
                  <p data-fade className="mt-4 text-lg font-medium">{p.tagline}</p>
                  <ul data-stagger className="mt-6 space-y-3 text-[0.95rem] text-muted">
                    {p.bullets.map((b) => <li key={b} className={arrowLi}>{b}</li>)}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                    {p.tags.map((t) => <li key={t} className="label rounded-full border border-line px-3 py-1 text-fg">{t}</li>)}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={p.github} {...ext} data-magnetic className={btnSecondary}><Icon name="github" className="h-4 w-4" /> Code<span className="sr-only"> for {p.name}</span></a>
                    {p.live && <a href={p.live} {...ext} data-magnetic className={btnPrimary}>Live demo <Icon name="arrowUpRight" className="h-4 w-4" /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>


        </Section>

        <Section id="open-source" title="Open Source" intro="Merged pull requests to upstream AI and developer-tooling projects.">
          <ul data-stagger className="border-t border-line">
            {openSource.map((pr) => (
              <li key={pr.url}>
                <a href={pr.url} {...ext} className="ease-site group grid gap-2 border-b border-line py-6 hover:bg-bg-alt sm:grid-cols-12 sm:items-center sm:px-3">
                  <span className="label break-all text-muted sm:col-span-4">{pr.repo}</span>
                  <span className="text-lg font-medium sm:col-span-6">{pr.title}</span>
                  <span className="label flex items-center gap-3 text-accent sm:col-span-2 sm:justify-end">
                    Merged · {pr.merged}
                    <Icon name="arrowUpRight" className="ease-site h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="training" title="Professional Training">
          {training.map((t) => (
            <article key={t.title} data-fade className="grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label text-accent">{t.year}</p>
                <h3 className="display mt-3 text-4xl sm:text-5xl">{t.title}</h3>
                <p className="mt-2 font-medium text-muted">{t.org}</p>
              </div>
              <div className="lg:col-span-8">
                <ul className="space-y-3 text-muted sm:text-lg">
                  {t.points.map((pt) => <li key={pt} className={arrowLi}>{pt}</li>)}
                </ul>
                <a href={t.certificate} {...ext} data-magnetic className={`${btnSecondary} mt-8`}>View Certificate <Icon name="arrowUpRight" className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </Section>

        <Section id="certificates" title="Professional Certifications">
          <ul data-stagger className="border-t border-line">
            {certificates.map((c) => {
              const body = (
                <>
                  <span className="display text-3xl sm:col-span-7 sm:text-4xl">{c.title}</span>
                  <span className="text-muted sm:col-span-3">{c.issuer}</span>
                  <span className="label flex items-center gap-3 text-muted sm:col-span-2 sm:justify-end">{c.date}{c.url && <Icon name="arrowUpRight" className="h-4 w-4 text-accent" />}</span>
                </>
              );
              const cls = "ease-site grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-center sm:px-3";
              return (
                <li key={c.title}>
                  {c.url ? <a href={c.url} {...ext} className={`${cls} hover:bg-bg-alt`}>{body}</a> : <div className={cls}>{body}</div>}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements & Coding Profile">
          <div data-stagger className="grid border-l border-t border-line md:grid-cols-3">
            {achievements.map((a) => (
              <div key={a.title} className="border-b border-r border-line p-7 sm:p-9">
                <Icon name={a.icon} className="h-6 w-6 text-accent" />
                <h3 className="display mt-8 text-4xl">{a.title}</h3>
                <p className="mt-3 text-muted">{a.text}</p>
              </div>
            ))}
          </div>

        </Section>

        <Section id="education" title="Education">
          <ol data-stagger className="border-t border-line">
            {education.map((e) => (
              <li key={e.school} className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:items-baseline">
                <span className="label text-accent sm:col-span-3">{e.period}</span>
                <div className="sm:col-span-6">
                  <h3 className="display text-3xl sm:text-4xl"><Icon name={e.icon} aria-hidden className="mr-3 inline-block h-6 w-6 align-middle text-accent" />{e.degree}</h3>
                  <p className="mt-2 font-medium text-muted">{e.school}</p>
                  <p className="text-sm text-muted">{e.place}</p>
                </div>
                <span className="label sm:col-span-3 sm:text-right"><span className="rounded-full border border-line px-3 py-1 text-fg">{e.note}</span></span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" title="Get In Touch">
          <div className="grid gap-14 lg:grid-cols-12">
            <div data-fade className="lg:col-span-6">
              <h3 className="text-2xl font-medium sm:text-3xl">Let&apos;s build something exceptional.</h3>
              <p className="mt-3 text-muted sm:text-lg">I&apos;m looking for AI and software development internships. If you&apos;re building something in full-stack or GenAI, I&apos;d be glad to connect.</p>
              <a href={`mailto:${profile.email}`} className="display mt-10 block normal-case [overflow-wrap:anywhere] text-[clamp(1.35rem,2.9vw,2.6rem)] leading-none underline decoration-line decoration-1 underline-offset-8 hover:text-accent hover:decoration-accent ease-site">{profile.email}</a>
              <ul className="label mt-10 border-t border-line">
                {[
                  [profile.linkedin, "LinkedIn", "linkedin"],
                  [profile.github, "GitHub", "github"],
                ].map(([href, label, icon]) => (
                  <li key={label}><a href={href} {...ext} className="ease-site flex items-center justify-between border-b border-line py-4 hover:pl-2 hover:text-accent"><span className="flex items-center gap-3"><Icon name={icon} className="h-4 w-4" />{label}</span><Icon name="arrowUpRight" className="h-4 w-4" /></a></li>
                ))}
                <li><a href={profile.resume} download="Maheshwaram_Ganesh_Resume.pdf" className="ease-site flex items-center justify-between border-b border-line py-4 hover:pl-2 hover:text-accent"><span className="flex items-center gap-3"><Icon name="download" className="h-4 w-4" />Resume (PDF)</span><Icon name="arrowRight" className="h-4 w-4" /></a></li>
              </ul>
            </div>
            <div data-fade className="lg:col-span-5 lg:col-start-8"><ContactForm email={profile.email} /></div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className={`${wrap} overflow-hidden pt-16`}>
          <p aria-hidden className="display whitespace-nowrap text-[clamp(3rem,13.5vw,13rem)] leading-[0.8] text-fg/90">Ganesh.</p>
          <div className="label flex flex-col gap-2 border-t border-line py-6 text-muted sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {profile.name}.</p>
            <a href="#home" className="hover:text-fg">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
