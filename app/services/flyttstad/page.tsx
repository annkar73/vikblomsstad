
import Link from "next/link";

export default function FlyttstadPage() {
  return (
    <main>
   
      <section className="hero">
        <div className="hero-wash" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              ALLTID FAST PRIS
            </span>

            <h1>
              Flyttstädning i Norrtälje Kommun
            </h1>

            <p className="hero-description">
             Vi städar alla typer av hem i samband med utflyttning eller inflyttning: radhus, villa, lägenhet och fritidshus. Det ingår ett kostnadsfritt hembesök där vi tillsammans ser över ytorna och lägger upp en arbetsplan. 
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Boka kostnadsfritt hembesök
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
      </section>

      {/* Information om tjänsten */}
      <section className="about section">
        <div className="container about-grid">
          <div className="about about-copy">
            <h2>Städat och godkänt vid besiktningen</h2>
            <p>Det ingår ett kostnadfritt hembesök där vi ser över ytorna i din bostad. En flyttstädning ska klara besiktningen, oavsett om det är en hyresvärd, en bostadsrättsförening eller om det är du som kund som granskar.</p>
            <p> Vi följer en fast checklista (se nedan) som täcker samtliga rum, kök och badrum, och vi har med oss allt material som behövs.</p> 
            <p>Vi utför alltid flyttstädningen till ett fast pris, så du vet exakt vad det kostar. </p>
            <p>Som privatperson får du RUT-avdrag på 50 % av arbetskostnaden. Vi gör avdraget direkt på fakturan. </p>
            <p><strong>Nöjd kund-garanti:</strong></p>
            <p>Efter utfört uppdrag gör vi en slutbesiktning tillsammans med dig som kund. Om det är något du inte blivit nöjd med hör av dig till oss så kommer vi och fixar det kostnadsfritt så fort som möjligt.<strong> Din städgaranti gäller i 24 timmar.</strong></p>
          </div>

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
      </section>

      {/* Vad som ingår */}
      <section className="process-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>
                Detta ingår i storstädningen
              </h2>
            </div>

          </div>

          <div className="process-grid">
            <article className="process-card">
              <h3>I samtliga rum</h3>
             <ul className="hero-note">
              <li>
                <span className="note-check" aria-hidden="true">✓</span>
                Fönsterputs in- och utsida samt mellan glasen (vår och sommar)
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring bakom element</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring av golv</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Avtorkning av innerdörrar, lister, kontakter, fönsterbrädor och lampor</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring av garderober både utvändigt och invändigt</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring av väggar från damm</li>
             </ul>
              
            </article>
            <article className="process-card">
              <h3>Kök</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av kyl och frys, både invändigt och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av spis invändigt, utvändigt och bakom</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av värmeskåp</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av diskmaskin, invändigt och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Avtorkning av skåp, lådor och bänkar både invändigt och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av dörrar, lister, kontakter, fönsterbrädor och lampor</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Dammsugning och våttorkning av golv</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Dammsugning och våttorkning av golv</li>
              </ul>
            </article>
            <article className="process-card">
              <h3>Badrum och toalett</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av dusch och badkar</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av handfat inklusiver undersida</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring in- och utsidan av toalettstol</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av golvbrunnar, ventiler och vattenlås</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av skåp, lådor och bänkar både invändigt och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Avtorkning av speglar och lampor</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av golv</li>
              </ul>
            </article>


          </div>
        </div>

        <section className="section contact-panel">                          
          <article className="process-card container">
              <h3>Detta ingår inte</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Tvätt av tak och väggar med tapet</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av persienner</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av kristallampor</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av kvarlämnade möbler</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Biytor som garage, förråd, tvättstuga, vind, balkong och veranda</li>
                
              </ul>
              <div>
                <br></br>
                <p><strong>Vill du beställa till dessa tjänster tillkommer en extra avgift på 275 kr</strong></p>
                </div>         
              </article>
</section>

      </section>
      <section className="section">
        <div className="container contact-panel">
          <div className="section-heading">
            <div>
              <h2>
                Att tänka på innan vi kommer
              </h2>
              <div>
              <p>
                <strong>Vi tar inte ansvar för fläckar på väggar med tapet. </strong>
                Dessa dammtorkas endast p.g.a risken för skador på ytskiktet.
              </p>
              <p>
                <strong>Avfrosta kyl och frys. </strong>
                De ska vara tömda, avfrostade och avstängda på städdagen.
              </p>
              <p>
                <strong>Vitvaror ska vara framdragna </strong>
                om det ska städas bakom. Dessa ställs tillbaka av kunden.
              </p>
              <p>
                <strong>Ugnsluckans glas </strong>
                monteras isär och tillbaka av dig som kund.
              </p>
              <p>
                <strong>på grund av kyla</strong>
                under höst- och vinterhalvåret putsar vi enbart insida av fönster under den säsongen.
              </p>
              <p>
                <strong>Minst 18 grader inomhus </strong>
                vid städtillfället, av hänsyn till vår hälsa.
              </p>

</div>
            </div>  
            </div>
            </div>
            </section>

    </main>
  );
}
