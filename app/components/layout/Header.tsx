import Image from "next/image";

export default function Header() {
  return (
<header className="header">
        <div className="container nav">
          <a className="brand" href="#" aria-label="Vikblom Städ, startsida">
            
            <Image
              src="/images/vikblom-stad-logotyp.png"
              alt="Vikblom Städ"
              width={200}
              height={50}
            />
          </a>

          <nav className="nav-links" aria-label="Huvudmeny">
            <a href="#tjanster">Våra tjänster</a>
            <a href="#om-oss">Om oss</a>
            <a href="#priser">Priser</a>
            <a href="#galleri">Galleri</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="button button-small" href="#kontakt">
            Be om en offert <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
  )}