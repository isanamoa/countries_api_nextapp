'use client';
import React from "react";
import HomePage from "./countries/page";
import Nav from "@/components/Nav";
import useCountryDataAPI from "@/api/useCountryDataAPI";

export let countryContext = React.createContext();

const Home = () => {
  const countryDataAPI = useCountryDataAPI();
  //console.log(countryData);
  return (
    <>
      <countryContext.Provider value={countryDataAPI}>
        <Nav />
        <HomePage></HomePage>
      </countryContext.Provider>
    </>
  );
};

export default Home;