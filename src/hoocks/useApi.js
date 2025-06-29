import { useEffect, useState } from "react";

const useApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;
    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (API_URL) fetchData(API_URL);
        else setError("No se encontro la URL");

    }, [API_URL]);

    return { data, loading, error, fetchData };
};


export default useApi;
