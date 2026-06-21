import "./CompanyNotFound.css";

function CompanyNotFound({ query }) {
  return (
    <div className="notfound-card">
      <div className="notfound-icon">🔍</div>

      <h2>Company Not Found</h2>

      <p className="notfound-message">
        We couldn't find any company matching
        <strong> "{query}"</strong>.
      </p>

      <p className="hint">
        Try searching for one of these:
      </p>

      <div className="examples">
        <span>Microsoft</span>
        <span>Google</span>
        <span>OpenAI</span>
        <span>Stripe</span>
        <span>Anthropic</span>
      </div>
    </div>
  );
}

export default CompanyNotFound;