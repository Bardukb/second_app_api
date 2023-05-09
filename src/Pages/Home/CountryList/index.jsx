import { Link } from "react-router-dom";
import "./CountryList.css";
function CountryList({ contriesOnPage }) {
  return (
    <>
      <div className="main-page">
        <div className="country-list">
          {contriesOnPage.map((item) => (
            <Link
              className="country-item"
              onMouseEnter={() => onMouseEnter(item.id)}
              onMouseLeave={() => onMouseLeave()}
              key={item.name.common}
              to={`/about/${item.name.common}`}
            >
              <div className="right-info">
                <img src={item.flags.png} alt={item.flags.alt} />
                <div>{item.id}</div>
              </div>
              {item.name.common}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryList;
