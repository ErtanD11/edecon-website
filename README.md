# edeCON — Website (www.edecon.de)

Statische HTML/CSS/JS-Website für edeCON — Ertan Demirel (Unternehmens- und Personalberatung).
Kein Framework, kein Build-Schritt — reines HTML/CSS/JS. Gehostet über GitHub Pages, ausgeliefert
unter der Custom-Domain **www.edecon.de** (siehe `CNAME`).

## Struktur

**Hauptseiten**
- `index.html` — Startseite
- `unternehmensberatung.html` — Leistungen: Unternehmensentwicklung, Business Coaching, Vertriebssteuerung & Einkaufsoptimierung, Führungskräfteentwicklung (inkl. 17 PDF-Flyer-Links, siehe `assets/`)
- `personalberatung.html` — Übersicht + Kunden + Kandidaten (Ankersektionen `#kunden`, `#kandidaten`)
- `ueber-mich.html` — Persönliche Seite / Werdegang
- `kontakt.html` — Kontaktformular + Kontaktdaten
- `stellenanzeigen.html` — Offene Stellen
- `bedarfsanalyse.html` — Bedarfsanalyse-Formular
- `impressum.html`, `datenschutz.html` — rechtliche Pflichtseiten

**Blog**
- `blog.html` — Blog-Übersicht (neueste Artikel zuerst)
- `blog-beispielartikel.html` — Vorlage/Template für neue Artikel (nicht in der Nav verlinkt, dient als Kopiervorlage)
- weitere Artikel als eigene `.html`-Dateien im Root, jeweils in `blog.html` verlinkt

**Technik**
- `styles.css` — zentrales Design-System (Farben: Navy `#0f1f38` / Kupfer `#c8834c` / Off-White `#faf7f2`; Typografie: Source Serif 4 + Inter)
- `main.js` — Mobile-Menü, Header-Scroll-Effekt, Formular-Interaktion
- `sitemap.xml`, `robots.txt` — SEO
- `CNAME` — Custom-Domain-Konfiguration für GitHub Pages
- Google Analytics (gtag.js) ist in allen Seiten im `<head>` eingebunden

**assets/**
- Logos, Favicons, Portrait- und OG-Bild
- 17 PDF-Flyer (`edeCON-Flyer-*.pdf`), von den Leistungskarten auf `unternehmensberatung.html` verlinkt — **PDFs gehören hier hin, nicht ins Root-Verzeichnis**

## Neue Blogartikel hinzufügen

1. `blog-beispielartikel.html` als Vorlage kopieren, Inhalt anpassen (Titel, Meta-Description, JSON-LD, Text)
2. Neue Artikel-Karte oben in `blog.html` einfügen (neueste zuerst)
3. Eintrag in `sitemap.xml` ergänzen
4. Nav-Link ist bereits auf allen Seiten aktiv, keine weitere Änderung nötig

Details zum Redaktionsplan und Rhythmus: siehe Projektdokument "Blog-Konzept" im zugehörigen Claude-Projekt.

## Lokal ansehen

```
python3 -m http.server 8000
```
dann `http://localhost:8000` aufrufen. Oder `index.html` direkt per Doppelklick öffnen.

## Wichtig beim Hochladen/Bearbeiten

Dieses Repo wird gelegentlich aus verschiedenen Arbeits-Sessions heraus aktualisiert. Um zu
vermeiden, dass ein Upload aus einer älteren lokalen Kopie neuere Änderungen überschreibt:

- **Vor einem größeren Datei-Upload** den aktuellen Stand von GitHub frisch herunterladen
  (nicht aus einem älteren lokalen Ordner arbeiten)
- Nach jedem Upload kurz prüfen: ist der Blog-Link in der Navigation noch auf allen 9 Seiten da,
  sind alle 17 Flyer-Links auf `unternehmensberatung.html` noch vorhanden?
- Aussagekräftige Commit-Messages verwenden (was wurde geändert, nicht nur "Add files via upload")
