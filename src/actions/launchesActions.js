export const getLaunches = () => ({
  type: 'GET_LAUNCHES',
});

export const getSingleLaunch = (id) => ({
  type: 'GET_SINGLE_LAUNCH', payload: {id}
});

export const getAllLaunchSearchAction = (searchType, keyValue) => ({
  type: 'GET_SEARCH_LAUNCHES', payload: {searchType, keyValue}
});



