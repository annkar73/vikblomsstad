
import Link from "next/link";

export default function FonsterputsPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              breadcrumbs för sidan
            </span>

            <h1>
              Fönsterputsning
            </h1>

            <p className="hero-description">
             Introduktion till tjänsten
            </p>

            <div className="hero-actions">
              <Link className="button" href="/kontakta-oss">
                Boka kostnadsfritt hembesök
              </Link>

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
              aria-label="Bild som illustrerar hemstädning"
            />
          </div>
        </div>
      </section>

      {/* Information om tjänsten */}
      <section className="about section">
        <div className="container about-grid">
          <div className="about-visual">
            <div
              className="about-photo"
              role="img"
              aria-label="Bild som illustrerar tjänsten"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">
              {/* Underrubrik */}
            </span>

            <h2>
              {/* Rubrik för informationssektionen */}
            </h2>

            <p>
              {/* Information om tjänsten */}
            </p>

            <p>
              {/* Ytterligare information */}
            </p>
          </div>
        </div>
      </section>

      {/* Vad som ingår */}
      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DETTA INGÅR</span>
              <h2>
                {/* Rubrik */}
              </h2>
            </div>

            <p>
              {/* Kort introduktion */}
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>1</span>
              <h3>{/* Delområde */}</h3>
              <p>{/* Information */}</p>
            </article>

            <article className="process-card">
              <span>2</span>
              <h3>{/* Delområde */}</h3>
              <p>{/* Information */}</p>
            </article>

            <article className="process-card">
              <span>3</span>
              <h3>{/* Delområde */}</h3>
              <p>{/* Information */}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Praktisk information – anpassas per tjänst */}
      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">
              {/* Kategoritext */}
            </span>

            <h2>
              {/* Rubrik */}
            </h2>
          </div>

          <div>
            <p>
              {/* Praktisk information, villkor eller priser */}
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="contact section">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">VI HÖR GÄRNA FRÅN DIG</span>

            <h2>
              {/* Avslutande rubrik */}
            </h2>

            <p>
              {/* Avslutande text */}
            </p>
          </div>

          <div className="contact-action">
            <Link className="button button-light" href="/kontakta-oss">
              Kontakta oss
            </Link>

            <a className="contact-email" href="mailto:emelie.vikblom@gmail.com">
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
