# 🏀 LSBSC South Lille — Écran Interactif Programmation & Résultats

Application web interactive au **format Paysage (16:9 plein écran)** conçue pour le **Lille Sud Basketball Sporting Club (LSBSC - South Lille)**.

## ✨ Fonctionnalités principales
- **Affichage Paysage 2 Colonnes sans défilement de page :**
  - **À gauche :** Programmation des matchs du week-end avec leurs scores finaux (Victoire en vert, Défaite en rouge), navigation vers les **semaines précédentes et suivantes**, et filtres par catégories (`U9` à `Seniors`).
  - **À droite (Haut) :** Grand Scoreboard de la rencontre en cours ou sélectionnée (adapté aux matchs avec ou sans table de marque en direct).
  - **À droite (Bas) :** Encart automatique du **Match suivant**.
- **Identité visuelle du club intégrée :**
  - Logo officiel **South Lille (LSBSC)** et **Mascotte du Lion** détourés en haute définition dans `assets/`.
  - Blasons générés automatiquement pour les 44 clubs adverses du calendrier Kalisport (et personnalisables par import d'image).
- **Accès sécurisés par code PIN :**
  - **Saisie des résultats (Mode Staff)** protégée par code PIN.
  - **Gestion des Logos & Mascotte** protégée par code PIN dédié.

## 🚀 Déploiement sur GitHub Pages
1. Créez un nouveau dépôt sur GitHub (ex: `lsbsc-ecran-matchs`).
2. Déposez tous les fichiers et dossiers de cette archive à la racine du dépôt :
   - `index.html`
   - `css/style.css`
   - `js/app.js`
   - `data/matches.json`
   - `assets/logo-lsbsc.png`
   - `assets/mascotte-lsbsc.png`
3. Dans **Settings > Pages**, sélectionnez la branche `main` (dossier `/root`) puis cliquez sur **Save**.
