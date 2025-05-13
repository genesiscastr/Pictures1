import axios from "axios"

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=iIkagcdIwjN4VnxCObuhD1g5UNpbQvOk7U9HbTghD9k'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    conmsole.log(response)
    return response.data.results
}

export default searchImages
