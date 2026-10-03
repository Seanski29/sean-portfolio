# Security Notes

## Firebase web config

Firebase web configuration values are not traditional server secrets. A browser app needs them so the Firebase SDK knows which project to connect to. This project keeps them out of GitHub by loading them from `.env` locally and Vercel Environment Variables in production.

The real protection is:

- Firebase Authentication only allows the admin account to sign in.
- Firestore Security Rules only allow that admin email to write `portfolio/main`.
- `.env` is ignored by Git and must not be committed.
- Vercel stores production values in Project Settings > Environment Variables.

## Extra hardening checklist

1. In Google Cloud Console, restrict the Firebase API key to your real domains:
   - `http://localhost:*`
   - `https://sean-portfolio-orcin.vercel.app/*`
   - any future custom domain
2. Keep Firestore write rules limited to your admin email.
3. Change the temporary `2468` password after testing.
4. Do not store private files, government IDs, or sensitive media in the admin editor.
5. Consider Firebase App Check later if the project receives abuse or spam traffic.
