import { useTranslation } from "react-i18next";

function AiSystemsPage() {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <div className="container page-section__inner">
        <p className="eyebrow">AI workflow</p>
        <h1>{t("pages.ai.title")}</h1>
        <p>{t("pages.ai.text")}</p>
      </div>
    </section>
  );
}

export default AiSystemsPage;