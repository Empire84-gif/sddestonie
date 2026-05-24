import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="page-section">
      <div className="container page-section__inner">
        <p className="eyebrow">404</p>
        <h1>{t("pages.notFound.title")}</h1>
        <p>{t("pages.notFound.text")}</p>

        <Link to="/pl" className="btn btn-primary">
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;