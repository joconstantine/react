import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID L1og3SNxGWPpEScr1Q7kDgMvcxL8ipTc2ndNOfpGXuE',
    },
});