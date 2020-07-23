import { IData, IRootState } from "../../../models/Redux";
import { Actions } from "../../../constants";

const INITIAL_STATE: IRootState = {
    deck: [],
    rotationCard: {
        suit: "",
        value: "",
    },
    deckId: "",
};

interface IAction {
    type: string;
    payload: { data?: IData; deckId?: string };
}

export default function deck(state = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case Actions.ADD_SUCCESS: {
            return action.payload;
        }
        case Actions.LOAD_SUCCESS:
            return action.payload.data;
        default:
            return state;
    }
}
