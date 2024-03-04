import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllBlogsContext } from '../contexts/BlogsContext';

const useSearch = (blogs, searchTerm) => {
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const filteredPost = blogs.filter(
                    (post) =>
                        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.content.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResult(filteredPost);
            } catch (error) {
                console.log(error.message);
            }
            setIsLoading(false);
        };

        fetchPosts();
    }, [searchTerm, blogs]);

    return { searchResult, isLoading };
}

export default useSearch