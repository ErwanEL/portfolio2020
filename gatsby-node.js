// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

// const path = require(`path`)
// const fetch = require("node-fetch")

// exports.createSchemaCustomization = ({ actions }) => {
//   exports.createPages = async ({ graphql, actions, reporter }) => {
//     const { createPage } = actions

//     //   Query for markdown nodes to use in creating pages.
//     const result = await graphql(
//       `
//         {
//           allMds: allMarkdownRemark {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   path
//                   title
//                   path
//                   date
//                   featuredImage {
//                     childImageSharp {
//                       fluid {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `
//     )
//     console.log(result)

//     // Handle errors
//     if (result.errors) {
//       reporter.panicOnBuild(`Error while running GraphQL query.`)
//       return
//     }

//     result.data.allMds.edges.forEach(md => {
//       console.log(md)
//       // Create pages
//       createPage({
//         path: md.node.frontmatter.path,
//         component: path.resolve(`./src/templates/blog-page.js`),
//         context: {
//           node: md.node,
//         },
//       })
//     })
//   }
// }

const path = require(`path`)
const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  //   Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMds: allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                path
                title
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

  console.log(result.data.allMds)
  const suggestions = result.data.allMds.edges.slice(0, 5)

  console.log(suggestions)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMds.edges.forEach(md => {
    console.log(md)
    // Create pages
    createPage({
      path: md.node.frontmatter.path,
      component: path.resolve(`./src/templates/blog-page.js`),
      context: {
        node: md.node,
        suggestions: suggestions,
      },
    })
  })
}
