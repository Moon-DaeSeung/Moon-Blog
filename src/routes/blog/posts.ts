import idToslug from "../../../notion2svelte_id-to-slug.json"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const slugs = idToslug.map(([_, slug]) => slug)
const notions = slugs.map(async (slug) => {
  const { get } = await import(`./${slug}/notion-export.js`)
  const {
    body: { json },
  } = await get({ params: {} })
  const {
    properties: {
      Name: { title },
      Description,
      HashTags,
    },
  } = json
  const image = {
    url: `/assets/${slug}/cover.jpg`,
    alt: "Blog cover image",
  }
  return {
    slug,
    time: json.properties["μμ± μΌμ"]["created_time"] as string,
    image,
    title: title.map(({ plain_text }) => plain_text).join("") as string,
    hashtags: HashTags["multi_select"] as {name: string, color: string}[],
    description: Description["rich_text"]
      .map(({ plain_text }) => plain_text)
      .join("") as string,
  }
})

export default await Promise.all(notions)
