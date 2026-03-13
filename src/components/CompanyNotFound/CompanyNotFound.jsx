import "./CompanyNotFound.css";

function CompanyNotFound({ query }) {

  return (
    <div className="notfound-card">

      <h2>🤔 Not Found 404</h2>

      <p>
        We searched the entire startup universe...
        but couldn't find <strong>"{query}"</strong>.
      </p>

      <p className="hint">
        Maybe try searching for something like:
      </p>

      <div className="examples">
        Microsoft • Google • OpenAI • Stripe • Anthropic
      </div>

    </div>
  );

}

export default CompanyNotFound;