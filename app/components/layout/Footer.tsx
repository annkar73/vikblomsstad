import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
            arbetsplats. <br></br>Kvalitativ städtjänst i Roslagen till ett
            rimligt pris.
          </p>
        </div>
      </div>

      <div className="footer-column footer-services">
        <h2><strong>Tjänster</strong></h2>
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

      <div className="footer-column footer-company">
        <h2><strong>Företaget</strong></h2>
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
        <h2><strong>Kontakt</strong></h2>
        <ul>
          <li><a href="tel:+46736325235">073-632 52 35</a></li>
          <li>
            <a href="mailto:emelie.vikblom@vikblomstad.se">
              emelie.vikblom@gmail.com
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
  )}