export default function PricePage() {
  return (
    <main>
      <section className="price-section">
        <div className="price-container">
          <article className="price-panel">
            <div className="price-info">
              <span className="eyebrow">Prislista</span>
              <h2>Våra priser</h2>
              <p>
                Vi erbjuder konkurrenskraftiga priser för våra städtjänster.
                <br />
                Nedan hittar du en översikt över våra priser för olika typer av
                städning.
                <br />
                Kontakta oss gärna för en mer detaljerad offert eller om du har
                några frågor.
              </p>
            </div>
          </article>

          <article className="price-panel">
            <div className="price-content">

              <h3>Städning – timpris för privatpersoner</h3>
              <p>Samma timpris gäller för alla våra städtjänster. Priset visas efter RUT-avdrag.</p>
              <ul>
                <li>Hemstädning</li>
                <li>Storstädning</li>
                <li>Byggstädning</li>
              </ul>

              <p>
                <strong>Måndag - Fredag: 275 kr/timme</strong>
                <br />
                <strong>Lördag: 375 kr/timme</strong>
              </p>

              <h3>Städning – timpris för företag</h3>
              <p>Samma timpris gäller för alla våra städtjänster. Företag får ej RUT-avdrag.</p>
              <ul>
                <li>Storstädning/Företagstädning</li>
                <li>Kontors- och arbetsplatsstädning</li>
                <li>Byggstädning</li>
                <li>Utcheckningsstädning för Airbnb</li>
              </ul>

              <p>
                <strong>Måndag - Fredag: 550 kr/timme</strong>
                <br />
                <strong>Lördag: 650 kr/timme</strong>
              </p>


              <h3>RUT-avdrag</h3>
              <p>
                Privatpersoner kan ha rätt till RUT-avdrag på arbetskostnaden.
                Avdraget görs direkt på fakturan när villkoren är uppfyllda.
                <br />
                <a
                  href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrutavdraget.4.d5e04db14b6fef2c866097.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Läs mer om vad som gäller hos <strong>Skatteverket</strong>.
                </a>
              </p>
              <h3>Fönsterputs</h3>
              <p>
                Extra fönster vid flyttstädning och fristående fönsterputsning
                debiteras enligt följande:
              </p>
              <h4><strong>Pris för privatpersoner</strong></h4>
              <p>
                <strong>Normalstora fönster: 60 kr per fönster</strong>
                <br />
                <strong>Stora fönster: 120 kr per fönster</strong>
              </p>
              
              <h4><strong>Pris för företag</strong></h4>
              <p>
                <strong>Normalstora fönster: 120 kr per fönster</strong>
                <br />
                <strong>Stora fönster: 240 kr per fönster</strong>
              </p>


              <h3>Flyttstädning</h3>
              <p>
                Flyttstädning prissätts efter bostadens storlek. Fönsterputs av
                upp till 10 fönster ingår i priset.
              </p>
              <p>
                <strong>Under 120 kvm: 50 kr/kvm </strong>

                <br />
                <strong>Över 120 kvm: 40 kr/kvm</strong>
              </p>
              <p>
                Ytterligare fönster debiteras enligt prislistan för fönsterputs.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
