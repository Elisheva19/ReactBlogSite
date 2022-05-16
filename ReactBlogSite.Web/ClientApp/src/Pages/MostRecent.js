import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import Comment from '../Components/Comment';


const MostRecent=()=>{
    const {id}= useParams();
    const [post, setPost]= useState({ id: '', title:'', text:'', date: '', comments: []});
    const history= useHistory();
    const [name, setCommentName]= useState('');
    const[text, setCommentText]= useState('');



    useEffect(()=>{
        const getPost= async () => {
            
            const {data}= await axios.get(`/api/blogpost/recent`);
            setPost(data);
         
           
        }
        getPost();
    }, []);

    const  onSubmitClick=async ()=>{
        const date=new Date();
         await axios.post('/api/blogpost/addcomment', { name, text,date , postId:id })
        setCommentName( '');
         setCommentText('');
       history.push(`/viewblog/${id}`);
       
    }
  

    return(
        <div className='container'>
        <main role='main' className='pb-3'>

            <div className='row'>
                 <div className='col-lg-8'>
           <h1 className="mt-4">{post.title}</h1> 

              <p className='lead'>
                        by Shevy Leiser
                    </p>
                    <hr></hr>

                     <p>
                      Posted on {post.date}

                </p>
                <hr></hr>                    

                <p> {post.text}</p> 
                   <hr></hr>
                   <div className='card my-4'>
                        <h5 className='card-header'>Leave a Comment:</h5>
                        <div className='card-body'>
                  
                                
                                <div className='form-group'>
                                    <input type="text" placeholder=""onChange={e=>setCommentName(e.target.value)} className='form-control' />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Please type your comment here!!!" onChange={e=> setCommentText(e.target.value)} className="form-control" rows="3"></textarea>
                                </div>
                                <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                        {post.comments && post.comments.map(c=> <Comment comment={c} key={c.id}/>)}
                        </div>
                    </div>
                    </div>
                   </div>
                   </main>
                   </div>
    )
}

export default MostRecent;