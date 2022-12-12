import { Card } from "../components/Card";
import {useEffect, useState} from "react";

export function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json() )
        .then( setPosts )
  }, []);

  return (
      <div className='container mt-3'>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          { posts.map( post => (
              <div key={post.id} className="col">
                <Card title={post.title} content={post.body}/>
              </div>
          ) ) }
        </div>
      </div>
  )
}
