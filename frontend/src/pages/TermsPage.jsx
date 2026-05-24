import { Link } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

function TermsPage() {
  return (
    <main>
      <section className="services-hero legal-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Regulamin</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="legal-page-section">
        <div className="legal-page-section__inner">
          <p className="legal-page-section__brand">
            Solutions Digitales d’Estonie — marka Handke Holding OÜ
          </p>

          <p className="legal-page-section__updated">
            Ostatnia aktualizacja: 7 stycznia 2026
          </p>

          <div className="legal-content">
            <section className="legal-content__section">
              <h2>§1. Postanowienia ogólne</h2>

              <p>
                Niniejszy Regulamin określa zasady korzystania ze strony internetowej
                prowadzonej pod marką <strong>Solutions Digitales d’Estonie</strong>
                (dalej: „Strona”).
              </p>

              <p>
                Administratorem Strony oraz podmiotem prowadzącym działalność
                gospodarczą jest <strong>Handke Holding OÜ</strong>, spółka z
                ograniczoną odpowiedzialnością zarejestrowana zgodnie z prawem
                Republiki Estońskiej.
              </p>

              <p className="legal-company-data">
                <strong>Handke Holding OÜ</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Estonia
                <br />
                Kod rejestrowy: 17387477
                <br />
                VAT UE: EE102932869
              </p>

              <p>
                Regulamin sporządzony jest zgodnie z prawem Republiki Estońskiej,
                w szczególności z estońską ustawą o zobowiązaniach
                (Võlaõigusseadus).
              </p>

              <p className="legal-highlight">
                Korzystanie ze Strony oznacza zapoznanie się z Regulaminem i jego
                akceptację.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§2. Charakter Strony</h2>

              <p>Strona ma charakter informacyjny i kontaktowy.</p>

              <p>
                Treści zamieszczone na Stronie nie stanowią oferty w rozumieniu
                prawa, lecz zaproszenie do kontaktu i nawiązania rozmów.
              </p>

              <p>
                Administrator zastrzega sobie prawo do zmiany, aktualizacji lub
                usunięcia treści Strony w dowolnym czasie.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§3. Zasady korzystania ze Strony</h2>

              <p>
                Użytkownik zobowiązany jest do korzystania ze Strony w sposób zgodny
                z prawem, dobrymi obyczajami oraz jej przeznaczeniem.
              </p>

              <p>Zabronione jest w szczególności:</p>

              <ul>
                <li>podejmowanie działań mogących zakłócić funkcjonowanie Strony,</li>
                <li>ingerowanie w kod źródłowy, formularze lub zabezpieczenia,</li>
                <li>wykorzystywanie Strony do celów niezgodnych z jej charakterem.</li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§4. Kontakt i zrozumienie treści</h2>

              <p>
                Skontaktowanie się z Administratorem za pośrednictwem Strony,
                formularza kontaktowego lub poczty elektronicznej stanowi wyłącznie
                zapytanie i nie prowadzi do zawarcia umowy.
              </p>

              <p>
                Kontaktując się z Administratorem, Użytkownik oświadcza, że treści
                zamieszczone na Stronie są dla niego zrozumiałe w zakresie niezbędnym
                do nawiązania kontaktu.
              </p>

              <p>
                W przypadku jakichkolwiek wątpliwości co do treści Strony, zakresu
                informacji lub zasad przetwarzania danych, Użytkownik zobowiązuje się
                do skontaktowania się z Administratorem w celu uzyskania wyjaśnień.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§5. Odpowiedzialność za funkcjonowanie Strony</h2>

              <p>
                Administrator dokłada należytej staranności w zapewnieniu prawidłowego
                działania Strony, jednak nie gwarantuje jej nieprzerwanej dostępności.
              </p>

              <p>Administrator nie ponosi odpowiedzialności za:</p>

              <ul>
                <li>czasowe przerwy w działaniu Strony,</li>
                <li>błędy wynikające z infrastruktury technicznej lub usług podmiotów trzecich,</li>
                <li>brak kompatybilności Strony z określonym oprogramowaniem lub urządzeniami.</li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§6. Linki zewnętrzne</h2>

              <p>
                Strona może zawierać odnośniki do stron internetowych podmiotów
                trzecich.
              </p>

              <p>
                Administrator nie ponosi odpowiedzialności za treści, polityki
                prywatności ani funkcjonowanie tych stron.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§7. Prawa autorskie i dozwolony użytek</h2>

              <p>
                Autorskie prawa majątkowe do treści tekstowych, struktury, układu
                oraz koncepcji Strony przysługują Administratorowi, o ile nie wskazano
                inaczej.
              </p>

              <p>
                Strona może wykorzystywać materiały pochodzące od podmiotów trzecich,
                w szczególności zdjęcia stockowe, grafiki, ikony lub emotikony, które
                są używane na podstawie odpowiednich licencji i pozostają własnością
                ich prawnych właścicieli.
              </p>

              <p>
                Użytkownik może korzystać z treści Strony wyłącznie w zakresie
                dozwolonego użytku osobistego.
              </p>

              <p>
                Zabronione jest wykorzystywanie w celach komercyjnych treści
                autorskich, struktury lub układu Strony bez uprzedniej zgody
                Administratora.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§8. Dane osobowe</h2>

              <p>
                Dane osobowe przetwarzane są zgodnie z obowiązującymi przepisami
                prawa, w szczególności z rozporządzeniem (UE) 2016/679 (RODO) oraz
                estońską ustawą Isikuandmete kaitse seadus.
              </p>

              <p>
                Szczegółowe informacje dotyczące przetwarzania danych osobowych
                zawarte są w Polityce Prywatności dostępnej na Stronie.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§9. Zmiany Regulaminu</h2>

              <p>
                Administrator zastrzega sobie prawo do zmiany Regulaminu, w
                szczególności z przyczyn prawnych lub organizacyjnych.
              </p>

              <p>
                Zmieniony Regulamin obowiązuje od momentu jego publikacji na Stronie.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§10. Prawo właściwe</h2>

              <p>Regulamin podlega prawu Republiki Estońskiej.</p>

              <p>
                W sprawach nieuregulowanych Regulaminem zastosowanie mają właściwe
                przepisy prawa estońskiego.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§11. Kontakt</h2>

              <p className="legal-company-data">
                <strong>Email:</strong>{" "}
                <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
                <br />
                <strong>Telefon:</strong>{" "}
                <a href="tel:+37256171770">+372 5617 1770</a>
                <br />
                <strong>Adres:</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Estonia
              </p>
            </section>

            <div className="legal-page-footer">
              <p>
                <Link to="/pl">← Powrót na stronę główną</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsPage;