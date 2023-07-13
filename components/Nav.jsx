import { useContext } from "react";
import FilterOptions from "./FilterOptions"
import SearchBar from "./SearchBar"
import { countryContext } from "@/app/page";

const Nav = () => {
  const countryDataAPI = useContext(countryContext);
  const { isNotice, isError } = countryDataAPI;
  console.log(isNotice, isError)
  return (
    <nav className="flex flex-col justify-between items-start md:flex-row md:items-center">
      <SearchBar />
      {  isNotice &&
          <span className={isError ? 'text-lg text-black fontbold bg-green-400 px-3 py-2 rounded-lg' : 'hidden text-sm text-white fontbold bg-green-400 px-3 py-1 mr-2 rounded-lg'}>
              {isError}
          </span>
      }
      <FilterOptions />
    </nav>
  )
}

export default Nav
