
import Link from "next/link";

export default function KontorstadPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              FÖR FÖRETAG
            </span>

            <h1>
              Kontors- & arbetsplatsstädning i Norrtälje Kommun
            </h1>

            <p className="hero-description">
             Vi erbjuder städning av kontor, butik, reception och trapphus, samt städning i samband med event och fester. Vi städar såväl före som efter eventet.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/kontakta-oss">
                Boka kostnadsfritt besök
              </Link>

              <a
                className="button button-outline"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </a>
            </div>
          </div>

          <div className="hero-visual hero-kontorstad">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar hemstädning"
            />
                                    <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>En ren arbetsplats</strong>
                <small>Med fokus på annat</small>
              </span>
            </div>

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
              
            </span>

            <h2>
              En ren arbetsplats som märks
            </h2>

            <p>
              En städad arbetsplats är trevligare för både medarbetare och kunder. Vi lägger upp ett löpande schema som passar er verksamhet, eller kommer vid enstaka tillfälen när det behövs. Inför uppdraget besöker vi lokalen och går igenom vad som ska ingå.
            </p>

            <p>
              Som företagskund faktureras ni utan RUT-avdrag. Vi är godkända för F-skatt.
            </p>
          </div>
        </div>
      </section>

      {/* Vad som ingår */}
      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MER INFO</span>
              <h2>
                Detta kan vi hjälpa till med
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>Vi städar bland annat</h3>
             <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Kontor och konferensrum
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Butiker och receptioner</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Trappstädning i flerbostadshus</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Air B&B och uthyrningsboenden</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Före och efter event och fester</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Byggstädning efter renovering</li>
             </ul>
              
            </article>
            <article className="process-card">
              <h3>Bra att veta</h3>
              <ul className="hero-note">
                <li>Vi har med oss allt städmaterial, inklusive dammsugare</li>
                <li>Ni för ett tydlig pris efter besök i lokalen</li>
                <li>Nöjd kund-garanti: hör av er inom 24 timmar om något inte blev bra</li>
              
              </ul>
            </article>
          <div className="booking-card service-navy">
            <span className="eyebrow">
              {/* Underrubrik */}
            </span>

            <h3>
              Boka kostnadsfritt besök
            </h3>

            <p>
              Vi ser över lokalerna tillsammans och du får ett tydligt pris, utan förpliktelser.
            </p>
            <div><Link className="button" href="/contact">Boka besök</Link></div>
            <br></br>
            <div><Link className="button button-outline-invert" href="tel:+46736325235">Ring 073-632 52 35</Link></div>
          </div>

          </div>
        </div>
      </section>


    </main>
  );
}
