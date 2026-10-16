
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
            <p>En flyttstädning ska klara besiktningen, oavsett om det är en hyresvärd, en bostadsrättsförening eller en köpare som granskar. Vi följer en fast checklista som täcker samtliga rum, kök och badrum, och vi har med oss allt material som behövs. Priset bestämmer vi i förväg vid hembesöket, så du vet exakt vad det kostar. </p>
            <p>Som privatperson får du RUT-avdrag på 50 % av arbetskostnaden. Vi gör avdraget direkt på fakturan. </p>
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
                Damma och ta bort fläckar, klistermärken och dekaler från väggar och tak
              </li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Torka av snickerier: dörrkarmar, lister, fönsterbrädor, trappräcken, fasta hyllor och skåp</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Ta bort tavelkrokar, damma eluttag och fast belysning</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Tvätta fönster in- och utvändigt samt mellan rutorna, torka karmar</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring av persienner och alla fönsterbrädor</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Städa elementen på fram- och baksida</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Torka av alla dörrar och handtag, även ytterdörrar</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Städa ur kakelugnar och öppen spis</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Dammsugning och våttorkning av alla golv, dammsugning och torkning av garderober</li>
              <li><span className="note-check" aria-hidden="true">✓</span>
              Rengöring av fasta speglar</li>
             </ul>
              
            </article>
            <article className="process-card">
              <h3>Kök</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Kakel, väggar, bänkskivor och fasta skärbrädor</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Kranar och diskho avkalkas, inklusive propp och sil</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Vattenledningar och rör torkas av</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Skåp och lådor in- och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Kyl och frys in- och utvändigt, lådorna rengörs</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Spis, ugn, ugnslucka, plåtar, galler och värmeskåp</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Spisen dras fram, golv och väggar bakom torkas</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Fläkt och filter avfettas in- och utvändigt</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Mikro diskmaskin med filter, sopskåp och sopkärl</li>
              </ul>
            </article>
            <article className="process-card">
              <h3>Badrum och toalett</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Golvbrunnar och vattenlås rensas och rengörs</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Kranar, rör och duschmunstycke avkalkas</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Duschväggar, väggar, kakel och fogar</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Badkar in- och utvändigt, fronten tas bort</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Skåp, lådor och speglar</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Handfat och toalett in- och utvändigt, inklusiver rör</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Tvättmaskin och torktumlare, filter och tvättmedelsfack</li>
              </ul>
            </article>


          </div>
        </div>
        <section>
          <div>

          </div>
          </section>    

        <section className="section">                          
          <article className="process-card container">
              <h3>Detta ingår inte</h3>
              <ul className="hero-note">
                <li><span className="note-check" aria-hidden="true">✓</span>
                Tvätt av tak och väggar med tapet (dessa dammtorkas endast på grund av risk för skador på ytskiktet)</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av kristallampor</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Rengöring av kvarlämnade möbler</li>
                <li><span className="note-check" aria-hidden="true">✓</span>
                Biytor som garage, förråd, tvättstuga, vind, balkong och veranda</li>
                
              </ul>
              <div>
                <p>Behöver du hjälp med något av detta? Säg till vid hembesöket så lämnar vi pris på det separat</p>
                </div>         
              </article>
</section>

      </section>
      <section className="section">
        <div className="container contact-panel">
          <div className="section-heading">
            <div className="contact-copy">
              <h3>
                Att tänka på innan vi kommer
              </h3>
              <p>
                <strong>Töm bostaden på möbler. </strong>
                Kvarlämnat får inte hindra att städningen kan utföras ordentligt.
              </p>
              <p>
                <strong>Avfrosta kyl och frys. </strong>
                De ska vara tömda, avfrostade och avstängda på städdagen.
              </p>
              <p>
                <strong>Flytta tyngre inredning</strong>
                som spis och badkar, så vi kommer åt bakom.
              </p>
              <p>
                <strong>Ugnsluckans glas </strong>
                monteras isär och tillbaka av dig som kund.
              </p>
              <p>
                <strong>Åtgärda fel i förväg, </strong>
                till exempel ett fönster som är trögt att öppna, eller meddela oss.
              </p>
              <p>
                <strong>Toalettborste </strong>
                ska finnas på plats.
              </p>
              <p><strong>Meddela oss </strong>
              om belysning saknas
              </p>
              <p>
                <strong>Minst 18 grader inomhus </strong>
                vid städtillfället, av hänsyn till vår hälsa.
              </p>


            </div>  
            </div>
            </div>
            </section>

    </main>
  );
}
