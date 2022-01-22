const importAllPosts = async () => {
  const markdownFiles = require
    .context("content/news", false, /^(.\/).*(.md)$/)
    .keys()
    .map(s => s.substring(2))

  const allPosts = await Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/news/${path}`);

      var excerpt =
        markdown.html.length > 120
          ? markdown.html.substring(0, 120) + "..."
          : markdown.html;

      return {
        ...markdown,
        slug: path.substring(0, path.length - 3),
        excerpt,
      };
    })
  );

  await allPosts.sort((a, b) => {
    return new Date(b.attributes.date) - new Date(a.attributes.date);
  });

  return allPosts;
};

const countPosts = async () => {
  const allPosts = await importAllPosts();

  return allPosts.length;
};

export { importAllPosts, countPosts };
