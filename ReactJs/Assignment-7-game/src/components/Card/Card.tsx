import { Item } from "../../types/item.type";
import "./card.css";

interface Cardinfo extends Item {
    click: Function,
    id:number;
}

const Card = ({src, alt, click, status, id}: Cardinfo)=>{
    const itemClass = status ? " active " + status : "";
    return(
        <div className={"card" + itemClass } onClick={()=>{click(id)}}><img src={src} alt={alt}/></div>
    )
}

export default Card;