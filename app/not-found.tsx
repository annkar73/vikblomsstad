import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidan kunde inte hittas",
  description:
    "Sidan du söker finns inte eller har flyttats. Besök Vikblom Städs startsida eller se våra städtjänster i Hallstavik och Roslagen.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> ROSLAGEN
            </span>

            <h1>
              Oj då!
              <br />
              <span>Här var det visst</span>
              <br />
              lite tomt.
            </h1>

            <p className="hero-description">
                Vi har letat i alla rum, men hittar inte sidan du söker.
              <br />
              Den verkar ha flyttats eller städats bort.
              Men ingen fara – du hittar enkelt vidare härifrån.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/">
                Till startsidan
              </Link>
              <Link className="button button-outline" href="/services">
                Se våra tjänster
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-404">
            <div
              className="hero-photo"
              role="img"
              aria-label="En korridor med öppna dörrar till tomma rum"
            />
            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

      </section>
    </main>
  );
}
