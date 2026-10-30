
import Link from "next/link";

export default function FonsterputsPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              MAJ TILL OKTOBER
            </span>

            <h1>
              Fönsterputsning i Hallstavik och Roslagen
            </h1>

            <p className="hero-description">
             Under månaderna maj till oktober kan du beställa fönsterputsning, antingen som tillägg till din hemstädning eller som ett eget uppdrag.
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

          <div className="hero-visual hero-fonsterputs">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar fönsterputsning"
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
              Rena fönster, in- och utvändigt
            </h2>

            <p>
              Vi putsar fönstren på in- och utsida samt mellan rutorna, och torkar av karmar och fönsterbrädor. Vid större jobb samarbetar vi med Helene. Då kommer vi två: en putsar och en städar.
            </p>

            <p>
              Fönsterputs är en RUT-berättigad tjänst för dig som privatperson, och avdraget görs direkt på fakturan.
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
                Bra att veta om fönsterputsen
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
             <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Fönsterglas in- och utvändigt
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>Mellan rutorna på öppningsbara fönster</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Fönsterkarmar och fönsterbrädor torkas av</li>
              <li><span className="note-check" aria-hidden="true">✓</span>Ytterdörrar med glas</li>
             </ul>
              
            </article>
            <article className="process-card">
              <ul className="hero-note">
                <li>Fönsterputs beställs under perioden maj till oktober</li>
                <li>Persienner rengörs som tillägg, säg till vid bokningen</li>
                <li>Meddela oss i förväg om ett fönster är trögt att öppna eller har skador</li>
              
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


      {/* Kontakt */}
    </main>
  );
}
