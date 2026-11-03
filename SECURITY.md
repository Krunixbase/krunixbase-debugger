# Security Policy

## Overview

Krunixbase Debugger is a deterministic debugging and observability framework designed for use across the Krunixbase Ecosystem.

Security, transparency, and responsible disclosure are core principles of this project.

---

## Supported Versions

| Version | Supported |
|----------|-----------|
| 1.x | ✅ |
| 0.x | ✅ Development |
| <0.1.0 | ❌ |

---

## Reporting a Security Vulnerability

If you discover a security vulnerability, please report it responsibly.

Do not disclose security vulnerabilities publicly until the issue has been reviewed and addressed.

Please include:

- Description of the vulnerability
- Impact assessment
- Steps to reproduce
- Affected component(s)
- Suggested mitigation (optional)

---

## Scope

The following areas are considered security-relevant:

### Runtime Diagnostics

- Error collection
- Event monitoring
- Browser diagnostics
- Performance diagnostics

### Communication Monitoring

- WebSocket integrations
- API integrations
- Event bus communication

### Framework Adapters

- Svelte adapters
- FastAPI adapters
- SeedTools integrations
- Generic adapters

---

## Security Principles

Krunixbase projects follow these principles:

### Determinism

Components should behave predictably and consistently.

### Transparency

Security-relevant behavior should be documented and reviewable.

### Minimal Dependencies

Dependencies should be kept to a minimum whenever possible.

### Secure Defaults

Default configurations should prioritize safety and stability.

### Responsible Disclosure

Security issues should be handled privately until remediation is available.

---

## Third-Party Components

Dependencies and third-party integrations should be reviewed regularly.

Automated dependency monitoring may be performed using:

- Dependabot
- npm audit
- GitHub Security Advisories

---

## Out of Scope

The following are generally considered out of scope:

- Issues requiring physical access
- Denial-of-service scenarios on local development environments
- Vulnerabilities originating exclusively from unsupported third-party software
- Misconfigurations introduced by user modifications

---

## Security Updates

Security-related fixes will be documented in:

- CHANGELOG.md
- GitHub Releases
- Project documentation

---

## Contact

Security reports may be submitted through GitHub Issues marked as security-related or through project maintainers.

Please avoid publishing exploit details before a fix is available.

---

## Project Security Goals

The long-term objective of Krunixbase Debugger is to provide:

- Deterministic diagnostics
- Reliable monitoring
- Secure observability
- Transparent logging
- Ecosystem-wide debugging support

for all Krunixbase projects.

---

Copyright (c) 2026 Krunixbase
