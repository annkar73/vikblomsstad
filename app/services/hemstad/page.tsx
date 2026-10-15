
import Link from "next/link";

export default function HemstadPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              LÖPANDE ELLER ENSTAKA TILLFÄLLEN
            </span>

            <h1>
              Hemstädning i Hallstavik och Norrtälje Kommun
            </h1>

            <p className="hero-description">
             Vi städar alla typer av hem: villa, radhus, lägenhet, fritidshus och stuga. Du väljer mellan löpande hemstäd eller ett enstaka tillfälle, och vi har med oss allt städmaterial inklusive dammsugare.
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

          <div className="hero-visual hero-hemstad">
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
            <h2>Ett hem som känns städat, varje gång</h2>
            <p>Inför varje nytt uppdrag gör vi ett hembesök. Tillsammans går vi igenom vad du vill ha hjälp med och formar din beställning så att städningen passar just ditt hem och din vardag.</p>
            <p>Som privatperson får du RUT-avdrag på 50% av arbetskostnaden, och vi gör avdraget direkt på fakturan. Under maj till oktober kan du även beställa fönsterputsning.</p>
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
                I en vanlig hemstädning ingår
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
             <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Dammning av fria ytor
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Avfläckning i allmänna rum</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Filtar viks ihop och kuddar ställs snyggt. Det ska synas att städ har varit inne</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Dammsugning av fria ytor. Sommarhalvåret skakas mattor som inte är för stora och tunga</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Torkning av golv</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Rengöring i kök och badrum. Avkalkning och putsning av allt krom</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Vitvaror, ugn och mikro rengörs utvändigt</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Handfat och diskho rengörs</li>
             </ul>
              
            </article>
            <article className="process-card">
              <ul className="hero-card">
                <li><span className="note-check" aria-hidden="true">✓</span>Vi tömmer inte vattenlås vid hemstädning, det ingår vid storstädning och flyttstädning</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Vill du ha ugnsrengöring eller bäddning? Då passar storstädning bättre</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Inomhustemperaturen bör inte vara lägre än 19 grader när vi städar</li>
              
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
