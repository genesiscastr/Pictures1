import ImageShow from "./ImageShow"
import './ImagenList.css' 

const ImageList = ({images}) => {
    const renderImage = images.map((images) =>{
        return <ImageShow key={image.id} image={image} />
    
})
return (
    <div className="image-list">
        {renderImage}
    </div>
  )
}

export default ImageList