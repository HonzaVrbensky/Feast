import { useContext } from "react";
import { FeastContext } from "../providers/FeastProvider";
import { actionType } from "../providers/FeastProvider";
import { Seat } from "./Seat";

export const Table = ({id}: {id: number}) => {
    const { state, dispatch } = useContext(FeastContext); 
    return (
        <div>
            {state.tables[id].seats.map((_, index) => <Seat key={index} table={id} id={index} />)}
            <button onClick={() => dispatch({ type: actionType.ADD_SEAT, tableIndex: id })}>+</button>
        </div>
    );
};