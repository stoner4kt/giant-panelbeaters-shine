// The complete homepage as a static HTML document. Served verbatim by the
// root server route so the live site is plain HTML + CSS + JS (no framework).
// Edit here, then mirror any changes to public/index.html if that copy is kept.
export const SITE_HTML = `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Giant Panelbeaters &amp; Spraypainters | Panel Beating &amp; Spray Painting in Boksburg</title>
  <meta name="description" content="Boksburg's trusted panel beaters and spray painters. Accident damage, dents and colour-matched resprays with insurance claims handled for you. Call 011 826 1117 for a free quote." />
  <meta name="theme-color" content="#0B2545" />
  <link rel="canonical" href="/" />
  <meta property="og:title" content="Giant Panelbeaters &amp; Spraypainters — Boksburg" />
  <meta property="og:description" content="Accident damage, dents and colour-matched resprays by Boksburg's trusted panel beaters. Insurance claims welcome. Call 011 826 1117." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_ZA" />
  <meta property="og:site_name" content="Giant Panelbeaters and Spraypainters" />
  <meta name="twitter:card" content="summary" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

  <!-- GOOGLE SEARCH CONSOLE: paste the html/tag verification meta tag from Search Console here, then remove this comment, e.g.
  <meta name="google-site-verification" content="YOUR-TOKEN" />
  -->

  <!-- GOOGLE ANALYTICS 4: replace G-XXXXXXXXXX with the GA4 measurement ID and remove this comment.
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  -->

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/site.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "Giant Panelbeaters and Spraypainters",
    "description": "Panel beating and spray painting workshop in Anderbolt, Boksburg. Accident damage repair, dents, resprays and insurance claim work.",
    "telephone": "+27118261117",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 20, 15 Top Rd",
      "addressLocality": "Boksburg",
      "addressRegion": "Gauteng",
      "postalCode": "1459",
      "addressCountry": "ZA"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": -26.1945723, "longitude": 28.276774 },
    "hasMap": "https://maps.app.goo.gl/sLNU3uyHQmXHmebx9",
    "url": "/",
    "areaServed": ["Boksburg", "Anderbolt", "East Rand", "Gauteng"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.4", "reviewCount": "114" }
  }
  </script>
</head>
<body>
  <div class="glow-layer" aria-hidden="true">
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>
    <div class="glow glow-c"></div>
  </div>

  <header class="site-header">
    <nav class="nav" aria-label="Main">
      <a class="brand" href="/">
        <span class="brand-mark" aria-hidden="true">GP</span>
        <span class="brand-text">
          <strong>Giant Panelbeaters</strong>
          <small>Spraypainters &middot; Boksburg</small>
        </span>
      </a>
      <div class="nav-links" id="nav-links">
        <a href="#services">Services</a>
        <a href="#work">Our Work</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#location">Find Us</a>
      </div>
      <div class="nav-actions">
        <a class="btn btn-brand nav-call" href="tel:+27118261117" data-cta="call-nav">Call Now</a>
        <button class="nav-burger" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-card glass-strong reveal">
        <div class="badge-row">
          <span class="badge badge-accent">4.4&#8202;&#9733; &middot; 114 reviews</span>
          <span class="badge badge-muted">Auto Body Shop</span>
        </div>
        <h1>Bodywork that brings your car back stronger.</h1>
        <p>Accident damage, dents, and full resprays &mdash; crafted by Boksburg's trusted panelbeaters. Insurance-claim friendly, delivered with care.</p>
        <div class="cta-row">
          <a class="btn btn-accent" href="tel:+27118261117" data-cta="call-hero">Request a Free Quote</a>
          <a class="btn btn-brand" href="https://www.google.com/maps/dir/?api=1&amp;destination=Giant+Panelbeaters+and+Spraypainters,+Anderbolt,+Boksburg+1459" target="_blank" rel="noopener" data-cta="directions-hero">Get Directions</a>
        </div>
        <p class="open-chip"><span class="dot"></span>Open &middot; 7:30 AM &ndash; 5:00 PM</p>
      </div>
      <div class="hero-media glass reveal">
        <img src="/images/hero-spray-booth.jpg" alt="Freshly painted car door with a mirror-gloss finish inside a bright spray booth" width="1024" height="1280" fetchpriority="high" />
      </div>
    </section>

    <section id="services" class="services reveal">
      <div class="panel glass">
        <div class="section-head">
          <div>
            <p class="eyebrow">What we do</p>
            <h2>Full panel &amp; paint service</h2>
          </div>
          <span class="section-note">Unit 20 &middot; Anderbolt</span>
        </div>
        <div class="service-grid">
          <article class="service-card">
            <div class="service-num num-brand">01</div>
            <h3>Panel Beating</h3>
            <p>Dents, cracks, and collision damage expertly restored to factory shape.</p>
          </article>
          <article class="service-card">
            <div class="service-num num-accent">02</div>
            <h3>Spray Painting</h3>
            <p>Colour-matched resprays with a flawless, durable showroom finish.</p>
          </article>
          <article class="service-card">
            <div class="service-num num-brand">03</div>
            <h3>Insurance Claims</h3>
            <p>We handle the paperwork and deal directly with your insurer on your behalf.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="work" class="work reveal">
      <div class="work-grid">
        <figure class="work-item glass">
          <img src="/images/gallery-repaired-hatchback.jpg" alt="White hatchback with a freshly repaired and resprayed rear bumper" width="1024" height="768" loading="lazy" />
        </figure>
        <figure class="work-item glass">
          <img src="/images/gallery-red-fender.jpg" alt="Close-up of a freshly sprayed, glossy red car fender" width="1024" height="768" loading="lazy" />
        </figure>
        <figure class="work-item glass">
          <img src="/images/gallery-spray-technician.jpg" alt="Spray painter applying colour-matched paint to a car door in the booth" width="1024" height="768" loading="lazy" />
        </figure>
      </div>
    </section>

    <section id="reviews" class="reviews reveal">
      <div class="panel glass">
        <div class="rating-row">
          <span class="rating-score">4.4</span>
          <div>
            <p class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p class="rating-sub">Rated from 114 Google reviews</p>
          </div>
        </div>
        <div class="review-themes">
          <span class="chip">Attention to detail</span>
          <span class="chip">Insurance claims handled</span>
          <span class="chip">Timely updates</span>
          <span class="chip">Quality panelbeating</span>
        </div>
        <p class="review-note">These are the themes customers mention most often &mdash; see all 114 reviews on Google.</p>
        <a class="link-accent" href="https://maps.app.goo.gl/sLNU3uyHQmXHmebx9" target="_blank" rel="noopener" data-cta="reviews-google">Read our reviews on Google &rarr;</a>
      </div>
    </section>

    <section id="contact" class="contact reveal">
      <div class="panel glass">
        <div class="section-head">
          <div>
            <p class="eyebrow">Get in touch</p>
            <h2>Request a free quote</h2>
          </div>
          <span class="section-note">We reply promptly</span>
        </div>
        <form
          class="contact-form"
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="form-honeypot" aria-hidden="true">
            <label>Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
          </p>
          <div class="form-grid">
            <label class="form-field">
              <span>Name</span>
              <input type="text" name="name" required autocomplete="name" placeholder="Your full name" />
            </label>
            <label class="form-field">
              <span>Email</span>
              <input type="email" name="email" required autocomplete="email" placeholder="you@example.com" />
            </label>
            <label class="form-field">
              <span>Phone</span>
              <input type="tel" name="phone" autocomplete="tel" placeholder="011 000 0000" />
            </label>
            <label class="form-field form-field-full">
              <span>Message</span>
              <textarea name="message" required rows="5" placeholder="Describe the damage, vehicle make/model, or ask a question&hellip;"></textarea>
            </label>
          </div>
          <div class="form-actions">
            <button class="btn btn-accent" type="submit" data-cta="form-submit">Send message</button>
            <p class="form-note">Or call us on <a href="tel:+27118261117">011 826 1117</a></p>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer id="location" class="site-footer">
    <div class="footer-panel glass-strong">
      <div class="footer-grid">
        <div class="footer-contact">
          <p class="eyebrow">Visit the workshop</p>
          <h2>Unit 20, 15 Top Rd</h2>
          <p class="footer-sub">Anderbolt, Boksburg, 1459</p>
          <div class="contact-stack">
            <a class="contact-row" href="tel:+27118261117" data-cta="call-footer">
              <span class="contact-icon">Tel</span>
              <span>+27 11 826 1117</span>
            </a>
            <div class="contact-row static">
              <span class="contact-icon">Hrs</span>
              <span>7:30 AM &ndash; 5:00 PM</span>
            </div>
            <div class="contact-row static">
              <span class="contact-icon">Area</span>
              <span>Serving Boksburg &amp; the East Rand</span>
            </div>
          </div>
          <a class="link-accent" href="https://maps.app.goo.gl/sLNU3uyHQmXHmebx9" target="_blank" rel="noopener" data-cta="maps-footer">Open in Google Maps &rarr;</a>
        </div>
        <div class="footer-map">
          <iframe
            title="Map showing Giant Panelbeaters and Spraypainters in Anderbolt, Boksburg"
            src="https://www.google.com/maps?q=Giant+Panelbeaters+and+Spraypainters,+10+Middle+Rd,+Anderbolt,+Boksburg,+1459&amp;z=16&amp;hl=en&amp;output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
      </div>
      <div class="footer-bar">
        <p>&copy; <span id="year">2026</span> Giant Panelbeaters and Spraypainters &middot; Anderbolt, Boksburg</p>
        <p>Serving the East Rand auto community</p>
      </div>
    </div>
  </footer>

  <div class="mobile-call-bar">
    <a class="btn btn-accent" href="tel:+27118261117" data-cta="call-bar">Call 011 826 1117</a>
    <a class="btn btn-brand" href="https://www.google.com/maps/dir/?api=1&amp;destination=Giant+Panelbeaters+and+Spraypainters,+Anderbolt,+Boksburg+1459" target="_blank" rel="noopener" data-cta="directions-bar">Directions</a>
  </div>

  <script src="/site.js" defer></script>
</body>
</html>`;
