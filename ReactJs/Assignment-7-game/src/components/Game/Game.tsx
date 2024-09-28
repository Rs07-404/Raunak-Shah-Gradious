import { useContext, useState } from 'react';
import './game.css'
import Card from '../Card/Card';
import { Item } from '../../types/item.type';
import { GameContext } from '../../context/GameContext';

function Game(){
    const { decrementMatchLeft, incrementWrongMatch } = useContext(GameContext);
    const [previousCard, updatePreviousCard] = useState<number>(-1)
    const [cardItems, setCards] = useState<Item[]>([
        {id: 1, src:"/images/compass.png", status:"", alt:"compass"},
        {id: 1, src:"/images/compass.png", status:"", alt:"compass"},
        {id: 2, src:"/images/creeper.jpeg", status:"", alt:"creeper"},
        {id: 2, src:"/images/creeper.jpeg", status:"", alt:"creeper"},
        {id: 3, src:"/images/diamond.png", status:"", alt:"diamond"},
        {id: 3, src:"/images/diamond.png", status:"", alt:"diamond"},
        {id: 4, src:"/images/emrald.png", status:"", alt:"emrald"},
        {id: 4, src:"/images/emrald.png", status:"", alt:"emrald"},
        {id: 5, src:"/images/goldenApple.png", status:"", alt:"goldenApple"},
        {id: 5, src:"/images/goldenApple.png", status:"", alt:"goldenApple"},
        {id: 6, src:"/images/Gunpowder.png", status:"", alt:"Gunpowder"},
        {id: 6, src:"/images/Gunpowder.png", status:"", alt:"Gunpowder"},
        {id: 7, src:"/images/redstone.png", status:"", alt:"redstone"},
        {id: 7, src:"/images/redstone.png", status:"", alt:"redstone"},
        {id: 8, src:"/images/totem.png", status:"", alt:"totem"},
        {id: 8, src:"/images/totem.png", status:"", alt:"totem"}
    ].sort(()=> Math.random() - 0.5));


    function check(current){
        if(cardItems[previousCard].id === cardItems[current].id){
            decrementMatchLeft();
            cardItems[previousCard].status = "correct"
            cardItems[current].status = "correct"
            setCards([...cardItems]);
        }else{
            cardItems[previousCard].status = "wrong"
            cardItems[current].status = "wrong"
            incrementWrongMatch();
            setCards([...cardItems]);
            setTimeout(()=>{
                cardItems[previousCard].status = "";
                cardItems[current].status = "";
                setCards([...cardItems]);
            }, 1000);
        }
    }

    function handleClick(index: number){
        if(cardItems[index].status === ""){
            if(previousCard === -1){
                updatePreviousCard(index);
                cardItems[index].status = "active";
                setCards([...cardItems]);
            }
            else{
                cardItems[index].status = "active";
                setCards([...cardItems]);
                check(index);
                updatePreviousCard(-1);
            }
        }
    }
    return(
        <div className="gameContainer">
            {cardItems.map((item: Item, index)=><Card {...item} id={index} click={handleClick} key={index} />)}
        </div>
    )
}

export default Game;