import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> KONTAKT
            </span>

            <h1>
              Vi hjälper dig
              <br />
              <span>gärna vidare</span>
            </h1>

            <p className="hero-description">
              Har du frågor eller funderingar är du varmt välkommen
              att höra av dig. Boka ett kostnadsfritt hembesök så
              ser vi över bostaden tillsammans.
            </p>

            <div className="hero-actions">
              <a className="button" href="#kontaktformular">
                Skicka en förfrågan
              </a>

              <a
                className="button button-outline"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar Vikblom Städs arbete"
            />
            <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Personlig kontakt</strong>
                <small>Vi går igenom dina önskemål tillsammans.</small>
              </span>
            </div>
            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

        <div className="container hero-bottom">
          <span>VI FINNS NÄRA DIG I ROSLAGEN</span>
          <a href="#kontaktuppgifter" aria-label="Se kontaktuppgifter">
            ↓
          </a>
        </div>
      </section>

      <section className="about section" id="kontaktuppgifter">
        <div className="container about-grid">
          <div className="about-visual">
            <div
              className="about-photo"
              role="img"
              aria-label="Vikblom Städs verksamhetsområde i Roslagen"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">KONTAKTUPPGIFTER</span>
            <h2>Vi finns här för dig</h2>

            <p>
              Kontakta oss om du vill boka städning, har frågor om våra
              tjänster eller vill boka ett kostnadsfritt hembesök.
            </p>

            <div className="about-facts">
              <article className="about-fact">
                <strong>Telefon</strong>
                <span>
                  <a href="tel:+46736325235">073-632 52 35</a>
                </span>
              </article>

              <article className="about-fact">
                <strong>E-post</strong>
                <span>
                  <a href="mailto:emelie.vikblom@vikblomstad.se">
                    emelie.vikblom@vikblomstad.se
                  </a>
                </span>
              </article>

              <article className="about-fact">
                <strong>Adress</strong>
                <span>Carl Wahrens väg 22A, 763 34 Hallstavik</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="kontaktformular">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">KOSTNADSFRITT HEMBESÖK</span>
            <h2>Berätta vad du behöver hjälp med</h2>
            <p>
              Beskriv kort bostaden och vilken typ av städning du är
              intresserad av. Vi återkommer normalt inom en arbetsdag.
            </p>

            <h3>Faktura och betalning</h3>
            <p>
              Du kan betala fakturan via mejl eller swisha till
              123 581 20 03. Ange fakturanummer vid betalning.
            </p>
            <p>
              Organisationsnummer: 559266-2224
              <br />
              Godkänd för F-skatt.
            </p>
          </div>

          <form
            className="contact-form"
            name="kontaktforfragan"
            method="post"
          >
            <div className="form-grid">
              <label className="form-field">
                Namn
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="För- och efternamn"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="form-field">
                Telefon
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="07x-xxx xx xx"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="form-field">
                E-post
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="namn@exempel.se"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="form-field">
                Ort
                <input
                  className="form-control"
                  type="text"
                  name="town"
                  placeholder="T.ex. Älmsta"
                  autoComplete="address-level2"
                  required
                />
              </label>
            </div>

            <label className="form-field">
              Tjänst
              <select
                className="form-control"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Välj tjänst
                </option>
                <option value="Hemstädning">Hemstädning</option>
                <option value="Storstädning">Storstädning</option>
                <option value="Flyttstädning">Flyttstädning</option>
                <option value="Fönsterputs">Fönsterputs</option>
                <option value="Kontors- och arbetsplatsstäd">
                  Kontors- och arbetsplatsstäd
                </option>
                <option value="Byggstädning">Byggstädning</option>
                <option value="Utcheckningsstäd Airbnb">
                  Utcheckningsstäd Airbnb
                </option>
                <option value="Annat">Annat</option>
              </select>
            </label>

            <label className="form-field">
              Berätta kort om bostaden och vad du behöver hjälp med
              <textarea
                className="form-control form-textarea"
                name="message"
                rows={5}
                placeholder="T.ex. bostadens storlek, önskad städning och hur ofta."
                required
              />
            </label>

            <button className="button" type="submit">
              Skicka förfrågan
            </button>

            <p className="form-note">
              Dina uppgifter används för att besvara din förfrågan.
              Läs vår <Link href="/privacy">integritetspolicy</Link>.
            </p>
          </form>
        </div>
      </section>

      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">HÄR FINNS VI</span>
            <h2>Vi städar i hela Norrtälje kommun</h2>
          </div>

          <div>
            <p>
              Med Hallstavik som bas når vi orterna längs kusten.
              Bor du någon annanstans i kommunen? Hör av dig, så
              undersöker vi vad som är möjligt.
            </p>

            <ul className="area-list">
              <li>Hallstavik</li>
              <li>Älmsta</li>
              <li>Väddö</li>
              <li>Grisslehamn</li>
              <li>Singö</li>
              <li>Skebobruk</li>
            </ul>

            <a
              href="https://maps.google.com/?q=Carl+Wahrens+v%C3%A4g+22A%2C+763+34+Hallstavik"
              target="_blank"
              rel="noreferrer"
            >
              Visa adressen på Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">VANLIGA FRÅGOR</span>
              <h2>Bra att veta innan du bokar</h2>
            </div>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>Har ni med eget städmaterial?</h3>
              <p>
                Ja, vi har med oss städmaterial och dammsugare.
                </p>
            </article>

            <article className="process-card">
              <h3>Hur fungerar RUT-avdraget?</h3>
              <p>
                RUT-avdraget görs direkt på fakturan. Avdraget beror
                på att du uppfyller Skatteverkets villkor.
              </p>
            </article>

            <article className="process-card">
              <h3>Vad händer om jag inte är nöjd?</h3>
              <p>
                Vi har 24 timmars städgaranti. Hör av dig inom den
                tiden så kommer vi överens om hur vi åtgärdar det.
              </p>
            </article>

            <article className="process-card">
              <h3>Hur betalar jag?</h3>
              <p>
                Du kan betala fakturan via mejl eller swisha till
                123 581 20 03. Ange fakturanummer vid betalning.
              </p>
            </article>

            <article className="process-card">
              <h3>Hur varmt ska det vara inomhus?</h3>
              <p>
                När vi kommer för att städa vill vi att det är minst
                19 grader inomhus.
              </p>
            </article>

            <article className="process-card">
              <h3>Var arbetar ni?</h3>
              <p>
                Vi arbetar i hela Norrtälje kommun, med tyngdpunkt
                på Hallstavik, Älmsta, Väddö, Grisslehamn, Singö
                och Skebobruk.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}