import { useParams } from "react-router-dom";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import companies from "../../data/companies.json";
import CompanyNotFound from "../../components/CompanyNotFound/CompanyNotFound";

function CompanyPage() {

  const { name } = useParams();

  const company = companies.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  if (!company) {
    return <CompanyNotFound query={name} />;
  }

  return (
    <div>
      <CompanyCard name={company.name} domain={company.domain} />
    </div>
  );
}

export default CompanyPage;