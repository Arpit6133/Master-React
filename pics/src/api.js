import React from 'react';
import axios from 'axios';

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: 'Client-ID 27tOD8EpBTn1ycDIQEbISeV-WYSIWV9mF_Cr_LGN72U'
        },
        params: {
            query: searchTerm
        }
    });

    console.log(response.data.results);

    return response.data.results
};

export default searchImages


