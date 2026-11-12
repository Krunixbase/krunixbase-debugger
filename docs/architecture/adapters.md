# Adapters

## Purpose

Adapters integrate Krunixbase Debugger with external applications and frameworks.

---

## Supported Adapters

### Generic Adapter

Basic integration interface.

### Svelte Adapter

Integrates debugger components with Svelte applications.

### FastAPI Adapter

Provides interoperability with FastAPI services.

### SeedTools Adapter

Integrates diagnostics with SeedTools applications.

---

## Responsibilities

Adapters should:

- initialize diagnostics
- register event listeners
- expose framework-specific hooks
- standardize monitoring output

---

## Future Adapters

Planned integrations:

- React
- Vue
- Electron
- Node.js
- Express
