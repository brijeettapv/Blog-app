import React,{ useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
const Details=()=>{
    const {id} = useParams();
    const [blog, setBlog] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]=useState(null);

    const fetchBlogDetails=async () =>{
        try {
            const response = await fetch(`http://localhost:3000/readblog/${id}`);
            if(!response.ok) {
                throw new Error('Failed to frtch blog details');
            }
            const data=await response.json();
            setBlog(data);
            setLoading(false);
        } catch (error){
            setError(error.message);
            setLoading(false)
        }
    };

    useEffect(()=>{
        fetchBlogDetails();
    }, [id])
    return(
       <div>
        {loading?(
            <div>Loading..</div>
        ) : error?(
            <div>Error: {error}</div>
        ) : blog?(
            <>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <img src={blog.image} alt={blog.title}/>
            </>
        ):(
            <p> Product not found</p>
        )}
       </div>
    )
}
export default Details;