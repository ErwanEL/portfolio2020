---
type: article
path: gatsby-plugin-intl
date: 16-02-2021
title: Support multilangue avec GatsbyJs
subtitle: gatsby-plugin-intl
featuredImage: ../../src/data/images/languages.jpg
---

parler de formatjs dans l'article

parler du hook aussi

Why? When you build multilingual sites, Google recommends using different URLs for each language version of a page rather than using cookies or browser settings to adjust the content language on the page.

Vous voulez créer un site multilangue ou ajouter le support multilangue à votre site déjà existant?

GatsbyJs met à disposition un plugin répondant à ce besoin:

**gatsby-plugin-intl**

Ce plugin va se charger pour vous de créer les pages à partir de fichiers JSON.

L'approche pour vous se découpe en 4 étapes:

###Installation du plugin

Pour commencer, installez le plugin dans votre projet gatsby:

```
npm install gatsby-plugin-intl

```

Puis ajoutez le plugin dans le fichier **gatsby-config.js**:

```
    {
      resolve: `gatsby-plugin-intl`,
      options: {

        // le chemin d'accès des fichiers JSON
        path: `${__dirname}/src/intl`,

        // les langages supportés
        languages: [`fr`, `en`, `es`],

        // path du langage par défaut
        defaultLanguage: `fr`,

        // option pour rediriger `/fr` lors de la connection `/`
        redirect: false,
      },
    },
```

Il vous faut par la suite ajouter les fichiers JSON dans un dossier **intl**.

```
├── node_modules
├── src
│   ├── components
│   ├── pages
│   └── intl
│       ├── fr.json
│       ├── en.json
│       └── es.json
├── static
├── gatsby-config.js
├── package.json
└── README.md
```

###Stucturation des pages et composants

Ensuite injectez votre contenu dans les pages et composants dont vous voulez disposer du plugin.

####Structure:

```
import { injectIntl } from "gatsby-plugin-intl"
```

```
const IndexPage = ({ intl }) => {
    return (
        <div>Salut</div>
    )
}
```

```
export default injectIntl(IndexPage)
```

_A noter que si vous utilisez l'api Link de gatsby, l'objet Link doit être importé depuis gatsby-plugin-intl_

```
import { injectIntl, Link } from "gatsby-plugin-intl"
```

###Intégration du contenu

Pour intégrer votre contenu, vous pouvez procéder de 2 manières:

```
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "title" })}
      />
      <Link to="/page-2/">
        {intl.formatMessage({ id: "go_page2" })}
        {/* OR <FormattedMessage id="go_page2" /> */}
      </Link>
    </Layout>
  )
}
export default injectIntl(IndexPage)
```

---

####[Découvrir la Jamstack](https://jamstack.org/)
