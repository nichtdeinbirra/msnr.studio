"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { site } from "@/content/site";
import { HeroVisual } from "./HeroVisual";
import { ButtonLink, Container } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const words = site.hero.headline.split(" ");

  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="relative flex min-h-dvh flex-col overflow-hidden pt-28 md:pt-36 [--spot-x:72%] [--spot-y:40%]"
    >
      {/* Grid that lights up around the cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgb(248_249_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(248_249_255/0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_420px_at_var(--spot-x)_var(--spot-y),black,transparent)]"
      />

      <Container className="relative flex flex-1 flex-col">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-between border-b border-line pb-5"
        >
          <p className="eyebrow">{site.positioning}</p>
          <p className="eyebrow hidden sm:block">Design & Vibecoding</p>
        </m.div>

        <div className="relative grid flex-1 items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <h1 id="hero-title" className="display relative z-10 text-[clamp(3.25rem,10vw,10rem)] lg:col-span-9">
            <span className="sr-only">{site.hero.headline}</span>
            <span aria-hidden="true">
              {words.map((word, i) => (
                <Fragment key={i}>
                  <span className="inline-block overflow-hidden pb-[0.08em] align-top">
                    <m.span
                      className={`inline-block ${i === words.length - 1 ? "text-muted" : ""}`}
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.1, delay: 0.15 + i * 0.07, ease }}
                    >
                      {word}
                    </m.span>
                  </span>
                  {i < words.length - 1 && " "}
                </Fragment>
              ))}
            </span>
          </h1>

          <div className="mx-auto w-3/5 max-w-sm sm:w-2/5 lg:absolute lg:right-0 lg:top-1/2 lg:w-[30%] lg:max-w-[440px] lg:-translate-y-1/2">
            <HeroVisual />
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="grid gap-8 border-t border-line py-8 md:grid-cols-12 md:items-end md:py-10"
        >
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-6 md:text-xl">
            {site.hero.intro}
          </p>
          <div className="flex items-center gap-6 md:col-span-6 md:justify-end">
            <ButtonLink href={site.hero.cta.href}>{site.hero.cta.label}</ButtonLink>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
