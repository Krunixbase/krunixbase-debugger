# Krunixbase Debugger

Deterministic debugging and observability framework for the Krunixbase Ecosystem.

Krunixbase Debugger provides centralized diagnostics, error monitoring, telemetry collection, WebSocket tracing, AudioContext analysis, and integration hooks for modern JavaScript applications.

---

## Vision

The goal of Krunixbase Debugger is to provide a deterministic debugging layer shared across all Krunixbase projects.

Instead of implementing different debugging systems in every repository, projects can use a common observability framework.

Supported ecosystem targets:

- SeedTools
- Krunixbase Core
- Audio Agent
- Shamir Tools
- Whisper Streaming
- FastAPI Pipelines
- Svelte Applications
- Web3 Providers
- Deterministic Security Suite

---

## Core Features

### Error Monitoring

- Global Error Catcher
- Promise Rejection Handler
- Stack Trace Collection
- Exception Tracking

### Runtime Diagnostics

- Browser Diagnostics
- Storage Diagnostics
- Network Diagnostics
- Performance Diagnostics

### Communication Monitoring

- WebSocket Monitoring
- API Request Inspection
- Event Tracking

### Audio Diagnostics

- AudioContext Monitoring
- Media Device Diagnostics
- Streaming Diagnostics

### UI Integration

- Svelte Components
- Event Dashboard
- Error Timeline
- Diagnostic Panels

---

## Repository Structure

```text
krunixbase-debugger
│
├── src/
│   ├── core/
│   ├── collectors/
│   ├── adapters/
│   ├── hooks/
│   └── ui/
│
├── docs/
│   ├── architecture/
│   ├── integration/
│   └── screenshots/
│
├── examples/
├── tests/
└── .github/
```

---

## Architecture Layers

### Core Layer

Responsible for deterministic error collection and logging.

Components:

- debugger.js
- logger.js
- diagnostics.js
- error-handler.js
- event-bus.js

### Monitoring Layer

Responsible for runtime observation.

Components:

- WebSocket Monitor
- AudioContext Monitor
- Promise Monitor
- Network Tracker
- Performance Tracker

### Integration Layer

Adapters for ecosystem projects.

Components:

- SeedTools Adapter
- FastAPI Adapter
- Svelte Adapter
- Generic Adapter

### UI Layer

Visual debugging interface.

Components:

- Debugger.svelte
- ErrorPanel.svelte
- EventMonitor.svelte
- NetworkPanel.svelte
- AudioPanel.svelte

---

## Installation

```bash
npm install krunixbase-debugger
```

---

## Example

```javascript
import { Debugger } from 'krunixbase-debugger';

const debuggerInstance = new Debugger();

debuggerInstance.log(
    'info',
    'Application started'
);
```

---

## Development Status

Current Stage:

- Architecture Design
- Module Bootstrap
- Core Layer Development

Planned:

- Telemetry Engine
- Error Timeline
- Diagnostic Dashboard
- Cross-project Integration

---

## Long-Term Objective

```text
Krunixbase Ecosystem
│
├── SeedTools
├── Krunixbase Core
├── Audio Agent
├── Whisper Streaming
├── Shamir Tools
│
└── Krunixbase Debugger
    │
    ├── Error Collection
    ├── Monitoring
    ├── Diagnostics
    ├── Telemetry
    ├── Logging
    └── Recovery Reports
```

A deterministic observability layer for the entire Krunixbase Organization.

---

## License

MIT License
