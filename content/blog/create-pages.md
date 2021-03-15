---
type: article
path: creation-dynamique-de-page-avec-gatsbyjs
date: 2021-03-03
title: Création dynamique de page avec GatsbyJs
subtitle: Create page API
featuredImage: ../../src/data/images/blog.jpg
---

GatsbyJs vous permet de créer dynamiquement des pages à partir de template et de données pouvant provenir de différentes sources.

#Configuration

1. Installez le gatsby starter hello world

```js
> gatsby new gatsby-starter-hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

<br/>

2. Créer le fichier `gatsby-node.js` à la racine du dossier.

#Configuration de la création de page automatisée
1. Dans `gatsby-node.js`, ajoutez l'export pour le createPages

```js
exports.createPages = ({ actions }) => {
  // ...
}
```

<br/>

2. Destructurez le createPage action depuis l'objet action pour pouvoir l'utiliser et ajouter des données.

```js
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  // ajoutez ici les données que vous voulez
  const dogData = [
    {
      name: "Fido",
      breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    },
  ]
}
```

<br/>

3. Bouclez les données et insérez le chemin, le template et le context (données qui seront passées via la propriété pageContext et récupérable dans le template) pour créer une page pour chaque objet du tableau.

```javascript
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const dogData = [
    {
      name: "Fido",
      breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    },
  ]
  dogData.forEach(dog => {
    createPage({
      path: `/${dog.name}`,
      component: require.resolve(`./src/templates/dog-template.js`),
      context: { dog },
    })
  })
}
```

<br/>

4. Créez un composant React qui servira de template pour vos pages crées via le createPage

Ajoutez le fichier dans un dossier templates
`src/templates/dog-template.js`

```js
import React from "react"
export default function DogTemplate({ pageContext: { dog } }) {
  return (
    <section>
      {dog.name} - {dog.breed}
    </section>
  )
}
```

<br/>

5. Lancez l'environnement de développement de gatsby et vous pouvez naviguez via les chemins des pages que vous avez crées et voir les données s'affichées. (exemple: http://localhost:8000/Fido)

```javascript
> gatsby develop
```

---

####[En savoir plus sur la création de pages](https://www.gatsbyjs.com/docs/recipes/pages-layouts) 🔗
