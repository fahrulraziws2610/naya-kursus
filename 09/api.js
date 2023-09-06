import axios from 'axios';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/movie',
    // headers : {
    //     common : {api_key : '4b3610bc82875a13d3b91c86c6815fcb'}
    // },
    params : {
        api_key : '4b3610bc82875a13d3b91c86c6815fcb'
    },
    https : {
        headers : {
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" : "text/plain"
        }
    },
    withCredentials : false
} );
