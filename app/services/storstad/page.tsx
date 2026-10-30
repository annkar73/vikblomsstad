
import Link from "next/link";

export default function StorstadPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              GRUNDLIGARE ÄN HEMSTÄDNING
            </span>

            <h1>
              Storstädning för hem i Roslagen
            </h1>

            <p className="hero-description">
             Storstädning är hemstädningens grundligare syskon. Det ingår mer städning i varje rum, och vi är lyhörda för dina önskemål om vad som ska prioriteras. 
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

          <div className="hero-visual hero-storstad">
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
            <h2>Vad skiljer storstädning från hemstädning?</h2>
            <p>I en storstädning ingår mer i varje rum. I köket kan du beställa ugnsrengöring, i vardagsrmmet dammsugning av klädda möbler och rengöring av lister och i sovrummet bäddning. Det gör att en storstädning i regel tar längre tid än en hemstädning.</p>
            <p>Vi har med oss allt städmaterial, inklusive dammsugare. Inför uppdraget gör vi ett kostnadsfritt hembesök och lägger upp en plan tillsammans med dig.</p>
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
              <h2>
                Detta ingår i storstädningen
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>Grunden, som i hemstädning</h3>
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
              <h3>Exempel på tillägg i storstädning</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>Ugnsrengöring in- och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Dammsugning av klädda möbler</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Rengöring av lister och snickerier</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Bäddning med rena lakan</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Avkalkning och rengöring av vattenlås</li>
                <li><span className="note-check" aria-hidden="true">✓</span>Rengöring av vitvaror invändigt</li>
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
      <section className="section">
        <div className="container contact-panel">
          <div className="section-heading">
            <div className="contact-copy">
              <span className="eyebrow">ATT TÄNKA PÅ</span>
              <h3>
                Bra att veta
              </h3>
              <ul>
                <li>
                  
                  - Berätta vid hembesöket vilka rum och ytor som är viktigast för dig, så prioriterar vi dem 
                </li>
                <li>
                  
                  - RUT-avdrag på 50% av arbetskostnaden dras direkt på fakturan
                </li>
                <li>
                  
                  - Inomhustemperaturen bör inte vara lägre än 19 grader när vi städar
                </li>

              </ul>
            </div>  
            </div>
            </div>
            </section>

    </main>
  );
}
