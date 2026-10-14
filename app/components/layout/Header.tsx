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
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link
          className="brand"
          href="/"
          aria-label="Vikblom Städ, startsida"
        >
          <Image
            src="/images/vikblom-stad-logotyp.png"
            alt="Vikblom Städ"
            width={200}
            height={50}
          />
        </Link>

        <nav className="nav-links" aria-label="Huvudmeny">
          <Link href="/">Hem</Link>
          <Link href="/#om-oss">Om oss</Link>

          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen(!servicesOpen)}
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
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#galleri">Galleri</Link>
          <Link href="/jobba-har">Jobba här</Link>
          <Link href="/kontakta-oss">Kontakt</Link>
        </nav>

        <Link
          className="button button-small"
          href="/kontakta-oss"
        >
          Boka hembesök <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}