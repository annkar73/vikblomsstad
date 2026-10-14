
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Hemstädning", href: "/tjanster/hemstadning" },
  { label: "Storstädning", href: "/tjanster/storstadning" },
  { label: "Flyttstädning", href: "/tjanster/flyttstadning" },
  { label: "Fönsterputsning", href: "/tjanster/fonsterputsning" },
  {
    label: "Kontors- & arbetsplatsstäd",
    href: "/tjanster/kontors-och-arbetsplatsstad",
  },
  { label: "Byggstäd", href: "/tjanster/byggstad" },
  {
    label: "Utcheckningsstäd Airbnb",
    href: "/tjanster/utcheckningsstad-airbnb",
  },
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
            width={200}
            height={50}
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
            className="button button-small nav-mobile-cta"
            href="/kontakta-oss"
            onClick={closeMenu}
          >
            Boka hembesök <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <Link
          className="button button-small button-header nav-desktop-cta"
          href="/kontakta-oss"
        >
          Boka hembesök
        </Link>

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
