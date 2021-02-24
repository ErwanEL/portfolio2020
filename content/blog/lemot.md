---
type: project
path: lemot
# date: 16-02-2021
title: Lemot
subtitle: La palabra del día en Francés
featuredImage: ../../src/data/images/lemot.png
---

Lemot est un projet visant a suggérer à un public hispanophone un mot en Français chaque jours.

##Caractéristiques

Un mot, sa traduction, un exemple d'usage traduit, puis la prononciation en Français.

L'utilisateur a la possibilité d'inscrire son adresse mail et pouvoir recevoir chaque jour un email avec le mot géneré par l'application.

Il a aussi la possibilité de partager le mot du jour à travers certains réseaux sociaux et par courrier électronique.

###<u>Les services et technologies utilisées pour le projet</u>:

```

- GatsbyJs
- Bulma
- Netlify
- Netlify functions
- Bitbucket
- Mailgun
- Mjml
- Responsive voice
- Google recaptcha v3


```

<br></br>

####[GatsbyJs](https://www.gatsbyjs.com/)

GatsbyJs est utilisé pour générer la page. A partir d'une liste de mots, gatsby choisi un mot à chaque build puis crée la page avec ce mot.

####[Bulma](https://bulma.io/)

Framework css, pour les styles et layouts.

####[Netlify](https://www.netlify.com/)

Pour construire et déployer le gatsby.

####[Netlify functions](https://www.netlify.com/products/functions/)

Pour gérer les parties qui nécessitent un backend.
L'inscription au formulaire ainsi que l'envoie de mail à la liste d'utilisateurs inscrits.

####[Bitbucket](https://bitbucket.org/)

Pour l'organisation du projet ainsi que pour le build automatique chaque jour via une pipeline.

####[Mailgun](https://www.mailgun.com/)

Permet la création, gestion et envoi des email ainsi que la liste d'utilisateur.

####[Mjml](https://mjml.io/)

Langage de templating pour les mails
basé sur un système de composant.

![Minion](/uploads/mail.png)

####[Responsive voice](https://responsivevoice.org/)

Permet la prononciation du mot et de son exemple sur la page.

####Google recaptcha v3

Pour tracker les requêtes suspectes du formulaire sans embêter l'utilisateur.

---

#####[Visiter lemot.app](https://lemot.app/) 🔗
