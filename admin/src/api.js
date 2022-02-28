import axios from "axios";
import { API_URL } from "./constants/url";

export const getUsersData = async (populateData) => {
    await axios.get(API_URL + "users", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(res => {
        if(res.status === 200) {
            const usersData = res.data;
            populateData(usersData);
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const getUserData = async (populateData, userId) => {
    await axios.get(API_URL + "users/find/" + userId, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(res => {
        if(res.status === 200) {
            const userData = res.data;
            populateData(userData);
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const getNewUsers = async (populateData) => {
    await axios.get(API_URL + "users/new", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(res => {
        if(res.status === 200) {
            const newUsers = res.data;
            populateData(newUsers);
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const getProductsData = async (populateData) => {
    await axios.get(API_URL + "products", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(res => {
        if(res.status === 200) {
            const productsData = res.data;
            console.log(productsData);
            populateData(productsData);
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const getProductData = async (populateData, id) => {
    await axios.get(API_URL + "products/find/" + id, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(res => {
        if(res.status === 200) {
            const productData = res.data;
            populateData(productData);
        }
    }).catch((err) => {
        console.log(err);
    })
}