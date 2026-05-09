"use client";

import Image from "next/image";
import Link from "next/link";
import {
  artists,
  copy,
  faqs,
  pricing,
  processSteps,
  studio,
  styles,
} from "../content";
import { useLanguage } from "../useLanguage";

const galleryItems = [
  "Blackwork geometry",
  "Fine line botanical",
  "Realism study",
  "Traditional rose",
];

export function LandingPage() {
  const { lang, setLang } = useLanguage();
  const t = copy[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90">
        <div className="flex w-full items-center justify-between gap-4 px-3 py-3 sm:px-4 lg:px-5">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center border border-[#9b2f34]/60 bg-white/[0.03] text-sm font-black tracking-[0.2em] text-white">
              NI
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block text-sm font-semibold tracking-[0.35em] text-white">
                NOIR INK
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Studio
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-zinc-400 lg:flex">
            {t.nav.map((item, index) => (
              <a
                className="transition hover:text-white"
                href={`#${t.navIds[index]}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="top-lang-switch flex items-center gap-1 sm:gap-2">
            <span className="sr-only">{t.langLabel}</span>
            {(["pl", "en"] as const).map((code) => (
              <button
                aria-pressed={lang === code}
                className={`h-9 w-10 border px-0 text-xs font-bold uppercase tracking-[0.2em] transition sm:w-auto sm:px-3 ${
                  lang === code
                    ? "border-[#a43d42] bg-[#8f252b] text-white shadow-[0_0_24px_rgba(143,37,43,0.35)]"
                    : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"
                }`}
                key={code}
                onClick={() => setLang(code)}
                type="button"
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative grid min-h-screen items-end overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8"
      >
        <Image
          alt="Dark premium tattoo studio interior"
          className="hero-image object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/noir-ink-hero.webp"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.90)_25%,rgba(5,5,5,0.50)_58%,rgba(5,5,5,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.45)_0%,rgba(5,5,5,0.15)_48%,#050505_100%)]" />
        <div className="noise-layer" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="hero-kicker mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#d46a6d]">
              {t.heroKicker}
            </p>
            <h1 className="hero-title max-w-5xl text-balance font-black uppercase leading-[0.9] tracking-normal text-white">
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/konsultacja">
                {t.book}
              </Link>
              <a className="btn-secondary" href="#portfolio">
                {t.portfolio}
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:w-72 lg:grid-cols-1">
            {t.proof.map((item) => (
              <div
                className="border border-white/10 bg-black/45 px-4 py-4 text-sm uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee border-y border-white/10 bg-[#101010] py-3 text-xs uppercase tracking-[0.34em] text-zinc-500">
        <div className="marquee-track">
          <span>NOIR INK Studio</span>
          <span>Custom tattoos</span>
          <span>Blackwork</span>
          <span>Fine line</span>
          <span>Realism</span>
          <span>Traditional</span>
          <span>NOIR INK Studio</span>
          <span>Custom tattoos</span>
          <span>Blackwork</span>
          <span>Fine line</span>
          <span>Realism</span>
          <span>Traditional</span>
        </div>
      </div>

      <Section id="studio" label={t.aboutEyebrow} title={t.aboutTitle}>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-card">
            <p className="text-xl leading-9 text-zinc-300">{t.aboutText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.aboutStats.map(([value, label]) => (
                <div className="border border-white/10 bg-white/[0.03] p-5" key={label}>
                  <div className="text-4xl font-black text-white">{value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-frame reveal-card">
            <Image
              alt="Premium tattoo studio chair and tools"
              className="h-full w-full object-cover"
              height={760}
              src="/noir-ink-hero.webp"
              width={1180}
            />
          </div>
        </div>
      </Section>

      <Section id="artysci" label="NOIR / ARTISTS" title={t.artistsTitle}>
        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {t.artistsIntro}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {artists[lang].map((artist, index) => (
            <article className="artist-card reveal-card" key={artist.name}>
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c85b60]">
                  0{index + 1}
                </span>
                <span className="artist-mark" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-normal text-white">
                {artist.name}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
                {artist.role}
              </p>
              <p className="mt-6 leading-7 text-zinc-300">{artist.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="style" label="INK / DISCIPLINES" title={t.stylesTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {styles[lang].map(([name, description]) => (
            <article className="style-tile reveal-card" key={name}>
              <span className="style-line" />
              <h3 className="text-3xl font-black uppercase text-white">{name}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="portfolio" label="SELECTED / WORK" title={t.galleryTitle}>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-7 max-w-xl text-lg leading-8 text-zinc-400">
              {t.galleryIntro}
            </p>
            <div className="image-frame reveal-card">
              <Image
                alt="Tattoo portfolio collage"
                className="h-full w-full object-cover"
                height={900}
                src="/noir-ink-portfolio.webp"
                width={900}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryItems.map((item, index) => (
              <article className="portfolio-tile reveal-card" key={item}>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  0{index + 1}
                </span>
                <h3 className="mt-auto text-2xl font-black uppercase text-white">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="proces" label="FROM IDEA / TO SKIN" title={t.processTitle}>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps[lang].map(([number, title, description]) => (
            <article className="process-card reveal-card" key={number}>
              <span className="text-sm font-black tracking-[0.28em] text-[#cf5f64]">
                {number}
              </span>
              <h3 className="mt-8 text-2xl font-black uppercase text-white">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cennik" label="STARTING / PRICES" title={t.pricingTitle}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="grid gap-3">
            {pricing[lang].map(([name, price]) => (
              <div className="price-row reveal-card" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
          <div className="border border-[#8f252b]/40 bg-[#14090a] p-6 text-lg leading-8 text-zinc-300">
            {t.pricingNote}
          </div>
        </div>
      </Section>

      <Section id="higiena" label="STERILE / CALM" title={t.hygieneTitle}>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="hygiene-seal reveal-card">
            <span>100%</span>
            <strong>STERILE</strong>
          </div>
          <p className="text-xl leading-9 text-zinc-300">{t.hygieneText}</p>
        </div>
      </Section>

      <Section id="faq" label="QUESTIONS / ANSWERS" title={t.faqTitle}>
        <div className="grid gap-3">
          {faqs[lang].map(([question, answer]) => (
            <details className="faq-item reveal-card" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="kontakt" label="BOOK / VISIT" title={t.contactTitle}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              {t.contactText}
            </p>
            <Link className="btn-primary mt-8 inline-flex" href="/konsultacja">
              {t.book}
            </Link>
          </div>
          <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-zinc-300">
            <ContactLine
              label={lang === "pl" ? "Adres" : "Address"}
              value={studio.address}
            />
            <ContactLine
              label={lang === "pl" ? "Godziny" : "Hours"}
              value={studio.hours}
            />
            <ContactLine
              label={lang === "pl" ? "Telefon" : "Phone"}
              value={studio.phone}
            />
            <a
              className="contact-line transition hover:border-[#9b2f34]/70 hover:text-white"
              href="https://instagram.com/noirink.studio"
              rel="noreferrer"
              target="_blank"
            >
              <span>Instagram</span>
              <strong>{studio.instagram}</strong>
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p className="font-black uppercase tracking-[0.28em] text-white">
            {studio.name}
          </p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  children,
  id,
  label,
  title,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
  title: string;
}) {
  return (
    <section className="section-shell" id={id}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">{label}</p>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="contact-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
