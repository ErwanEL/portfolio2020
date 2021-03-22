---
type: article
path: gatsby-plugin-intl
date: 2021-03-05
title: Support multilingue avec GatsbyJs
subtitle: gatsby-plugin-intl
featuredImage: ../../src/data/images/languages.jpg
---

Vous voulez créer un site multilangue ou ajouter le support multilangue à votre site déjà existant?

Google recommande d'utiliser différents url pour chaque langue des pages de votre site, plutot que d'utiliser les cookies ou autres parametres pour ajuster le multilangue.

GatsbyJs met à disposition un plugin répondant à ce besoin: **gatsby-plugin-intl**

Ce plugin fondé sur [FormatJs](https://formatjs.io/) va se charger pour vous de créer les pages et les chemins à partir de fichiers JSON.

L'approche pour vous se découpe en 4 étapes:

##Installation du plugin

Pour commencer, installez le plugin dans votre projet gatsby:

```js
> npm install gatsby-plugin-intl

```

<br/>

Puis ajoutez le plugin dans le fichier **gatsby-config.js**:

```js
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

<br/>

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

<br/>

fr.json:

```json
{
  "title": "Gatsby Fr",
  "link": "Aller à page2",
  "content": {
    "intro": "Introduction a gatsby-plugin-intl"
  }
}
```

<br/>

##Stucturation des pages et composants

Ensuite injectez votre contenu dans les pages et composants dans lesquels vous voulez disposer du plugin.

####Structure:

```javascript
import { injectIntl } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => {
  return <div>Salut</div>
}

export default injectIntl(IndexPage)
```

<br/>

####Utilisation du hook:

```javascript
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()
  return <div>Salut</div>
}
export default IndexPage
```

<br/>

_A noter que si vous utilisez l'api Link de gatsby, l'objet Link doit être importé depuis gatsby-plugin-intl_

```
import { injectIntl, Link } from "gatsby-plugin-intl"
```

<br/>

##Intégration du contenu

Pour intégrer votre contenu, vous pouvez procéder de 2 manières:

```javascript
<FormattedMessage id="title" />
```

ou

```
{intl.formatMessage({ id: "title" })}
```

<br/>

```javascript
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })} />
      <div className="content">
        {intl.formatMessage({ id: "content.intro" })}
        {/* OU <FormattedMessage id="content.intro" /> */}
      </div>
      <Link to="/page-2/">
        {intl.formatMessage({ id: "link" })}
        {/* OU <FormattedMessage id="link" /> */}
      </Link>
    </Layout>
  )
}
export default injectIntl(IndexPage)
```

<br/>

_Une suppression du cache est nécessaire entre chaques édits des JSON._

GatsbyJs propose une commande pour cela:

```
> gatsby clean
```

<br/>

##Configurer la navigation

A vous d'adapter le switch des différents languages selon vos besoins.

Pour cela importer l'objet changelocale:

```javascript
import { changeLocale, injectIntl } from "gatsby-plugin-intl"
```

```javascript
intl.locale
```

Vous permet d'accéder au chemin du language actuel (/fr/, /en/...)

```javascript
changeLocale()
```

Vous permet de changer le langage

Voici un exemple:

```javascript
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const Language = ({ intl })) => {
  console.log(intl.locale)
  return (
    <div>
      <a onClick={() => changeLocale("en")}>
        Changer la langue en Anglais
      </a>
    </div>
  )
}

export default  injectIntl(Language)
```

Ce plugin s'avère être une solution intéressante pour des sites de petites envergure, voir pour un couplage avec une solution cms en markdowns.

Pour du multilangue avec une gestion de contenu plus complète, peut-être alors se tourner vers une solution CMS qui propose une prise en charge du multilangue intégrée.([Prismic](https://prismic.io/), [DatoCMS](https://www.datocms.com/))

---

####[Découvrir gatsby-plugin-intl](https://www.gatsbyjs.com/plugins/gatsby-plugin-intl/) 🔗
