import Link from "next/link";
import AutoCarousel from "../components/gallery/AutoCarousel";
import ManualCarousel from "../components/gallery/ManualCarousel";

const outdoorImages = [
  {
    src: "/images/vikblom-stad-plattor-fore1.jpg",
    alt: "Plattor före rengöring",
  },
  {
    src: "/images/vikblom-stad-plattor-efter1.jpg",
    alt: "Plattor efter rengöring",
  },
  {
    src: "/images/vikblom-stad-plattor-fore2.jpg",
    alt: "Plattor före rengöring",
  },
  {
    src: "/images/vikblom-stad-plattor-efter2.jpg",
    alt: "Plattor efter rengöring",
  },
    {
    src: "/images/vikblom-stad-utomhus-plattor-rotated2.jpg",
    alt: "Plattor före rengöring",
  },

  {
    src: "/images/vikblom-stad-utomhus-plattor-rotated.jpg",
    alt: "Plattor efter rengöring",
  },
  {
    src: "/images/vikblom-stad-utomhus-ved.jpg",
    alt: "Vedhantering",
  },
    {
    src: "/images/vikblom-stad-utomhus-ved-2.jpg",
    alt: "Vedhantering",
  },

];

const indoorImages = [
  {
    src: "/images/vikblom-stad-baddas.jpg",
    alt: "Nybäddad säng",
    caption: "Nystädat rum med bäddad säng",
  },
  {
    src: "/images/vikblom-stad-baddas-dubbel.jpg",
    alt: "Nybäddad säng",
    caption: "Nystädat rum med bäddad säng",
  },
  {
    src: "/images/vikblom-stad-flyttstad.jpg",
    alt: "Nystädat rum",
    caption: "Nystädat rum med blanka golv",
  },
          {
    src: "/images/vikblom-stad-hemstad.jpg",
    alt: "Nystädat rum",
    caption: "Rent och nystädat för en skön vardag",
  },
    {
    src: "/images/vikblom-stad-hemstadning-golv-1024x576.jpg",
    alt: "Blanka nystädade golv",
    caption: "Blanka nystädade golv - varje gång",
  },
      {
    src: "/images/vikblom-stad-stad.jpg",
    alt: "Nystädat rum",
    caption: "Nystädat rum med blanka golv",
  },
        {
    src: "/images/vikblom-stad-stad2.jpg",
    alt: "Nystädat rum",
    caption: "Rent och nystädat för en skön vardag",
  },
        {
    src: "/images/vikblom-stad-badrum-fore1.jpg",
    alt: "Handfat före städning",
    caption: "Handfat - före städning"
  },
        {
    src: "/images/vikblom-stad-badrum-efter1.jpg",
    alt: "Handfat efter städning",
    caption: "Handfat - efter städning"
  },



];

export default function GalleryPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> VÅRA UPPDRAG
            </span>

            <h1>
              Resultat med
              <br />
              <span>omtanke</span>
            </h1>

            <p className="hero-description">
              Här kan du se exempel på Vikblom Städs arbete. Vi hjälper både hem
              och arbetsplatser med städning som anpassas efter uppdraget och
              dina önskemål.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Kontakta oss
              </Link>

              <a className="button button-outline" href="tel:+46736325235">
                Ring 073-632 52 35
              </a>
            </div>
          </div>

          <div className="hero-visual hero-gallery">
            <div
              className="hero-photo"
              role="img"
              aria-label="Exempel på städning"
            />

            <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Städning med omtanke</strong>
                <small>För hem och arbetsplatser.</small>
              </span>
            </div>

            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

        <div className="container hero-bottom">
          <span>ETT RENARE HEM. EN LÄTTARE VARDAG.</span>
          <a href="#vara-uppdrag" aria-label="Se våra uppdrag">
            
          </a>
        </div>
      </section>


<section className="gallery-section section" id="vara-uppdrag">
  <div className="container">
    <div className="section-heading gallery-intro">
      <div>
        <span className="eyebrow">VÅRA UPPDRAG</span>
        <h2>Arbete med omtanke och känsla för detaljer</h2>
      </div>

      <p>
        Här får du se några exempel på arbeten som vi har utfört.
        Varje uppdrag är unikt och anpassas efter kundens behov
        och önskemål.
      </p>
    </div>

    <div className="gallery-work-section">
      <div className="gallery-section-heading">
        <span className="eyebrow">UTOMHUS</span>
        <h3>Rent och fint omkring dig</h3>
        <p>
          Från rengöring av uteplatser till andra arbeten som
          gör utemiljön trevligare.
        </p>
      </div>

      <AutoCarousel images={outdoorImages} />
    </div>

    <div className="gallery-work-section">
      <div className="gallery-section-heading">
        <span className="eyebrow">INOMHUS</span>
        <h3>Städning med omsorg om detaljerna</h3>
        <p>
          Se exempel på städning och resultat från våra uppdrag
          i hem och andra inomhusmiljöer.
        </p>
      </div>

      <ManualCarousel
        images={indoorImages}
        label="Inomhusuppdrag"
      />
    </div>
  </div>
</section>

      <section className="service-area-section section">
        <div className="container service-area-panel">
          <div>
            <span className="eyebrow">OLIKA BEHOV</span>
            <h2>Vi hjälper till där det behövs</h2>
          </div>

          <div>
            <p>
              Behöver du hjälp med hemstädning, flyttstädning, fönsterputs eller
              någon av våra andra tjänster? Vi går igenom uppdraget tillsammans
              och planerar utifrån dina önskemål.
            </p>

            <Link className="button button-outline" href="/services">
              Läs om våra tjänster
            </Link>
          </div>
        </div>
      </section>

      <section className="contact section">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">NÄSTA STEG</span>
            <h2>Har du ett uppdrag åt oss?</h2>
            <p>
              Kontakta oss för att berätta vad du behöver hjälp med eller boka
              ett kostnadsfritt hembesök.
            </p>
          </div>

          <div className="contact-action">
            <Link className="button button-light" href="/contact">
              Kontakta oss
            </Link>

            <a className="contact-email" href="mailto:emelie.vikblom@gmail.com">
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
