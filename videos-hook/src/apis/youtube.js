import axios from 'axios';

const KEY = 'AIzaSyBqw3sz_qoipM04Nu0O-uasNiSFjrPH1Hk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY,
    }
});