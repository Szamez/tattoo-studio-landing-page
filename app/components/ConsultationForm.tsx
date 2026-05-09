"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { consultationCopy, studio } from "../content";
import { useLanguage } from "../useLanguage";

const sizes = {
  pl: [
    { label: "Mały tatuaż", value: "small", price: 450 },
    { label: "Średni projekt", value: "medium", price: 900 },
    { label: "Duża kompozycja", value: "large", price: 1600 },
    { label: "Całodniowa sesja", value: "day", price: 3200 },
  ],
  en: [
    { label: "Small tattoo", value: "small", price: 450 },
    { label: "Medium project", value: "medium", price: 900 },
    { label: "Large composition", value: "large", price: 1600 },
    { label: "Full-day session", value: "day", price: 3200 },
  ],
};

const artists = ["Maja Voss", "Igor Flint", "Lena Grey"];

const styles = {
  pl: ["Realizm", "Fine line", "Blackwork", "Traditional"],
  en: ["Realism", "Fine line", "Blackwork", "Traditional"],
};

const paymentMethods = {
  pl: [
    { label: "Karta online", value: "card" },
    { label: "BLIK", value: "blik" },
    { label: "Przelew", value: "transfer" },
    { label: "W studiu", value: "studio" },
  ],
  en: [
    { label: "Online card", value: "card" },
    { label: "BLIK", value: "blik" },
    { label: "Bank transfer", value: "transfer" },
    { label: "In studio", value: "studio" },
  ],
};

const deposit = 150;

export function ConsultationForm() {
  const { lang, setLang } = useLanguage();
  const [payment, setPayment] = useState("card");
  const [size, setSize] = useState("medium");
  const [submitted, setSubmitted] = useState(false);
  const t = consultationCopy[lang];

  const selectedSize = useMemo(
    () => sizes[lang].find((item) => item.value === size) ?? sizes[lang][1],
    [lang, size],
  );
  const balance = Math.max(selectedSize.price - deposit, 0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-6 text-zinc-100 sm:px-6 lg:px-8">
      <div className="noise-layer" />
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <Link
            className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-400 transition hover:text-white"
            href="/"
          >
            {"<-"} {t.back}
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
              {t.language}
            </span>
            {(["pl", "en"] as const).map((code) => (
              <button
                aria-pressed={lang === code}
                className={`h-9 border px-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
                  lang === code
                    ? "border-[#a43d42] bg-[#8f252b] text-white"
                    : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"
                }`}
                key={code}
                onClick={() => setLang(code)}
                type="button"
              >
                {code}
              </button>
            ))}
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="consultation-intro">
            <p className="section-label">NOIR INK / BOOKING</p>
            <h1 className="consultation-title mt-3 font-black uppercase leading-none tracking-normal text-white">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{t.lead}</p>
            <div className="mt-8 grid gap-3 text-sm uppercase tracking-[0.16em] text-zinc-300">
              <div className="contact-line">
                <span>Studio</span>
                <strong>{studio.name}</strong>
              </div>
              <div className="contact-line">
                <span>{lang === "pl" ? "Telefon" : "Phone"}</span>
                <strong>{studio.phone}</strong>
              </div>
              <div className="contact-line">
                <span>{lang === "pl" ? "Adres" : "Address"}</span>
                <strong>{studio.address}</strong>
              </div>
            </div>
          </aside>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <Field label={t.fullName}>
                <input name="fullName" required type="text" />
              </Field>
              <Field label={t.birthDate}>
                <input name="birthDate" required type="date" />
              </Field>
              <Field label={t.phone}>
                <input name="phone" required type="tel" />
              </Field>
              <Field label={t.artist}>
                <select name="artist" required>
                  {artists.map((artist) => (
                    <option key={artist}>{artist}</option>
                  ))}
                </select>
              </Field>
              <Field label={t.style}>
                <select name="style" required>
                  {styles[lang].map((style) => (
                    <option key={style}>{style}</option>
                  ))}
                </select>
              </Field>
              <Field label={t.size}>
                <select
                  name="size"
                  onChange={(event) => setSize(event.target.value)}
                  required
                  value={size}
                >
                  {sizes[lang].map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label} - {item.price} PLN
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={t.placement}>
              <textarea name="placement" required rows={4} />
            </Field>

            <fieldset className="payment-box">
              <legend>{t.payment}</legend>
              <div className="payment-options">
                {paymentMethods[lang].map((method) => (
                  <label
                    className={payment === method.value ? "is-selected" : ""}
                    key={method.value}
                  >
                    <input
                      checked={payment === method.value}
                      name="payment"
                      onChange={() => setPayment(method.value)}
                      type="radio"
                      value={method.value}
                    />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <section className="payment-details">
              <h2>{t.paymentDetails}</h2>
              {payment === "card" && (
                <div className="form-grid">
                  <Field label={lang === "pl" ? "E-mail do płatności" : "Payment e-mail"}>
                    <input name="cardEmail" required type="email" />
                  </Field>
                  <Field label={lang === "pl" ? "Imię na fakturze" : "Billing name"}>
                    <input name="cardName" required type="text" />
                  </Field>
                  <p className="field-note">
                    {lang === "pl"
                      ? "Numer karty i CVV powinny być obsługiwane wyłącznie przez bezpiecznego operatora płatności."
                      : "Card number and CVV should be handled only by a secure payment provider."}
                  </p>
                </div>
              )}
              {payment === "blik" && (
                <div className="form-grid">
                  <Field label={lang === "pl" ? "Telefon BLIK" : "BLIK phone"}>
                    <input name="blikPhone" required type="tel" />
                  </Field>
                  <Field label={lang === "pl" ? "Bank" : "Bank"}>
                    <input name="blikBank" required type="text" />
                  </Field>
                  <p className="field-note">
                    {lang === "pl"
                      ? "Kod BLIK klient podaje dopiero w bezpiecznym oknie operatora płatności."
                      : "The BLIK code is entered only in the secure payment provider window."}
                  </p>
                </div>
              )}
              {payment === "transfer" && (
                <div className="form-grid">
                  <Field label={lang === "pl" ? "E-mail do potwierdzenia" : "Confirmation e-mail"}>
                    <input name="transferEmail" required type="email" />
                  </Field>
                  <Field label={lang === "pl" ? "Dane do faktury / NIP" : "Invoice details / tax ID"}>
                    <input name="invoice" type="text" />
                  </Field>
                </div>
              )}
              {payment === "studio" && (
                <div className="form-grid">
                  <Field label={lang === "pl" ? "Płatność na miejscu" : "On-site payment"}>
                    <select name="studioPayment">
                      <option>{lang === "pl" ? "Gotówka" : "Cash"}</option>
                      <option>{lang === "pl" ? "Terminal" : "Card terminal"}</option>
                    </select>
                  </Field>
                  <Field label={lang === "pl" ? "Preferowany dzień wizyty" : "Preferred visit day"}>
                    <input name="visitDay" type="date" />
                  </Field>
                </div>
              )}
            </section>

            <aside className="summary-box">
              <h2>{t.summary}</h2>
              <SummaryLine label={t.deposit} value={`${deposit} PLN`} />
              <SummaryLine
                label={t.estimate}
                value={`${selectedSize.price} PLN`}
              />
              <SummaryLine label={t.today} value={`${deposit} PLN`} strong />
              <SummaryLine label={t.balance} value={`${balance} PLN`} />
            </aside>

            <button className="btn-primary w-full justify-center" type="submit">
              {t.submit}
            </button>
            {submitted && (
              <p className="border border-[#8f252b]/50 bg-[#14090a] p-4 text-sm leading-6 text-zinc-200">
                {t.sent}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function SummaryLine({
  label,
  strong,
  value,
}: {
  label: string;
  strong?: boolean;
  value: string;
}) {
  return (
    <div className={strong ? "summary-line is-strong" : "summary-line"}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
