export default function PricePage() {
  return (
    <main>
      {/* info about services */}
      <section className="price-section">
<div className="price-container">
        <article className="price-panel">
            <div className="price-info">
              <span className="eyebrow">prislista</span>
              <h2>Våra priser</h2>
              <p>
                Vi erbjuder konkurrenskraftiga priser för våra städtjänster. Nedan hittar du en översikt över våra priser för olika typer av städning.<br></br> Kontakta oss gärna för en mer detaljerad offert eller om du har några frågor.
              </p>
            </div>
          </article>
          <article className="price-panel">
          <div className="price-content">
            <h3>Hemstädning</h3>
            <p>{/* info och prislista */} priser för hemstädning
            </p>
            <h3>Storstädning</h3>
            <p>{/* info och prislista */} priser för storstädning</p>
            <h3>Flyttstädning</h3>
            <p>{/* info och prislista */} priser för flyttstädning</p>
            <h3>Fönsterputsning</h3>
            <p>{/* info och prislista */} priser för fönsterputsning</p>
            <h3>Kontors- och arbetsplatsstädning</h3>
            <p>{/* info och prislista */} priser för kontors- och arbetsplatsstädning</p>
            <h3>Byggstädning</h3>
            <p>{/* info och prislista */} priser för byggstädning</p>
            <h3>Utcheckningsstäd AirBnB</h3>
            <p>{/* info och prislista */} priser för utcheckningsstädning</p>
          </div>
          </article>
</div>
      </section>
    </main>
  );
}
