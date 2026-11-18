# Browser Collector

## Purpose

The Browser Collector gathers information about the user's environment.

Its objective is to provide diagnostic context when errors occur.

---

## Data Sources

### Navigator API

Examples:

- userAgent
- language
- platform
- vendor

### Window API

Examples:

- screen dimensions
- viewport size

---

## Planned Data

### Browser Information

- Browser name
- Browser version
- Platform

### Environment

- Language settings
- Timezone
- Online status

### Device Information

- Screen size
- Color depth

---

## Example Output

```json
{
  "userAgent": "...",
  "language": "en-US",
  "online": true
}
```

---

## Future Enhancements

- Feature detection
- Browser capability reports
- Compatibility diagnostics
