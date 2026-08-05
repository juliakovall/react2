export function getArticles(req, res) {
  res.send("Get articles route.");
}

export function createArticle(req, res) {
  res.send("Post articles route.");
}

export function getArticleById(req, res) {
  res.send(`Get article by Id route: ${req.params.articleId}`);
}

export function updateArticle(req, res) {
  res.send(`Put article by Id route: ${req.params.articleId}`);
}

export function deleteArticle(req, res) {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
}
