import { useEffect, useState } from "react";
import "./CompanyNews.css";

function CompanyNews({ name }) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const fetchNews = async () => {

      try {

        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${name}&sortBy=publishedAt&apiKey=YOUR_API_KEY`
        );

        const data = await res.json();

        setArticles(data.articles.slice(0,5));

      } catch (error) {
        console.log("News fetch failed");
      }

    };

    fetchNews();

  }, [name]);

  return (
    <div className="news-section">

      <h3>Latest News</h3>

      {articles.map((article, index) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          className="news-item"
        >
          {article.title}
        </a>
      ))}

    </div>
  );
}

export default CompanyNews;