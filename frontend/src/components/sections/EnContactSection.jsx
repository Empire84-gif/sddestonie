import { Link } from "react-router-dom";

function EnContactSection() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__kicker">Contact</p>

          <h2>Your competitors are already using AI. Now it is your turn.</h2>

          <p className="contact-section__lead">
            Send us a short message describing what you need: a CRM system, SaaS
            platform, online form, PDF generator, automation, AI integration or
            a more organised business process. We will get back to you and
            suggest what kind of solution may make real business sense.
          </p>

          <p className="contact-section__lead">
            If you want to describe your process in more detail right away, you
            can use our{" "}
            <Link to="/describe-project" className="contact-section__inline-link">
              project analysis form
            </Link>
            .
          </p>

          <div className="contact-section__direct">
            <div className="contact-section__line">
              <span>Phone</span>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>

            <div className="contact-section__line">
              <span>Email</span>
              <a href="mailto:office@sddestonie.com">office@sddestonie.com</a>
            </div>

            <address className="contact-section__line">
              <span>Address</span>
              <p>
                Handke Holding OÜ · Harju maakond, Kesklinna linnaosa ·<br />
                Sakala tn 7-2, 10141 Tallinn · Estonia
              </p>
            </address>
          </div>
        </div>

        <form className="contact-form" action="#" method="post">
          <div className="contact-form__row">
            <label>
              Full name
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              Company
              <input type="text" name="company" autoComplete="organization" />
            </label>
          </div>

          <div className="contact-form__row">
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              Project type
              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option value="crm">CRM / admin panel</option>
                <option value="saas">Custom SaaS system</option>
                <option value="ai">AI / workflow automation</option>
                <option value="pdf">PDF generator / documents</option>
                <option value="integration">
                  API / payments / signature integration
                </option>
                <option value="other">Other project</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>

          <div className="contact-form__turnstile">
            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAAC8X-gGY-b-l3tND"
            />
          </div>

          <div className="contact-form__consents">
            <label className="contact-form__check">
              <input type="checkbox" name="privacy_consent" required />

              <span>
                I have read the{" "}
                <Link
                  to="/privacy-policy"
                  className="contact-form__legal-link"
                >
                  PRIVACY POLICY
                </Link>{" "}
                and consent to the processing of my data for the purpose of
                handling this enquiry.
              </span>
            </label>

            <label className="contact-form__check">
              <input type="checkbox" name="terms_consent" required />

              <span>
                I accept the{" "}
                <Link
                  to="/terms"
                  className="contact-form__legal-link"
                >
                  TERMS AND CONDITIONS
                </Link>{" "}
                for using the contact form.
              </span>
            </label>
          </div>

          <div className="contact-form__bottom">
            <p>
              After you submit the form, we will contact you regarding your
              enquiry.
            </p>

            <button type="submit" className="contact-form__button">
              Send enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnContactSection;