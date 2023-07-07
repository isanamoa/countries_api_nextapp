import { useState, useContext } from "react";
import {MdArrowDropDown} from "react-icons/md";
import { countryContext } from "@/app/page";

const FilterOptions = () => {
    const [filterMode, setFilterMode] = useState(false);
    const [filterValue, setFilterValue] = useState('Filter by Region');
    const countryDataAPI = useContext(countryContext);
    const { fetchFilterCountrByRegionData } = countryDataAPI;

    const clickHandle = () => {
        setFilterMode(prev => !prev);
    }

    return (
        <div className=" mb-10">
            <button onClick={clickHandle} className="w-[200px] flex items-center justify-between gap-5 py-2 px-4 bg-white  border-white">
                {filterValue} <MdArrowDropDown className="text-2xl" />
            </button>
            <form  className={filterMode ? `absolute mt-1 p-1 w-[200px] bg-white` : `hidden absolute mt-2 p-2 w-full bg-white `}>
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
