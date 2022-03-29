import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetshing } from '../hooks/useFetsing';
import { useState } from 'react';
import PostService from '../API/PostServis';
import Loader from '../UI/Loader/Loader';


const Postpage = () => {
    const params = useParams()

    const [post, setPost] = useState({})

    const [fetshing, isLoading, eror] = useFetshing(async () => {
        const response = await PostService.getBayId(params.id)
        setPost(response.data)
    })


    useEffect(() => {
        fetshing()
    }, [])


    
    return (
        <div>
            <h1>Posts {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>
                    {post.id}, {post.title}
                </div>
            }
        </div>
    );
}

export default Postpage;
