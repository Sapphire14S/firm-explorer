import { useEffect, useState } from "react";
import axios from "axios";
import "./CompanyCard.css";

function CompanyCard({ name }) {

  const [info, setInfo] = useState(null);

  const domain = name.toLowerCase();

  const logoUrl = `https://img.logo.dev/${domain}.com?token=demo`;

  const website = `https://${domain}`;
  const linkedin = `https://www.linkedin.com/company/${domain}`;
  const github = `https://github.com/${domain}`;
  const youtube = `https://www.youtube.com/@${name}`;
  const instagram = `https://www.instagram.com/${name}`;
  const careers = `https://${domain}/careers`;


  useEffect(() => {

    const fetchCompanyInfo = async () => {

      try {

        const res = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`
        );

        setInfo(res.data);

      } catch (error) {
        console.log("No Wikipedia info found");
      }

    };

    fetchCompanyInfo();

  }, [name]);

  return (
    <div className="company-card">

      <img src={logoUrl} alt={name} className="company-logo" />

      <h2 className="company-name">{name}</h2>

      {info && <p className="company-description">{info.extract}</p>}

      <div className="links">

        <a href={website} target="_blank">Website</a>

        {info && (
          <a href={info.content_urls.desktop.page} target="_blank">
            Wikipedia
          </a>
        )}

        <a href={linkedin} target="_blank">LinkedIn</a>

        <a href={github} target="_blank">GitHub</a>

        <a href={youtube} target="_blank">YouTube</a>

        <a href={instagram} target="_blank">Instagram</a>

        <a href={careers} target="_blank">Careers</a>

      </div>

    </div>
  );
}

export default CompanyCard;