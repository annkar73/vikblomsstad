import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      number: "01",
      category: "Hemstädning",
      icon: "⌂",
      title: "Hemstädning",
      description:
        "Återkommande städning eller enstaka tillfällen. Vi dammar, dammsuger, torkar golv och rengör kök och badrum.",
      color: "service-lavender",
    },
    {
      number: "02",
      category: "Storstädning",
      icon: "✧",
      title: "Storstädning",
      description:
        "En mer grundlig städning när hemmet behöver lite extra omsorg, med exempelvis ugn, stoppade möbler och golvlister.",
      color: "service-lavender",
    },
    {
      number: "03",
      category: "Flyttstädning",
      icon: "↗",
      title: "Flyttstädning",
      description:
        "Alltid till fast pris efter kostnadsfritt hembesök. Checklista för in- och utflyttning.",
      color: "service-lavender",
    },
    {
      number: "04",
      category: "Fönsterputs",
      icon: "☼",
      title: "Fönsterputs",
      description:
        "Beställs juni tillseptember. Vid större uppdrag kommer vi två: en putsar, en städar.",
      color: "service-lavender",
    },
    {
      number: "05",
      category: "Kontors- och arbetsplatsstäd",
      icon: "⌘",
      title: "Kontors- & arbetsplatsstäd",
      description:
        "Kontor, butik, reception och trappst'dning. Även städning före och efter event.",
      color: "service-lavender",
    },
    {
      number: "06",
      category: "Byggstädning",
      icon: "✳",
      title: "Byggstädning",
      description:
        "Grovdammsugare för byggdamm. Bortforsling av byggmaterial kan beställas.",
      color: "service-blue",
    },
    {
      number: "07",
      category: "Utcheckningsstäd Airbnb",
      icon: "⌂",
      title: "Utcheckningsstäd för Airbnb",
      description:
        "Vi gör rent inför nästa gäst och kan ordna löpande upplägg för dig som hyr ut ditt boende.",
      color: "service-lavender",
    },
        {
      number: "08",
      category: "unsure",
      icon: "⌂",
      title: "Osäker på vad du behöver?",
      description:
        "Boka ett koststnadsfritt hembesök så går vi igenom bostaden tillsammans",
      color: "service-pink",
    },

  ];

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>073-632 52 35 emelie.vikblom@vikblomstad.se</span>
          <span className="topbar-highlight">RUT-avdraget dras direkt på fakturan</span>
          
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#" aria-label="Vikblom Städ, startsida">
            
            <Image
              src="/images/vikblom-stad-logotyp.png"
              alt="Vikblom Städ"
              width={200}
              height={50}
            />
          </a>

          <nav className="nav-links" aria-label="Huvudmeny">
            <a href="#tjanster">Våra tjänster</a>
            <a href="#om-oss">Om oss</a>
            <a href="#priser">Priser</a>
            <a href="#galleri">Galleri</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="button button-small" href="#kontakt">
            Be om en offert <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

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
              <a className="button">
                Boka kostnadsfritt hembesök
              </a>
              <a className="button button-outline">
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
          

          <div className="hero-visual">
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

        <div className="hero-bottom container">
          <span>ETT RENARE HEM. EN LÄTTARE VARDAG.</span>
          <a href="#trygghet" aria-label="Läs om våra fördelar">↓</a>
        </div>
      </section>

      <section className="trust-section" id="trygghet">
        <div className="container trust-grid">
          <article>
            <span aria-hidden="true">✓</span>
            <div>
              <h3>Nöjd kund-garanti</h3>
              <p>Kontakta oss inom 24 timmar om du inte är nöjd.</p>
            </div>
          </article>
          <article>
            <span aria-hidden="true">✳</span>
            <div>
              <h3>Städmaterial ingår</h3>
              <p>Vi tar med det städmaterial som behövs.</p>
            </div>
          </article>
          <article>
            <span aria-hidden="true">♡</span>
            <div>
              <h3>Personlig service</h3>
              <p>Vi planerar uppdraget tillsammans med dig.</p>
            </div>
          </article>
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
              eventuell extra text, 1 till 3 meningar

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
                <a href="#kontakt" className="service-link">
                  Läs mer <span aria-hidden="true">↗</span>
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
              eventuell extra text, 1 till 3 meningar
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
                tillsammans lägger iv upp en arbetsplan. Flyttstädning får alltid ett fast pris.
              </p>
            </article>
            <article className="process-card">
              <span>3</span>
              <h3>Vi städar, du njuter</h3>
              <p>
                Vi har med oss allt material. Inte nöjd? Säg till inom 24 timmar så åtgärdar vi det
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
        företaget med J.a.R Allservice. Då kommer vi två:
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
          <strong>Sedan 2021</strong>
          <span>Stöttar bygden</span>
        </article>
      </div>

      <a className="button button-outline" href="/om-oss">
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
          250 <span>kr/timme</span>
        </p>
        
      </article>

      <article className="price-card price-card-highlight">
        <span className="eyebrow">HELGER OCH RÖDA DAGAR</span>
        <p className="price-amount">
          500 <span>kr/timme</span>
        </p>
      </article>  
    </div>
    <div className="price-info">Priserna gäller inklusive moms och efter RUT-avdrag. Flyttstädning offereras alltid till fast pris</div>
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
              Ring 073-632 52 35 <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-email"
              href="mailto:emelie.vikblom@vikblomstad.se"
            >
              emelie.vikblom@vikblomstad.se
            </a>
            <p className="contact-address">
              Carl Wahrens väg 22A
              <br />
              763 34 Hallstavik
            </p>
          </div>
        </div>
      </section>


<footer className="footer">
  <div className="container">
    <div className="footer-main">
      <div className="footer-brand">
        <Link
          className="brand brand-footer"
          href="/"
          aria-label="Vikblom Städ, startsida"
        >
          <Image
            src="/images/vikblom-stad-logotyp.png"
            alt="Vikblom Städ"
            width={180}
            height={60}
            className="footer-logo"
          />
        </Link>

        <div className="footer-description">
          <p>
            Det lokala städföretaget med inriktning på hem och
            arbetsplats. Kvalitativ städtjänst i Roslagen till ett
            rimligt pris.
          </p>
        </div>
      </div>

      <div className="footer-column">
        <h2>Tjänster</h2>
        <ul>
          <li><a href="#tjanster">Hemstädning</a></li>
          <li><a href="#tjanster">Storstädning</a></li>
          <li><a href="#tjanster">Flyttstädning</a></li>
          <li><a href="#tjanster">Fönsterputs</a></li>
          <li><a href="#tjanster">Kontors- &amp; arbetsplatsstäd</a></li>
          <li><a href="#tjanster">Byggstädning</a></li>
          <li><a href="#tjanster">Utcheckningsstäd Airbnb</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h2>Företaget</h2>
        <ul>
          <li><a href="#om-oss">Om oss</a></li>
          <li><a href="#galleri">Galleri</a></li>
          <li><a href="/jobba-har">Jobba här</a></li>
          <li><a href="#kontakt">Kontakta oss</a></li>
          <li><a href="#tjanster">Tjänster</a></li>
          <li><a href="/integritetspolicy">Integritetspolicy</a></li>
        </ul>
      </div>

      <div className="footer-column footer-contact-info">
        <h2>Kontakt</h2>
        <ul>
          <li><a href="tel:+46736325235">073-632 52 35</a></li>
          <li>
            <a href="mailto:emelie.vikblom@vikblomstad.se">
              emelie.vikblom@vikblomstad.se
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Carl+Wahrens+v%C3%A4g+22A%2C+763+34+Hallstavik"
              target="_blank"
              rel="noreferrer"
            >
              Carl Wahrens väg 22A, 763 34 Hallstavik
            </a>
          </li>
          <li>Org.nr 559266-2224</li>
          <li>Swish: 123 581 20 03</li>
          <li>Godkänd för F-skatt</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2026 Vikblom Städ AB</span>

      <p className="footer-locations">
        Hallstavik <span>·</span> Älmsta <span>·</span> Väddö
        <span>·</span> Grisslehamn <span>·</span> Singö
        <span>·</span> Skebobruk
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}
