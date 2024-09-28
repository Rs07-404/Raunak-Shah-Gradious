import { createContext, ReactNode, useState } from "react";
interface GameContextType{
    matchLeft: number,
    wrongMatches: number,
    decrementMatchLeft: ()=>void,
    incrementWrongMatch: ()=>void;
}

interface GameContextProviderProps{
    children: ReactNode;
}

const defaultGameContextValue:GameContextType = {
    matchLeft: 8,
    wrongMatches: 0,
    decrementMatchLeft: ()=>{},
    incrementWrongMatch: ()=>{}
}

export const GameContext = createContext<GameContextType>(defaultGameContextValue);

export const GameContextProvider = ({children}: GameContextProviderProps)=>{
    const [matchLeft, setMatchLeft] = useState(8);
    const [wrongMatches, setWrongMatches] = useState(0);
    // const [timeSpent, updateTimeSpent] = useState(new Date())

    function decrementMatchLeft(){
        setMatchLeft(matchLeft-1);
    }

    function incrementWrongMatch(){
        setWrongMatches(wrongMatches + 1);
    }

    return(
        <GameContext.Provider value={{matchLeft, wrongMatches, decrementMatchLeft, incrementWrongMatch}}>
            {children}
        </GameContext.Provider>
    )
}