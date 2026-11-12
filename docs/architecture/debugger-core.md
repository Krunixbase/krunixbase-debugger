# Debugger Core

## Purpose

The Core layer provides the fundamental services used by all debugger modules.

---

## Components

### debugger.js

Central debugging interface.

Responsibilities:

- log management
- diagnostic records
- centralized output

---

### logger.js

Provides logging methods.

Supported levels:

- info
- warn
- error
- debug

---

### diagnostics.js

Collects runtime information.

Examples:

- browser details
- language settings
- connectivity status

---

### error-handler.js

Processes application errors.

Responsibilities:

- error normalization
- stack trace handling
- reporting

---

### event-bus.js

Provides event-driven communication.

Responsibilities:

- event registration
- event publication
- listener management

---

## Design Principles

- Lightweight
- Deterministic
- Dependency-free
- Extensible
