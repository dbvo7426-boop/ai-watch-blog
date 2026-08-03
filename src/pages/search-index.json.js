import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (
    await getCollection('posts', ({ data }) => (import.meta.env.PROD ? !data.draft : true))
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const index = posts.map((post) => ({
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    category: post.data.category,
    type: post.data.type,
    pubDate: post.data.pubDate,
    importance: post.data.importance,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
