import { useState, useEffect } from "react";
import axios from "axios";
import Data from '@/utils/data.json' assert { type: 'json'};

const useCountryDataAPI = () => {
     // Presenting data
    const [countryData, setCountryData] = useState(null);
    const [countryDetails, setCountryDetails] = useState(null);

    // Checking loading stage
    const [isLoading, setIsLoading] = useState(false);
    // Checking error stage
    const [isError, setIsError] = useState(null);

    const fetchCountryData = async () => {
        try {
            setIsLoading(prev => !prev);
            const res = await axios.get(`https://restcountries.com/v2/all`)
            const fetchdata = res.data != null ? res.data : Data;
            //const fetchdata = res.data;
            //const fetchdata = JSON.parse(Data);
            setCountryData(fetchdata);
            setIsLoading(prev => !prev);
        } catch (error) {
            console.log('Error response', error.response);
        }
    }
    const fetchSearchedCountryData = async (country) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/name/${country}`)
            const fetchdata = res.data;
            setCountryData(fetchdata);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);

        }
    }
    const fetchFilterCountrByRegionData = async (region) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/region/${region}`)
            const fetchdata = res.data;
            setCountryData(fetchdata);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);

        }
    }

    const fetchDisplayCountryData = async (country) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/name/${country}`)
            const fetchdata = res.data;
            setCountryDetails(fetchdata);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);

        }
    }
    
    return { isLoading, countryData, countryDetails, fetchCountryData, 
            fetchSearchedCountryData, fetchFilterCountrByRegionData,
            fetchDisplayCountryData }
}

export default useCountryDataAPI;
