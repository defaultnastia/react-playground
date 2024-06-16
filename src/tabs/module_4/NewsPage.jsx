import Article from "./Article";

const NewsPage = ({ articles }) => {
  return (
    <div>
      <h3>Latest Articles</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.objectID}>
            <Article article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
