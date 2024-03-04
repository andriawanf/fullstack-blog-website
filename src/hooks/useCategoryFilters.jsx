import axios from 'axios';
import { useState, useEffect } from 'react';

const useCategoryFilters = (selectedCategories) => {
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleSearch = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/post/getPosts', {
                    params: {
                        category: selectedCategories.join(','), // Sending categories as a comma-separated string
                    },
                });
                setSearchResult(response.data.posts);
            } catch (error) {
                console.error('Error searching posts:', error);
            }
            setIsLoading(false);
        };

        handleSearch();
    }, [selectedCategories]);

    return { searchResult, isLoading };
}

export default useCategoryFilters