
import Link from "next/link";

export default function AirbnbPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              LÖPANDE UPPLÄGG
            </span>

            <h1>
              Utcheckningsstäd för AirBnB och uthyrning
            </h1>

            <p className="hero-description">
             Hyr du ut din bostad via Airbnb eller på annat sätt? Vi städar mellan gästerna så att nästa gäst möts av ett rent och välkomnande hem.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Boka kostnadsfritt hembesök
              </Link>

              <Link
                className="button button-outline"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-airbnb">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar hemstädning"
            />
                        <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Ett renare hem</strong>
                <small>En lättare vardag</small>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Information om tjänsten */}
      <section className="about section">
        <div className="container about-grid">
          <div className="about about-copy">
            <h2>Rent och klart till nästa gäst</h2>
            <p>Vi lägger upp ett löpande samarbete som följer dina bokningar. Städningen anpassas efter bostaden och dina önskemål, till exempel bäddning, påfyllning av förbrukningsvaror och kontroll av att allt är på plats inför nästa incheckning.</p>
            <p>Vi har med oss allt städmaterial. Inför uppdraget gör vi ett besök i bostaden och formar upplägget tillsammans med dig.</p>
          </div>

          <div className="booking-card service-navy">
            <span className="eyebrow">
              {/* Underrubrik */}
            </span>

            <h3>
              Boka kostnadsfritt hembesök
            </h3>

            <p>
              Vi ser över bostaden tillsammans och du får ett tydligt pris, utan förpliktelser.
            </p>
            <div><Link className="button" href="/contact">Boka hembesök</Link></div>
            <br></br>
            <div><Link className="button button-outline-invert" href="tel:+46736325235">Ring 073-632 52 35</Link></div>
            <p>
              <strong>Nöjd kund-garanti:</strong> hör av dig inom 24 timmar om något inte blev bra, så åtgärdar vi det kostnadsfritt.
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
                Detta ingår i utcheckningsstädet
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>Vanligt innehåll</h3>
             <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Dammning och dammsugning av alla rum
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Torkning av golv</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Kök: diskho, spis, ytor och vitvaror utvändigt</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Badrum: avkalkning, putsning av krom, handfat och toalett</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Sophantering</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Rengöring i kök och badrum. Avkalkning och putsning av allt krom</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Bäddning och byta av handdukar efter överenskommelse</li>
             </ul>
              
            </article>
            <article className="process-card">
              <h3>Bra att veta</h3>
              <ul className="hero-note">
                <li>Berätta hur bokningarna ser ut så planerar vi städningen efter in- och utcheckning</li>
                <li>Uthyrning i näringsverksamhet ger inte RUT-avdrag. Vi berättar vad som gäller för dig</li>
                <li>Nöjd kund-garanti: hör av dig inom 24 timmar om något inte blev bra</li>
              
              </ul>
            </article>
          <div className="booking-card service-navy">
            <span className="eyebrow">
              {/* Underrubrik */}
            </span>

            <h3>
              Boka kostnadsfritt hembesök
            </h3>

            <p>
              Vi ser över bostaden tillsammans och du får ett tydligt pris, utan förpliktelser.
            </p>
            <div><Link className="button" href="/contact">Boka hembesök</Link></div>
            <br></br>
            <div><Link className="button button-outline-invert" href="tel:+46736325235">Ring 073-632 52 35</Link></div>
            <p>
              <strong>Nöjd kund-garanti:</strong> hör av dig inom 24 timmar om något inte blev bra, så åtgärdar vi det kostnadsfritt.
            </p>
          </div>

          </div>
        </div>
      </section>

    </main>
  );
}
