import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounceValue;
}
