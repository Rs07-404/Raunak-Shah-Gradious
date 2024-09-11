function MyGallery(props){
    return(
        <div className="relative rounded-md imageBox">
            <h1>{props.text}</h1>
            <img src={props.link} alt={props.alt}/>
        </div>
    );
}

export default MyGallery;