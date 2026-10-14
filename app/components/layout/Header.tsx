
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const services = [
  { label: "Hemstädning", href: "/services/hemstad" },
  { label: "Storstädning", href: "/services/storstad" },
  { label: "Flyttstädning", href: "/services/flyttstad" },
  { label: "Fönsterputsning", href: "/services/fonsterputs" },
  {
    label: "Kontors- & arbetsplatsstäd",
    href: "/services/kontorstad",
  },
  { label: "Byggstäd", href: "/services/byggstad" },
  { label: "Utcheckningsstäd Airbnb", href: "/services/airbnb" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="header">
      <div className="container nav">
        <Link
          className="brand"
          href="/"
          aria-label="Vikblom Städ, startsida"
          onClick={closeMenu}
        >
          <Image
            src="/images/vikblom-stad-logotyp.png"
            alt="Vikblom Städ"
            width={180}
            height={60}
            style={{ height: "auto", width: "auto" }}
          />
        </Link>

        <nav
          id="mobile-navigation"
          className={`nav-links${mobileOpen ? " nav-links-open" : ""}`}
          aria-label="Huvudmeny"
        >
          <Link href="/" onClick={closeMenu}>
            Hem
          </Link>
          <Link href="/#om-oss" onClick={closeMenu}>
            Om oss
          </Link>

          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Tjänster
              <span aria-hidden="true">
                {servicesOpen ? "⌃" : "⌄"}
              </span>
            </button>

            {servicesOpen && (
              <div className="nav-dropdown-menu" id="services-menu">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#galleri" onClick={closeMenu}>
            Galleri
          </Link>
          <Link href="/jobba-har" onClick={closeMenu}>
            Jobba här
          </Link>
          <Link href="/kontakta-oss" onClick={closeMenu}>
            Kontakt
          </Link>

          <Link
            className="button button-small button-header"
            href="/kontakta-oss"
            onClick={closeMenu}
          >
            Boka hembesök
          </Link>
        </nav>


        <button
          type="button"
          className="nav-toggle"
          aria-label={mobileOpen ? "Stäng menyn" : "Öppna menyn"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen((open) => !open);
            setServicesOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
