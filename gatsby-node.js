const path = require(`path`)
const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  //   Query for markdown nodes to use in creating pages.
  const articles = await graphql(
    `
      {
        allArticlesMds: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "article" } } }
        ) {
          edges {
            node {
              id
              html
              excerpt(pruneLength: 280)
              frontmatter {
                type
                path
                title
                subtitle
                path
                date
                featuredImage {
                  childImageSharp {
                    fluid {
                      aspectRatio
                      base64
                      originalImg
                      originalName
                      presentationHeight
                      presentationWidth
                      sizes
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(articles.data.allArticlesMds)

  const articlesSuggestions = articles.data.allArticlesMds.edges.slice(0, 4)

  console.log(articlesSuggestions)

  // Handle errors
  if (articles.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  articles.data.allArticlesMds.edges.forEach(md => {
    // create slug

    // const slug = `${md.node.frontmatter.date}/${md.node.frontmatter.title
    // .replace(/[àãäâ]/g, "a")
    // .replace(/[òöõô]/g, "o")
    // .replace(/[ñ]/g, "n")
    // .replace(/[-_]/g, "")
    // .replace(/\s\s+/g, " ") // double spaces
    // .replace(/\W/g, "-")
    // .toLowerCase()}`

    // console.log(slug)

    // Create pages
    createPage({
      path: md.node.frontmatter.path,
      component: path.resolve(`./src/templates/blog-page.js`),
      context: {
        node: md.node,
        suggestions: articlesSuggestions,
        excerpt: md.node.excerpt,
      },
    })
  })

  //   Query for markdown nodes to use in creating pages.
  const projects = await graphql(
    `
      {
        allProjectsMds: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              html
              excerpt(pruneLength: 280)
              frontmatter {
                type
                path
                title
                subtitle
                path
                date
                featuredImage {
                  childImageSharp {
                    fluid {
                      aspectRatio
                      base64
                      originalImg
                      originalName
                      presentationHeight
                      presentationWidth
                      sizes
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(projects.data.allProjectsMds)

  const projectsSuggestions = projects.data.allProjectsMds.edges.slice(0, 4)

  console.log(projectsSuggestions)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  projects.data.allProjectsMds.edges.forEach(md => {
    // Create pages
    createPage({
      path: md.node.frontmatter.path,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        node: md.node,
        suggestions: projectsSuggestions,
        excerpt: md.node.excerpt,
      },
    })
  })
}
