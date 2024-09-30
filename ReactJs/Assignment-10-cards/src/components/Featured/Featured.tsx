import "./featured.css"

const Featured = (props) => {
    return (
        <div className={props.class}><img src={(props.featured)?`/images/star.png`:`/images/unstar.png`} alt="featured" /></div>
    )
}

export default Featured;