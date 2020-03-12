import React , { Component } from 'react';
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 7d2IkUk7cjiC0wLjpAyQrNIwA8YZZxGdlD_VuDcmnKU'
    }
})
