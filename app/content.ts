export type Language = "pl" | "en";

export const studio = {
  name: "NOIR INK Studio",
  address: "ul. Mokotowska 18, 00-561 Warszawa",
  hours: "Pon-Sob 10:00-20:00",
  phone: "+48 501 204 889",
  instagram: "@noirink.studio",
};

export const copy = {
  pl: {
    nav: ["Studio", "Artyści", "Style", "Portfolio", "Cennik", "Kontakt"],
    navIds: ["studio", "artysci", "style", "portfolio", "cennik", "kontakt"],
    langLabel: "Język",
    heroKicker: "Premium tattoo atelier / Warszawa",
    heroTitle: "Tatuaże z charakterem i precyzją.",
    heroText:
      "NOIR INK Studio łączy odważny underground z eleganckim rzemiosłem: autorskie projekty, bezpieczny proces i spokojna praca jeden na jeden.",
    book: "Umów konsultację",
    portfolio: "Zobacz portfolio",
    proof: ["3 artystów", "4 style specjalizacji", "100% sterylne stanowiska"],
    aboutTitle: "Studio",
    aboutEyebrow: "Ciemne wnętrze, jasny proces",
    aboutText:
      "Tworzymy tatuaże, które wyglądają mocno dziś i dojrzewają dobrze przez lata. Każdy projekt zaczynamy od rozmowy, referencji i dopasowania stylu do anatomii, skóry oraz tempa klienta.",
    aboutStats: [
      ["8+", "lat doświadczenia"],
      ["420+", "projektów premium"],
      ["1:1", "sesje bez pośpiechu"],
    ],
    artistsTitle: "Artyści",
    artistsIntro:
      "Trzy różne ręce, jeden standard: czytelny projekt, mocny kontrast i pełna kontrola detalu.",
    stylesTitle: "Style tatuażu",
    galleryTitle: "Portfolio",
    galleryIntro:
      "Placeholdery utrzymane jak sprzedażowa galeria dla lokalnego studia: eleganckie, konkretne i gotowe do podmiany na realne prace klienta.",
    processTitle: "Proces",
    pricingTitle: "Cennik startowy",
    pricingNote:
      "Finalna wycena zależy od rozmiaru, miejsca, detalu i liczby sesji. Konsultacja pozwala zamknąć zakres projektu.",
    hygieneTitle: "Higiena i bezpieczeństwo",
    hygieneText:
      "Pracujemy wyłącznie na jednorazowych igłach i sterylnych gripach, a każde stanowisko jest dezynfekowane przed i po sesji. Pigmenty, rękawice i opatrunki dobieramy zgodnie z aktualnymi procedurami studia.",
    faqTitle: "FAQ",
    contactTitle: "Kontakt",
    contactText:
      "Napisz, zadzwoń albo przejdź od razu do konsultacji. Odpowiadamy zwykle tego samego dnia roboczego.",
    footer:
      "Premium landing page dla studia tatuażu, przygotowany jako projekt portfolio dla lokalnych biznesów.",
  },
  en: {
    nav: ["Studio", "Artists", "Styles", "Portfolio", "Pricing", "Contact"],
    navIds: ["studio", "artysci", "style", "portfolio", "cennik", "kontakt"],
    langLabel: "Language",
    heroKicker: "Premium tattoo atelier / Warsaw",
    heroTitle: "Tattoos with edge and precision.",
    heroText:
      "NOIR INK Studio blends bold underground energy with elegant craft: custom design, a safe process and calm one-to-one sessions.",
    book: "Book consultation",
    portfolio: "View portfolio",
    proof: ["3 artists", "4 signature styles", "100% sterile stations"],
    aboutTitle: "Studio",
    aboutEyebrow: "Dark interior, clear process",
    aboutText:
      "We create tattoos that feel strong today and age beautifully over time. Every piece starts with a conversation, references and a style matched to anatomy, skin and client pace.",
    aboutStats: [
      ["8+", "years of experience"],
      ["420+", "premium projects"],
      ["1:1", "unrushed sessions"],
    ],
    artistsTitle: "Artists",
    artistsIntro:
      "Three distinct hands, one standard: readable design, strong contrast and total control of detail.",
    stylesTitle: "Tattoo styles",
    galleryTitle: "Portfolio",
    galleryIntro:
      "Sales-ready placeholder gallery for a local studio website: elegant, concrete and easy to replace with real client work.",
    processTitle: "Process",
    pricingTitle: "Starting prices",
    pricingNote:
      "Final pricing depends on size, placement, detail and number of sessions. Consultation locks the project scope.",
    hygieneTitle: "Hygiene and safety",
    hygieneText:
      "We work only with single-use needles and sterile grips, and every station is disinfected before and after the session. Pigments, gloves and dressings follow current studio procedures.",
    faqTitle: "FAQ",
    contactTitle: "Contact",
    contactText:
      "Message us, call us or go straight to consultation. We usually reply on the same business day.",
    footer:
      "Premium tattoo studio landing page prepared as a portfolio project for local business websites.",
  },
} satisfies Record<Language, Record<string, unknown>>;

export const artists = {
  pl: [
    {
      name: "Maja Voss",
      role: "Fine line / botanika",
      text: "Delikatne linie, mikrodetal i kompozycje inspirowane naturą.",
    },
    {
      name: "Igor Flint",
      role: "Blackwork / geometria",
      text: "Mocny kontrast, ornament, mandale i duże kompozycje na ciało.",
    },
    {
      name: "Lena Grey",
      role: "Realizm / portret",
      text: "Czarno-szare portrety, rzeźby, oko i tekstury o wysokim detalu.",
    },
  ],
  en: [
    {
      name: "Maja Voss",
      role: "Fine line / botanical",
      text: "Delicate linework, micro detail and nature-led compositions.",
    },
    {
      name: "Igor Flint",
      role: "Blackwork / geometry",
      text: "High contrast, ornament, mandalas and large body compositions.",
    },
    {
      name: "Lena Grey",
      role: "Realism / portrait",
      text: "Black and grey portraits, sculpture, eyes and high-detail textures.",
    },
  ],
} satisfies Record<Language, { name: string; role: string; text: string }[]>;

export const styles = {
  pl: [
    ["Realizm", "Portrety, rzeźby, zwierzęta i tekstury z głębokim cieniem."],
    ["Fine line", "Minimalistyczne prace z precyzyjną kreską i lekkim detalem."],
    ["Blackwork", "Czerń, geometria, ornament i odważne kompozycje na ciało."],
    ["Traditional", "Klasyczne motywy, mocny kontur i przygaszona czerwień."],
  ],
  en: [
    ["Realism", "Portraits, sculpture, animals and textures with deep shading."],
    ["Fine line", "Minimal pieces with precise linework and delicate detail."],
    ["Blackwork", "Black ink, geometry, ornament and bold body compositions."],
    ["Traditional", "Classic motifs, strong outlines and muted red accents."],
  ],
} satisfies Record<Language, [string, string][]>;

export const processSteps = {
  pl: [
    ["01", "Konsultacja", "Rozmawiamy o pomyśle, miejscu, budżecie i terminie."],
    ["02", "Projekt", "Artysta przygotowuje szkic oraz kierunek wizualny."],
    ["03", "Sesja", "Pracujemy spokojnie, sterylnie i z przerwami kiedy trzeba."],
    ["04", "Pielęgnacja", "Dostajesz jasne zalecenia i kontakt po sesji."],
  ],
  en: [
    ["01", "Consultation", "We discuss the idea, placement, budget and date."],
    ["02", "Design", "Your artist prepares the sketch and visual direction."],
    ["03", "Tattoo session", "We work calmly, sterilely and with breaks when needed."],
    ["04", "Aftercare", "You receive clear aftercare notes and post-session contact."],
  ],
} satisfies Record<Language, [string, string, string][]>;

export const pricing = {
  pl: [
    ["Mały tatuaż", "od 450 PLN"],
    ["Średni projekt", "od 900 PLN"],
    ["Duża kompozycja", "od 1600 PLN"],
    ["Całodniowa sesja", "od 3200 PLN"],
  ],
  en: [
    ["Small tattoo", "from 450 PLN"],
    ["Medium project", "from 900 PLN"],
    ["Large composition", "from 1600 PLN"],
    ["Full-day session", "from 3200 PLN"],
  ],
} satisfies Record<Language, [string, string][]>;

export const faqs = {
  pl: [
    [
      "Czy konsultacja jest płatna?",
      "Tak, pobieramy 150 PLN zadatku, który odliczamy od ceny sesji.",
    ],
    [
      "Czy mogę przyjść z własnym projektem?",
      "Tak. Dopasujemy go do skóry, miejsca i wybranego stylu artysty.",
    ],
    [
      "Ile trwa gojenie?",
      "Najczęściej 2-4 tygodnie. Szczegóły zależą od skóry, miejsca i rozmiaru.",
    ],
  ],
  en: [
    [
      "Is consultation paid?",
      "Yes. We take a 150 PLN deposit and deduct it from the session price.",
    ],
    [
      "Can I bring my own design?",
      "Yes. We will adapt it to your skin, placement and selected artist style.",
    ],
    [
      "How long does healing take?",
      "Usually 2-4 weeks. Details depend on skin, placement and size.",
    ],
  ],
} satisfies Record<Language, [string, string][]>;

export const consultationCopy = {
  pl: {
    back: "Wróć do strony głównej",
    title: "Konsultacja",
    lead: "Zarezerwuj rozmowę projektową. Formularz pokazuje szacunkową cenę i pola płatności dopasowane do wybranej metody.",
    language: "Język",
    fullName: "Imię i nazwisko",
    birthDate: "Data urodzenia",
    phone: "Numer telefonu",
    artist: "Artysta",
    style: "Styl",
    size: "Rozmiar projektu",
    placement: "Miejsce na ciele",
    payment: "Metoda płatności",
    paymentDetails: "Dane płatności",
    summary: "Podsumowanie",
    deposit: "Zadatek za konsultację",
    estimate: "Szacunkowy start projektu",
    today: "Do zapłaty dziś",
    balance: "Pozostała kwota od",
    submit: "Wyślij zgłoszenie",
    sent: "Zgłoszenie przygotowane. Studio może podpiąć tu CRM, płatności lub e-mail.",
  },
  en: {
    back: "Back to home",
    title: "Consultation",
    lead: "Book a design call. The form shows an estimated price and payment fields tailored to your selected method.",
    language: "Language",
    fullName: "Full name",
    birthDate: "Date of birth",
    phone: "Phone number",
    artist: "Artist",
    style: "Style",
    size: "Project size",
    placement: "Body placement",
    payment: "Payment method",
    paymentDetails: "Payment details",
    summary: "Summary",
    deposit: "Consultation deposit",
    estimate: "Estimated project start",
    today: "Due today",
    balance: "Remaining amount from",
    submit: "Send request",
    sent: "Request prepared. The studio can connect CRM, payments or e-mail here.",
  },
} satisfies Record<Language, Record<string, string>>;
