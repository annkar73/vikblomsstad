import Link from "next/link";

export default function FlyttstadPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">ALLTID FAST PRIS</span>

            <h1>Flyttstädning i Norrtälje Kommun</h1>

            <p className="hero-description">
              Vi städar alla typer av hem i samband med utflyttning eller
              inflyttning: radhus, villa, lägenhet och fritidshus. Det ingår ett
              kostnadsfritt hembesök där vi tillsammans ser över ytorna och
              lägger upp en arbetsplan.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Kontakta oss
              </Link>

              <Link className="button button-outline" href="tel:+46736325235">
                Ring 073-632 52 35
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-flyttstad">
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

      {/* Information om tjänsten */}
      <section className="about section">
        <div className="container about-grid">
          <div className="about about-copy">
            <h2>Städat och godkänt vid besiktningen</h2>
            <p>
              Det ingår ett kostnadfritt hembesök där vi ser över ytorna i din
              bostad. En flyttstädning ska klara besiktningen, oavsett om det är
              en hyresvärd, en bostadsrättsförening eller om det är du som kund
              som granskar.
            </p>
            <p className="side-border">
              Om du inte har möjlighet att ta emot ett hembesök ser vi gärna att du skickar bilder av kök, badrum och eventuella trägolv i bostaden så vi vet om vi behöver använda speciella metoder för att ytorna inte ska bli skadade.
            </p>
            <p>
              {" "}
              Vi följer en fast checklista (se nedan) som täcker samtliga rum,
              kök och badrum, och vi har med oss allt material som behövs.
            </p>
            <p>
              Vi utför alltid flyttstädningen till ett fast pris,  så du vet
              exakt vad det kostar.{" "}
            </p>
            <p>
              Som privatperson får du RUT-avdrag på 50 % av arbetskostnaden. Vi
              gör avdraget direkt på fakturan.{" "}
            </p>
            <p>
              <strong>Nöjd kund-garanti:</strong>
            </p>
            <p>
              Efter utfört uppdrag gör vi en slutbesiktning tillsammans med dig
              som kund. Om det är något du inte blivit nöjd med hör av dig till
              oss så kommer vi och fixar det kostnadsfritt så fort som möjligt.
              <strong> Din städgaranti gäller i 24 timmar.</strong>
            </p>
          </div>

          <div className="booking-card service-navy">
            <span className="eyebrow">{/* Underrubrik */}</span>

            <h3>Kontakta oss för bokning</h3>

            <p>
              Vi ser över bostaden tillsammans och du får ett tydligt pris, utan
              förpliktelser.
            </p>
            <div>
              <Link className="button" href="/contact">
                Kontakta oss
              </Link>
            </div>
            <br></br>
            <div>
              <Link
                className="button button-outline-invert"
                href="tel:+46736325235"
              >
                Ring 073-632 52 35
              </Link>
            </div>
            <p>
              <strong>Nöjd kund-garanti:</strong> hör av dig inom 24 timmar om
              något inte blev bra, så åtgärdar vi det kostnadsfritt.
            </p>
          </div>
        </div>
      </section>

      {/* Vad som ingår */}
      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Detta ingår i flyttstädningen</h2>
            </div>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>I samtliga rum</h3>
              <ul className="hero-note">
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Fönsterputs in- och utsida samt mellan glasen (vår och sommar)
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring bakom element
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av golv
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Avtorkning av innerdörrar, lister, kontakter, fönsterbrädor
                  och lampor
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av garderober både utvändigt och invändigt
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av väggar från damm
                </li>
              </ul>
            </article>

            <article className="process-card">
              <h3>Kök</h3>
              <ul className="hero-note">
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av kyl och frys, både invändigt och utvändigt
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av spis invändigt, utvändigt och bakom
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av värmeskåp
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av diskmaskin, invändigt och utvändigt
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Avtorkning av skåp, lådor och bänkar både invändigt och
                  utvändigt
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av dörrar, lister, kontakter, fönsterbrädor och
                  lampor
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Dammsugning och våttorkning av golv
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Dammsugning och våttorkning av golv
                </li>
              </ul>
            </article>

            <article className="process-card">
              <h3>Badrum och toalett</h3>
              <ul className="hero-note">
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av dusch och badkar
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av handfat inklusiver undersida
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring in- och utsidan av toalettstol
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av golvbrunnar, ventiler och vattenlås
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av skåp, lådor och bänkar både invändigt och
                  utvändigt
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Avtorkning av speglar och lampor
                </li>
                <li>
                  <span className="note-check" aria-hidden="true">
                    ✓
                  </span>
                  Rengöring av golv
                </li>
              </ul>
            </article>
          </div>
        </div>

        <section className="section contact-panel">
          <article className="process-card container">
            <h3>Detta ingår inte</h3>
            <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">
                  ✓
                </span>
                Tvätt av tak och väggar med tapet
              </li>
              <li>
                <span className="note-check" aria-hidden="true">
                  ✓
                </span>
                Rengöring av persienner
              </li>
              <li>
                <span className="note-check" aria-hidden="true">
                  ✓
                </span>
                Rengöring av kristallampor
              </li>
              <li>
                <span className="note-check" aria-hidden="true">
                  ✓
                </span>
                Rengöring av kvarlämnade möbler
              </li>
              <li>
                <span className="note-check" aria-hidden="true">
                  ✓
                </span>
                Biytor som garage, förråd, tvättstuga, vind, balkong och veranda
              </li>
            </ul>
            <div>
              <br></br>
              <p className="uppercase-text">
                <strong>
                  Vill du beställa till dessa tjänster tillkommer en extra
                  avgift på 275 kr per tjänst
                </strong>
              </p>
            </div>
          </article>
        </section>
      </section>

      <section className="section">
        <div className="container contact-panel">
          <div className="section-heading">
            <div>
                <span className="eyebrow">Innan vi kommer</span>
                <br></br>
              <p className="margin-top">
                För att vi ska kunna utföra arbetet på bästa möjliga sätt och
                lämna ett skinande rent resultat vill vi be dig tänka på
                följande punkter innan vi kommer:
              </p>
              <br></br>
              <div>
                <p>
                  <strong>Möbler och tillhörigheter: </strong> Bostaden ska vara tom på möbler och lösa föremål på städdagen, om inte annat har avtalats.
                </p>
                <p>
                  <strong>
                    Väggar med tapet: </strong> Vi tar inte ansvar för fläckar på tapetserade väggar. Dessa dammtorkas endast på grund av risken för skador på ytskiktet.
                </p>
                <p>
                  <strong>Kyl och frys: </strong>
                  Dessa ska vara tömda, avfrostade och avstängda på städdagen.
                </p>
                <p>
                  <strong>Vitvaror: </strong> Vitvaror ska vara framdragna om det ska städas bakom dem. Observera att dessa ställs tillbaka av dig som kund.
                </p>
                <p>
                  <strong>Ugnslucka: </strong> Glaset i ugnsluckan monteras isär och sätts tillbaka av dig som kund.
                </p>
                <p><strong>Fönsterputs:</strong> På grund av kyla under höst- och vinterhalvåret putsar vi enbart in- och utsidan av fönster under den här säsongen. Putsar man mellan rutorna i kylan blir det flammigt.</p>
                <p>
                  <strong>Inomhustemperatur: </strong> Det behöver vara minst 19 grader inomhus vid städtillfället, av hänsyn till vår hälsa.
                </p>
                <p>
                  <strong>Ljus/el: </strong> Se till att det finns tillgång till el och ljuskällor. Meddela oss om vi behöver ta med extra lampa.
                </p>
                <br></br>
                <p className="uppercase-text"><strong>
                  Tveka inte att höra av dig om du har några funderingar kring detta.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
