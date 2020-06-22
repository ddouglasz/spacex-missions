export const getHistory = () => ({
  type: 'GET_HISTORY',
});

export const getSingleHistory = (id) => ({
  type: 'GET_SINGLE_HISTORY', payload: {id}
});

