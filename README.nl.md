# Goosse Toast Module

Lichtgewicht JavaScript‑module voor **toasts en notificaties**.  
Gebouwd bovenop **Bootstrap 5** (JS + CSS).

✅ On‑demand aanmaken van containers  
✅ Automatische opruiming (DOM)  
✅ Ondersteuning voor progressbalk  
✅ Configureerbare iconen (Tabler, Bootstrap, SVG, enz.)  
✅ Standaard XSS‑veilig (expliciete HTML‑opt‑in)

***

## Demo

Live demo van de Goosse Toast‑module:

👉 <https://projectlinde37.github.io/Bootstrap-5-Simple-Toast/>

De demo toont:

*   Alle toast‑types (`info`, `success`, `warning`, `danger`)
*   Automatisch aanmaken van de toast‑container
*   Optionele progressbalk
*   Positionering van toasts
*   Bootstrap‑native toast‑gedrag

***

## 📁 Locatie

```text
public/goosse/toast/
├── toast.js
├── toast.css
└── README.md
```

***

## 🔧 Vereisten

*   **Bootstrap 5.3.x (JS + CSS)**
*   Moderne browser

***

## 📦 Installatie

### 1️⃣ Plaats de bestanden

Kopieer de bestanden naar `public/goosse/toast/`.

### 2️⃣ Laad scripts in je layout

Laad Bootstrap (JS + CSS) en voeg daarna `toast.css` en `toast.js` toe.

***

## 🚀 Gebruik

### ✅ Eenvoudige toast

```js
goosseToast.show({
  title: 'Notificatie',
  message: 'Je wijzigingen zijn opgeslagen.'
});
```

### ✅ Succes‑toast met progressbalk

```js
goosseToast.show({
  type: 'success',
  title: 'Succes!',
  message: 'De gebruiker is aangemaakt.',
  progress: true,
  delay: 5000
});
```

***

## 🧠 Opties

| Optie       | Type    | Standaard     | Beschrijving                                          |
| ----------- | ------- | ------------- | ----------------------------------------------------- |
| `type`      | string  | `'info'`      | `info`, `success`, `warning`, `danger`                |
| `title`     | string  | `''`          | Titel van de toast                                    |
| `message`   | string  | `''`          | Berichttekst                                          |
| `delay`     | number  | `4000`        | Automatisch sluiten na x ms (`0` = handmatig sluiten) |
| `progress`  | boolean | `false`       | Toon een visuele progressbalk                         |
| `position`  | string  | `'top-right'` | Positie van de toast op het scherm                    |
| `allowHtml` | boolean | `false`       | HTML toestaan in titel en bericht                     |

***

## 📍 Positionering

De positie van de toast kan ingesteld worden via de `position`‑optie.

```js
goosseToast.show({
  message: 'Gecentreerde toast',
  position: 'center'
});
```

### Ondersteunde posities

*   `top-right` (standaard)
*   `middle-right`
*   `bottom-right`
*   `top-left`
*   `middle-left`
*   `bottom-left`
*   `center`

In de demo wordt de gekozen positie ook weergegeven in de toast‑tekst/screenshot, zodat de plaatsing expliciet zichtbaar is.

***

## ⏱ Progressbalk & timeout‑gedrag

Wanneer `progress: true` is ingeschakeld, geeft de progressbalk visueel weer hoeveel tijd er nog rest voordat de toast sluit.

```js
goosseToast.show({
  message: 'Opslaan…',
  progress: true,
  delay: 5000
});
```

Gedragsnotities:

*   De duur van de progressbalk komt altijd overeen met `delay`
*   Als `delay > 0`, sluit de toast automatisch na de ingestelde tijd
*   Als `delay === 0`:
  *   automatisch sluiten is uitgeschakeld
  *   de progressbalk wordt niet getoond
*   De progressbalk pauzeert zolang er actief interactie is met de toast (vasthoud‑gedrag)

Dit maakt het timeout‑gedrag voorspelbaar en consistent.

***

## 🔤 HTML in titel en bericht

### Standaardgedrag (veilig)

Standaard worden alle titels en berichten **ge‑escaped** om XSS‑aanvallen te voorkomen.

```js
goosseToast.show({
  title: '<strong>Opslaan</strong>',
  message: '<em>Dit wordt als tekst weergegeven</em>'
});
```

HTML‑tags worden als platte tekst getoond.

***

### ✅ HTML expliciet toestaan

Om HTML te renderen, moet dit expliciet ingeschakeld worden via `allowHtml: true`.

```js
goosseToast.show({
  type: 'info',
  title: '<strong>Opslaan</strong> <small class="text-muted">(HTML)</small>',
  message: `
    Deze toast ondersteunt <em>HTML</em> content.<br>
    <a href="#" onclick="event.preventDefault()">Voorbeeldlink</a>
  `,
  allowHtml: true,
  position: 'center',
  delay: 0
});
```

✅ HTML wordt correct gerenderd  
✅ Werkt voor zowel `title` als `message`  
✅ Standaardgedrag blijft veilig

***

## 🔒 Beveiliging

*   HTML‑rendering is **standaard uitgeschakeld**
*   `allowHtml` moet expliciet geactiveerd worden
*   Gebruik `allowHtml` uitsluitend voor **betrouwbare, gecontroleerde content**

❌ Gebruik `allowHtml` **niet** voor:

*   gebruikersinput
*   formulierwaarden
*   query‑parameters
*   ongesaniteerde backend‑data

De module vereist bewust een expliciete opt‑in om HTML te renderen.

***

## 🧠 Configuratie (iconen)

Iconen kunnen globaal worden geconfigureerd via het `config`‑object in een `<script>`‑tag in je HTML.

De module dwingt **geen specifieke iconenbibliotheek** af.  
Je kan **Tabler Icons**, **Bootstrap Icons**, **inline SVG’s** of **eender welke custom markup** gebruiken, zolang geldige HTML wordt aangeleverd.
