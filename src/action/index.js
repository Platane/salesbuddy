export const hydrateUsers = users => ({ type: 'hydrateUsers', users });

export const hydrateUserProduct = (userId, products) => ({
    type: 'hydrateUserProduct',
    products,
    userId,
});

export const selectVisitor = visitorId => ({
    type: 'selectVisitor',
    visitorId,
});
