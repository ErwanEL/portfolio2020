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
              excerpt(pruneLength: 280)
              frontmatter {
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

  console.log(result.data.allMds)
  const suggestions = result.data.allMds.edges.slice(0, 4)

  console.log(suggestions)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMds.edges.forEach(md => {
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
        suggestions: suggestions,
        excerpt: md.node.excerpt,
      },
    })
  })
}
