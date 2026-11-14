# Version policy

Every user-visible update must add a dated release note under Settings → Version. Preserve published history.

- Routine update: increment the last number (`1.8.2` → `1.8.3`; `1.8.9` → `1.8.10`).
- Substantial feature/workflow update: increment the middle number and reset the last (`1.8.3` → `1.9.0`).
- The first number stays `1` unless the user explicitly requests otherwise.
- Start from the latest published version. Keep Chinese, English and French release notes in sync.

This repository contains the public build. Author the record in `Cosonder/Claude`, branch `french-quiz`, file `quiz-common/js/features/changelog.js`; follow that repository's `AGENTS.md` and `quiz-site/HOWTO.md`, then regenerate and publish the affected HTML, language packs and service worker here. Verify Settings → Version on the deployed site before reporting success. Do not replace or clear learning progress while publishing.
