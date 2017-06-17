export const reduce = (state, action) => {
    state = state || { users: [], selectedVisitorId: null };

    switch (action.type) {
        case 'hydrate':
            return {
                ...state,
                users: action.data.users,
                selectedVisitorId:
                    state.selectedVisitorId ||
                        (action.data.users[0] &&
                            action.data.users[0].sender_id) ||
                        null,
            };

        case 'selectVisitor':
            return { ...state, selectedVisitorId: action.visitorId };

        default:
            return state;
    }
};
