
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Städtjänster i Hallstavik och Norrtälje",
  description:
    "Upptäck Vikblom Städs städtjänster i Hallstavik och Norrtälje kommun. Vi erbjuder hemstädning, storstädning, flyttstädning, byggstädning, fönsterputs och kontors- & arbetsplatsstädning.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
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
              DINA BEHOV, VÅR EXPERTIS
            </span>

            <h1>
              Våra tjänster
            </h1>

            <p className="hero-description">
             Från löpande hemstädning till flyttstädning med fast pris och byggstädning efter renoveringen. Du väljer, vi städar. Allt material har vi med oss och vi gör RUT-avdraget direkt på fakturan.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Skicka en förfrågan
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
                            <div className="container hero-bottom">
          <span>VI FINNS NÄRA DIG I ROSLAGEN</span>
                  <a href="#trygghet" aria-label="Läs om våra fördelar"></a>

        </div>

      </section>

      {/* info about services */}
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
              så går vi igenom uppdraget tillsammans.
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
