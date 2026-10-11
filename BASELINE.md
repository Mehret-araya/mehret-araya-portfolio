# Personal Portfolio — Baseline

## Phase 0: Baseline

- **Baseline date:** October 10, 2026
- **Project:** `personal-portfolio`
- **Website:** `http://localhost:5173/` (local development only)
- **Technology:** React + Vite
- **Deployment:** Not deployed
- **Git branch:** `master`
- **Baseline documentation commit:** `20ccd2c`
- **Before screenshot:** `baseline-before.png`
- **Lighthouse screenshot:** `baseline-lighthouse.png` (save and verify before committing)

## Lighthouse Baseline

- **Test environment:** Microsoft Edge, Desktop
- **Performance:** 70
- **Accessibility:** 91
- **Best Practices:** 100
- **SEO:** 75
- **First Contentful Paint (FCP):** 1.9 s
- **Largest Contentful Paint (LCP):** 3.5 s
- **Total Blocking Time (TBT):** 0 ms
- **Cumulative Layout Shift (CLS):** 0
- **Speed Index:** 1.9 s

These values represent the original Vite + React starter page. Results may vary with the browser, machine, network, and test conditions.

## Findings

### Accessibility
- One reported background/foreground color contrast issue.

### SEO
- Missing meta description.
- One link reported as having non-descriptive text.
- Lighthouse reported an invalid `robots.txt` with 18 errors. Verify this finding before deciding whether a `robots.txt` file is needed for the portfolio.

### Best Practices
- Score: 100.
- Two informational items were reported; no failed audits were identified in the shared results.

### Performance
- Score: 70.
- LCP: 3.5 s.
- FCP: 1.9 s.
- TBT: 0 ms.
- CLS: 0.

## Current Working Features

- React + Vite starter page runs locally.
- Development server and hot module replacement work.
- Default counter works.
- Production build succeeds.
- ESLint runs without reported errors.
- No custom portfolio features implemented yet.

## Existing Portfolio

- A separate older portfolio exists but is not deployed.
- The older portfolio will remain untouched.

## Git and Backup Status

- Git repository initialized locally on branch `master`.
- Baseline documentation previously committed as `20ccd2c`.
- Vite-generated application files are not yet committed.
- `.gitignore` excludes `.env`, `.env.*`, `node_modules`, and `dist`, and allows `.env.example`.
- `baseline-before.png` was verified in the project folder.
- Verify `baseline-lighthouse.png` is saved in the project folder before committing.

## Next Actions

1. Verify the Lighthouse screenshot is present.
2. Review generated project files and Git changes.
3. Commit the verified starter project and baseline records.
4. Begin implementation according to the frozen portfolio roadmap v2.2.
5. Rerun Lighthouse after meaningful implementation milestones and compare results.
