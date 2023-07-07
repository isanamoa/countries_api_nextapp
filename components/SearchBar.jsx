import {MdSearch} from "react-icons/md";
import { useState, useContext } from "react";

import { countryContext } from "@/app/page";

const SearchBar = () => {
    const [country, setCountry] = useState('');
    const countryDataAPI = useContext(countryContext);
    const { fetchSearchedCountryData } = countryDataAPI;

    const changeHandle = (e) => {
        setCountry(e.target.value);
    }

    const submitHandle = (e) => {
        e.preventDefault();
        if(country != '') {
            console.log(country);
            fetchSearchedCountryData(country);
            setCountry('');
        }else{
            alert('Plear enter country');
        }
    }
    
    return (
        <div className="w-full md:w-2/6 p-1 bg-white mb-10">
            <form onSubmit={submitHandle} className="w-full flex justify-between items-center gap-3">
                <MdSearch className="h-6 w-6 pt-1 text-sm text-[#848484]" />
                <input type="search" value={country} onChange={changeHandle}
                placeholder="Search for country"
                className="w-full border-none p-1 text-sm text-[#848484] bg-transparent focus:border-white focus:outline-none" />
                
            </form>
        
        </div>
    )
}

export default SearchBar;
