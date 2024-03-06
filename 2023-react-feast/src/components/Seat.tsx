import { useContext } from "react";
import { FeastContext } from "../providers/FeastProvider";
import { actionType } from "../providers/FeastProvider";

export const Seat = ({table, id}: {table: number, id: number}) => { 
    const { state, dispatch } = useContext(FeastContext);
    return (
        <div>
            <button onClick={() => dispatch({ type: actionType.ADD_ITEM, tableIndex: table, seatIndex: id })}>{state.tables[table].seats[id].items}</button>
        </div>
    );
};