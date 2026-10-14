import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> HALLSTAVIK
            </span>

            <h1>
              Ett litet städföretag,
              <br />
              <span>med stort engagemang</span>
            </h1>

            <p className="hero-description">
              Vikblom Städ AB drivs av Emelie Vikblom med utgångspunkt i
              Hallstavik. Vi vill skapa rena och trivsamma miljöer och göra
              vardagen lite enklare för våra kunder.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Kontakta oss
              </Link>

              <a
                className="button button-outline"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </a>
            </div>

            <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Personligt bemötande
              </li>
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Allt städmaterial ingår
              </li>
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Nöjd kund-garanti
              </li>
            </ul>
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
                <strong>Städning med omtanke</strong>
                <small>Utifrån dina önskemål och behov.</small>
              </span>
            </div>

            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

        <div className="container hero-bottom">
          <span>ETT RENARE HEM. EN LÄTTARE VARDAG.</span>
          <a href="#vart-arbetssatt" aria-label="Läs om vårt arbetssätt">
            ↓
          </a>
        </div>
      </section>

      <section className="about section">
        <div className="container about-grid">
          <div className="about-visual">
            <div
              className="about-photo"
              role="img"
              aria-label="Vikblom Städs arbete med rena och trivsamma miljöer"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">OM VIKBLOM STÄD</span>

            <h2>Personlig service och omsorg om detaljerna</h2>

            <p>
              Vikblom Städ AB är ett lokalt städföretag med utgångspunkt i
              Hallstavik. Vi hjälper både privatpersoner och företag med
              städning som anpassas efter uppdraget.
            </p>

            <blockquote className="about-quote">
              Inför varje uppdrag lyssnar jag på dina önskemål, och
              tillsammans formar vi din beställning.
            </blockquote>

            <p>
              Målet är att du ska känna dig trygg med vad som ska göras,
              hur arbetet läggs upp och vilket resultat du kan förvänta dig.
            </p>

            <div className="about-facts">
              <article className="about-fact">
                <strong>Hallstavik</strong>
                <span>Vår utgångspunkt</span>
              </article>

              <article className="about-fact">
                <strong>F-skatt</strong>
                <span>Godkänt företag</span>
              </article>

              <article className="about-fact">
                <strong>Roslagen</strong>
                <span>Vårt närområde</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section" id="vart-arbetssatt">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">VÅRT ARBETSSÄTT</span>
              <h2>En tydlig plan från början</h2>
            </div>

            <p>
              Vi går igenom dina behov tillsammans och kommer överens om
              upplägget innan arbetet börjar.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>1</span>
              <h3>Vi lyssnar</h3>
              <p>
                Vi pratar om bostaden eller lokalen och vad du vill ha hjälp
                med.
              </p>
            </article>

            <article className="process-card">
              <span>2</span>
              <h3>Vi planerar</h3>
              <p>
                Tillsammans formar vi en beställning som passar uppdraget
                och dina önskemål.
              </p>
            </article>

            <article className="process-card">
              <span>3</span>
              <h3>Vi tar hand om städningen</h3>
              <p>
                Vi tar med städmaterial och arbetar för att du ska bli nöjd
                med resultatet.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">LOKALT I ROSLAGEN</span>
            <h2>Nära våra kunder</h2>
          </div>

          <div>
            <p>
              Med utgångspunkt i Hallstavik arbetar Vikblom Städ i
              Norrtälje kommun, bland annat i:
            </p>

            <ul className="area-list">
              <li>Hallstavik</li>
              <li>Älmsta</li>
              <li>Väddö</li>
              <li>Grisslehamn</li>
              <li>Singö</li>
              <li>Skebobruk</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">VI HÖR GÄRNA FRÅN DIG</span>

            <h2>Berätta vad du behöver hjälp med</h2>

            <p>
              Hör av dig så pratar vi om dina önskemål och hur vi kan
              lägga upp städningen. Du kan också boka ett kostnadsfritt
              hembesök.
            </p>
          </div>

          <div className="contact-action">
            <Link className="button button-light" href="/contact">
              Kontakta oss
            </Link>

            <a
              className="contact-email"
              href="mailto:emelie.vikblom@gmail.com"
            >
              emelie.vikblom@gmail.com
            </a>

            <p className="contact-address">
              Carl Wahrens väg 22A
              <br />
              763 34 Hallstavik
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}