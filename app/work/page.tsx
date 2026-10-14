
export default function WorkPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              VIKBLOM STÄD <span className="eyebrow-dot" /> JOBBA HÄR
            </span>

            <h1>
              Vill du jobba med oss?
            </h1>

            <p className="hero-description">
              Vi växer i takt med uppdragen. Är du noggrann,
              självgående och gillar känslan av ett riktigt rent
              resultat? Då vill vi gärna höra av dig.
            </p>

            <div className="hero-actions">
              <a className="button" href="#ansokan">
                Skicka spontanansökan
              </a>

              <a
                className="button button-outline"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-photo"
              role="img"
              aria-label="Bild som illustrerar städarbete"
            />
            <div className="photo-label">
              <span className="photo-label-icon" aria-hidden="true" />
              <span>
                <strong>Städning med omtanke</strong>
                <small>Ett litet företag där varje uppdrag räknas.</small>
              </span>
            </div>
            <div className="photo-decoration" aria-hidden="true" />
          </div>
        </div>

        <div className="container hero-bottom">
          <span>VILL DU BLI EN DEL AV VIKBLOM STÄD?</span>
          <a href="#vem-soker-vi" aria-label="Läs vem vi söker">
            ↓
          </a>
        </div>
      </section>

      <section className="about section" id="vem-soker-vi">
        <div className="container about-grid">
          <div className="about-visual">
            <div
              className="about-photo"
              role="img"
              aria-label="Bild som illustrerar arbete inom städning"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">VEM SÖKER VI?</span>

            <h2>Noggrann, självgående och serviceinriktad</h2>

            <p>
              Vikblom Städ AB är ett litet företag där varje uppdrag
              räknas. Vi söker dig som tycker om att jobba självständigt,
              är noggrann med detaljerna och bemöter kunderna med värme
              och respekt.
            </p>

            <p>
              Körkort och tillgång till bil är en fördel eftersom vi
              arbetar i hela Norrtälje kommun. Erfarenhet av städning
              är ett plus, men inget krav.
            </p>

            <div className="about-facts">
              <article className="about-fact">
                <strong>Noggrann</strong>
                <span>Du tar ansvar för detaljerna</span>
              </article>

              <article className="about-fact">
                <strong>Självgående</strong>
                <span>Du trivs med eget ansvar</span>
              </article>

              <article className="about-fact">
                <strong>Serviceinriktad</strong>
                <span>Du bemöter kunder väl</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SÅ GÖR DU</span>
              <h2>Skicka en spontanansökan</h2>
            </div>

            <p>
              Vi tar gärna emot din ansökan och hör av oss när vi
              behöver förstärkning.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>1</span>
              <h3>Berätta om dig</h3>
              <p>
                Fyll i dina kontaktuppgifter och berätta lite om dig
                själv och din erfarenhet.
              </p>
            </article>

            <article className="process-card">
              <span>2</span>
              <h3>Skicka din ansökan</h3>
              <p>
                Ange var du bor så att vi får en uppfattning om
                var du kan arbeta.
              </p>
            </article>

            <article className="process-card">
              <span>3</span>
              <h3>Vi hör av oss</h3>
              <p>
                Vi kontaktar dig när vi behöver förstärkning och
                har möjlighet att gå vidare.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section" id="ansokan">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">SPONTANANSÖKAN</span>
            <h2>Berätta om dig själv</h2>
            <p>
              Fyll i formuläret så att vi kan lära känna dig lite bättre.
              Dina uppgifter ska bara användas för rekrytering.
            </p>
          </div>

          <form
            className="contact-form"
            name="spontanansokan"
            method="post"
          >
            <div className="form-grid">
              <label className="form-field">
                Namn
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="För- och efternamn"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="form-field">
                Telefon
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="07x-xxx xx xx"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="form-field">
                E-post
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="namn@exempel.se"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="form-field">
                Bostadsort
                <input
                  className="form-control"
                  type="text"
                  name="town"
                  placeholder="T.ex. Hallstavik"
                  autoComplete="address-level2"
                  required
                />
              </label>
            </div>

            <label className="form-field">
              Berätta om dig själv
              <textarea
                className="form-control form-textarea"
                name="message"
                rows={5}
                placeholder="Skriv gärna om dig själv, din erfarenhet och när du kan arbeta."
                required
              />
            </label>

            <button className="button" type="submit">
              Skicka ansökan
            </button>

            <p className="form-note">
              Dina uppgifter är avsedda för rekrytering.Inga uppgifter delas vidare till tredje part.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}