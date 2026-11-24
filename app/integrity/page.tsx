import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Läs om hur Vikblom Städ AB behandlar, använder och skyddar dina personuppgifter när du kontaktar eller anlitar företaget.",
  alternates: {
    canonical: "/integrity",
  },
};


export default function IntegrityPage() {
  return (
    <main>
      {/* info about services */}
      <section className="integrity-section section">
        <div className="integrity-panel">
          <div>
            <div>
              <span className="eyebrow">INTEGRITETSPOLICY</span>
              <h2>Vår integritetspolicy</h2>

              <p>Så här behandlar Vikblom Städ AB dina personuppgifter.</p>
            </div>
            <br></br>
          </div>
          <article>
            <strong>
              <p>
                Vikblom Städ AB (org.nr 559266-2224), Carl Wahrens väg 22A, 763
                34 Hallstavik, är personuppgiftsansvarig för de personuppgifter
                som behandlas när du kontaktar eller anlitar oss.
              </p>
            </strong>
            <h3>Vilka uppgifter samlar vi in?</h3>
            <p>
              När du skickar en förfrågan via hemsidan sparar vi namn,
              telefonnummer, e-postadress, ort och det du skriver i meddelandet.
              När du blir kund behandlar vi även adress och, för RUT-avdrag,
              personnummer, eftersom Skatteverket kräver det för att avdraget
              ska kunna begäras.
            </p>
            <h3>Varför behandlar vi uppgifterna?</h3>
            <p>
              För att kunna besvara din förfrågan, boka hembesök, utföra och
              fakturera städuppdrag, begära RUT-avdrag hos Skatteverket och
              uppfylla bokföringslagens krav. Den rättsliga grunden är avtal,
              rättslig förpliktelse och i vissa fall berättigat intresse.
            </p>
            <h3>Hur länge sparas uppgifterna?</h3>
            <p>
              Förfrågningar som inte leder till uppdrag raderas inom tolv
              månader. Kund- och fakturauppgifter sparas så länge
              bokföringslagen kräver, normalt sju år.
            </p>
            <h3>Vem delar vi uppgifterna med?</h3>
            <p>
              Vi delar bara uppgifter med Skatteverket (RUT-avdrag), vår
              redovisningsleverantör och, vid större uppdrag med fönsterputs,
              vår samarbetspartner. Vi säljer aldrig personuppgifter vidare.
            </p>
            <h3>Dina rättigheter</h3>
            <p>
              Du har rätt att begära ett registerutdrag, att få felaktiga
              uppgifter rättade, att få uppgifter raderade när de inte längre
              behövs och att invända mot behandling genom att kontakta
              emelie.vikblom@gmail.com. Du kan också lämna klagomål till
              Integritetsskyddsmyndigheten (IMY).
            </p>
            <h3>Cookies</h3>
            <p>
              Hemsidan använder endast de tekniska cookies som krävs för att
              sidan ska fungera.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
