import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchImages(term)
    setImages(result)
  }
 
}

export default App

