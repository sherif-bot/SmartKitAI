# SmartKit AI

SmartKit AI est une application web basée sur Next.js pour proposer des outils d’intelligence artificielle et des ressources de formation.

## Installation

1. Installer Node.js.
2. À la racine du projet, exécuter `npm install`.
3. Créer un fichier `.env.local` à partir de `.env.example`.
4. Ajouter la clé API Anthropic dans les variables d’environnement.
5. Exécuter `npm run dev` pour lancer le projet en développement.

## Variables d’environnement

- `ANTHROPIC_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Ne jamais publier de clé secrète dans le dépôt GitHub.

## Avant la mise en production

Vérifier les routes, tester la génération IA, configurer Supabase si nécessaire et compléter les pages légales. Les comptes utilisateurs et les paiements ne sont pas activés par ce fichier seul.
