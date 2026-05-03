# Goosse Toast Module

Lightweight JavaScript module for **toasts and notifications**.  
Built on top of **Bootstrap 5** (JS + CSS).

✅ On‑demand container creation  
✅ Automatic cleanup (DOM)  
✅ Progress bar support  
✅ Configurable icons (Tabler, Bootstrap, SVG, etc.)  
✅ XSS‑safe (HTML escaping)

---

## 📁 Location

```text
public/goosse/toast/
├── toast.js
├── toast.css
└── README.md
````

***

## 🔧 Requirements

*   **Bootstrap 5.3.x (JS + CSS)**
*   Modern browser

***

## 📦 Installation

### 1️⃣ Place the files

Copy the files to `public/goosse/toast/`.

### 2️⃣ Load scripts in your layout



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

| Option     | Type    | Default  | Description                                     |
| :--------- | :------ | :------- | :---------------------------------------------- |
| `type`     | string  | `'info'` | `info`, `success`, `warning`, `danger`          |
| `title`    | string  | `''`     | Toast title                                     |
| `message`  | string  | `''`     | Message text                                    |
| `delay`    | number  | `4000`   | Time in ms before auto‑close (0 = manual close) |
| `progress` | boolean | `false`  | Show a visual progress bar                      |

***

## 🧠 Configuration (Icons)

Icons can be configured globally via the `config` object in a `<script>` tag in your HTML.



By default, **Tabler Icons** are used.

***

## 🔒 Security

All titles and messages are automatically escaped to prevent XSS attacks.
