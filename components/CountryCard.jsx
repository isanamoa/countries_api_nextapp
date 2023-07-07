'use client';
import  { useEffect, useContext } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { countryContext } from "@/app/page";
import Loading from "./Loading";

const CountryCard = ({}) => {
    const router = useRouter();
    const countryDataAPI = useContext(countryContext);
    const { isLoading, countryData, fetchCountryData } = countryDataAPI;
    
    useEffect(()=> {
      fetchCountryData();
    },[]);

    //console.log(countryData && countryData[0].name);

    const viewDetailHandle = (countryName) => {
        router.push(`/countries/${countryName}`);
    }

    return (
        isLoading ? (<Loading />) : countryData && countryData.map((country, index) => (
            <div key={index} role='button' className='bg-white border-white w-[267px] md:w-auto h-[310px] mx-auto md:mx-0' onClick={()=>viewDetailHandle(country.name)}>
                <div className="h-[160px] mt-0 pt-0">
                    <Image className='w-full h-full object-cover' width={50} height={50} src={country.flags.svg} alt='country flag' />
                </div>
                <div className='flex flex-col gap-2 py-2 px-5 text-left'>
                    <h4 className="font-bold py-1">{country.name}</h4>
                    <div className="text-[14px]">
                        <p>Population: <span className="text-[#848484] pb-2">{country.population.toLocaleString()}</span></p>
                        <p>Region: <span className="text-[#848484] pb-2">{country.region}</span></p>
                        <p>Capital: <span  className="text-[#848484] pb-2">{country.capital}</span></p>
                    </div>
                </div>
            </div>
        ))
        
    )
}

export default CountryCard;
