import idToslug from "../../../notion2svelte_id-to-slug.json"

const slugs = idToslug.map(([_, slug]) => slug)
const notions = slugs.map(async (slug) => {
  const { get } = await import(`./${slug}/notion-export.js`)
  const {
    body: { json },
  } = await get()
  json
})

export default notions
