import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {userLogout} from '../redux/actions/userAction'


const Navbar = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.userRoot.user.name) {
            setName(store.userRoot.user.name)
        }
    }, [store.userRoot.user.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(userLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4 className="navbar-brand mt-1" >
                    <Link to="/allPosts">FACEBOOK_LITE</Link></h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button type="button" className="btn"><Link to={`/usersPost/${store.userRoot.user._id}`}><li>{name.toUpperCase()}</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/uploadPost"><li>UPLOAD NEW POST</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/allUsers"><li>ALL USERS</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/profile"><li>PROFILE</li></Link></button>
                        </li>
                    </ul>
                </div>
                <div>
                    <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button>
                </div>
            </nav>
        </div>
    )
}

export default React.memo(Navbar)
