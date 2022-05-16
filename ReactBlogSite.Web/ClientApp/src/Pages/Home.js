import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostCard from '../Components/BlogPostCard';



const Home=()=>{
    const[posts, setPosts]= useState([]);
    const[newPage, setNewPage]=useState(0);
    const [total, setTotal]=useState();


    useEffect(()=>{
        const getTotal= async () => {
            const {data}= await axios.get(`/api/blogpost/gettotal`);
            setTotal(data);
           
        }
        getTotal();
        

    }, []);
    useEffect(()=>{
        const getPosts= async () => {
            const {data}= await axios.get(`/api/blogpost/getall?pgnum=${newPage}`);
            setPosts(data);
           
        }
        getPosts();
        

    }, [newPage]);
 const onNewerClick=()=>{
         setNewPage(newPage-3);
  }
 const onOlderClick=()=>{
      setNewPage(newPage+3)
  }
  

    return(
        <div className="container">
     <main role="main" className="pb-3">
        
        <div className='container'>

            <div className='row'>

            
                <div className='col-md-8'>

                     <h1 className="my-4">
                        My Blog!!
                        <small>Give It a Try!:):)</small>
                    </h1> 
                     {posts.map(p => <BlogPostCard post={p} key={p.id} /> ) }
                    
{!newPage && 
 <ul className="pagination justify-content-center mb-4">
 <li className='page-item'>
        <a className='page-link' onClick={onOlderClick}>&larr; Older</a>
    </li> 
    </ul>}
  {newPage +3 < total &  newPage > 0 && <ul className="pagination justify-content-center mb-4">
     <li className='page-item'>
     <a className='page-link' onClick={onOlderClick}>&larr; Older</a>
 </li>
    <li className='page-item'>
        <a className='page-link' onClick={onNewerClick}>Newer &rarr;</a>
    </li>
    </ul>}

{newPage+3 >= total &&
    <ul className="pagination justify-content-center mb-4">
        
        <li className='page-item'>
        <a className='page-link' onClick={onNewerClick}>Newer &rarr;</a>
    </li>
        </ul>}


                       
                           
                    </div>
                    </div>
                     </div>
                    </main>
                     </div>
     )

}



























export default Home;