// // extract name of picture in path
// export function getPath(path) {
//   return path.substr(path.lastIndexOf("/") + 1)
// }

// // filter yaml path picture from site content image folder 
// export function cmsImageFinder(arr, img, yaml) {
//   return arr.find(
//     image => getPath(image.node.relativePath) === getPath(yaml[img])
//   ).node.childImageSharp.fluid
// }
