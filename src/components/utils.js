// extract name of picture in path
export function getPath(path) {
  return path.substr(path.lastIndexOf("/") + 1)
}

// filter yaml path picture from site content image folder
export function cmsImageFinder(arr, img, yaml) {
  return arr.find(
    image => getPath(image.node.relativePath) === getPath(yaml[img])
  ).node.childImageSharp.fluid
}

export function clearHtmlAndshrink(content = "", shrink = 80) {
  return (
    content
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/\((.*?)\)|[[*>]|[\]]/g, "") // remove markdown template characters
      .substring(0, shrink) + "..."
  )
}
