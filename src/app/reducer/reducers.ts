export const INCREMENTPEOPLE = 'INCREMENTPEOPLE';
export const DECREMENTPEOPLE = 'DECREMENTPEOPLE';
export const SETPEOPLE = 'SETPEOPLE';

export const INCREMENTFAMILY = 'INCREMENTFAMILY';
export const DECREMENTFAMILY = 'DECREMENTFAMILY';
export const SETFAMILY = 'SETFAMILY';

export function peopleReducer (state = 0, action) {
    switch (action.type) {
        case INCREMENTPEOPLE:
            return state + 1;
        case DECREMENTPEOPLE:
            return state - 1;
        case SETPEOPLE:
            return action.payload;
        default:
            return state;
    }
};

export function familyReducer (state = 0, action) {
    switch (action.type) {
        case INCREMENTFAMILY:
            return state + 1;
        case DECREMENTFAMILY:
            return state - 1;
        case SETFAMILY:
            return action.payload;
        default:
            return state;
    }
};

export const mainReducer: {} = { people: peopleReducer, families: familyReducer };