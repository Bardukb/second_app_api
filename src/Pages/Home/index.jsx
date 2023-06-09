import { useEffect, useState } from "react";
import axios from "axios";
import CountryList from "./CountryList";
import Pagination from "@mui/material/Pagination";
import "./Home.css";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: "aliceblue",
    background: "rgb(40, 54, 73)",
    "&.Mui-selected": {
      background: "gray",
      color: "aliceblue",
    },
  },
}));

function Home() {
  const [allCountry, setAllCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("pageNum"))
  );
  const [countItems] = useState(10);

  const allPage = allCountry.length / countItems;
  const lastCountryIndex = currentPage * countItems;
  const firstCountryIndex = lastCountryIndex - countItems;
  const currentCountry = allCountry.slice(firstCountryIndex, lastCountryIndex);

  const nextListPage = (e, p) => {
    sessionStorage.setItem("pageNum", p);
    setCurrentPage(p);
  };

  useEffect(
    () => async () => {
      try {
        const result = await axios("https://restcountries.com/v3.1/all");
        const resultAddId = result.data.map((item, ind) => {
          return { ...item, id: ind + 1 };
        });
        setAllCountry(resultAddId);
      } catch {
        setAllCountry("Error");
      }
    },
    []
  );
  if (allCountry.length === 0) return <div>Loading...</div>;
  return (
    <>
      <CountryList contriesOnPage={currentCountry} />
      <div className="pagination-box">
        <StyledPagination
          count={allPage}
          page={currentPage}
          size="large"
          color="primary"
          onChange={nextListPage}
          siblingCount={2}
        />
      </div>
    </>
  );
}

export default Home;
