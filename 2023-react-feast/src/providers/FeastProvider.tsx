import {createContext, Dispatch, FC, PropsWithChildren, ReactNode, useReducer} from "react";

export type FeastState = { tables: Table[] };
export type Table = { seats: Seat[] };
export type Seat = { items: number };

export enum actionType {ADD_TABLE, ADD_SEAT, ADD_ITEM}

export type Action =
  | { type: actionType.ADD_TABLE }
  | { type: actionType.ADD_SEAT, tableIndex: number }
  | { type: actionType.ADD_ITEM, tableIndex: number, seatIndex: number };

const reducer = (state: FeastState, action: Action): FeastState => {
  switch (action.type) {
    case actionType.ADD_TABLE:
      return {tables: [...state.tables, {seats: []}]};
    case actionType.ADD_SEAT:
      return {
        tables: state.tables.map((table, index) => {
          if (index === action.tableIndex) {
            return {seats: [...table.seats, {items: 0}]};
          }
          return table;
        }),
      };
    case actionType.ADD_ITEM:
      return {
        tables: state.tables.map((table, tableIndex) => {
          if (tableIndex === action.tableIndex) {
            return {
              seats: table.seats.map((seat, seatIndex) => {
                if (seatIndex === action.seatIndex) {
                  return {items: seat.items + 1};
                }
                return seat;
              }),
            };
          }
          return table;
        }),
      };
    default:
      return state;
  }
}

export const FeastContext = createContext<{ state: FeastState, dispatch: Dispatch<Action> }>({
  state: {tables: []},
  dispatch: () => null,
});

export const FeastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {tables: []});
  return (
    <FeastContext.Provider value={{ state, dispatch }}>
      {children}
    </FeastContext.Provider>
  );
};