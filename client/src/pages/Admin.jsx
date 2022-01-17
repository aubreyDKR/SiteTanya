import { useEffect, useState } from "react";
import { ADMIN_URL, API_SERVER, ROOT_URL } from "../constants/url";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../redux/apiCalls';

const Admin = () => {
    const user = useSelector((state) => state.user.currentUser);
    
    const dispatch = useDispatch(); 

    useEffect(() => {
        getUserInfos(dispatch);
    },[]);

    useEffect(() => {
        if (user && user.isAdmin > 0) {
            window.location.replace(ADMIN_URL);
        } else {
            window.location.replace(ROOT_URL + "login");
        }
    }, [user]);

    return (
        <div>

        </div>
    )
}

export default Admin
