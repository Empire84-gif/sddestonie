import { Link } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

function EnTermsPage() {
  return (
    <main>
      <section className="services-hero legal-hero">
        <img className="services-hero__bg" src={heroBg} alt="" aria-hidden="true" />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Terms and Conditions</h1>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <img src={aiServices} alt="" />
          </div>
        </div>
      </section>

      <section className="legal-page-section">
        <div className="legal-page-section__inner">
          <p className="legal-page-section__brand">
            Solutions Digitales d’Estonie — a brand of Handke Holding OÜ
          </p>

          <p className="legal-page-section__updated">
            Last updated: January 7, 2026
          </p>

          <div className="legal-content">
            <section className="legal-content__section">
              <h2>§1. General provisions</h2>

              <p>
                These Terms and Conditions define the rules for using the website
                operated under the brand <strong>Solutions Digitales d’Estonie</strong>
                (hereinafter: the “Website”).
              </p>

              <p>
                The Website administrator and the business entity operating the Website
                is <strong>Handke Holding OÜ</strong>, a private limited company
                registered under the laws of the Republic of Estonia.
              </p>

              <p className="legal-company-data">
                <strong>Handke Holding OÜ</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Estonia
                <br />
                Registry code: 17387477
                <br />
                EU VAT: EE102932869
              </p>

              <p>
                These Terms and Conditions are prepared in accordance with the laws of
                the Republic of Estonia, in particular the Estonian Law of Obligations
                Act (Võlaõigusseadus).
              </p>

              <p className="legal-highlight">
                By using the Website, the user confirms that they have read and accept
                these Terms and Conditions.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§2. Nature of the Website</h2>

              <p>The Website is informational and contact-oriented in nature.</p>

              <p>
                The content published on the Website does not constitute a legally
                binding offer, but an invitation to contact and start a discussion.
              </p>

              <p>
                The Administrator reserves the right to change, update or remove the
                Website content at any time.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§3. Rules for using the Website</h2>

              <p>
                The user is required to use the Website in a lawful manner, in accordance
                with good practice and with the intended purpose of the Website.
              </p>

              <p>In particular, it is prohibited to:</p>

              <ul>
                <li>take actions that may disrupt the operation of the Website,</li>
                <li>interfere with the source code, forms or security mechanisms,</li>
                <li>use the Website for purposes inconsistent with its nature.</li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§4. Contact and understanding of content</h2>

              <p>
                Contacting the Administrator through the Website, a contact form or
                email constitutes only an inquiry and does not lead to the conclusion of
                a contract.
              </p>

              <p>
                By contacting the Administrator, the user confirms that the content
                published on the Website is understandable to them to the extent
                necessary to initiate contact.
              </p>

              <p>
                In case of any doubts regarding the Website content, the scope of
                information or the rules of personal data processing, the user should
                contact the Administrator to obtain clarification.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§5. Responsibility for Website operation</h2>

              <p>
                The Administrator exercises due care to ensure the proper functioning of
                the Website, but does not guarantee its uninterrupted availability.
              </p>

              <p>The Administrator is not responsible for:</p>

              <ul>
                <li>temporary interruptions in the operation of the Website,</li>
                <li>errors resulting from technical infrastructure or third-party services,</li>
                <li>
                  lack of compatibility of the Website with specific software or devices.
                </li>
              </ul>
            </section>

            <section className="legal-content__section">
              <h2>§6. External links</h2>

              <p>
                The Website may contain links to websites operated by third parties.
              </p>

              <p>
                The Administrator is not responsible for the content, privacy policies
                or operation of such third-party websites.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§7. Copyright and permitted use</h2>

              <p>
                The economic copyrights to the text content, structure, layout and
                concept of the Website belong to the Administrator, unless stated
                otherwise.
              </p>

              <p>
                The Website may use materials provided by third parties, in particular
                stock photos, graphics, icons or emojis, which are used under appropriate
                licences and remain the property of their respective legal owners.
              </p>

              <p>
                The user may use the Website content only within the scope of permitted
                personal use.
              </p>

              <p>
                Commercial use of copyrighted content, structure or layout of the
                Website without the prior consent of the Administrator is prohibited.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§8. Personal data</h2>

              <p>
                Personal data is processed in accordance with applicable law, in
                particular Regulation (EU) 2016/679 (GDPR) and the Estonian Personal
                Data Protection Act (Isikuandmete kaitse seadus).
              </p>

              <p>
                Detailed information regarding the processing of personal data is
                provided in the Privacy Policy available on the Website.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§9. Changes to the Terms and Conditions</h2>

              <p>
                The Administrator reserves the right to amend these Terms and Conditions,
                in particular for legal or organisational reasons.
              </p>

              <p>
                The amended Terms and Conditions apply from the moment they are published
                on the Website.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§10. Governing law</h2>

              <p>These Terms and Conditions are governed by the laws of Estonia.</p>

              <p>
                In matters not regulated by these Terms and Conditions, the relevant
                provisions of Estonian law shall apply.
              </p>
            </section>

            <section className="legal-content__section">
              <h2>§11. Contact</h2>

              <p className="legal-company-data">
                <strong>Email:</strong>{" "}
                <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+37256171770">+372 5617 1770</a>
                <br />
                <strong>Address:</strong>
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Estonia
              </p>
            </section>

            <div className="legal-page-footer">
              <p>
                <Link to="/">← Back to homepage</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnTermsPage;