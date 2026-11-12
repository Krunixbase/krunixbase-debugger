# Event System

## Overview

The Event System enables communication between debugger components.

---

## Architecture

```text
Publisher
    │
    ▼
Event Bus
    │
    ▼
Subscribers
```

---

## Event Types

### Runtime Events

- application-start
- application-stop

### Error Events

- error-captured
- exception-thrown

### Monitoring Events

- websocket-open
- websocket-close
- websocket-error

### Audio Events

- audio-created
- audio-suspended
- audio-closed

---

## Benefits

- low coupling
- extensibility
- easier diagnostics
