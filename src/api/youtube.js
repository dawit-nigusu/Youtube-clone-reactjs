import React, { Component } from 'react';
import axios from 'axios'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3'
    
})