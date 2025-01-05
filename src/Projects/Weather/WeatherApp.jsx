import React, { useEffect, useState } from 'react'
import Search from './Search'
import { flushSync } from 'react-dom'
import WeatherCard from './WeatherCard';

export default function WeatherApp() {

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState('')

    async function fetchWeatherData(search) {
        try {

            setIsLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=34d88583478d52baf6c89be8ad2e8ac9`)

            const data = await response.json();
            if (data) {
                setWeatherData(data)
                setIsLoading(false)
                setSearch('')
            }
            
        } catch (error) {
            console.log(error);
        }
    }
   

    // useEffect(() => {
    //     fetchWeatherData('hyderabad');
    // }, [])



    if (isLoading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg h-screen'>
            <Search fetchWeatherData={fetchWeatherData}
                search={search}
                setSearch={setSearch}
            />
            <WeatherCard weatherData={weatherData} />
        </div>
    )
}
