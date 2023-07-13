'use client';
//import  { useContext } from "react";

import CountryCard from "@/components/CountryCard";
//import Loading from "@/components/Loading";

//import { countryContext } from "../page";


const HomePage = () => {
  //const countryDataAPI = useContext(countryContext);
  //const { isLoading } = countryDataAPI;

  //console.log(isLoading); { isLoading ? <Loading /> : <PreviewCard /> }
  return (
    
    <div className="grid grid-cols-1 gap-10 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <CountryCard />
    </div>
  )
}

export default HomePage;
