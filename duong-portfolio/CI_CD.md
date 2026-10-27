# GitHub Actions → Firebase Hosting

Workflow: [Firebase Hosting CI/CD](https://github.com/bobui147/portfolio/actions/workflows/firebase-hosting.yml).

## Behavior

- Pull requests run dependency installation, React/Motion checks, and a production build.
- Pushes to `main` run the checks first, then deploy the same commit to https://bui-tung-duong-portfolio.web.app.
- You can also use **Run workflow** on `main`.
- Main-branch runs are serialized. A commit superseded on `main` is skipped before authentication/deployment.
- Firebase's predeploy hook builds production files. A final check compares published HTML, JS/CSS, images and the CV against that build by SHA-256.
- Source is in `duong-portfolio/`; the workflow remains at repository-root `.github/workflows/firebase-hosting.yml`.

## Authentication

GitHub uses OIDC / Google Cloud Workload Identity Federation and a dedicated service account. No service-account key or Firebase refresh token is stored in the repository or GitHub secrets.

Only the deployment job receives `id-token: write`. The dedicated provider is restricted to numeric repository ID `1435513386`, owner ID `217949121`, `refs/heads/main`, and this workflow's path. It accepts push/manual events. Pull requests do not authenticate to GCP.

The deployer has Firebase Hosting Admin and Service Usage Consumer roles in the existing project. Its service account and identity pool are separate from CleanMarket's. No key is created for the deployer.

GitHub repository variables:

- `FIREBASE_PROJECT_ID`: Firebase/GCP project ID.
- `GCP_WORKLOAD_IDENTITY_PROVIDER`: the full resource name returned by GCP for this provider.
- `GCP_SERVICE_ACCOUNT`: the dedicated deployer's service-account email.

These are identifiers, not credentials. Temporary `gha-creds-*.json` files are ignored by Git and cleaned up by the authentication action.

## Daily use

Commit and push your changes to `main`:

```sh
git add .
git commit -m "Update portfolio"
git push origin main
```

Follow the workflow in the **Actions** tab. A local commit without a push does not start GitHub Actions. A failed check prevents deployment.

Checkout, setup-node and Google authentication actions are pinned to verified commits. Node.js uses version 24; Firebase CLI uses version 15.31.0.
