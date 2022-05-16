import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  {useHistory} from 'react-router-dom';


const Admin=()=>{

const [title, setTitle]=useState('');
const [text, setText]= useState('');
const history = useHistory();

    const  onSubmitClick=async ()=>{
        const date=new Date();
         await axios.post('/api/blogpost/addpost', { title, text, date})
        setTitle( '');
         setText('');
       history.push(`/`);
       
    }




    return(
        <div className="container">
    <main role="main" className="pb-3">
        <div className="row">
            <div className="col-md-8 offset-md-2 jumbotron">
            
                    <input type="text" className="form-control" placeholder="Title"  onChange={e=>setTitle(e.target.value)} name="title" />
                    <br />
                    <textarea name="content" placeholder="What's on your mind?" onChange={e=>setText(e.target.value)} className="form-control"  rows="20"></textarea>
                    <br />
                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit Post! </button>
            
            
            </div>
        </div>
    </main>
</div>



    )
}

export default Admin;