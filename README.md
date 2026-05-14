# Goosse Toast Module

Lightweight JavaScript module for **toasts and notifications**.  
Built on top of **Bootstrap 5** (JS + CSS).

✅ On‑demand container creation  
✅ Automatic cleanup (DOM)  
✅ Progress bar support  
✅ Configurable icons (Tabler, Bootstrap, SVG, etc.)  
✅ XSS‑safe by default (explicit HTML opt‑in)

***

## Demo

Live demo of the Goosse Toast module:

👉 <https://projectlinde37.github.io/Bootstrap-5-Simple-Toast/>

The demo showcases:

*   All toast types (`info`, `success`, `warning`, `danger`)
*   Automatic toast container creation
*   Optional progress bar support
*   Toast positioning
*   Bootstrap‑native toast behaviour

***

## 📁 Location

```text
public/goosse/toast/
├── toast.js
├── toast.css
└── README.md
```

***

## 🔧 Requirements

*   **Bootstrap 5.3.x (JS + CSS)**
*   Modern browser

***

## 📦 Installation

### 1️⃣ Place the files

Copy the files to `public/goosse/toast/`.

### 2️⃣ Load scripts in your layout

Load Bootstrap (JS + CSS), then include `toast.css` and `toast.js`.

***

## 🚀 Usage

### ✅ Simple toast

```js
goosseToast.show({
  title: 'Notification',
  message: 'Your changes have been saved.'
});
```

### ✅ Success toast with progress bar

```js
goosseToast.show({
  type: 'success',
  title: 'Success!',
  message: 'The user has been created.',
  progress: true,
  delay: 5000
});
```

***

## 🧠 Options

| Option      | Type    | Default       | Description                                 |
| ----------- | ------- | ------------- | ------------------------------------------- |
| `type`      | string  | `'info'`      | `info`, `success`, `warning`, `danger`      |
| `title`     | string  | `''`          | Toast title                                 |
| `message`   | string  | `''`          | Toast message                               |
| `delay`     | number  | `4000`        | Auto‑close delay in ms (`0` = manual close) |
| `progress`  | boolean | `false`       | Show a visual progress bar                  |
| `position`  | string  | `'top-right'` | Toast position on screen                    |
| `allowHtml` | boolean | `false`       | Allow HTML in title and message             |

***

## 📍 Positioning

The toast position can be configured via the `position` option.

```js
goosseToast.show({
  message: 'Centered toast',
  position: 'center'
});
```

### Supported positions

*   `top-right` (default)
*   `middle-right`
*   `bottom-right`
*   `top-left`
*   `middle-left`
*   `bottom-left`
*   `center`

In the demo, the selected position is also reflected in the toast text/screenshot to make placement explicit.

***

## ⏱ Progress bar & timeout behaviour

When `progress: true` is enabled, the progress bar visually represents the remaining time until the toast is closed.

```js
goosseToast.show({
  message: 'Saving…',
  progress: true,
  delay: 5000
});
```

Behaviour notes:

*   The progress bar duration always matches `delay`
*   If `delay > 0`, the toast will auto‑close after the timeout
*   If `delay === 0`:
    *   auto‑close is disabled
    *   the progress bar is not shown
*   The progress bar pauses while the toast is actively interacted with (hold behaviour)

This makes timeout behaviour predictable and consistent.

***

## 🔤 HTML in title and message

### Default behaviour (safe)

By default, all titles and messages are **escaped** to prevent XSS attacks.

```js
goosseToast.show({
  title: '<strong>Saving</strong>',
  message: '<em>This will be shown as text</em>'
});
```

HTML tags are rendered as plain text.

***

### ✅ Allowing HTML explicitly

To render HTML, you must explicitly enable it using `allowHtml: true`.

```js
goosseToast.show({
  type: 'info',
  title: '<strong>Saving</strong> <small class="text-muted">(HTML)</small>',
  message: `
    This toast supports <em>HTML</em> content.<br>
    <a href="#" onclick="event.preventDefault()">Example link</a>
  `,
  allowHtml: true,
  position: 'center',
  delay: 0
});
```

✅ HTML is rendered correctly  
✅ Works for both `title` and `message`  
✅ Default behaviour remains secure

***

## 🔒 Security

*   HTML rendering is **disabled by default**
*   `allowHtml` must be explicitly enabled
*   Only use `allowHtml` for **trusted, controlled content**

❌ Do **not** use `allowHtml` with:

*   user input
*   form values
*   query parameters
*   unsanitised backend data

The module intentionally requires an explicit opt‑in to render HTML.

***

## 🧠 Configuration (Icons)


Icons can be configured globally via the `config` object in a `<script>` tag
in your HTML.

The module does not enforce a specific icon library.
You can use Tabler Icons, Bootstrap Icons, inline SVGs, or any custom markup,
as long as valid HTML is provided.


