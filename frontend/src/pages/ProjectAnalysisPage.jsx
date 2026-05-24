import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";
import TurnstileWidget from "../components/ui/TurnstileWidget.jsx";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://sddestonie.onrender.com");

function normalizeApiUrl(url) {
  return url.replace(/\/$/, "");
}

const pageCopy = {
  en: {
    heroTitle: "Describe the process you want to improve",
    sectionKicker: "Project analysis",
    sectionTitle:
      "The more we understand your process, the better we can design the right system.",
    sectionText:
      "Describe how work currently looks inside your company, which tools you use and what takes the most time.",
    name: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    companyDescription: "What does your company do?",
    mainProblem: "What problem do you want to solve?",
    currentProcess: "What does the current process look like?",
    currentProcessPlaceholder:
      "For example: forms, Excel, emails, manual data entry, customer communication, documents...",
    automationGoal: "What do you want to automate?",
    currentTools: "Which tools do you currently use?",
    currentToolsPlaceholder:
      "For example: Excel, Google Sheets, CRM, Gmail, Outlook, WordPress, BaseLinker, ERP, accounting system...",
    solutionType: "Type of solution",
    select: "Select",
    priority: "Priority",
    additionalNotes: "Additional notes",
    privacyPath: "/privacy-policy",
    termsPath: "/terms",
    privacyConsentBefore: "I have read the ",
    privacyConsentLink: "PRIVACY POLICY",
    privacyConsentAfter:
      " and agree to the processing of my data for the purpose of handling this inquiry.",
    termsConsentBefore: "I accept the ",
    termsConsentLink: "TERMS AND CONDITIONS",
    termsConsentAfter: " for the provision of electronic services.",
    bottomText:
      "After submitting the form, we will review your description and contact you.",
    submit: "Send project brief",
    sending: "Sending...",
    sendingStatus: "Sending your project brief...",
    successStatus: "Thank you. Your project brief has been sent.",
    errorStatus: "The form could not be sent. Please try again.",
    solutionOptions: [
      ["crm", "CRM / admin panel"],
      ["saas", "Custom SaaS system"],
      ["automation", "Process automation"],
      ["ai", "AI-supported system"],
      ["pdf", "Document / PDF generator"],
      ["integration", "API integrations"],
      ["not_sure", "I am not sure — I need analysis"],
    ],
    priorityOptions: [
      ["soon", "As soon as possible"],
      ["1_3_months", "Within 1–3 months"],
      ["planning", "Planning stage"],
    ],
  },

  ee: {
    heroTitle: "Kirjelda protsessi, mida soovid parandada",
    sectionKicker: "Projekti analüüs",
    sectionTitle:
      "Mida rohkem me sinu protsessi mõistame, seda paremini saame õige süsteemi kavandada.",
    sectionText:
      "Kirjelda, kuidas töö sinu ettevõttes praegu käib, milliseid tööriistu kasutate ja mis võtab kõige rohkem aega.",
    name: "Ees- ja perekonnanimi",
    company: "Ettevõte",
    email: "E-post",
    phone: "Telefon",
    companyDescription: "Millega sinu ettevõte tegeleb?",
    mainProblem: "Millist probleemi soovid lahendada?",
    currentProcess: "Kuidas praegune protsess välja näeb?",
    currentProcessPlaceholder:
      "Näiteks: vormid, Excel, e-kirjad, käsitsi andmete sisestamine, kliendisuhtlus, dokumendid...",
    automationGoal: "Mida soovid automatiseerida?",
    currentTools: "Milliseid tööriistu praegu kasutate?",
    currentToolsPlaceholder:
      "Näiteks: Excel, Google Sheets, CRM, Gmail, Outlook, WordPress, BaseLinker, ERP, raamatupidamissüsteem...",
    solutionType: "Lahenduse tüüp",
    select: "Vali",
    priority: "Prioriteet",
    additionalNotes: "Lisamärkused",
    privacyPath: "/ee/privaatsuspoliitika",
    termsPath: "/ee/tingimused",
    privacyConsentBefore: "Olen tutvunud ",
    privacyConsentLink: "PRIVAATSUSPOLIITIKAGA",
    privacyConsentAfter:
      " ja annan nõusoleku oma andmete töötlemiseks päringu käsitlemise eesmärgil.",
    termsConsentBefore: "Nõustun ",
    termsConsentLink: "ELEKTROONILISTE TEENUSTE OSUTAMISE TINGIMUSTEGA",
    termsConsentAfter: ".",
    bottomText:
      "Pärast vormi saatmist analüüsime kirjeldust ja võtame sinuga ühendust.",
    submit: "Saada projekti kirjeldus",
    sending: "Saatmine...",
    sendingStatus: "Saadame projekti kirjeldust...",
    successStatus: "Aitäh. Projekti kirjeldus on saadetud.",
    errorStatus: "Vormi ei õnnestunud saata. Palun proovige uuesti.",
    solutionOptions: [
      ["crm", "CRM / halduspaneel"],
      ["saas", "Kohandatud SaaS-süsteem"],
      ["automation", "Protsessi automatiseerimine"],
      ["ai", "AI-toega süsteem"],
      ["pdf", "Dokumendi / PDF-i generaator"],
      ["integration", "API-integratsioonid"],
      ["not_sure", "Ma ei ole kindel — vajan analüüsi"],
    ],
    priorityOptions: [
      ["soon", "Nii kiiresti kui võimalik"],
      ["1_3_months", "1–3 kuu jooksul"],
      ["planning", "Planeerimise etapis"],
    ],
  },

  pl: {
    heroTitle: "Opisz proces, który chcesz usprawnić",
    sectionKicker: "Analiza projektu",
    sectionTitle:
      "Im więcej wiemy o Twoim procesie, tym lepiej możemy zaprojektować system.",
    sectionText:
      "Opisz, jak wygląda obecna praca w firmie, z jakich narzędzi korzystacie i co najbardziej zabiera czas.",
    name: "Imię i nazwisko",
    company: "Firma",
    email: "Email",
    phone: "Telefon",
    companyDescription: "Czym zajmuje się firma?",
    mainProblem: "Jaki problem chcesz rozwiązać?",
    currentProcess: "Jak wygląda obecny proces?",
    currentProcessPlaceholder:
      "Np. formularze, Excel, maile, ręczne przepisywanie danych, kontakt z klientem, dokumenty...",
    automationGoal: "Co chcesz zautomatyzować?",
    currentTools: "Z jakich narzędzi obecnie korzystacie?",
    currentToolsPlaceholder:
      "Np. Excel, Google Sheets, CRM, Gmail, Outlook, WordPress, Baselinker, ERP, system księgowy...",
    solutionType: "Typ rozwiązania",
    select: "Wybierz",
    priority: "Priorytet",
    additionalNotes: "Dodatkowe notatki",
    privacyPath: "/pl/polityka-prywatnosci",
    termsPath: "/pl/regulamin",
    privacyConsentBefore: "Zapoznałem/am się z ",
    privacyConsentLink: "POLITYKĄ PRYWATNOŚCI",
    privacyConsentAfter:
      " i wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania.",
    termsConsentBefore: "Akceptuję ",
    termsConsentLink: "REGULAMIN",
    termsConsentAfter: " świadczenia usług drogą elektroniczną.",
    bottomText:
      "Po wysłaniu formularza przeanalizujemy opis i skontaktujemy się z Tobą.",
    submit: "Wyślij opis projektu",
    sending: "Wysyłanie...",
    sendingStatus: "Wysyłamy opis projektu...",
    successStatus: "Dziękujemy. Opis projektu został wysłany.",
    errorStatus: "Nie udało się wysłać formularza. Spróbuj ponownie.",
    solutionOptions: [
      ["crm", "CRM / panel administracyjny"],
      ["saas", "Dedykowany system SaaS"],
      ["automation", "Automatyzacja procesu"],
      ["ai", "System ze wsparciem AI"],
      ["pdf", "Generator dokumentów / PDF"],
      ["integration", "Integracje API"],
      ["not_sure", "Nie wiem — potrzebuję analizy"],
    ],
    priorityOptions: [
      ["soon", "Jak najszybciej"],
      ["1_3_months", "W ciągu 1–3 miesięcy"],
      ["planning", "Na etapie planowania"],
    ],
  },
};

function getCurrentLanguage(pathname) {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) return "pl";
  if (pathname === "/ee" || pathname.startsWith("/ee/")) return "ee";
  return "en";
}

function ProjectAnalysisPage() {
  const location = useLocation();
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const language = useMemo(
    () => getCurrentLanguage(location.pathname),
    [location.pathname]
  );

  const copy = pageCopy[language];
  const isSending = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      language,
      source: "project_analysis_form",
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company_description: String(formData.get("company_description") || "").trim(),
      main_problem: String(formData.get("main_problem") || "").trim(),
      current_process: String(formData.get("current_process") || "").trim(),
      automation_goal: String(formData.get("automation_goal") || "").trim(),
      current_tools: String(formData.get("current_tools") || "").trim(),
      solution_type: String(formData.get("solution_type") || "").trim(),
      priority: String(formData.get("priority") || "").trim(),
      additional_notes: String(formData.get("additional_notes") || "").trim(),
      privacy_consent: formData.get("privacy_consent") === "on",
      terms_consent: formData.get("terms_consent") === "on",
      turnstile_token: turnstileToken,
    };

    setStatus("sending");
    setStatusMessage(copy.sendingStatus);

    try {
      const response = await fetch(
        `${normalizeApiUrl(API_BASE_URL)}/api/project-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
  throw new Error(copy.errorStatus);
}

form.reset();
setTurnstileToken("");
setStatus("success");
setStatusMessage(copy.successStatus);
} catch {
  setStatus("error");
  setStatusMessage(copy.errorStatus);
}
  }

  return (
    <main>
      <section className="services-hero project-analysis-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>{copy.heroTitle}</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="project-analysis-section">
        <div className="container project-analysis-section__inner">
          <div className="project-analysis-section__head">
            <p>{copy.sectionKicker}</p>
            <h2>{copy.sectionTitle}</h2>
            <span>{copy.sectionText}</span>
          </div>

          <form
            className="project-analysis-form"
            onSubmit={handleSubmit}
            noValidate={false}
          >
            <div className="project-analysis-form__row">
              <label>
                {copy.name}
                <input type="text" name="name" autoComplete="name" required />
              </label>

              <label>
                {copy.company}
                <input type="text" name="company" autoComplete="organization" />
              </label>
            </div>

            <div className="project-analysis-form__row">
              <label>
                {copy.email}
                <input type="email" name="email" autoComplete="email" required />
              </label>

              <label>
                {copy.phone}
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
            </div>

            <label>
              {copy.companyDescription}
              <textarea name="company_description" rows="4" required />
            </label>

            <label>
              {copy.mainProblem}
              <textarea name="main_problem" rows="5" required />
            </label>

            <label>
              {copy.currentProcess}
              <textarea
                name="current_process"
                rows="5"
                placeholder={copy.currentProcessPlaceholder}
                required
              />
            </label>

            <label>
              {copy.automationGoal}
              <textarea name="automation_goal" rows="5" required />
            </label>

            <label>
              {copy.currentTools}
              <textarea
                name="current_tools"
                rows="4"
                placeholder={copy.currentToolsPlaceholder}
              />
            </label>

            <div className="project-analysis-form__row">
              <label>
                {copy.solutionType}
                <select name="solution_type" required defaultValue="">
                  <option value="" disabled>
                    {copy.select}
                  </option>

                  {copy.solutionOptions.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                {copy.priority}
                <select name="priority" defaultValue="">
                  <option value="" disabled>
                    {copy.select}
                  </option>

                  {copy.priorityOptions.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              {copy.additionalNotes}
              <textarea name="additional_notes" rows="5" />
            </label>

            <div className="contact-form__turnstile">
              <TurnstileWidget
                onVerify={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
              />
            </div>

            <div className="project-analysis-form__consents">
              <label className="project-analysis-form__check">
                <input type="checkbox" name="privacy_consent" required />

                <span>
                  {copy.privacyConsentBefore}
                  <Link
                    to={copy.privacyPath}
                    className="project-analysis-form__legal-link"
                  >
                    {copy.privacyConsentLink}
                  </Link>
                  {copy.privacyConsentAfter}
                </span>
              </label>

              <label className="project-analysis-form__check">
                <input type="checkbox" name="terms_consent" required />

                <span>
                  {copy.termsConsentBefore}
                  <Link
                    to={copy.termsPath}
                    className="project-analysis-form__legal-link"
                  >
                    {copy.termsConsentLink}
                  </Link>
                  {copy.termsConsentAfter}
                </span>
              </label>
            </div>

            {statusMessage && (
              <p
                className={`project-analysis-form__status project-analysis-form__status--${status}`}
              >
                {statusMessage}
              </p>
            )}

            <div className="project-analysis-form__bottom">
              <p>{copy.bottomText}</p>

              <button
                type="submit"
                className="project-analysis-form__button"
                disabled={isSending}
              >
                {isSending ? copy.sending : copy.submit}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ProjectAnalysisPage;
