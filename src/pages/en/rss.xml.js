import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE_EN, SITE_DESCRIPTION_EN } from '../../consts.en';

export async function GET(context) {
  const posts = (await getCollection('postsEn', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/posts/${post.id}/`,
    })),
  });
}
