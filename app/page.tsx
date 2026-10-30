import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vikblom Städ | Städtjänster i Hallstavik och Roslagen",
  description:
    "Vikblom Städ erbjuder personlig hemstädning, storstädning och flyttstädning i Hallstavik och Norrtälje kommun. Boka ett kostnadsfritt hembesök.",
};

export default function Home() {
  const services = [
    {
      number: "01",
      category: "Hemstädning",
      icon: "⌂",
      title: "Hemstädning",
      description:
        "Återkommande städning eller enstaka tillfällen. Vi dammar och dammsuger fria ytor, torkar golv och rengör kök och badrum.",
      color: "service-lavender",
      href: "/services/hemstad",
    },
    {
      number: "02",
      category: "Storstädning",
      icon: "✧",
      title: "Storstädning",
      description:
        "En mer grundlig städning när hemmet behöver lite extra omsorg, med exempelvis ugn, golvlister och bäddning.",
      color: "service-lavender",
      href: "/services/storstad",
    },
    {
      number: "03",
      category: "Flyttstädning",
      icon: "↗",
      title: "Flyttstädning",
      description:
        "Alltid till fast pris efter kostnadsfritt hembesök. Checklista för in- och utflyttning.",
      color: "service-lavender",
      href: "/services/flyttstad",
    },
    {
      number: "04", 
      category: "Fönsterputs",
      icon: "☼",
      title: "Fönsterputs",
      description:
        "Beställs maj till oktober. Vid större uppdrag kommer vi två: en putsar, en städar.",
      color: "service-lavender",
      href: "/services/fonsterputs",
    },

    {
      number: "05",
      category: "Kontors- och arbetsplatsstäd",
      icon: "⌘",
      title: "Kontors- & arbetsplatsstäd",
      description:
        "Kontor, butik, reception och trappstädning. Även städning före och efter event.",
      color: "service-lavender",
      href: "/services/kontorstad",
    },
    {
      number: "06",
      category: "Byggstädning",
      icon: "✳",
      title: "Byggstädning",
      description:
        "Grovdammsugare för byggdamm. Bortforsling av byggmaterial kan beställas.",
      color: "service-blue",
      href: "/services/byggstad",
    },
    {
      number: "07",
      category: "Utcheckningsstäd Airbnb",
      icon: "⌂",
      title: "Utcheckningsstäd för Airbnb",
      description:
        "Vi gör rent inför nästa gäst och kan ordna löpande upplägg för dig som hyr ut ditt boende.",
      color: "service-lavender",
      href: "/services/airbnb",
    },
        {
      number: "08",
      category: "unsure",
      icon: "⌂",
      title: "Osäker på vad du behöver?",
      description:
        "Boka ett koststnadsfritt hembesök så går vi igenom bostaden tillsammans",
      color: "service-pink",
      href: "/contact",
    },

  ];

  return (
    <main>


      <section className="hero">
        <div className="hero-wash" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              
              STÄDFIRMA I HALLSTAVIK <span className="eyebrow-dot"></span> NORRTÄLJE KOMMUN
            </span>

            <h1>
              Städning i Roslagen,
              <br></br>
              <span>noggrant utfört</span> till
              <br />
              ett rimligt pris
            </h1>

            <p className="hero-description">
              Vikblom Städ är det lokala städföretaget för hem och arbetsplatser. Inför varje uppdrag lyssnar vi på dina önskemål och formar beställningen tillsammans med dig.
            </p>

            <div className="hero-actions">
              <a className="button" href="/contact">
                Boka kostnadsfritt hembesök
              </a>
              <a className="button button-outline" href="tel:+46736325235">
                Ring 073-632 52 35 
              </a>
            </div>


<ul className="hero-note">
  <li>
    <span className="note-check" aria-hidden="true">✓</span>
    Nöjd kund-garanti
  </li>
  <li>
    <span className="note-check" aria-hidden="true">✓</span>
    Allt städmaterial ingår
  </li>
  <li>
    <span className="note-check" aria-hidden="true">✓</span>
    Godkänd för F-skatt
  </li>
</ul>
          </div>
          

          <div className="hero-visual hero-home">
            <div
              className="hero-photo"
              role="img"
              aria-label="golv som städas"
            />
            <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true"></span>
              <span>
                <strong>24 timmar städgaranti</strong>
                <small>Inte nöjd? Vi kommer tillbaka kostnadsfritt.</small>
              </span>
            </div>
            <div className="photo-decoration" aria-hidden="true"></div>
          </div>
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
<br></br>
        <div className="hero-bottom container">
          <span>ETT RENARE HEM. EN LÄTTARE VARDAG.</span>
          <a href="#trygghet" aria-label="Läs om våra fördelar"></a>
        </div>

      </section>


      <section className="services section" id="tjanster">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">VÅRA TJÄNSTER</span>
              <h2>Städning för hem, flytt och arbetsplats</h2>
            </div>
            <p>
              

            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card ${service.color}`}
                key={service.number}
              >
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href} className="service-link">
                  Läs mer
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section" id="sa-gar-det-till">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SÅ GÅR DET TILL</span>
              <h2>Från första kontakt till färdigstädat</h2>
            </div>
            <p>
              
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>1</span>
              <h3>Kostnadsfritt hembesök</h3>
              <p>
                Vi kommer hem till dig, ser över ytorna och lyssnar på vad du vill ha hjälp med.
              </p>
            </article>
            <article className="process-card">
              <span>2</span>
              <h3>Vi formar din beställning</h3>
              <p>
                tillsammans lägger vi upp en arbetsplan. Flyttstädning får alltid ett fast pris.
              </p>
            </article>
            <article className="process-card">
              <span>3</span>
              <h3>Vi städar, du njuter</h3>
              <p>
                Vi har med oss allt material. 
                <br></br>
                Inte nöjd? Säg till inom 24 timmar så åtgärdar vi det
              </p>
            </article>
          </div>

          
        </div>
      </section>


<section className="about section" id="om-oss">
  <div className="container about-grid">
    <div className="about-visual">
      <div
        className="about-photo"
        role="img"
        aria-label="Vikblom Städs arbete med att skapa rena och trivsamma miljöer"
      />
    </div>

    <div className="about-copy">
      <span className="eyebrow">OM OSS</span>

      <h2>Ett litet städföretag med stort engagemang</h2>

      <p>
        Vikblom Städ AB drivs av Emelie Vikblom med utgångspunkt
        i Hallstavik. Målet är att förbättra både hem- och
        arbetsplatsmiljöer och göra varje städuppdrag till en
        personlig och givande upplevelse.
      </p>

      <blockquote className="about-quote">
        Inför varje uppdrag lyssnar jag på dina önskemål,
        och tillsammans formar vi din beställning.
      </blockquote>

      <p>
        Vid större uppdrag med fönsterputs samarbetar
        företaget med Helene. Då kommer vi två:
        en putsar fönstren, den andra städar.
      </p>

      <div className="about-facts">
        <article className="about-fact">
          <strong>Hallstavik</strong>
          <span>Utgångspunkt</span>
        </article>

        <article className="about-fact">
          <strong>F-skatt</strong>
          <span>Godkänt företag</span>
        </article>

        <article className="about-fact">
          <strong>RUT-avdrag</strong>
          <span>Direkt på fakturan</span>
        </article>
      </div>

      <a className="button button-outline" href="/about">
        Läs mer om oss 
      </a>
    </div>
  </div>
</section>

      <section className="pricing-section section" id="priser">
        <div className="container">

<div className="pricing-layout">
  <div className="pricing-content">
    <div className="section-heading">
      <div>
        <span className="eyebrow">PRISER</span>
        <h2>Tydliga timpriser, RUT redan avdraget</h2>
      </div>
    </div>

    <div className="price-grid">
      <article className="price-card">
        <span className="eyebrow">MÅNDAG–FREDAG</span>
        <p className="price-amount">
          275 <span>kr/timme</span>
        </p>
        
      </article>

      <article className="price-card price-card-highlight">
        <span className="eyebrow">HELGER OCH RÖDA DAGAR</span>
        <p className="price-amount">
          375 <span>kr/timme</span>
        </p>
      </article>  
      



<article className="price-card price-card-highlight window-price-card">
  <span className="eyebrow">FÖNSTERPUTS</span>

  <div className="window-price-row">
    <span>Normalstora fönster</span>
    <p className="price-amount">
      60<span>kr/fönster</span>
    </p>
  </div>

  <div className="window-price-row">
    <span>Stora fönster</span>
    <p className="price-amount">
      120<span>kr/fönster</span>
    </p>
  </div>
</article>

    </div>
    <div className="price-info">Priserna gäller inklusive moms och efter RUT-avdrag. Flyttstädning offereras alltid till fast pris.</div>
  </div>

  <div className="rut-panel">
    <div>
      <span className="eyebrow">RUT-AVDRAG</span>
      <h3>Så fungerar RUT hos oss</h3>
      <p>
        Du kan få rutavdrag med högst 50 % av arbetskostnaden.
        Vi gör avdraget direkt på fakturan, så du betalar bara
        din del.
      </p>
    </div>

    <ul className="rut-list">
      <li>
        <span className="note-check" aria-hidden="true">✓</span>
        <span>
          Högst 75 000 kr per person och år, varav högst
          50 000 kr får vara rotavdrag.
        </span>
      </li>
      <li>
        <span className="note-check" aria-hidden="true">✓</span>
        <span>
          Du ska ha fyllt 18 år och bo, helt eller delvis,
          i bostaden där städningen utförs.
        </span>
      </li>
      <li>
        <span className="note-check" aria-hidden="true">✓</span>
        <span>
          Gäller inte företagskunder eller arbete som får
          annat ekonomiskt stöd.
        </span>
      </li>
    </ul>
  </div>
</div>
          
        </div>
      </section>

      <section className="gallery-section section" id="galleri">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RESULTAT MED OMTANKE</span>
              <h2>En titt på våra uppdrag.</h2>
            </div>
            <p>
              Några exempel på uppdrag som visar bredden i
              arbetet, från hemstädning till byggstädning.
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
                <span>FEBRUARI 2026</span>
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
                <span>JULI 2026</span>
                <h3>Utomhusuppdrag</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-area-section section" id="omrade">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">VI FINNS NÄRA DIG</span>
            <h2>Städning i Norrtälje kommun.</h2>
          </div>
          <div>
            <p>
              Vikblom Städ utgår från Hallstavik och arbetar i
              hela Norrtälje kommun, med bland annat:
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

      <section className="contact section" id="kontakt">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">VI HÖR GÄRNA FRÅN DIG</span>
            <h2>Ska vi göra din vardag lite enklare?</h2>
            <p>
              Hör av dig så pratar vi om vad du behöver hjälp
              med och hur vi kan lägga upp städningen.
            </p>
            <p>
              Du kan också boka ett kostnadsfritt hembesök
              för att gå igenom uppdraget tillsammans.
            </p>
          </div>

          <div className="contact-action">
            <a className="button button-light" href="tel:+46736325235">
              Ring 073-632 52 35
            </a>
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
