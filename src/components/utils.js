export function getPath(path) {
  return path.substr(path.lastIndexOf("/") + 1)
}

export function cmsImageFinder(arr, img, yaml) {
  return arr.find(
    image => getPath(image.node.relativePath) === getPath(yaml[img])
  ).node.childImageSharp.fluid
}
