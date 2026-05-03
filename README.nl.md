# Goosse Toast Module

Lichtgewicht JavaScript‑module voor **toasts en notificaties**.  
Gebouwd bovenop **Bootstrap 5** (JS + CSS).

✅ On‑demand container creatie
✅ Automatische opruiming (DOM)
✅ Progressbar ondersteuning
✅ Configureerbare iconen (Tabler, Bootstrap, SVG, etc.)
✅ XSS‑veilig (HTML escaping)

---
## Demo

Live demo van de Goosse Toast module:

👉 https://projectlinde37.github.io/Bootstrap-5-Simple-Toast/

De demo toont:
- Alle toast‑types (`info`, `success`, `warning`, `danger`)
- Automatische toast‑container
- Optionele voortgangsbalk
- Bootstrap‑native toast werking
  ``
---

## 📁 Locatie

```text
public/goosse/toast/
├── toast.js
├── toast.css
└── README.md
```

---

## 🔧 Vereisten

- **Bootstrap 5.3.x (JS + CSS)**  
- Moderne browser

---

## 📦 Installatie

### 1️⃣ Bestanden plaatsen

Kopieer de bestanden naar `public/goosse/toast/`.

### 2️⃣ Scripts laden in layout

```html
<script src="public/goosse/toast/toast.js" defer></script>
<link rel="stylesheet" href="public/goosse/toast/toast.css">
```

---

## 🚀 Gebruik

### ✅ Simpele toast

```js
goosseToast.show({
  title: 'Melding',
  message: 'Je wijzigingen zijn opgeslagen.'
});
```

### ✅ Success toast met progressbar

```js
goosseToast.show({
  type: 'success',
  title: 'Gelukt!',
  message: 'De gebruiker is aangemaakt.',
  progress: true,
  delay: 5000
});
```

---

## 🧠 Opties

| Optie      | Type    | Standaard | Beschrijving |
| :--------- | :------ | :-------- | :----------- |
| `type`     | string  | `'info'`  | `info`, `success`, `warning`, `danger` |
| `title`    | string  | `''`      | Titel van de toast |
| `message`  | string  | `''`      | Berichttekst |
| `delay`    | number  | `4000`    | Tijd in ms voor automatisch sluiten (0 = handmatig sluiten) |
| `progress` | boolean | `false`   | Toon een visuele voortgangsbalk |

---

## 🧠 Configuratie (Iconen)

Je kunt de iconen globaal configureren via het `config` object in een `<script>` tag in je HTML.

```html
<script>
  // Voorbeeld: Overschakelen naar Bootstrap Icons
  goosseToast.config.icons = {
    info: '<i class="bi bi-info-circle text-primary"></i>',
    success: '<i class="bi bi-check-circle text-success"></i>',
    warning: '<i class="bi bi-exclamation-triangle text-warning"></i>',
    danger: '<i class="bi bi-exclamation-octagon text-danger"></i>'
  };
</script>
```

Standaard worden **Tabler Icons** gebruikt.

---

## 🔒 Veiligheid

Alle titels en berichten worden automatisch ge-escaped ter voorkoming van XSS-aanvallen.
