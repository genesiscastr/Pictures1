import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "/components/ImageList";
import searchImages from "./api";

function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchImages(term)
  }

  return (
    <>
    <h1>Pictures App</h1>
    <SearchBar onSubmit={handleFormSubmit}/>
    <ImageList images={images}/>
    </>
  )
}  
  export default App