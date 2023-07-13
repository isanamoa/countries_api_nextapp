import { useState, useEffect } from "react";
import axios from "axios";
import Data from '@/utils/data.json' assert { type: 'json'};
import { data } from "autoprefixer";

const useCountryDataAPI = () => {
     // Presenting data
    const [countryData, setCountryData] = useState(null);
    const [countryDetails, setCountryDetails] = useState(null);

    // Checking loading stage
    const [isLoading, setIsLoading] = useState(false);
    // Checking error stage
    const [isError, setIsError] = useState(null);
    const [isNotice, setIsNotice] = useState(null);


    const fetchCountryData = async () => {
        try {
            setIsLoading(prev => !prev);
            const res = await axios.get(`https://restcountries.com/v2/all`)
            const fetchdata = res.data;
            setCountryData(fetchdata);
            setIsNotice(prev => !prev);
            setIsError('Loading completed!');
            setIsLoading(prev => !prev);

            setTimeout(() => {
                setIsNotice(prev => !prev);
            }, 3000);

        } catch (error) {
            console.log('Error response', error.response);
            if(error.response){
                if(error.response.status === 404){
                setIsNotice(prev => !prev);
                setIsError('Not found');
                setIsLoading(false);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setIsError('No result', error);
                    setIsLoading(false); 
                }
            }else{
                setCountryData(Data);
                setIsNotice(prev => !prev);
                setIsError('You are using offline data', error);
                setIsLoading(false); 
            }
            setTimeout(() => {
                setIsNotice(prev => !prev)
            }, 10000);
        }
    }
    const fetchSearchedCountryData = async (country) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/name/${country}`)
            const fetchdata = res.data;
            setCountryData(fetchdata);
            setIsNotice(prev => !prev);
            setIsError('Search Found!');
            setIsLoading(false);

        } catch (error) {
            console.log('Error response', error.response);
            if(error.response){
                if(error.response.status === 404){
                setIsNotice(prev => !prev);
                setIsError('Not found');
                setIsLoading(false);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setIsError('No result', error);
                    setIsLoading(false); 
                }
            }else{
                setIsNotice(prev => !prev);
                setIsError('Offline', error);
                setIsLoading(false); 
            }
            setTimeout(() => {
                setIsNotice(prev => !prev)
            }, 10000);
        }
    }
    const fetchFilterCountrByRegionData = async (region) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/region/${region}`)
            const fetchdata = res.data;
            setCountryData(fetchdata);
            setIsNotice(prev => !prev);
            setIsError('Filtering completed!');
            setIsLoading(false);

        } catch (error) {
            console.log('Error response', error.response);
            if(error.response){
                if(error.response.status === 404){
                setIsNotice(prev => !prev);
                setIsError('Not found');
                setIsLoading(false);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setIsError('No result', error);
                    setIsLoading(false); 
                }
            }else{
                setIsNotice(prev => !prev);
                setIsError('Offline', error);
                setIsLoading(false); 
            }
            setTimeout(() => {
                setIsNotice(prev => !prev)
            }, 10000);
        }
    }

    const fetchDisplayCountryData = async (country) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://restcountries.com/v2/name/${country}`)
            const fetchdata = res.data;
            setCountryDetails(fetchdata);
            setIsNotice(prev => !prev);
            setIsError('Loading completed!');
            setIsLoading(false);

        } catch (error) {
            console.log('Error response', error.response);
            if(error.response){
                if(error.response.status === 404){
                setIsNotice(prev => !prev);
                setIsError('Not found');
                setIsLoading(false);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setIsError('No result', error);
                    setIsLoading(false); 
                }
            }else{
                setIsNotice(prev => !prev);
                setIsError('Offline', error);
                setIsLoading(false); 
            }
            setTimeout(() => {
                setIsNotice(prev => !prev)
            }, 10000);
        }
    }

    
    return { isLoading, isError, isNotice, countryData, countryDetails, 
            fetchCountryData, fetchSearchedCountryData, 
            fetchFilterCountrByRegionData, fetchDisplayCountryData }
}

export default useCountryDataAPI;
