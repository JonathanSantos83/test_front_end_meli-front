import axios from 'axios';


function search(query) {
    return axios.get(`${process.env.REACT_APP_API_URL}/items?search=${query}`);
}


function getDetail(id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`);
}

export { search, getDetail }

