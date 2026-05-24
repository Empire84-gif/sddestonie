import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, RotateCcw, Sparkles } from "lucide-react";

import heroBg from "../assets/images/aidivider.png";
import heroVisual from "../assets/images/aicalculator.png";

const DEFAULT_VALUES = {
  people: 2,
  hoursPerWeek: 12,
  hourlyRate: 30,
  currency: "EUR",
  tasksPerMonth: 40,
  complexity: "medium",
};

function GiftPagePL() {
  const [form, setForm] = useState(DEFAULT_VALUES);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleReset = () => {
    setForm(DEFAULT_VALUES);
  };

  const results = useMemo(() => {
    const people = Number(form.people) || 0;
    const hoursPerWeek = Number(form.hoursPerWeek) || 0;
    const hourlyRate = Number(form.hourlyRate) || 0;
    const tasksPerMonth = Number(form.tasksPerMonth) || 0;

    const factorMap = {
      low: 0.72,
      medium: 0.58,
      high: 0.42,
    };

    const automationFactor = factorMap[form.complexity] || 0.58;

    const monthlyHoursLost = people * hoursPerWeek * 4.33;
    const monthlyCost = monthlyHoursLost * hourlyRate;
    const monthlyPotential = monthlyCost * automationFactor;
    const yearlyPotential = monthlyPotential * 12;
    const daysRecovered = monthlyHoursLost / 8;

    let recommendation =
      "Najlepszy pierwszy krok to lekki moduł automatyzacji, który uporządkuje powtarzalny fragment pracy.";
    let implementation =
      "Mały moduł lub prosty workflow z formularzem, bazą danych i automatyzacją działań.";

    if (tasksPerMonth >= 70 || monthlyPotential >= 1200) {
      recommendation =
        "Warto myśleć o dedykowanym systemie: formularzach, panelu administracyjnym, bazie danych, automatyzacji i dokumentach PDF.";
      implementation =
        "Dedykowany mini-system lub MVP z etapową rozbudową o kolejne moduły.";
    }

    if (tasksPerMonth >= 120 || monthlyPotential >= 2500 || people >= 5) {
      recommendation =
        "Proces wygląda na dobrego kandydata do pełnego uporządkowania w dedykowanym CRM / SaaS z automatyzacją, raportami i wsparciem AI.";
      implementation =
        "Pełniejszy system biznesowy: CRM, dashboard, dokumenty, automatyzacje, integracje API i AI assistant.";
    }

    return {
      monthlyHoursLost,
      monthlyCost,
      monthlyPotential,
      yearlyPotential,
      daysRecovered,
      recommendation,
      implementation,
    };
  }, [form]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: form.currency,
      maximumFractionDigits: 0,
    }).format(value);

  const formatNumber = (value) =>
    new Intl.NumberFormat("pl-PL", {
      maximumFractionDigits: 1,
    }).format(value);

  return (
    <>
      <section className="services-hero gift-page-hero">
        <img
          src={heroBg}
          alt=""
          className="services-hero__bg"
          aria-hidden="true"
        />

        <div className="container services-hero__inner">
          <div className="services-hero__content">
            <h1>Kalkulator potencjału automatyzacji</h1>
          </div>

          <div
            className="services-hero__visual gift-page-hero__visual"
            aria-hidden="true"
          >
            <img src={heroVisual} alt="" />
          </div>
        </div>
      </section>

      <section id="kalkulator-audytu" className="gift-tool-section">
        <div className="container gift-tool-section__inner">
          <div className="gift-tool-section__head">
            <p className="gift-tool-section__kicker">SDE Automation Audit</p>

            <h2>Sprawdź, ile czasu i kosztów pochłania ręczna praca w firmie.</h2>

            <div className="gift-tool-section__intro-text">
              <p>
                Darmowe narzędzie, które pomaga szybko oszacować, ile czasu i
                kosztów Twoja firma może odzyskać dzięki lepiej zaprojektowanemu
                procesowi, automatyzacji lub dedykowanemu systemowi.
              </p>

              <p>
                To nie jest losowy quiz marketingowy. To prosty, praktyczny
                kalkulator dla firm, które chcą sprawdzić, czy warto uporządkować
                pracę przez CRM, SaaS, workflow, dokumenty PDF albo wsparcie AI.
              </p>
            </div>
          </div>

          <div className="gift-tool-layout">
            <div className="gift-tool-card gift-tool-card--form">
              <div className="gift-tool-card__top">
                <div>
                  <p className="gift-tool-card__eyebrow">Dane wejściowe</p>
                  <h3>Parametry procesu</h3>
                </div>

                <span className="gift-tool-card__icon" aria-hidden="true">
                  <Calculator size={18} />
                </span>
              </div>

              <div className="gift-tool-form-grid">
                <label>
                  <span>Liczba osób w procesie</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={form.people}
                    onChange={handleChange("people")}
                  />
                </label>

                <label>
                  <span>Powtarzalne godziny tygodniowo</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.hoursPerWeek}
                    onChange={handleChange("hoursPerWeek")}
                  />
                </label>

                <label>
                  <span>Średni koszt godziny pracy</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.hourlyRate}
                    onChange={handleChange("hourlyRate")}
                  />
                </label>

                <label>
                  <span>Waluta</span>
                  <select value={form.currency} onChange={handleChange("currency")}>
                    <option value="EUR">EUR — euro</option>
                    <option value="PLN">PLN — złoty</option>
                    <option value="USD">USD — dollar</option>
                    <option value="GBP">GBP — pound</option>
                  </select>
                </label>

                <label>
                  <span>Powtarzalne zadania miesięcznie</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.tasksPerMonth}
                    onChange={handleChange("tasksPerMonth")}
                  />
                </label>

                <label>
                  <span>Złożoność procesu</span>
                  <select
                    value={form.complexity}
                    onChange={handleChange("complexity")}
                  >
                    <option value="low">Niska — prosty proces</option>
                    <option value="medium">Średnia — kilka kroków</option>
                    <option value="high">Wysoka — wiele wyjątków</option>
                  </select>
                </label>
              </div>

              <div className="gift-tool-note">
                <Sparkles size={16} />
                <p>
                  Wyniki są orientacyjne. Mają pomóc ocenić potencjał procesu,
                  zanim przejdziemy do dokładniejszej analizy wdrożenia.
                </p>
              </div>
            </div>

            <div className="gift-tool-card gift-tool-card--result">
              <div className="gift-tool-card__top gift-tool-card__top--dark">
                <div>
                  <p className="gift-tool-card__eyebrow gift-tool-card__eyebrow--dark">
                    Wynik
                  </p>
                  <h3>Szacowany potencjał</h3>
                </div>

                <span
                  className="gift-tool-card__icon gift-tool-card__icon--dark"
                  aria-hidden="true"
                >
                  <Calculator size={18} />
                </span>
              </div>

              <div className="gift-result-grid">
                <article className="gift-result-box">
                  <span>Miesięczny koszt procesu</span>
                  <strong>{formatCurrency(results.monthlyCost)}</strong>
                  <p>Szacowany koszt pracy poświęcanej na powtarzalne działania.</p>
                </article>

                <article className="gift-result-box gift-result-box--highlight">
                  <span>Potencjał odzysku / mies.</span>
                  <strong>{formatCurrency(results.monthlyPotential)}</strong>
                  <p>Orientacyjna wartość, którą można odzyskać przez lepszy proces.</p>
                </article>

                <article className="gift-result-box">
                  <span>Godziny do odzyskania / mies.</span>
                  <strong>{formatNumber(results.monthlyHoursLost)} h</strong>
                  <p>To około {formatNumber(results.daysRecovered)} dnia pracy.</p>
                </article>

                <article className="gift-result-box">
                  <span>Potencjał roczny</span>
                  <strong>{formatCurrency(results.yearlyPotential)}</strong>
                  <p>Przy podobnym poziomie pracy przez cały rok.</p>
                </article>
              </div>

              <div className="gift-result-summary">
                <div className="gift-result-summary__block">
                  <span>Rekomendacja</span>
                  <p>{results.recommendation}</p>
                </div>

                <div className="gift-result-summary__block">
                  <span>Sugerowany kierunek wdrożenia</span>
                  <p>{results.implementation}</p>
                </div>
              </div>

              <div className="gift-result-actions">
                <Link
                  to="/pl"
                  state={{ scrollTo: "kontakt" }}
                  className="gift-result-actions__button gift-result-actions__button--primary"
                >
                  Zapytaj o wdrożenie
                </Link>

                <Link
                  to="/pl/opisz-projekt"
                  className="gift-result-actions__button gift-result-actions__button--secondary"
                >
                  Opisz projekt dokładniej
                </Link>

                <button
                  type="button"
                  className="gift-result-actions__reset"
                  onClick={handleReset}
                >
                  <RotateCcw size={14} />
                  Resetuj dane
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gift-page-cta">
        <div className="container gift-page-cta__inner">
          <p className="gift-page-cta__kicker">Następny krok</p>

          <h2>
            Chcesz zamienić taki wynik w realny system, automatyzację albo CRM?
          </h2>

          <p className="gift-page-cta__text">
            Możemy przełożyć ten potencjał na konkretne wdrożenie: formularze,
            bazy danych, dokumenty PDF, dashboardy, workflow, integracje API i
            AI jako część realnego procesu.
          </p>

          <div className="gift-page-cta__actions">
            <Link
              to="/pl"
              state={{ scrollTo: "kontakt" }}
              className="gift-page-cta__button gift-page-cta__button--primary"
            >
              Szybki kontakt
            </Link>

            <Link
              to="/pl/opisz-projekt"
              className="gift-page-cta__button gift-page-cta__button--secondary"
            >
              Opisz projekt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default GiftPagePL;