import { FeastContext } from "../providers/FeastProvider";
import { useContext } from "react";
import Styles from "../styles/Playground.module.css";
import { actionType } from "../providers/FeastProvider";
import { Table } from "./Table";

export const Playground = () => {
    const { state, dispatch } = useContext(FeastContext);

    return ( 
        <div className={Styles.playground}>
            {state.tables.map((_, tableIndex) => <Table key={tableIndex} id={tableIndex} /> )}
            <button className={Styles.add} onClick={() => dispatch({ type: actionType.ADD_TABLE })}>+</button>
        </div>
    );
 };