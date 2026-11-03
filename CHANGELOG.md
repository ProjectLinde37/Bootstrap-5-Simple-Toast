# Changelog

All notable changes to Goosse Toast are documented here.

## [1.0] – 2026-11-03

### Added

- `goosseToast.version` — readable module version
- Initial release: standalone Bootstrap 5 toast module
- Toast types: `info`, `success`, `warning`, `danger`
- Positions: `top-right`, `middle-right`, `bottom-right`, `top-left`, `middle-left`, `bottom-left`, `center`
- Optional progress bar with pause-on-interaction behaviour
- `allowHtml` opt-in (escaped output by default, XSS-safe)
- Configurable icons via `goosseToast.config.icons`
- Automatic container creation and DOM cleanup
- Click-to-copy toast body
