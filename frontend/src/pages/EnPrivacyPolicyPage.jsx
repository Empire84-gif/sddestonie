import { Link } from "react-router-dom";

import heroBg from "../assets/images/aidivider.png";
import aiServices from "../assets/images/aiservices.png";

function EnPrivacyPolicyPage() {
  return (
    <main>
      <section className="services-hero legal-hero">
        <img
          className="services-hero__bg"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />

        <div className="services-hero__inner container">
          <div className="services-hero__content">
            <h1>Privacy Policy</h1>
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
            Last updated: 4 December 2025
          </p>

          <nav className="legal-toc" aria-label="Table of contents">
            <details open>
              <summary>
                <h2>Table of contents</h2>
                <span aria-hidden="true">+</span>
              </summary>

              <ol>
                <li><a href="#section-1">General provisions</a></li>
                <li><a href="#section-2">Personal data controller</a></li>
                <li><a href="#section-3">Categories of persons whose data we process</a></li>
                <li><a href="#section-4">Scope of personal data processed</a></li>
                <li><a href="#section-5">Purposes and legal grounds for processing personal data</a></li>
                <li><a href="#section-6">Legal bases for processing personal data</a></li>
                <li><a href="#section-7">Sources of personal data</a></li>
                <li><a href="#section-8">Recipients of personal data</a></li>
                <li><a href="#section-9">Transfers of data outside the EEA</a></li>
                <li><a href="#section-10">Personal data retention period</a></li>
                <li><a href="#section-11">Voluntary provision of personal data</a></li>
                <li><a href="#section-12">Data storage location and security measures</a></li>
                <li><a href="#section-13">Rights of data subjects</a></li>
                <li><a href="#section-14">Personal data breaches</a></li>
                <li><a href="#section-15">Automated decision-making and profiling</a></li>
                <li><a href="#section-16">Supervisory authority</a></li>
                <li><a href="#section-17">Jurisdiction and applicable law</a></li>
                <li><a href="#section-18">Updates to this Privacy Policy</a></li>
                <li><a href="#section-19">Marketing and contact with the Controller</a></li>
                <li><a href="#section-20">Cookies</a></li>
                <li><a href="#section-21">Server logs</a></li>
              </ol>
            </details>
          </nav>

          <div className="legal-content">
            <section id="section-1" className="legal-content__section">
              <h2>1. General provisions</h2>

              <p>
                This document constitutes the Privacy Policy of the Solutions
                Digitales d’Estonie (SDE) brand, owned by Handke Holding OÜ,
                a company registered in the Republic of Estonia, with its
                registered address at: Harju maakond, Kesklinna linnaosa,
                Sakala tn 7-2, 10141 Tallinn, Estonia, entered in the Estonian
                Commercial Register under registry code 17387477.
              </p>

              <p>
                Solutions Digitales d’Estonie provides services in the field of
                software development, web application development, process
                automation and the creation of digital solutions and tools
                supporting the activities of companies and individual clients
                within the European Union and the European Economic Area (EEA).
              </p>

              <p>
                The purpose of this Privacy Policy is to present, in a clear,
                transparent and lawful manner, the rules for processing personal
                data of persons:
              </p>

              <ul>
                <li>using the services of Solutions Digitales d’Estonie,</li>
                <li>visiting the website www.sddestonie.com,</li>
                <li>sending quotation requests or using contact forms,</li>
                <li>
                  maintaining business or contractual relations with the
                  Controller.
                </li>
              </ul>

              <p>
                This Privacy Policy defines the rules for processing personal
                data in connection with:
              </p>

              <ul>
                <li>operating and maintaining the website,</li>
                <li>
                  providing software development services, creating web
                  applications, automating processes and implementing digital
                  solutions,
                </li>
                <li>concluding and performing contracts and assignments,</li>
                <li>
                  conducting business, administrative and informational
                  correspondence,
                </li>
                <li>
                  fulfilling legal obligations arising from the laws of the
                  European Union and the Republic of Estonia.
                </li>
              </ul>

              <h3>Legal basis for data processing</h3>

              <p>This Privacy Policy has been prepared in accordance with:</p>

              <ul>
                <li>
                  Regulation (EU) 2016/679 of the European Parliament and of
                  the Council of 27 April 2016 (GDPR),
                </li>
                <li>
                  the Estonian Personal Data Protection Act — Isikuandmete
                  kaitse seadus (RT I, 26.03.2019, 10),
                </li>
                <li>
                  other applicable laws of the Republic of Estonia and the
                  European Union.
                </li>
              </ul>

              <h3>Nature of this document</h3>

              <p>
                This document is informational in nature and serves to fulfil
                the Controller’s information obligation towards data subjects.
                It does not constitute legal advice or an interpretation of
                legal provisions.
              </p>

              <p>
                Any questions regarding the processing of personal data may be
                directed to the Controller by email at: office@sddestonie.com.
              </p>

              <h3>Territorial scope and data transfers</h3>

              <p>
                The services of Solutions Digitales d’Estonie are provided
                within the European Union and the European Economic Area (EEA).
              </p>

              <p>
                Personal data may be transferred to entities from other EU or
                EEA countries only to the extent necessary for the performance
                of services and with appropriate security measures in place.
              </p>

              <p>
                Where personal data is transferred outside the EEA, the
                Controller applies appropriate legal safeguards, in particular:
              </p>

              <ul>
                <li>EU Standard Contractual Clauses (SCCs),</li>
                <li>other mechanisms compliant with Articles 44–49 GDPR.</li>
              </ul>

              <h3>Voluntary provision of data</h3>

              <p>
                Providing personal data is voluntary; however, in certain cases
                it is necessary in order to:
              </p>

              <ul>
                <li>prepare an offer,</li>
                <li>conclude or perform a contract,</li>
                <li>respond to an inquiry.</li>
              </ul>

              <p>
                Failure to provide the required data may prevent the above
                purposes from being fulfilled.
              </p>
            </section>

           


            <section id="section-2" className="legal-content__section">
              <h2>2. Personal data controller</h2>

              <p>
                The personal data controller within the meaning of Article 4(7)
                of Regulation (EU) 2016/679 of the European Parliament and of
                the Council (GDPR) is:
              </p>

              <p className="legal-company-data">
                Handke Holding OÜ
                <br />
                Harju maakond, Kesklinna linnaosa
                <br />
                Sakala tn 7-2, 10141 Tallinn, Estonia
                <br />
                Registry code: 17387477
                <br />
                EU VAT: EE102932869
                <br />
                Email: office@sddestonie.com
                <br />
                Phone: +372 5617 1770
              </p>

              <h3>Status of the Solutions Digitales d’Estonie brand</h3>

              <p>
                Solutions Digitales d’Estonie is a brand owned by Handke
                Holding OÜ and does not constitute a separate legal entity or a
                separate personal data controller.
              </p>

              <p>
                All personal data processed as part of the activities of
                Solutions Digitales d’Estonie is processed by Handke Holding OÜ
                as the Controller, which determines the purposes and means of
                processing personal data in accordance with Article 4(7) GDPR.
              </p>

              <h3>Language of communication</h3>

              <p>
                The primary operational language of the Controller is English.
              </p>

              <p>
                Written communication, including inquiries and requests
                concerning the processing of personal data, may be conducted in
                any official language of the European Union or the European
                Economic Area (EEA). The Controller ensures that such
                correspondence is reviewed in accordance with applicable legal
                provisions.
              </p>

              <h3>Data Protection Officer</h3>

              <p>
                The Controller is not required to appoint a Data Protection
                Officer (DPO), because the nature, scope and purposes of
                personal data processing do not meet the criteria set out in
                Article 37(1) GDPR.
              </p>

              <p>
                In matters related to personal data protection, the Controller
                may be contacted directly by email at: office@sddestonie.com.
              </p>

              <h3>Scope of the Controller’s responsibility</h3>

              <p>The Controller is responsible in particular for:</p>

              <ul>
                <li>
                  ensuring that personal data processing complies with the GDPR
                  and the Estonian Personal Data Protection Act —
                  Isikuandmete kaitse seadus,
                </li>
                <li>
                  implementing and applying appropriate technical and
                  organisational measures to protect personal data,
                </li>
                <li>facilitating the exercise of data subjects’ rights,</li>
                <li>
                  cooperating with the competent supervisory authority for
                  personal data protection in the Republic of Estonia —
                  Andmekaitse Inspektsioon.
                </li>
              </ul>
            </section>

            <section id="section-3" className="legal-content__section">
              <h2>3. Categories of persons whose data we process</h2>

              <p>
                As part of the activities of Solutions Digitales d’Estonie,
                owned by Handke Holding OÜ, personal data is processed only to
                the extent necessary for the proper provision of software
                development, project-related and administrative services.
              </p>

              <p>
                Personal data is processed in a transparent, adequate and
                limited manner, restricted to what is necessary in relation to
                the purposes for which it is collected, in accordance with the
                principle of data minimisation referred to in Article 5(1)(c)
                GDPR.
              </p>

              <p>
                The Controller processes personal data of the following
                categories of persons:
              </p>

              <h3>3.1. Individual clients</h3>

              <p>
                Natural persons using the services of Solutions Digitales
                d’Estonie, in particular those ordering the development of
                websites, applications, automations or other digital solutions.
              </p>

              <p>
                The processed data includes in particular: full name, email
                address, telephone number, billing data and information provided
                as part of the cooperation.
              </p>

              <h3>3.2. Business clients and company representatives</h3>

              <p>
                Representatives of enterprises, companies or other organisations
                using the services of Solutions Digitales d’Estonie.
              </p>

              <p>
                The processed data includes in particular: full name, business
                position, business email address, telephone number and data
                identifying the entity on whose behalf the person acts, such as
                company name, address and tax or VAT number.
              </p>

              <h3>3.3. Potential clients and contractors</h3>

              <p>
                Natural persons, including representatives of enterprises or
                organisations, who contact the Controller in order to obtain
                information about the offer, cooperation terms or to establish a
                business relationship.
              </p>

              <p>
                Personal data may be provided directly by the data subject, for
                example through a contact form, email or telephone conversation,
                and may also originate from publicly available sources, in
                particular company websites or professional business platforms,
                such as LinkedIn.
              </p>

              <p>
                The processing of personal data in this scope is carried out on
                the basis of the Controller’s legitimate interest consisting in
                conducting informational activities, establishing and maintaining
                business relationships and developing the business, in
                accordance with Article 6(1)(f) GDPR.
              </p>

              <p>
                Persons whose data is processed on this basis have the right to
                object to the processing of their personal data at any time, in
                accordance with Article 21 GDPR.
              </p>

              <h3>3.4. Suppliers and technical partners</h3>

              <p>
                Natural persons conducting business activity and representatives
                of entities cooperating with Solutions Digitales d’Estonie in
                the field of auxiliary services, such as hosting, graphic
                design, accounting, translations or IT support.
              </p>

              <p>
                Personal data is processed for the purpose of concluding and
                performing a contract or fulfilling legal obligations related to
                the conducted business activity.
              </p>

              <h3>3.5. Persons contacting the Controller</h3>

              <p>
                Persons submitting inquiries, opinions or requests via contact
                forms, email, telephone or other communication channels.
              </p>

              <p>
                The processed data includes basic contact details and the
                content of correspondence and is used solely for the purpose of
                responding, handling the inquiry or resolving the reported
                matter.
              </p>

              <h3>3.6. Representatives of public authorities and institutions</h3>

              <p>
                Employees or representatives of public administration bodies,
                state institutions and supervisory authorities with whom the
                Controller maintains contact in connection with the performance
                of obligations arising from the laws of the Republic of Estonia
                and the European Union.
              </p>

              <h3>Additional notes</h3>

              <p>
                The Controller does not obtain personal data from undisclosed
                sources and does not carry out systematic monitoring of data
                subjects.
              </p>

              <p>
                All personal data is processed in accordance with the principles
                of lawfulness, fairness, transparency, minimisation, integrity
                and confidentiality set out in Article 5 GDPR and § 11 of the
                Estonian Personal Data Protection Act — Isikuandmete kaitse
                seadus.
              </p>
            </section>

            <section id="section-4" className="legal-content__section">
              <h2>4. Scope of personal data processed</h2>

              <p>
                The scope of personal data processed depends on the nature of
                the relationship with the data subject and the purpose of the
                processing.
              </p>

              <p>
                Personal data is processed in an adequate, limited and
                proportionate manner, in accordance with the principle of data
                minimisation resulting from Article 5(1)(c) GDPR and § 11(1)
                of the Estonian Personal Data Protection Act — Isikuandmete
                kaitse seadus.
              </p>

              <p>
                The Controller may process the following categories of personal
                data:
              </p>

              <h3>4.1. Identification and contact data</h3>

              <ul>
                <li>full name,</li>
                <li>email address, whether business or private,</li>
                <li>telephone number,</li>
                <li>
                  correspondence or billing address, where required for issuing
                  an invoice,
                </li>
                <li>
                  company data, such as name, address, tax or EU VAT number and
                  website,
                </li>
                <li>position or role within the company.</li>
              </ul>

              <p>
                This data is necessary to establish and maintain contact,
                prepare an offer, perform a contract or conduct business
                correspondence.
              </p>

              <h3>4.2. Data related to projects and business cooperation</h3>

              <ul>
                <li>data of client and contractor representatives,</li>
                <li>
                  information contained in contracts, orders, project
                  specifications or briefs,
                </li>
                <li>
                  data necessary for settlements, such as payments, invoices and
                  bills,
                </li>
                <li>email correspondence and cooperation history,</li>
                <li>
                  files and materials provided by the client for the purpose of
                  performing the service, such as texts, graphics, screenshots
                  and technical documentation.
                </li>
              </ul>

              <h3>4.3. Data obtained from public sources</h3>

              <ul>
                <li>
                  data made publicly available on websites, B2B platforms or
                  professional portals, such as LinkedIn,
                </li>
                <li>
                  contact information of company representatives published for
                  business purposes.
                </li>
              </ul>

              <p>
                Such data is processed in accordance with Article 14 GDPR, with
                the obligation to inform the data subject within an appropriate
                time after obtaining the data, unless the law provides for an
                exception.
              </p>

              <h3>4.4. Technical and operational data</h3>

              <p>
                When using the website www.sddestonie.com, basic technical data
                may be automatically recorded, such as:
              </p>

              <ul>
                <li>IP address of the device,</li>
                <li>browser and operating system identifier,</li>
                <li>date and time of connection,</li>
                <li>visited page or resource.</li>
              </ul>

              <p>
                This data is processed solely to ensure security, maintain the
                continuity of the website’s operation and prevent abuse, such as
                attempted unauthorised access or server overload.
              </p>

              <p>
                Technical data is not used for marketing purposes or profiling,
                and the Controller does not use it to conduct analyses intended
                to track user activity.
              </p>

              <h3>
                4.5. Data related to signing or approving electronic documents
              </h3>

              <p>
                When signing or approving documents electronically through
                SignRequest / Dropbox Sign or other equivalent solutions, an
                audit trail may be generated, containing in particular:
              </p>

              <ul>
                <li>IP address,</li>
                <li>date and time of signing,</li>
                <li>
                  identification data of the signer, such as full name and
                  email address.
                </li>
              </ul>

              <p>
                The purpose of processing this data is to ensure the
                authenticity of the signature and the integrity of the document.
              </p>

              <p>
                The legal basis for the processing is Article 6(1)(f) GDPR — the
                Controller’s legitimate interest consisting in ensuring the
                security and reliability of concluded contracts and documents.
              </p>

              <h3>
                4.6. Technical data related to system maintenance and backups
              </h3>

              <p>
                In order to maintain service continuity and information
                security, the Controller may process technical data related to
                the operation of systems and infrastructure, in particular:
              </p>

              <ul>
                <li>
                  system identifiers and authentication data, to the extent
                  necessary for access control,
                </li>
                <li>system logs and event logs,</li>
                <li>backup copies of files and correspondence.</li>
              </ul>

              <p>
                This data is stored on servers located within the European
                Economic Area (EEA) and protected by appropriate security
                measures, including encryption, in accordance with Article 32
                GDPR.
              </p>

              <h3>4.7. Special categories of data — sensitive data</h3>

              <p>
                As a rule, the Controller does not process special categories of
                personal data within the meaning of Article 9 GDPR, such as data
                concerning health, political opinions, ethnic origin, religious
                beliefs or sexual orientation.
              </p>

              <p>
                If the data subject voluntarily provides such data, for example
                in the content of a message or in an attachment, it is processed
                only to the extent necessary and in accordance with the
                appropriate legal basis, in particular:
              </p>

              <ul>
                <li>
                  on the basis of explicit consent, in accordance with Article
                  9(2)(a) GDPR, or
                </li>
                <li>
                  to the extent required by applicable law, where such law
                  applies.
                </li>
              </ul>

              <h3>Additional notes</h3>

              <p>
                The Controller does not obtain personal data from undisclosed
                sources, does not carry out profiling and does not use automated
                decision-making.
              </p>

              <p>
                The website of Solutions Digitales d’Estonie does not use
                cookies or analytical tools that track user activity.
              </p>

              <p>
                Personal data is processed solely for purposes related to the
                provision of software development and technical services, in
                accordance with the principles of transparency and security set
                out in Articles 5 and 32 GDPR, as well as § 11 of the Estonian
                Personal Data Protection Act — Isikuandmete kaitse seadus.
              </p>
            </section>

            <section id="section-5" className="legal-content__section">
              <h2>5. Purposes and legal grounds for processing personal data</h2>

              <p>
                Solutions Digitales d’Estonie, owned by Handke Holding OÜ,
                processes personal data only to the extent necessary for
                conducting lawful business activity, in a fair, transparent and
                proportionate manner.
              </p>

              <p>
                Processing is carried out in accordance with the principles set
                out in Articles 5 and 6 of Regulation (EU) 2016/679 (“GDPR”) and
                § 10–11 of the Estonian Personal Data Protection Act —
                Isikuandmete kaitse seadus.
              </p>

              <p>
                The Controller ensures that personal data is processed only for
                clearly specified purposes, in accordance with the purpose
                limitation principle, and will not be further processed in a
                manner incompatible with those purposes.
              </p>

              <h3>5.1. Preparing an offer and establishing cooperation</h3>

              <p>
                Processing of data in order to respond to an inquiry, prepare an
                offer of services or take steps before entering into a contract.
              </p>

              <p>
                Legal basis: Article 6(1)(b) GDPR — taking steps at the request
                of the data subject prior to entering into a contract.
              </p>

              <h3>5.2. Performance of contracts and assignments</h3>

              <p>
                Processing of data of clients, contractors, partners and
                suppliers for the purpose of concluding and performing a
                contract concerning software development services, website
                maintenance or software development.
              </p>

              <p>Legal basis:</p>

              <ul>
                <li>Article 6(1)(b) GDPR — performance of a contract,</li>
                <li>
                  Article 6(1)(c) GDPR — legal obligation arising from tax and
                  accounting regulations, in particular § 12–13 of the Estonian
                  Accounting Act — Raamatupidamise seadus.
                </li>
              </ul>

              <h3>5.3. Conducting correspondence and handling inquiries</h3>

              <p>
                Processing of data of persons contacting Solutions Digitales
                d’Estonie via forms, email, telephone or other communication
                channels for the purpose of conducting ongoing correspondence
                and providing responses.
              </p>

              <p>
                Legal basis: Article 6(1)(f) GDPR — the Controller’s legitimate
                interest consisting in providing responses, maintaining contact
                and ensuring the proper handling of business communication.
              </p>

              <h3>5.4. Settlements, accounting and archiving</h3>

              <p>
                Processing of financial and documentation data necessary for
                issuing invoices, maintaining accounting and tax settlements and
                archiving documents for the period required by Estonian law.
              </p>

              <p>Legal basis:</p>

              <ul>
                <li>Article 6(1)(c) GDPR — legal obligation of the Controller,</li>
                <li>
                  § 12–13 of the Estonian Accounting Act — Raamatupidamise
                  seadus — the obligation to retain documentation for at least
                  7 years.
                </li>
              </ul>

              <h3>5.5. Information and infrastructure security</h3>

              <p>
                Processing of technical data, such as IP address, system logs
                and server access data, in order to ensure the security of IT
                systems, prevent abuse and data loss, maintain backups and
                ensure service continuity.
              </p>

              <p>Legal basis:</p>

              <ul>
                <li>
                  Article 6(1)(f) GDPR — the Controller’s legitimate interest in
                  ensuring the security of information and services,
                </li>
                <li>
                  § 11 of the Estonian Personal Data Protection Act —
                  Isikuandmete kaitse seadus — the obligation to ensure data
                  integrity and confidentiality.
                </li>
              </ul>

              <h3>5.6. Signing electronic documents</h3>

              <p>
                Processing of data in connection with the signing of electronic
                documents using SignRequest / Dropbox Sign or other equivalent
                tools, in order to confirm the authenticity of the signature and
                the integrity of the document.
              </p>

              <p>Legal basis:</p>

              <ul>
                <li>
                  Article 6(1)(b) GDPR — performance of a contract or taking
                  steps prior to entering into a contract, depending on the stage
                  of cooperation,
                </li>
                <li>
                  Article 6(1)(f) GDPR — the Controller’s legitimate interest
                  consisting in ensuring the security and reliability of
                  concluded contracts.
                </li>
              </ul>

              <h3>5.7. Establishing, pursuing and defending claims</h3>

              <p>
                Processing of data for the purpose of establishing, pursuing or
                defending legal claims, including in court, administrative or
                mediation proceedings.
              </p>

              <p>
                Legal basis: Article 6(1)(f) GDPR — the Controller’s legitimate
                interest consisting in protecting its rights and interests.
              </p>

              <h3>5.8. Performing obligations towards public authorities</h3>

              <p>
                Processing and transferring data to competent public
                administration, tax or judicial authorities where this results
                from applicable laws of the Republic of Estonia or European
                Union law.
              </p>

              <p>Legal basis:</p>

              <ul>
                <li>Article 6(1)(c) GDPR — legal obligation of the Controller,</li>
                <li>§ 10(1)(2) of the Estonian Personal Data Protection Act.</li>
              </ul>

              <h3>5.9. No profiling or automated decision-making</h3>

              <p>
                The Controller does not carry out automated decision-making,
                including profiling, within the meaning of Article 22 GDPR.
              </p>

              <p>
                All decisions concerning clients, contractors and business
                partners are made individually by authorised persons.
              </p>
            </section>

            <section id="section-6" className="legal-content__section">
              <h2>6. Legal bases for processing personal data</h2>

              <p>
                The Controller processes personal data only in cases where there
                is a clear and lawful basis for such processing arising from:
              </p>

              <ul>
                <li>
                  Regulation (EU) 2016/679 of the European Parliament and of
                  the Council of 27 April 2016 (GDPR),
                </li>
                <li>
                  the Estonian Personal Data Protection Act — Isikuandmete
                  kaitse seadus (IKS, RT I, 26.03.2019, 10).
                </li>
              </ul>

              <p>
                Personal data is always processed in accordance with the
                principles set out in Article 5 GDPR and § 11 IKS, in
                particular the principles of lawfulness, fairness,
                transparency, purpose limitation, data minimisation, integrity,
                confidentiality and accountability.
              </p>

              <h3>6.1. Bases for processing personal data under Article 6 GDPR</h3>

              <p>
                The Controller processes personal data on the following legal
                bases:
              </p>

              <h4>a) Consent of the data subject</h4>
              <br />

              <p>Article 6(1)(a) GDPR; § 10(1) IKS</p>

              <p>
                This basis applies in situations where the data subject
                voluntarily and explicitly provides personal data that is not
                required for the performance of a contract, in particular as
                part of voluntary correspondence or by submitting project
                materials containing additional information.
              </p>

              <p>
                Consent may be withdrawn at any time, without affecting the
                lawfulness of processing carried out before its withdrawal, in
                accordance with Article 7(3) GDPR.
              </p>

              <h4>b) Performance of a contract or steps prior to entering into a contract</h4>
              <br />

              <p>Article 6(1)(b) GDPR; § 10(1)(2) IKS</p>

              <p>
                This basis includes the processing of personal data for the
                purpose of:
              </p>

              <ul>
                <li>
                  preparing, concluding and performing contracts with clients
                  and contractors,
                </li>
                <li>
                  providing software development, project-related or technical
                  services,
                </li>
                <li>
                  conducting ongoing working contact and handling cooperation.
                </li>
              </ul>

              <h4>c) Compliance with a legal obligation imposed on the Controller</h4>
              <br />

              <p>Article 6(1)(c) GDPR; § 10(1)(3) IKS</p>

              <p>
                This basis includes the processing of personal data required by
                the laws of the Republic of Estonia and the European Union, in
                particular in relation to:
              </p>

              <ul>
                <li>
                  maintaining and storing accounting and tax documentation in
                  accordance with § 12–13 of the Estonian Accounting Act —
                  Raamatupidamise seadus, with a retention period of at least
                  7 years,
                </li>
                <li>tax and reporting obligations,</li>
                <li>
                  fulfilling obligations towards public administration bodies
                  and control authorities.
                </li>
              </ul>

              <h4>d) Legitimate interest of the Controller</h4>
              <br />

              <p>Article 6(1)(f) GDPR; § 11(2) IKS</p>

              <p>
                The Controller processes personal data to the extent necessary
                to pursue its legitimate interests, such as:
              </p>

              <ul>
                <li>conducting ongoing correspondence and handling inquiries,</li>
                <li>
                  ensuring the security of IT systems, documents and technical
                  infrastructure,
                </li>
                <li>maintaining backups and system logs,</li>
                <li>
                  establishing, pursuing or defending legal claims.
                </li>
              </ul>

              <p>
                In each case, the Controller assesses whether its interest does
                not override the rights and freedoms of the data subject, in
                accordance with Article 6(1)(f) GDPR in conjunction with Recital
                47 GDPR.
              </p>

              <p>
                A person whose data is processed on this basis has the right to
                object to the processing of personal data in accordance with
                Article 21 GDPR.
              </p>

              <h3>6.2. Processing of special categories of data under Article 9 GDPR</h3>

              <p>
                As a rule, the Controller does not process special categories of
                personal data within the meaning of Article 9(1) GDPR.
              </p>

              <p>
                If the data subject voluntarily discloses such data, for example
                in the content of a message, attachment or document, it is
                processed only:
              </p>

              <ul>
                <li>
                  on the basis of the explicit consent of the data subject,
                  pursuant to Article 9(2)(a) GDPR and § 21 IKS, or
                </li>
                <li>
                  to the extent required by mandatory provisions of law.
                </li>
              </ul>

              <p>
                Such data is subject to additional technical and organisational
                protection measures in accordance with Article 32 GDPR.
              </p>

              <h3>6.3. General principles of data processing</h3>

              <p>
                The Controller ensures that all personal data processing
                operations are carried out in accordance with:
              </p>

              <ul>
                <li>
                  Articles 5 and 6 GDPR — the principles of lawfulness, purpose
                  limitation, data minimisation, integrity, confidentiality and
                  accountability,
                </li>
                <li>
                  § 11 IKS — the principle of proportionality, fairness and data
                  adequacy,
                </li>
                <li>
                  Article 32 GDPR — the principles of processing security,
                  including encryption, access control and backups,
                </li>
                <li>
                  Article 24 GDPR — the principle of the Controller’s
                  accountability.
                </li>
              </ul>

              <p>
                The Controller does not carry out automated decision-making or
                profiling within the meaning of Article 22 GDPR.
              </p>

              <h3>6.4. Lawfulness assessment and internal documentation</h3>

              <p>
                In order to ensure full compliance with the GDPR and the laws of
                the Republic of Estonia, the Controller maintains and updates in
                particular:
              </p>

              <ul>
                <li>
                  the Record of Processing Activities in accordance with Article
                  30 GDPR,
                </li>
                <li>
                  Legitimate Interest Assessments in cases where data is
                  processed on the basis of Article 6(1)(f) GDPR,
                </li>
                <li>
                  an information security and personal data protection policy,
                </li>
                <li>
                  personal data breach response procedures in accordance with
                  Articles 33–34 GDPR and § 23 IKS.
                </li>
              </ul>
            </section>

            <section id="section-7" className="legal-content__section">
              <h2>7. Sources of personal data</h2>

              <p>
                Personal data processed by Solutions Digitales d’Estonie, owned
                by Handke Holding OÜ, comes both directly from data subjects and
                from lawful, publicly available sources.
              </p>

              <p>
                The Controller acts in accordance with Article 14 GDPR and
                § 14–15 of the Estonian Personal Data Protection Act —
                Isikuandmete kaitse seadus (IKS). Where data is obtained
                indirectly, the Controller is required to inform the data
                subject of the source of their data without undue delay and no
                later than within the time limits provided for in Article 14(3)
                GDPR, unless a statutory exception applies.
              </p>

              <h3>7.1. Data obtained directly from data subjects</h3>

              <p>
                Personal data may be provided voluntarily as part of ongoing
                communication and cooperation, in particular:
              </p>

              <ul>
                <li>
                  through email messages, telephone conversations and online
                  messengers,
                </li>
                <li>
                  through contact forms on the website www.sddestonie.com,
                </li>
                <li>
                  during online meetings or direct business conversations,
                </li>
                <li>
                  as part of project materials, documents or files necessary for
                  the performance of a contract.
                </li>
              </ul>

              <h3>7.2. Data of clients, contractors and business partners</h3>

              <p>
                Data of company representatives, clients and business partners
                may come from:
              </p>

              <ul>
                <li>
                  direct business contacts, such as email, telephone or
                  meetings,
                </li>
                <li>
                  official websites of companies and organisations,
                </li>
                <li>
                  company and professional profiles on services such as
                  LinkedIn,
                </li>
                <li>
                  public business registers, including the Estonian Äriregister
                  — E-Business Register,
                </li>
                <li>
                  industry events and networking contacts.
                </li>
              </ul>

              <p>
                This data is used only to the extent necessary to establish or
                maintain cooperation and to pursue the Controller’s business
                purposes.
              </p>

              <h3>
                7.3. Data of representatives of public institutions and
                administrative authorities
              </h3>

              <p>
                This data comes from official correspondence, such as letters,
                emails and electronic documents, as well as from public
                professional sources, and is processed only to the extent
                resulting from legal provisions, in accordance with Article
                6(1)(c) GDPR and § 10 IKS.
              </p>

              <h3>7.4. Data obtained from other lawful sources</h3>

              <p>
                The Controller may also obtain data from lawful, publicly
                available sources, such as:
              </p>

              <ul>
                <li>
                  public industry directories and B2B contact registers,
                </li>
                <li>
                  information portals or websites containing company contact
                  details published for business purposes,
                </li>
                <li>
                  social media — only to the extent that the person has made
                  professional information publicly available, for example on a
                  LinkedIn profile or company page.
                </li>
              </ul>

              <p>
                The Controller does not obtain data from private accounts, does
                not use hidden data collection methods and does not process data
                originating from non-public sources.
              </p>

              <h3>7.5. Technical data related to electronic signatures</h3>

              <p>
                When signing electronic documents, such as contracts or forms,
                through SignRequest / Dropbox Sign or other equivalent systems,
                technical and identification data may be automatically recorded,
                in particular:
              </p>

              <ul>
                <li>IP address of the device,</li>
                <li>date and time of signing,</li>
                <li>
                  identifiers related to the signing process, such as user or
                  device identifiers, where generated by the system.
                </li>
              </ul>

              <p>
                The purpose of processing this data is to ensure the
                authenticity of the signature, the integrity of the document and
                the reliability of concluded contracts.
              </p>

              <p>
                The legal basis for the processing is Article 6(1)(f) GDPR and
                § 11 IKS.
              </p>

              <h3>7.6. Technical data from the web server</h3>

              <p>
                When using the website www.sddestonie.com, basic technical data
                may be automatically recorded, such as:
              </p>

              <ul>
                <li>IP address of the device,</li>
                <li>browser type and version,</li>
                <li>operating system,</li>
                <li>date and time of connection,</li>
                <li>server log files.</li>
              </ul>

              <p>
                This data is processed solely for the purpose of ensuring the
                security, stability and proper operation of the website, in
                accordance with Article 6(1)(f) GDPR and § 11 IKS, namely the
                principle of integrity and confidentiality.
              </p>

              <p>
                The Controller does not carry out profiling or systematic
                monitoring of users and does not use tracking technologies for
                marketing purposes.
              </p>
            </section>

                        <section id="section-8" className="legal-content__section">
              <h2>8. Recipients of personal data</h2>

              <p>
                Personal data may be transferred only to trusted entities that
                support the Controller in conducting business, providing
                services or fulfilling legal obligations, as well as to public
                authorities where such an obligation results from the laws of
                the Republic of Estonia or the European Union.
              </p>

              <p>
                All disclosures and transfers of data are carried out in
                accordance with the principles set out in Articles 28 and 44–49
                GDPR and with regard to the provisions of the Estonian Personal
                Data Protection Act — Isikuandmete kaitse seadus (IKS), while
                respecting the principles of minimisation, confidentiality and
                purpose limitation.
              </p>

              <h3>Categories of data recipients</h3>

              <h3>
                8.1. Technical and organisational entities supporting the
                Controller’s activities
              </h3>

              <p>
                Personal data may be transferred or disclosed to entities
                providing auxiliary services to the Controller, in particular:
              </p>

              <ul>
                <li>
                  hosting, server and email service providers, including
                  Hostinger International Ltd.,
                </li>
                <li>email and online communication operators,</li>
                <li>providers of IT systems and cloud solutions,</li>
                <li>
                  providers of electronic signature services, such as
                  SignRequest / Dropbox Sign,
                </li>
                <li>accounting and bookkeeping offices,</li>
                <li>law firms and business advisers,</li>
                <li>
                  entities providing technical support and IT infrastructure
                  maintenance services.
                </li>
              </ul>

              <p>
                These entities process personal data only to the extent
                necessary to provide services to the Controller and, where they
                act as processors, on the basis of an appropriate Data
                Processing Agreement, in accordance with Article 28 GDPR.
              </p>

              <p>
                In the field of hosting, server infrastructure and email, the
                Controller uses the services of Hostinger International Ltd.,
                with data stored and processed on infrastructure located within
                the European Union.
              </p>

              <p>
                Each processor is required in particular to:
              </p>

              <ul>
                <li>maintain confidentiality,</li>
                <li>
                  apply appropriate technical and organisational measures in
                  accordance with Article 32 GDPR and the relevant legal
                  provisions,
                </li>
                <li>
                  process data only on documented instructions from the
                  Controller, unless the obligation to process data results
                  directly from legal provisions.
                </li>
              </ul>

              <h3>8.2. Public authorities and institutions</h3>

              <p>
                Personal data may be transferred only to authorities authorised
                to request it under applicable law, in particular:
              </p>

              <ul>
                <li>
                  Maksu- ja Tolliamet — the Estonian Tax and Customs Board,
                </li>
                <li>
                  Andmekaitse Inspektsioon — the Estonian data protection
                  supervisory authority,
                </li>
                <li>
                  courts, law enforcement authorities and other control bodies,
                </li>
                <li>
                  authorities of the European Union and the European Economic
                  Area, to the extent resulting from applicable regulations.
                </li>
              </ul>

              <p>
                Data is transferred to such entities only where required by law
                and to the minimum extent necessary for the Controller to fulfil
                its obligations.
              </p>

              <h3>8.3. Service providers involved in project cooperation</h3>

              <p>
                In certain cases, personal data may be transferred to entities
                cooperating in the implementation of IT projects, such as
                independent contractors or subcontractors performing specific
                technical tasks.
              </p>

              <p>
                These entities process data only to the extent necessary to
                perform the entrusted task and on the basis of an appropriate
                agreement, including, where applicable, a data processing
                agreement in accordance with Article 28 GDPR.
              </p>

              <h3>Rules for data transfers</h3>

              <p>
                All transfers of personal data are made only to the extent
                necessary to achieve the purposes set out in this Policy and on
                the basis of an appropriate legal basis under Article 6 GDPR.
              </p>

              <p>
                The Controller ensures that all data recipients process the data
                in accordance with the principles of security and
                confidentiality set out in Article 32 GDPR and § 11 of the
                Estonian Personal Data Protection Act — Isikuandmete kaitse
                seadus.
              </p>

              <p>
                Personal data is not transferred to social media portals or
                advertising platforms and is not used for marketing, advertising
                or profiling purposes.
              </p>

              <p>
                The Controller does not sell personal data and does not disclose
                it to third parties without a legal basis.
              </p>
            </section>

            <section id="section-9" className="legal-content__section">
              <h2>9. Transfers of data outside the European Economic Area (EEA)</h2>

              <p>
                As part of the activities of Solutions Digitales d’Estonie,
                owned by Handke Holding OÜ, personal data may be processed using
                tools and services provided by external entities which, in
                certain cases, may involve the transfer of personal data outside
                the European Economic Area (EEA).
              </p>

              <p>
                Each such transfer is carried out only to the extent necessary
                for the achievement of specific processing purposes and in
                accordance with Articles 44–49 GDPR, with appropriate legal
                safeguards applied.
              </p>

              <h3>9.1. Cloudflare</h3>

              <p>
                The website of Solutions Digitales d’Estonie uses Cloudflare
                services, in particular for:
              </p>

              <ul>
                <li>protection against abuse and network attacks,</li>
                <li>securing contact forms through Cloudflare Turnstile,</li>
                <li>handling network traffic and technical logs.</li>
              </ul>

              <p>
                Due to the global nature of Cloudflare’s infrastructure,
                technical data, such as IP address, connection information or
                system logs, may be processed on servers located outside the
                EEA, including in the United States.
              </p>

              <p>
                Data transfers may take place on the basis of:
              </p>

              <ul>
                <li>
                  EU Standard Contractual Clauses (SCCs),
                </li>
                <li>
                  and, where applicable, adequacy decisions, such as the EU–US
                  Data Privacy Framework.
                </li>
              </ul>

              <h3>9.2. Whereby</h3>

              <p>
                Solutions Digitales d’Estonie uses Whereby for online meetings
                and communication with clients and business partners.
              </p>

              <p>
                Data processed as part of meetings, such as IP address,
                connection data and technical metadata, may be processed on
                servers located both within and outside the EEA, depending on
                the location of meeting participants and the network
                infrastructure used at a given time.
              </p>

              <p>
                Whereby applies appropriate legal safeguards, including EU
                Standard Contractual Clauses (SCCs), in accordance with Articles
                44–49 GDPR.
              </p>

              <h3>9.3. SignRequest / Dropbox Sign</h3>

              <p>
                Solutions Digitales d’Estonie uses SignRequest / Dropbox Sign
                for signing electronic documents.
              </p>

              <p>
                In connection with this service, the following data in
                particular may be processed:
              </p>

              <ul>
                <li>full name of the signing person,</li>
                <li>email address,</li>
                <li>IP address,</li>
                <li>date and time of signing the document,</li>
                <li>the document audit trail.</li>
              </ul>

              <p>
                Use of this service may involve the transfer of personal data
                outside the EEA, in particular to the United States. Such
                transfers are carried out on the basis of EU Standard
                Contractual Clauses (SCCs), in accordance with Article 46 GDPR.
              </p>

              <h3>9.4. Safeguards and general principles</h3>

              <p>The Controller ensures that:</p>

              <ul>
                <li>
                  personal data is transferred outside the EEA only where this
                  is necessary to achieve specific processing purposes,
                </li>
                <li>
                  each processor applies appropriate technical and
                  organisational measures ensuring data security, in accordance
                  with Article 32 GDPR,
                </li>
                <li>
                  transfers of data are carried out only on the basis of valid
                  and lawful personal data protection mechanisms under Articles
                  44–49 GDPR.
                </li>
              </ul>

              <p>
                The Controller does not transfer personal data outside the EEA
                in an uncontrolled manner or without an appropriate legal basis.
              </p>
            </section>

                        <section id="section-10" className="legal-content__section">
              <h2>10. Personal data retention period</h2>

              <p>
                The Controller stores personal data only for the period
                necessary to achieve the purposes for which it was collected,
                in accordance with the storage limitation principle set out in
                Article 5(1)(e) of Regulation (EU) 2016/679 (GDPR) and the
                applicable laws of the Republic of Estonia.
              </p>

              <p>
                After the indicated retention periods have expired, personal
                data is permanently deleted, anonymised or archived in a manner
                that prevents identification of the person, unless generally
                applicable legal provisions, in particular tax, accounting or
                archiving regulations, require further storage.
              </p>

              <h3>10.1. Data of clients and contractors</h3>

              <p>
                a) Data processed for the purpose of preparing, concluding and
                performing contracts, on the basis of Article 6(1)(b) GDPR, is
                stored for the duration of the contract and, after its
                termination, until the limitation period for claims expires, as
                a rule for no less than 3 years, unless specific provisions
                provide for a longer period.
              </p>

              <p>
                b) Data processed for the purpose of ongoing business contact,
                handling inquiries and cooperation, on the basis of Article
                6(1)(f) GDPR — the Controller’s legitimate interest — is stored
                for the duration of the cooperation or until the contact in a
                given matter has ended.
              </p>

              <p>
                c) Data processed for settlement, accounting and tax purposes,
                on the basis of Article 6(1)(c) GDPR — legal obligation — is
                stored for 7 years from the end of the financial year, in
                accordance with § 12–13 of the Estonian Accounting Act —
                Raamatupidamise seadus, unless the law requires a longer
                period.
              </p>

              <p>
                d) Data processed for the purpose of establishing, pursuing or
                defending claims, on the basis of Article 6(1)(f) GDPR, is
                stored until the limitation period for claims expires, as a rule
                for no less than 3 years from the end of the contract or
                contact.
              </p>

              <h3>10.2. Potential clients, suppliers and business partners</h3>

              <p>
                a) Data of persons who have been contacted in connection with an
                offer of cooperation or who have provided data via email,
                contact forms or other communication channels, processed on the
                basis of Article 6(1)(f) GDPR, is stored for the period
                necessary to conduct business discussions or until an objection
                to the processing of data is lodged, but no longer than 3 years
                from the last contact activity.
              </p>

              <p>
                b) Data of representatives of entities cooperating with the
                Controller, for example in the field of IT services, hosting,
                accounting or advisory services, processed on the basis of
                Article 6(1)(b) and Article 6(1)(c) GDPR, is stored for the
                duration of the cooperation and, after its termination, until
                the limitation period for claims expires, as a rule for 3
                years, while accounting and tax documentation is stored for 7
                years in accordance with Estonian law.
              </p>

              <h3>10.3. Persons contacting the Controller</h3>

              <p>
                Data of persons sending inquiries via a contact form, email or
                telephone, processed on the basis of Article 6(1)(f) GDPR, is
                stored for the period necessary to provide a response and close
                the correspondence, and subsequently, where justified, until the
                limitation period for potential claims expires, but no longer
                than 3 years from the end of the contact.
              </p>

              <h3>10.4. Technical data and system logs</h3>

              <p>
                Technical data, server logs and information about events in the
                Controller’s systems, processed on the basis of Article 6(1)(f)
                GDPR, are stored for the period necessary to ensure system
                security, detect incidents, analyse errors and prevent abuse,
                but no longer than 90 days, unless IT security, audit-related
                provisions or other legal obligations require a longer period.
              </p>

              <h3>10.5. Data of representatives of public authorities and institutions</h3>

              <p>
                Data of employees or representatives of public administration
                bodies and institutions with whom the Controller conducts
                official correspondence is stored for the period necessary to
                handle the given matter and for the archiving period resulting
                from applicable regulations, but no longer than 10 years from
                the end of the proceedings, inspection or official matter.
              </p>

              <h3>10.6. Final provisions regarding retention</h3>

              <p>
                a) After the periods indicated above have expired, personal data
                is permanently deleted, anonymised or archived in a manner that
                prevents identification of the person, in accordance with
                applicable law.
              </p>

              <p>
                b) If generally applicable legal provisions require a longer
                retention period, that period may be extended accordingly only
                to the extent necessary to comply with those obligations.
              </p>

              <p>
                c) The Controller regularly reviews the data it holds and
                assesses whether its further storage remains justified, ensuring
                that personal data is not processed for longer than necessary
                for the purposes for which it was collected.
              </p>
            </section>

            <section id="section-11" className="legal-content__section">
              <h2>11. Voluntary provision of personal data</h2>

              <p>
                Providing personal data by persons using the services of
                Solutions Digitales d’Estonie, owned by Handke Holding OÜ, is
                generally voluntary.
              </p>

              <p>
                In certain cases, however, providing personal data is necessary
                to achieve specific processing purposes, in particular to
                respond to an inquiry, prepare an offer, conclude or perform a
                contract, and fulfil legal obligations imposed on the
                Controller.
              </p>

              <p>
                Failure to provide personal data required for a given purpose
                may result in the inability to respond, prepare an offer,
                conclude a contract or perform a software development,
                maintenance or other digital service provided by the Controller.
              </p>

              <h3>11.1. Scope of required data</h3>

              <p>In particular:</p>

              <ul>
                <li>
                  where an inquiry is sent via a contact form, email or
                  telephone, it is necessary to provide basic contact details
                  enabling identification of the sender and providing a
                  response;
                </li>
                <li>
                  where a contract or order is concluded, it is necessary to
                  provide identification and contact data, including company
                  data such as name, address and EU VAT number, to the extent
                  necessary to conclude and perform the contract;
                </li>
                <li>
                  where electronic documents are signed, it may be necessary to
                  provide data required to authorise the signature, such as an
                  email address, IP address and timestamp;
                </li>
                <li>
                  where an invoice, bill or payment confirmation is issued, it
                  is necessary to provide data required by tax or accounting
                  law.
                </li>
              </ul>

              <h3>11.2. Voluntary data and consent</h3>

              <p>
                The Controller clearly indicates each time which personal data
                is necessary to achieve a specific purpose and which data is
                voluntary.
              </p>

              <p>
                The scope of personal data processed is limited to the minimum
                necessary, in accordance with the data minimisation principle set
                out in Article 5(1)(c) GDPR.
              </p>

              <p>
                In situations where personal data is processed on the basis of
                consent under Article 6(1)(a) GDPR, in particular in the case of
                voluntary informational or business contact, the decision to
                provide data belongs solely to the data subject.
              </p>

              <p>
                Consent may be withdrawn at any time, without affecting the
                lawfulness of processing carried out before its withdrawal, in
                accordance with Article 7(3) GDPR.
              </p>

              <h3>11.3. General principles</h3>

              <p>
                The Controller makes every effort to ensure full transparency
                for data subjects in relation to the processing of personal data
                and real control over the scope of information provided, the
                purposes of processing and the data retention period.
              </p>

              <p>
                Personal data is processed with respect for the principles set
                out in Article 5 GDPR, in particular the principles of
                lawfulness, fairness, transparency and data minimisation.
              </p>
            </section>

                        <section id="section-12" className="legal-content__section">
              <h2>12. Personal data storage location and security measures</h2>

              <h3>12.1. Data storage location</h3>

              <p>
                Personal data processed by the Controller is stored exclusively
                in electronic form — on devices and in systems under the
                Controller’s sole control or with trusted service providers
                whose infrastructure may be located within the European
                Economic Area (EEA) or, in certain cases, outside the EEA, with
                appropriate legal safeguards applied in accordance with Articles
                44–49 GDPR.
              </p>

              <p>
                The Controller does not maintain paper documentation — all
                personal data is processed, stored and archived exclusively in
                digital form.
              </p>

              <h3>12.2. Data processing locations and systems</h3>

              <p>
                Physical and virtual locations where personal data is processed
                include in particular:
              </p>

              <ul>
                <li>
                  an encrypted laptop used by the Controller, secured with a
                  strong password, full disk encryption and two-factor
                  authentication (2FA);
                </li>
                <li>
                  an encrypted external data carrier used for regular backups
                  (offline backup), stored in a secure location and separated
                  from the main system;
                </li>
                <li>
                  servers and infrastructure of the hosting and email service
                  provider Hostinger International Ltd., used for website
                  hosting and business email handling, with infrastructure
                  located within the European Economic Area (EEA), applying
                  appropriate security measures in accordance with Article 32
                  GDPR;
                </li>
                <li>
                  servers and systems of tools supporting the Controller’s
                  activities, including in particular:
                  <ul>
                    <li>
                      SignRequest / Dropbox Sign — an electronic signature
                      service which may involve the processing of personal data
                      both within and outside the EEA, in particular in the
                      United States, with EU Standard Contractual Clauses (SCCs)
                      applied in accordance with Article 46 GDPR;
                    </li>
                    <li>
                      other auxiliary systems used for administrative,
                      communication or accounting purposes, whose providers
                      ensure documented GDPR compliance and the application of
                      appropriate security measures.
                    </li>
                  </ul>
                </li>
              </ul>

              <h3>12.3. Technical and organisational measures</h3>

              <p>
                The Controller has implemented and maintains appropriate
                technical and organisational measures to ensure the security of
                personal data, in accordance with Article 32 GDPR and applicable
                Estonian law, including in particular:
              </p>

              <ul>
                <li>encryption of network connections (SSL/TLS);</li>
                <li>encryption of devices and data carriers;</li>
                <li>
                  restriction of access to data exclusively to the Controller;
                </li>
                <li>
                  use of strong, unique passwords and two-factor authentication
                  (2FA);
                </li>
                <li>
                  regular updating of operating systems, software and security
                  measures;
                </li>
                <li>
                  creation and secure storage of encrypted backup copies;
                </li>
                <li>
                  protection of devices with a firewall and anti-malware
                  software;
                </li>
                <li>
                  automatic screen locking and physical protection of equipment
                  against access by third parties;
                </li>
                <li>
                  restriction of data processing to devices secured in
                  accordance with this Policy;
                </li>
                <li>
                  cooperation only with IT providers that ensure GDPR
                  compliance;
                </li>
                <li>
                  maintaining a register of data processing entrustments and an
                  incident register;
                </li>
                <li>
                  implementation of personal data breach response procedures in
                  accordance with Articles 33–34 GDPR;
                </li>
                <li>
                  regular reviews of permissions and periodic security checks,
                  in accordance with the principles of privacy by design and
                  privacy by default under Article 25 GDPR.
                </li>
              </ul>
            </section>

            <section id="section-13" className="legal-content__section">
              <h2>13. Rights of data subjects</h2>

              <p>
                Persons whose personal data is processed by Solutions Digitales
                d’Estonie, owned by Handke Holding OÜ, have all rights provided
                for in Regulation (EU) 2016/679 (GDPR) and in the Estonian
                Personal Data Protection Act — Isikuandmete kaitse seadus
                (IKS).
              </p>

              <p>
                In particular, you have the right to receive transparent
                information about the processing of personal data, access your
                data, rectify it, restrict processing, erase it, transfer data,
                object to processing and withdraw consent — to the extent and
                under the conditions set out in applicable law.
              </p>

              <h3>13.1. Right of access to data and to obtain a copy</h3>

              <p>
                You have the right to obtain confirmation as to whether the
                Controller processes your personal data and, where this is the
                case, the right to access such data and receive a copy of it, in
                accordance with Article 15 GDPR.
              </p>

              <p>
                If the request is submitted electronically, the information will
                be provided in a commonly used electronic format, unless you
                request another form.
              </p>

              <h3>13.2. Right to rectification</h3>

              <p>
                You have the right to request the immediate rectification of
                inaccurate personal data concerning you, as well as the
                completion of incomplete data, including by providing an
                additional statement, in accordance with Article 16 GDPR.
              </p>

              <h3>13.3. Right to restriction of processing</h3>

              <p>
                You have the right to request restriction of processing of
                personal data in the cases specified in Article 18 GDPR, in
                particular where:
              </p>

              <ul>
                <li>
                  you contest the accuracy of the data — for the period needed
                  to verify its accuracy,
                </li>
                <li>
                  the processing is unlawful and you oppose the erasure of the
                  data,
                </li>
                <li>
                  the data is no longer needed by the Controller, but you need
                  it for the establishment, exercise or defence of claims,
                </li>
                <li>
                  you have objected to processing — pending verification whether
                  the Controller’s legitimate grounds override your rights and
                  freedoms.
                </li>
              </ul>

              <h3>13.4. Right to erasure — “right to be forgotten”</h3>

              <p>
                You have the right to request the erasure of personal data in
                the cases provided for in Article 17 GDPR, in particular where:
              </p>

              <ul>
                <li>
                  the personal data is no longer necessary for the purposes for
                  which it was collected or otherwise processed,
                </li>
                <li>
                  you have withdrawn the consent on which the processing was
                  based and there is no other legal basis,
                </li>
                <li>the data has been processed unlawfully.</li>
              </ul>

              <p>
                This right does not apply to the extent that processing is
                necessary for compliance with legal obligations imposed on the
                Controller or for the establishment, exercise or defence of
                legal claims.
              </p>

              <h3>13.5. Right to data portability</h3>

              <p>
                You have the right to receive the personal data that you have
                provided to the Controller in a structured, commonly used and
                machine-readable format and to transmit that data to another
                controller, where the processing is based on consent or a
                contract and is carried out by automated means, in accordance
                with Article 20 GDPR.
              </p>

              <h3>13.6. Right to object</h3>

              <p>
                You have the right to object at any time to the processing of
                personal data where the processing is carried out on the basis
                of the Controller’s legitimate interest under Article 6(1)(f)
                GDPR.
              </p>

              <p>
                After an objection is lodged, the Controller will cease
                processing the data unless it demonstrates compelling legitimate
                grounds for further processing which override your interests,
                rights and freedoms, or grounds for the establishment, exercise
                or defence of legal claims.
              </p>

              <p>
                The right to object does not apply where data is processed for
                compliance with a legal obligation imposed on the Controller
                under Article 6(1)(c) GDPR.
              </p>

              <h3>13.7. Right to withdraw consent</h3>

              <p>
                Where personal data is processed on the basis of consent, you
                have the right to withdraw it at any time. Withdrawal of consent
                does not affect the lawfulness of processing carried out before
                its withdrawal, in accordance with Article 7(3) GDPR.
              </p>

              <h3>13.8. Right to lodge a complaint with a supervisory authority</h3>

              <p>
                If you believe that the processing of your personal data
                infringes the GDPR or the laws of the Republic of Estonia, you
                have the right to lodge a complaint with the competent
                supervisory authority, in particular with:
              </p>

              <div>
                <p>
                  Andmekaitse Inspektsioon (AKI)
                  <br />
                  Tatari 39, 10134 Tallinn, Estonia
                  <br />
                  tel.: +372 627 4135
                  <br />
                  email: info@aki.ee
                  <br />
                  website: https://www.aki.ee
                </p>
              </div>

              <p>
                If you live or work in another Member State of the European
                Union, or if the infringement occurred in another Member State,
                you may also lodge a complaint with the competent supervisory
                authority in that state, in accordance with Article 77 GDPR.
              </p>

              <h3>13.9. No profiling and no automated decision-making</h3>

              <p>
                Personal data is not processed by automated means that could
                lead to decisions producing legal effects or similarly
                significantly affecting data subjects, within the meaning of
                Article 22 GDPR.
              </p>

              <p>The Controller does not carry out profiling.</p>

              <h3>13.10. Exercising your rights</h3>

              <p>
                To exercise any of the above rights, you may contact the
                Controller:
              </p>

              <div>
                <p>
                  email: office@sddestonie.com
                  <br />
                  Handke Holding OÜ / Solutions Digitales d’Estonie
                  <br />
                  Harju maakond, Kesklinna linnaosa
                  <br />
                  Sakala tn 7-2, 10141 Tallinn, Estonia
                </p>
              </div>

              <p>
                The Controller responds to requests concerning the exercise of
                rights without undue delay and no later than within one month of
                receiving the request, in accordance with Article 12(3) GDPR. In
                particularly complex cases, this period may be extended by a
                further two months, of which the data subject will be informed.
              </p>
            </section>

                        <section id="section-14" className="legal-content__section">
              <h2>14. Personal data breaches</h2>

              <p>
                In the event of a personal data breach — understood as the
                accidental or unlawful destruction, loss, alteration,
                unauthorised disclosure of, or access to personal data of
                clients, business partners or users — the Controller promptly
                takes actions aimed at limiting the effects of the incident and
                preventing its recurrence.
              </p>

              <p>
                The Controller assesses each time the risk of infringement of
                the rights and freedoms of data subjects and implements
                appropriate technical and organisational measures to remove or
                limit the consequences of the breach.
              </p>

              <p>
                All incidents related to the security of personal data are
                documented in accordance with the accountability principle
                referred to in Article 5(2) GDPR and in accordance with § 25(3)
                of the Estonian Personal Data Protection Act — Isikuandmete
                kaitse seadus.
              </p>

              <h3>14.1. Notification of breaches to the supervisory authority</h3>

              <p>
                If a personal data breach is likely to result in a risk to the
                rights or freedoms of natural persons, the Controller notifies
                the competent supervisory authority — Andmekaitse Inspektsioon
                (AKI), Tatari 39, 10134 Tallinn, Estonia — no later than within
                72 hours after becoming aware of it, in accordance with Article
                33 GDPR and § 25 of the Estonian Personal Data Protection Act —
                Isikuandmete kaitse seadus.
              </p>

              <h3>14.2. Informing data subjects</h3>

              <p>
                Where a breach is likely to result in a high risk to the rights
                or freedoms of natural persons, the Controller informs data
                subjects about:
              </p>

              <ul>
                <li>the nature of the personal data breach,</li>
                <li>the possible consequences of the breach,</li>
                <li>
                  the measures applied or planned in order to protect personal
                  data.
                </li>
              </ul>

              <p>
                Such information is provided in accordance with Article 34 GDPR,
                in a clear and understandable manner.
              </p>

              <h3>14.3. Breach response procedure</h3>

              <p>
                The Controller has implemented an internal procedure for
                responding to personal data breaches, which includes in
                particular:
              </p>

              <ul>
                <li>identification and classification of incidents,</li>
                <li>
                  immediate actions aimed at limiting the effects of the breach,
                </li>
                <li>
                  risk assessment and a decision on whether the breach must be
                  notified,
                </li>
                <li>documentation of breaches in the incident register,</li>
                <li>
                  analysis of the causes of breaches and implementation of
                  preventive measures to avoid similar events in the future.
                </li>
              </ul>

              <h3>14.4. Security control and improvement</h3>

              <p>
                The effectiveness of the applied personal data breach response
                procedures is regularly reviewed in order to ensure compliance
                with the GDPR and the laws of the Republic of Estonia, as well
                as to maintain a high level of security in the processing of
                personal data.
              </p>
            </section>

            <section id="section-15" className="legal-content__section">
              <h2>15. Automated decision-making and profiling</h2>

              <p>
                The data controller — Handke Holding OÜ, operating through the
                Solutions Digitales d’Estonie brand — does not carry out
                automated decision-making processes, including profiling, that
                could produce legal effects concerning natural persons or
                similarly significantly affect them, within the meaning of
                Article 22 of Regulation (EU) 2016/679 (GDPR) and § 23 of the
                Estonian Personal Data Protection Act — Isikuandmete kaitse
                seadus.
              </p>

              <p>
                All decisions concerning clients, business partners and persons
                contacting the Controller are made exclusively by a human being,
                on the basis of an individual analysis of the information,
                documents or correspondence provided. No decisions are made in a
                fully automated manner.
              </p>

              <p>
                Profiling means any form of automated processing of personal
                data consisting of the use of personal data to evaluate certain
                personal aspects relating to a natural person, in particular to
                analyse or predict aspects concerning their behaviour,
                preferences, interests or other personal characteristics.
              </p>

              <p>
                The Controller may use technical or analytical tools supporting
                operational activities, such as automatic sorting of email
                messages, filtering of contact form submissions or basic
                statistical tools concerning website traffic; however, their use
                does not lead to independent decision-making concerning natural
                persons.
              </p>

              <p>
                Every decision concerning a natural person always requires human
                involvement and an individual assessment of the specific
                situation.
              </p>
            </section>

            <section id="section-16" className="legal-content__section">
              <h2>16. Supervisory authority</h2>

              <p>
                If you have any doubts regarding the way your personal data is
                processed, or if you believe that your rights under Regulation
                (EU) 2016/679 (GDPR) have been infringed, you have the right to
                lodge a complaint with the competent supervisory authority —
                regardless of your place of residence, place of work or the
                place of the alleged infringement — in accordance with Article
                77 GDPR and § 21 of the Estonian Personal Data Protection Act —
                Isikuandmete kaitse seadus.
              </p>

              <p>
                For the activities conducted by Handke Holding OÜ / Solutions
                Digitales d’Estonie, the competent supervisory authority in the
                Republic of Estonia is:
              </p>

              <div>
                <p>
                  Andmekaitse Inspektsioon (AKI)
                  <br />
                  Tatari 39, 10134 Tallinn, Estonia
                  <br />
                  tel.: +372 627 4135
                  <br />
                  email: info@aki.ee
                  <br />
                  website: https://www.aki.ee
                </p>
              </div>

              <p>
                If you live or work in another Member State of the European
                Union or the European Economic Area (EEA), or if the alleged
                infringement occurred in another Member State, you may also
                lodge a complaint with the competent personal data protection
                authority in that country, in accordance with Article 77 GDPR.
              </p>

              <p>
                Before lodging a complaint, the data subject may contact the
                Controller directly in order to clarify the matter:
              </p>

              <div>
                <p>
                  email: office@sddestonie.com
                  <br />
                  Handke Holding OÜ / Solutions Digitales d’Estonie
                  <br />
                  Harju maakond, Kesklinna linnaosa
                  <br />
                  Sakala tn 7-2, 10141 Tallinn, Estonia
                </p>
              </div>

              <p>
                The Controller will make every effort to review the submission
                in a fair, transparent and lawful manner, in accordance with the
                GDPR and the laws of the Republic of Estonia.
              </p>
            </section>

                        <section id="section-17" className="legal-content__section">
              <h2>17. Jurisdiction and applicable law</h2>

              <p>
                This Privacy Policy is governed by the laws of the Republic of
                Estonia and is interpreted in accordance with Regulation (EU)
                2016/679 (GDPR) and the Estonian Personal Data Protection Act —
                Isikuandmete kaitse seadus.
              </p>

              <p>
                Any disputes or claims arising from the processing of personal
                data, the use of the website or the services provided by Handke
                Holding OÜ / Solutions Digitales d’Estonie shall be subject to
                the jurisdiction of the courts of the Republic of Estonia
                having territorial jurisdiction over the registered office of
                the Controller, in particular Harju Maakohus — Harju County
                Court in Tallinn.
              </p>

              <p>
                The provisions of this section do not limit the rights of
                natural persons, including consumers, arising from mandatory
                provisions of European Union law or the law of the country of
                their residence within the European Union or the European
                Economic Area.
              </p>

              <p>
                In the event of any discrepancy between the provisions of this
                Privacy Policy and European Union law, the provisions of the
                GDPR and national laws implementing its provisions shall prevail.
              </p>
            </section>

            <section id="section-18" className="legal-content__section">
              <h2>18. Updates to this Privacy Policy</h2>

              <p>
                This Privacy Policy may be updated periodically in order to
                ensure its compliance with applicable law, in particular
                Regulation (EU) 2016/679 (GDPR) and the Estonian Personal Data
                Protection Act — Isikuandmete kaitse seadus, as well as to
                reflect changes in the scope of business activity, services
                provided, technologies used or personal data processing
                procedures.
              </p>

              <p>
                Each updated version of the Privacy Policy is published on the
                official website of Solutions Digitales d’Estonie at:
                <br />
                https://sddestonie.com/privacy-policy.
              </p>

              <p>
                The effective date of the current version of the Privacy Policy
                is indicated each time in the content of the document.
              </p>

              <p>
                In the event of material changes that may affect the rights of
                data subjects or the way personal data is processed, in
                particular changes to processing purposes, legal bases,
                categories of recipients or IT service providers, the Controller
                will inform about such changes in a transparent manner, in
                particular through:
              </p>

              <ul>
                <li>a clear notice on the website, or</li>
                <li>
                  an email message, if the Controller has a contact address and
                  such method of communication is possible.
                </li>
              </ul>

              <p>
                The Controller recommends regularly reviewing the current
                content of the Privacy Policy in order to obtain information
                about the current rules for processing personal data.
              </p>
            </section>

            <section id="section-19" className="legal-content__section">
              <h2>19. Marketing activities and contact with the Controller</h2>

              <p>
                The website of Solutions Digitales d’Estonie / Handke Holding
                OÜ does not use cookies or tracking tools for analytical or
                advertising purposes. Use of the website does not involve
                automatic processing of users’ personal data for marketing
                purposes.
              </p>

              <p>
                The Controller conducts marketing activities only in the scope
                of promoting its own IT, project-related and digital services,
                in particular through:
              </p>

              <ul>
                <li>
                  publication of content on official company profiles in social
                  media, such as LinkedIn,
                </li>
                <li>direct communication in B2B relationships.</li>
              </ul>

              <p>
                Marketing activities do not include profiling or automated
                decision-making concerning natural persons.
              </p>

              <p>
                As part of direct marketing, the Controller may contact
                representatives of companies and institutions, using data such
                as name, surname, position and business email address, in order
                to present an offer of cooperation in the field of digital
                services. Such contact, known as B2B marketing or cold mailing,
                is carried out solely on the basis of the Controller’s
                legitimate interest, namely marketing of its own services, in
                accordance with Article 6(1)(f) GDPR.
              </p>

              <p>
                Every person contacted by the Controller for marketing purposes
                has the right to object at any time to the processing of
                personal data for these purposes. An objection may be submitted
                by sending an email to:
              </p>

              <p>office@sddestonie.com</p>

              <p>
                Users may also contact the Controller on their own initiative by
                email or through the contact form. Data provided in this way,
                such as name, surname, email address and message content, is
                processed solely for the purpose of responding or conducting
                correspondence, in accordance with Article 6(1)(f) GDPR.
              </p>

              <p>
                Personal data processed in connection with marketing activities
                and communication is not used for advertising purposes towards
                website users or for profiling, and is processed in accordance
                with the principles of data minimisation, integrity and
                transparency referred to in Article 5 GDPR.
              </p>
            </section>

            <section id="section-20" className="legal-content__section">
              <h2>20. Cookies</h2>

              <p>
                The website of Solutions Digitales d’Estonie / Handke Holding
                OÜ does not use cookies or similar technologies for marketing,
                analytical, advertising or profiling purposes.
              </p>

              <p>
                The Controller does not use analytical tools, remarketing tools
                or systems intended to monitor user behaviour for statistical or
                commercial purposes. Use of the website does not involve
                automatic processing of users’ personal data for such purposes.
              </p>

              <p>
                The website may use only technical mechanisms necessary for its
                proper and secure functioning, in particular security solutions
                provided by Cloudflare, including Cloudflare Turnstile, used to
                protect forms, prevent abuse, network attacks and attempts at
                unauthorised access.
              </p>

              <p>
                These mechanisms are not used to track users for marketing or
                analytical purposes and, to the extent that they are strictly
                technical and necessary, they do not require user consent in
                accordance with Article 5(3) of Directive 2002/58/EC
                (ePrivacy) and § 102 of the Estonian Electronic Communications
                Act — Elektroonilise side seadus.
              </p>

              <p>
                Therefore, at the current stage, displaying a cookie banner or
                obtaining user consent is not required, provided that the
                website uses only technical solutions necessary for the security
                and proper operation of the service.
              </p>

              <p>
                If cookies or similar technologies are implemented in the future
                for purposes other than strictly technical purposes, such as
                analytical, functional or marketing purposes, the Controller
                will inform users in a transparent manner and, where required,
                obtain appropriate consents in accordance with applicable law,
                in particular:
              </p>

              <ul>
                <li>Directive 2002/58/EC (ePrivacy),</li>
                <li>the laws of the Republic of Estonia,</li>
                <li>Article 6(1) of Regulation (EU) 2016/679 (GDPR).</li>
              </ul>
            </section>

            <section id="section-21" className="legal-content__section">
              <h2>21. Server logs</h2>

              <p>
                Use of the website of Solutions Digitales d’Estonie / Handke
                Holding OÜ involves the automatic sending of requests to the
                server on which the website is hosted. Each such request may be
                recorded in so-called server logs.
              </p>

              <p>
                Server logs may include the following technical data:
              </p>

              <ul>
                <li>IP address of the user’s device;</li>
                <li>date and time of the request;</li>
                <li>
                  information about the web browser and operating system used;
                </li>
                <li>address of the visited subpage or requested resource;</li>
                <li>
                  server response codes and technical error messages.
                </li>
              </ul>

              <p>
                This data is purely technical and is not used to identify users
                or for marketing, analytical or profiling purposes.
              </p>

              <p>
                Server logs are processed solely for the purpose of:
              </p>

              <ul>
                <li>
                  ensuring the security of the website and IT infrastructure;
                </li>
                <li>
                  detecting abuse and attempts at unauthorised access;
                </li>
                <li>
                  diagnosing technical errors and maintaining the stability of
                  the service.
                </li>
              </ul>

              <p>
                The legal basis for processing data contained in server logs is
                Article 6(1)(f) GDPR — the Controller’s legitimate interest
                consisting in ensuring the security of IT systems, in accordance
                with Article 32 GDPR and the relevant provisions of Estonian
                personal data protection law.
              </p>

              <p>
                Server logs may be stored by the hosting and email service
                provider Hostinger International Ltd. for the period necessary
                to ensure security, continuity of services and analysis of
                technical incidents, but no longer than for a period justified
                by the purpose of their processing, unless longer storage is
                necessary in connection with a security incident, technical
                analysis or an obligation arising from legal provisions.
              </p>

              <p>
                After the relevant period expires, the data is deleted or
                anonymised in a manner that prevents user identification.
              </p>
            </section>

      
          </div>
        </div>
      </section>

    </main>
  );
}

export default EnPrivacyPolicyPage;