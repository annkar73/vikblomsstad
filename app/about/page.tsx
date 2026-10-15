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
              Ett litet städföretag medutgångspunkt i
              Hallstavik, som fokuserar på att förbättra både hem- och arbetsplatsmiljöer. Vi strävar efter att göra varje städuppdrag till en personlig och givande upplevelse. 
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

          <div className="hero-visual hero-about">
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
          
        </div>
      </section>


<section className="about section">
  <div className="container about-grid">
    <div className="about-copy">
      <span className="eyebrow">VÅR HISTORIA</span>

      <h2>Personligt, noggrant och nära</h2>

      <p>
        Vikblom Städ AB drivs av Emelie Vikblom. Inför varje uppdrag
        lyssnar vi på dina önskemål och tillsammans formar vi din
        beställning. Vi vill att det ska synas att städ har varit inne,
        och att du ska känna dig trygg med vem som kommer hem till dig.
      </p>

      <blockquote className="about-quote">
        Inför varje uppdrag lyssnar jag på dina önskemål, och
        tillsammans formar vi din beställning.
      </blockquote>

      <p>
        Vi städar i hela Norrtälje kommun med tyngdpunkt på Hallstavik,
        Älmsta, Väddö, Grisslehamn, Singö och Skebobruk.
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

   

<div className="about-info-cards">
  <article className="about-info-card">
    <span className="eyebrow">PERSONAL</span>
    <h3>Personligt och nära</h3>
    <p>
      Emelie på Vikblom Städ AB utför arbetet själv. Vid större uppdrag
      som inkluderar fönsterputsning samarbetar hon med Helene. Då
      arbetar de tillsammans – en putsar fönstren medan den andra
      tar hand om städningen.
    </p>
  </article>

  <article className="about-info-card">
    <span className="eyebrow">MATERIAL</span>
    <h3>Vi tar med det som behövs</h3>
    <p>
      Vi tar med oss allt städmaterial som behövs för uppdraget,
      inklusive dammsugare, så att du kan känna dig trygg med att vi
      har det som krävs för en noggrann städning.
    </p>
  </article>
</div>
  </div>
</section>

      <section className="process-section section" id="vart-arbetssatt">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SÅ JOBBAR VI</span>
              <h2>Det här kan du alltid räkna med</h2>
            </div>

            <p>
              Vi går igenom dina behov tillsammans och kommer överens om
              upplägget innan arbetet börjar.
            </p>
          </div>

          <div className="container trust-grid">
    <article>
      <span aria-hidden="true">%</span>
      <div>
        <h3>RUT-avdrag på fakturan</h3>
        <p>Du kan få upp till 50 % av arbetskostnaden i RUT-avdrag. Vi drar av det direkt på fakturan.</p>
      </div>
    </article>

    <article>
      <span aria-hidden="true">✓</span>
      <div>
        <h3>Nöjd kund-garanti 24 h</h3>
        <p>Hör av dig inom ett dygn så åtgärdar vi det kostnadsfritt.</p>
      </div>
    </article>

    <article>
      <span aria-hidden="true">✳</span>
      <div>
        <h3>Allt material ingår</h3>
        <p>Vi har med oss städmaterial och dammsugare.</p>
      </div>
    </article>

    <article>
      <span aria-hidden="true">⌖</span>
      <div>
        <h3>Lokalt i Roslagen</h3>
        <p>Hallstavik, Älmsta, Väddö, Grisslehamn, Singö och Skebobruk.</p>
      </div>
    </article>
  </div>
        </div>
      </section>

<section className="about-details section">
  <div className="container">
    <div className="about-details-grid">
      <article className="about-details-card">
        <span className="eyebrow">TRYGGHET</span>
        <h3>Nöjd kund-garanti</h3>
        <p>
          Du har städgaranti i 24 timmar. Om det är något du inte blivit
          nöjd med, hör av dig så kommer vi och fixar det kostnadsfritt
          så fort som möjligt.
        </p>
      </article>

      <article className="about-details-card">
        <span className="eyebrow">BETALNING</span>
        <h3>Faktura och betalning</h3>
        <p>
          Vi erbjuder två betalningssätt: betala fakturan via mejl
          eller swisha till 123 581 20 03. Ange fakturanummer vid
          betalning. Företaget är godkänt för F-skatt.
        </p>
      </article>

      <article className="about-details-card">
        <span className="eyebrow">PRIVATPERSONER</span>
        <h3>RUT-avdrag</h3>
        <p>
          Som privatperson får du rutavdrag med högst 50 % av
          arbetskostnaden. Vi gör avdraget på fakturan.
        </p>
      </article>
    </div>
  </div>
</section>


      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">HÄR FINNS VI</span>
            <h2>Vi städar i hela Norrtälje Kommun</h2>
                        <p>
              Med Hallstavik som bas når vi snabbt orterna längs kusten. Bor du någon annanstans i kommunen? Hör av dig, så löser vi det oftast ändå.
            </p>

          </div>

          <div>

            <ul className="about-area-list">
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