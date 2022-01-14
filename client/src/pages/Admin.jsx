import { useEffect } from "react";
import { ADMIN_URL } from "../constants/url";
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos, isAdmin } from '../redux/apiCalls';

const Admin = () => {
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        getUserInfos(dispatch);
        
    }, []);

    /*useEffect(() => {
        window.location.replace(ADMIN_URL);
    }, [user]);*/

    console.log(user);

    return (
        <div>

        </div>
    )
}

export default Admin
