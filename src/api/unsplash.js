import axios from "axios";

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID yqBt4iWtfA2-itig4XcygCVJRyoYS0W6HiSsQjncqnQ' 
    }

});