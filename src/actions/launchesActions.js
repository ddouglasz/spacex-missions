export const getLaunches = () => ({
  type: 'GET_LAUNCHES',
});

export const getSingleLaunch = (id) => ({
  type: 'GET_SINGLE_LAUNCH', payload: {id}
});

