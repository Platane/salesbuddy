export const reduce = (state, action) => {
    state = state || { users: [] };

    switch (action.type) {
        case 'hydrate':
            return { ...state, users: action.data.users };

        default:
            return state;
    }
};
