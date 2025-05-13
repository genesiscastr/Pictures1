import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=BzYrP5E9GofO89RKWhkRAwCc2Bn1S6KNjZxiZg_kvno'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    conmsole.log(response)
    return response.data.results
}

export default searchImages
