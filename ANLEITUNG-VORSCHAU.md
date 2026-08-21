# Vorschau-Website einrichten (kostenlos, 5 Minuten, ohne deine Domain anzufassen)

Du bekommst dabei eine Test-URL wie `https://dein-username.github.io/edecon-website/`,
auf der die neue Seite live läuft — völlig unabhängig von edecon.de/Wix. Du kannst sie in
Ruhe anschauen, Freunden/Kollegen zeigen, testen. Deine echte Domain bleibt währenddessen
unangetastet bei Wix.

## Schritt 1 — GitHub-Konto (falls noch nicht vorhanden)

1. Gehe zu github.com und klicke "Sign up" (falls du schon ein Konto hast, überspringen)
2. Kostenloser Account reicht völlig aus

## Schritt 2 — Neues Repository anlegen

1. Oben rechts auf das "+" klicken → "New repository"
2. Name: `edecon-website` (oder was du magst)
3. Sichtbarkeit: "Public" auswählen (nötig, damit GitHub Pages kostenlos funktioniert)
4. "Create repository" klicken — noch keine Dateien hinzufügen

## Schritt 3 — Dateien hochladen

1. Im neu erstellten (leeren) Repository auf "uploading an existing file" klicken
2. Alle Dateien aus dem ZIP, das ich dir geschickt habe, per Drag & Drop reinziehen:
   `index.html`, `unternehmensberatung.html`, `personalberatung.html`, `ueber-mich.html`,
   `kontakt.html`, `styles.css`, `main.js`, und den Ordner `assets` (mit `portrait.jpg` darin)
3. Unten "Commit changes" klicken

## Schritt 4 — GitHub Pages aktivieren

1. Im Repository oben auf "Settings" klicken
2. Links im Menü auf "Pages" klicken
3. Unter "Branch" die Option `main` auswählen, Ordner `/ (root)` lassen, "Save" klicken
4. Kurz warten (meist unter 1 Minute) — GitHub zeigt dann die fertige URL an, z. B.
   `https://dein-username.github.io/edecon-website/`

## Fertig

Die Seite ist jetzt live unter dieser Test-URL erreichbar — für dich zum Anschauen, und du
kannst den Link auch an andere schicken, um Feedback einzuholen. Deine echte Domain
edecon.de läuft in der Zwischenzeit unverändert weiter über Wix.

## Wenn du dich später für den Umzug entscheidest

Dann ändern wir nur noch die DNS-Einstellungen von edecon.de (in den Wix-Domain-Einstellungen,
"Erweiterte DNS"), sodass die Domain auf dieses GitHub-Repository zeigt, statt auf Wix-Hosting.
Das mache ich dir gerne als nächsten Schritt, sobald du so weit bist — sag einfach Bescheid.
