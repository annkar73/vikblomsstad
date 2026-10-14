import Link from "next/link";

export default function GalleryPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> VÅRA UPPDRAG
            </span>

            <h1>
              Resultat med
              <br />
              <span>omtanke</span>
            </h1>

            <p className="hero-description">
              Här kan du se exempel på Vikblom Städs arbete. Vi hjälper
              både hem och arbetsplatser med städning som anpassas efter
              uppdraget och dina önskemål.
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
          </div>

          <div className="hero-visual">
            <div
              className="hero-photo"
              role="img"
              aria-label="Exempel på städning"
            />

            <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Städning med omtanke</strong>
                <small>För hem och arbetsplatser.</small>
              </span>
            </div>

            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

        <div className="container hero-bottom">
          <span>ETT RENARE HEM. EN LÄTTARE VARDAG.</span>
          <a href="#vara-uppdrag" aria-label="Se våra uppdrag">↓</a>
        </div>
      </section>

      <section className="gallery-section section" id="vara-uppdrag">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">VÅRA UPPDRAG</span>
              <h2>En titt på vårt arbete</h2>
            </div>

            <p>
              Här samlar vi bilder från olika typer av uppdrag, från
              hemstädning till byggstädning.
            </p>
          </div>

          <div className="gallery-grid">
            <article className="gallery-card">
              <div
                className="gallery-photo gallery-photo-one"
                role="img"
                aria-label="Exempel på byggstädning"
              />
              <div className="gallery-caption">
                <span>VÅRA TJÄNSTER</span>
                <h3>Byggstädning</h3>
              </div>
            </article>

            <article className="gallery-card">
              <div
                className="gallery-photo gallery-photo-two"
                role="img"
                aria-label="Exempel på hemstädning"
              />
              <div className="gallery-caption">
                <span>HEM OCH VARDAG</span>
                <h3>Hemstädning</h3>
              </div>
            </article>

            <article className="gallery-card">
              <div
                className="gallery-photo gallery-photo-three"
                role="img"
                aria-label="Exempel på utomhusuppdrag"
              />
              <div className="gallery-caption">
                <span>OLIKA UPPDRAG</span>
                <h3>Utomhusuppdrag</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">OLIKA BEHOV</span>
            <h2>Vi hjälper till där det behövs</h2>
          </div>

          <div>
            <p>
              Behöver du hjälp med hemstädning, flyttstädning,
              fönsterputs eller någon av våra andra tjänster? Vi går
              igenom uppdraget tillsammans och planerar utifrån dina
              önskemål.
            </p>

            <Link className="button button-outline" href="/services/hemstad">
              Läs om våra tjänster
            </Link>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">NÄSTA STEG</span>
            <h2>Har du ett uppdrag åt oss?</h2>
            <p>
              Kontakta oss för att berätta vad du behöver hjälp med
              eller boka ett kostnadsfritt hembesök.
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