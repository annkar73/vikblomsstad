
import Link from "next/link";

export default function ByggstadPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              PRIVAT OCH FÖRETAG
            </span>

            <h1>
              Byggstädning i Norrtälje kommun
            </h1>

            <p className="hero-description">
             Vikblom Städ AB erbjuder en grundlig, professionellt utförd byggstädning som gör ditt hem fritt från farliga dammpartiklar.
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

          <div className="hero-visual hero-byggstad">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar hemstädning"
            />
                                    <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Grundlig byggstädning</strong>
                <small>Fritt från farliga dammpartiklar</small>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Information om tjänsten */}
      <section className="about section">
        <div className="container about-grid">

          <div className="about-copy">
            <span className="eyebrow">
              {/* Underrubrik */}
            </span>

            <h2>
              Fritt från byggdamm, redo att flytta in
            </h2>

            <p>
              Efter en renovering eller nybyggnation ligger byggdammet överallt: på ytor, i skåp, i ventiler och i luften. Vi har grovdammsugare för byggdamm och går igenom rummen systematiskt så att du kan flytta in i ett rent hem.
            </p>

            <p>
              Vi utför byggstädningar hos både privatpersoner och företag i Norrtälje kommun. Det går även utmärkt att beställa bortforsling av byggmaterial och skräp.
            </p>
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
                 Detta ingår i byggstädningen
              </h2>
            </div>

            <p>
              {/* Kort introduktion med extra text */}
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              
              <h3>Detta ingår</h3>
                           <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Dammning av fria ytor
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Grovdammsugning av golv, väggar och tak</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Avtorkning av alla ytor, lister och snickerier</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Fönster och fönsterbrädor</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Skåp och lådor, in- och utvändigt</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Sanitetsporslin och kök</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Slutstädning med våttorkning av golv</li>
             </ul>

            </article>

            <article className="process-card">
              <h3>Tillval</h3>
                           <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Bortforsling av byggmaterial och skräp
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Fönsterputs in- och utvändigt</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Rengöring av ventiler och element</li>
             </ul>

            </article>

            <article className="process-card">
              <h3>Bra att veta</h3>
              <ul>
                <li>Privatpersoner får RUT-avdrag på arbetskostnaden, avdraget görs på fakturan</li>
                <li>Berätta vid bokningen om det finns särskilt dammiga ytor eller kvarvarande byggmaterial</li>
                <li>Vi lämnar fast pris efter ett kostnadsfritt besök</li>
              </ul>
            </article>
          </div>
        </div>
      </section>


    </main>
  );
}
