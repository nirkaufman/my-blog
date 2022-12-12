import {useContext} from "react";
import {AuthContext} from "../context/auth";

export function Card ({ title, content }) {
  const { currentUser } = useContext(AuthContext)

  return (
      <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ content }</p>
            {currentUser && <button className='btn btn-outline-danger'>EDIT</button>}
          </div>
      </div>
  )
}
