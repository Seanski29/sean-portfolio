Sean Martin Del Rosario's personal portfolio, rebuilt with React, Vite, Tailwind CSS, and Lucide React icons.

## Local development

```bash
npm install
npm run dev
```

## Firebase backend

This project can sync admin edits to Firebase Firestore.

1. Create a Firebase project.
2. Enable Authentication > Email/Password.
3. Add one admin user. Use your admin email and password `2468`.
4. Create a Firestore database.
5. Copy `.env.example` to `.env` and fill in the Firebase web app config.
6. Set `VITE_FIREBASE_ADMIN_EMAIL` to the admin email you created.
7. In `firestore.rules`, replace `REPLACE_WITH_YOUR_ADMIN_EMAIL` with that same email and publish the rules in Firebase.

On Vercel, add the same `.env` values as Project Settings > Environment Variables.

## Project structure

```text
src/
  main.jsx              React app, pages, and admin editor UI
  services/
    firebase.js         Firebase Auth and Firestore functions
  styles.css            Tailwind entry and small global CSS helpers
public/
  portrait.png          Portfolio portrait
firestore.rules         Firestore read/write rules
SECURITY.md             Security notes and hardening checklist
```

## Production build

```bash
npm run build
```

## Deploy to Vercel

After signing in to Vercel:

```bash
npx vercel
```

For production:

```bash
npx vercel --prod
```
