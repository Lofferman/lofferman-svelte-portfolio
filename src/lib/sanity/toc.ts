export function generateTOC(content) {
  return content
    .filter(block => block._type === 'h1')
    .map(block => ({
      text: block.text,
      level: block.level,
      slug: block.slug?.current
    }))
}