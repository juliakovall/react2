const articles = [
  {
    id: 1,
    title: "Learning Node.js",
    content: "Node.js allows JavaScript to run outside the browser.",
  },
  {
    id: 2,
    title: "Learning Express",
    content: "Express makes it easier to build web servers with Node.js.",
  },
  {
    id: 3,
    title: "Template Engines",
    content: "Pug and EJS help generate dynamic HTML pages.",
  },
];

export function getArticles(req, res) {
  res.render("articles/list.ejs", {
    title: "Articles",
    articles,
  });
}

export function getArticleById(req, res) {
  const articleId = Number(req.params.articleId);

  const article = articles.find((item) => item.id === articleId);

  if (!article) {
    return res.status(404).send("Article not found.");
  }

  res.render("articles/details.ejs", {
    title: "Article Details",
    article,
  });
}
