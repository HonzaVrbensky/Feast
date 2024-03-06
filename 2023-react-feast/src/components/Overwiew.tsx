import { FeastContext } from "../providers/FeastProvider";
import { useContext } from "react";
import Styles from '../styles/Overview.module.css';

export const Overview = () => { 
    const { state } = useContext(FeastContext);

    let total = 0;

    state.tables.map((table) => {
        table.seats.map((seat) => {
            total += seat.items;
        });
    });

    return (
        <div className={Styles.overview}>
            <h1>{total}</h1>
        </div>
    );
};

