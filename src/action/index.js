export const hydrate = data => ({ type: 'hydrate', data });

export const selectVisitor = visitorId => ({
    type: 'selectVisitor',
    visitorId,
});
