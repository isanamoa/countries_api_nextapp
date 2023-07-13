import { useState, useContext } from "react";
import {MdArrowDropDown} from "react-icons/md";
import { countryContext } from "@/app/page";
import { darkModeContext } from "@/app/layout";

const FilterOptions = () => {
    const modeContext = useContext(darkModeContext);
    const [filterMode, setFilterMode] = useState(false);
    const [filterValue, setFilterValue] = useState('Filter by Region');
    const countryDataAPI = useContext(countryContext);
    const { fetchFilterCountrByRegionData } = countryDataAPI;

    const clickHandle = () => {
        setFilterMode(prev => !prev);
    }

    return (
        <div className={`mb-10 ${modeContext.darkMode ? 'bg-[#2B3844] border border-transparent text-white' : 'bg-white border border-transparent text-black'}`}>
            <button onClick={clickHandle} className="w-[200px] flex items-center justify-between gap-5 py-2 px-4">
                {filterValue} <MdArrowDropDown className="text-2xl" />
            </button>
            <form  className={filterMode ? `absolute mt-1 p-1 w-[200px]` : `hidden absolute mt-2 p-2 w-full`}>
                <button type="button" onClick={()=>{fetchFilterCountrByRegionData('Africa'); setFilterValue('Africa'); setFilterMode(prev => !prev);}} className="block w-full py-1 px-2 hover:bg-orange-400 text-left">
                    Africa 
                </button>
                <button type="button" onClick={()=>{fetchFilterCountrByRegionData('Americas'); setFilterValue('Americas'); setFilterMode(prev => !prev);}} className="block w-full py-1 px-2 hover:bg-orange-400 text-left">
                    Americas
                </button>
                <button type="button" onClick={()=>{fetchFilterCountrByRegionData('Asia'); setFilterValue('Asia'); setFilterMode(prev => !prev);}} className="block w-full py-2 px-1 hover:bg-orange-400 text-left">
                    Asia 
                </button>
                <button type="button" onClick={()=>{fetchFilterCountrByRegionData('Europe'); setFilterValue('Europe'); setFilterMode(prev => !prev);}} className="block w-full py-1 px-2 hover:bg-orange-400 text-left">
                    Europe 
                </button>
                <button type="button" onClick={()=>{fetchFilterCountrByRegionData('Oceania'); setFilterValue('Oceania'); setFilterMode(prev => !prev);}} className="block w-full py-1 px-2 hover:bg-orange-400 text-left">
                    Oceania
                </button>
            </form>
        
        </div>
    )
}

export default FilterOptions;
