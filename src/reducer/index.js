export const reduce = (state, action) => {
    state = state || { users: [], selectedVisitorId: null, mainContent: 'map' };

    switch (action.type) {
        case 'hydrateUsers':
            state = {
                ...state,
                users: action.users.map(newUser => {
                    const user = state.users.find(
                        u => u.id_user === newUser.id_user
                    );

                    return { ...(user || {}), ...newUser };
                }),
            };
            break;

        case 'hydrateUserProduct':
            state = {
                ...state,
                users: state.users.map(
                    user =>
                        user.id_user === action.userId
                            ? { ...user, matching_products: action.products }
                            : user
                ),
            };
            break;

        case 'selectVisitor':
            state = {
                ...state,
                selectedVisitorId: action.visitorId,
                mainContent: 'profil',
            };
            break;

        case 'setMainContent':
            state = { ...state, mainContent: action.mainContent };
            break;
    }

    state = {
        ...state,
        selectedVisitorId:
            state.selectedVisitorId ||
                (state.users[0] && state.users[0].id_user) ||
                null,
    };

    return state;
};
