const importFood = async () => {
  const markdownFiles = require
    .context("content/food", false, /^(.\/).*(.md)$/)
    .keys()
    .map(s => s.substring(2))

  const allFoodItems = await Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`content/food/${path}`);
      return {
        ...markdown
      };
    })
  );

  return allFoodItems;
};

export default importFood;
