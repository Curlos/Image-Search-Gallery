const ImageList = ({images}) => {
    if (!images || images.length === 0) {
        return null
    }

    return (
        <div className="gallery">
            {images.map((image, i) => {
                return (
                    <img src={image.urls.regular} alt={image.alt_description} title={image.alt_description} key={image.id} className={"image-" + (i + 1)}></img>
                )
            })}
        </div>
    )
}

export default ImageList;