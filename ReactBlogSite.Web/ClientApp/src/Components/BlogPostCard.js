import React from 'react';
import {Link} from  'react-router-dom';
import format from 'date-fns/format';



const BlogPostCard=({post})=>{
    const{id, title, text, date, comments}=post;

    return(
        <div className="card mb-4">
        <div className="card-body">
            <h2 className="card-title">
            <Link to={`/viewblog/${id}`}>
              {title}
                 </Link>
            </h2>

            <p className="card-text">{text.length < 200 ? text : text.substring(0, 200) + "..."}</p>
{/* <small>{comments.length} comment(s)</small> */}
          
            <Link to={`/viewblog/${id}`}>
            <button className='tn btn-primary'>Read More &rarr;</button>
                 </Link>
        </div>
        <div className="card-footer text-muted">
         Posted on {format(new Date(date), 'EEEE LLLL do, R')}
        </div>
    </div>

    )
}

export default BlogPostCard;