# edeCON — Neue Website (HTML/CSS/JS)

Diese Dateien sind eine vollständige, eigenständige Neugestaltung von www.edecon.de:
modern, responsive, im Farbschema Navy/Kupfer/Off-White. Kein Framework, kein Build-Schritt —
reines HTML/CSS/JS, das in jedem Browser läuft und sich 1:1 als Vorlage für Wix Studio nutzen lässt.

## Dateien

- `index.html` — Startseite
- `unternehmensberatung.html` — Leistungen: Unternehmensentwicklung, Business Coaching, Vertriebssteuerung & Einkaufsoptimierung, Führungskräfteentwicklung
- `personalberatung.html` — Übersicht + Kunden + Kandidaten (Ankersektionen `#kunden`, `#kandidaten`)
- `ueber-mich.html` — Persönliche Seite / Werdegang
- `kontakt.html` — Kontaktformular + Kontaktdaten
- `styles.css` — zentrales Design-System (Farben, Typografie, Komponenten)
- `main.js` — Mobile-Menü, Header-Scroll-Effekt, Formular-Interaktion (Demo, ohne Backend)
- `assets/portrait.jpg` — **hier dein Portraitfoto ablegen** (wird in Hero-Bereichen von Start & Über mich genutzt; falls die Datei fehlt, verschwindet der Bildbereich automatisch ohne Fehler)

## Lokal ansehen

Einfach `index.html` per Doppelklick im Browser öffnen, oder für sauberes Routing lokal servern:

```
python3 -m http.server 8000
```

und dann `http://localhost:8000` aufrufen.

## Weg zu Wix über GitHub

Wichtig vorab: Wix Studio versteht kein beliebiges HTML/CSS 1:1 wie ein normaler Webserver.
Es gibt zwei realistische Wege, das hier vorliegende Ergebnis auf Wix zu bekommen:

### Option A — Als eigenständige Website hosten (empfohlen, wenn Wix nicht zwingend nötig ist)
Diese HTML-Dateien lassen sich unverändert z. B. über GitHub Pages, Netlify oder Vercel
kostenlos hosten und mit deiner Domain edecon.de verbinden — ganz ohne Wix. Das ist der
technisch einfachste Weg, exakt dieses Design 1:1 live zu bekommen.

1. Repository auf GitHub anlegen, diese Dateien hochladen (`git add . && git commit -m "Neues Design" && git push`)
2. GitHub Pages in den Repo-Einstellungen aktivieren (Branch `main`, Root-Verzeichnis)
3. Custom Domain `edecon.de` in den GitHub-Pages-Einstellungen hinterlegen, DNS bei deinem Domain-Provider entsprechend setzen (CNAME/A-Records laut GitHub-Anleitung)

### Option B — In Wix Studio integrieren
Wix Studio bietet ein "Embed"-Element ("HTML einbetten" / Custom Element), über das sich
HTML/CSS/JS als iFrame-Block in eine Wix-Seite einbetten lässt. Das eignet sich gut für
einzelne Abschnitte, aber nicht für eine komplette Seite mit eigener Navigation, da der Wix-Editor
dann eine zweite, eigene Navigation außenrum legt.

Praktikabler ist in der Regel: dieses HTML/CSS als **visuelle Vorlage** nutzen und die Sections
direkt im Wix-Studio-Editor nachbauen (Farben, Schriften, Abstände, Bildausschnitte 1:1 übernehmen).
Das dauert länger, ergibt aber eine native Wix-Seite ohne iFrame-Einschränkungen (SEO, Ladezeit,
mobile Optimierung funktionieren dann nativ über Wix).

Wenn du möchtest, kann ich dir für Option B auch eine Section-für-Section-Anleitung
(Screenshots + genaue Werte für Farben/Abstände/Schriftgrößen) erstellen.

## Noch offen

- Portraitfoto einbinden (`assets/portrait.jpg`)
- Impressum & Datenschutz-Seiten (verlinkt im Footer, noch nicht erstellt — sollten 1:1 aus der bestehenden Wix-Seite übernommen werden, damit keine rechtlichen Pflichtangaben verloren gehen)
- Ggf. echtes Kontaktformular-Backend (aktuell nur Demo-Bestätigung ohne Versand)
