import { Link } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

function EeTermsPage() {
  return (
    <main>
      <section className="services-hero legal-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Tingimused</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="legal-page-section">
        <div className="legal-page-section__inner">
          <p className="legal-page-section__brand">
            Solutions Digitales d’Estonie — Handke Holding OÜ kaubamärk
          </p>

          <p className="legal-page-section__updated">
            Viimati uuendatud: 7. jaanuar 2026
          </p>

          <div className="legal-content">
            <section className="legal-content__section">
              <h2>§1. Üldsätted</h2>

              <p>
                Käesolevad tingimused määravad kindlaks veebilehe kasutamise reeglid,
                mida hallatakse kaubamärgi{" "}
                <strong>Solutions Digitales d’Estonie</strong> all (edaspidi:
                „Veebileht”).
              </p>

              <p>
                Veebilehe haldaja ja majandustegevust teostav isik on{" "}
                <strong>Handke Holding OÜ</strong>, osaühing, mis on registreeritud
                vastavalt Eesti Vabariigi õigusele.
              </p>

              <p className="legal-company-data">
                <strong>Handke Holding OÜ</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Eesti
                <br />
                Registrikood: 17387477
                <br />
                EL KMKR: EE102932869
              </p>

              <p>
                Käesolevad tingimused on koostatud kooskõlas Eesti Vabariigi õigusega,
                eelkõige võlaõigusseadusega.
              </p>

              <p className="legal-highlight">
                Veebilehe kasutamine tähendab, et kasutaja on tingimustega tutvunud ja
                nõustub nendega.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§2. Veebilehe olemus</h2>

              <p>Veebileht on informatiivse ja kontaktipõhise iseloomuga.</p>

              <p>
                Veebilehel avaldatud sisu ei kujuta endast õiguslikus tähenduses
                siduvat pakkumust, vaid kutset võtta ühendust ja alustada arutelu.
              </p>

              <p>
                Haldajal on õigus Veebilehe sisu igal ajal muuta, uuendada või
                eemaldada.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§3. Veebilehe kasutamise reeglid</h2>

              <p>
                Kasutaja kohustub kasutama Veebilehte seaduslikult, heade tavade
                kohaselt ning vastavalt Veebilehe eesmärgile.
              </p>

              <p>Eelkõige on keelatud:</p>

              <ul>
                <li>tegevused, mis võivad häirida Veebilehe toimimist,</li>
                <li>sekkumine lähtekoodi, vormidesse või turvamehhanismidesse,</li>
                <li>Veebilehe kasutamine eesmärkidel, mis ei vasta selle olemusele.</li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§4. Kontakt ja sisu mõistmine</h2>

              <p>
                Haldajaga ühenduse võtmine Veebilehe, kontaktivormi või e-posti kaudu
                on üksnes päring ega too kaasa lepingu sõlmimist.
              </p>

              <p>
                Haldajaga ühendust võttes kinnitab kasutaja, et Veebilehel avaldatud
                sisu on talle kontakti loomiseks vajalikus ulatuses arusaadav.
              </p>

              <p>
                Kui kasutajal tekib kahtlusi Veebilehe sisu, teabe ulatuse või
                isikuandmete töötlemise reeglite osas, peaks ta pöörduma selgituste
                saamiseks Haldaja poole.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§5. Vastutus Veebilehe toimimise eest</h2>

              <p>
                Haldaja rakendab mõistlikku hoolsust Veebilehe nõuetekohase toimimise
                tagamiseks, kuid ei garanteeri selle katkematut kättesaadavust.
              </p>

              <p>Haldaja ei vastuta:</p>

              <ul>
                <li>Veebilehe ajutiste töökatkestuste eest,</li>
                <li>
                  vigade eest, mis tulenevad tehnilisest taristust või kolmandate
                  isikute teenustest,
                </li>
                <li>
                  Veebilehe ühildumatuse eest konkreetse tarkvara või seadmetega.
                </li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§6. Välislingid</h2>

              <p>
                Veebileht võib sisaldada viiteid kolmandate isikute veebilehtedele.
              </p>

              <p>
                Haldaja ei vastuta nende veebilehtede sisu, privaatsuspoliitika ega
                toimimise eest.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§7. Autoriõigused ja lubatud kasutus</h2>

              <p>
                Varalised autoriõigused Veebilehe tekstisisule, struktuurile,
                kujundusele ja kontseptsioonile kuuluvad Haldajale, kui ei ole
                märgitud teisiti.
              </p>

              <p>
                Veebilehel võidakse kasutada kolmandate isikute materjale, eelkõige
                stock-fotosid, graafikat, ikoone või emotikone, mida kasutatakse
                vastavate litsentside alusel ja mis jäävad nende õiguspäraste omanike
                omandiks.
              </p>

              <p>
                Kasutaja võib Veebilehe sisu kasutada üksnes isikliku lubatud kasutuse
                ulatuses.
              </p>

              <p>
                Veebilehe autoriõigusega kaitstud sisu, struktuuri või kujunduse
                äriline kasutamine ilma Haldaja eelneva nõusolekuta on keelatud.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§8. Isikuandmed</h2>

              <p>
                Isikuandmeid töödeldakse kooskõlas kehtivate õigusaktidega, eelkõige
                Euroopa Parlamendi ja nõukogu määrusega (EL) 2016/679 (GDPR) ning
                Eesti isikuandmete kaitse seadusega.
              </p>

              <p>
                Täpsem teave isikuandmete töötlemise kohta on esitatud Veebilehel
                kättesaadavas privaatsuspoliitikas.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§9. Tingimuste muutmine</h2>

              <p>
                Haldaja jätab endale õiguse tingimusi muuta, eelkõige õiguslikel või
                korralduslikel põhjustel.
              </p>

              <p>
                Muudetud tingimused kehtivad alates nende avaldamisest Veebilehel.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§10. Kohaldatav õigus</h2>

              <p>Käesolevatele tingimustele kohaldatakse Eesti Vabariigi õigust.</p>

              <p>
                Tingimustes reguleerimata küsimustes kohaldatakse asjakohaseid Eesti
                õiguse sätteid.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§11. Kontakt</h2>

              <p className="legal-company-data">
                <strong>E-post:</strong>{" "}
                <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
                <br />
                <strong>Telefon:</strong>{" "}
                <a href="tel:+37256171770">+372 5617 1770</a>
                <br />
                <strong>Aadress:</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Eesti
              </p>
            </section>

            <div className="legal-page-footer">
              <p>
                <Link to="/ee">← Tagasi avalehele</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EeTermsPage;