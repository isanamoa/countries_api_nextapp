import FilterOptions from "./FilterOptions"
import SearchBar from "./SearchBar"

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between items-start md:flex-row md:items-center">
      <SearchBar />
      <FilterOptions />
    </nav>
  )
}

export default Nav
