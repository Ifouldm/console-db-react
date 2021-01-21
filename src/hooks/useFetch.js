import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [, setData] = useState(null);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => {
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
            .then((dataIn) => {
                setData(dataIn);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    }, [url]);
};

export default useFetch;
