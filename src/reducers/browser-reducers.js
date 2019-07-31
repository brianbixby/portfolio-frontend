export default (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'BROWSER_FETCH':
      return payload;
    default:
      return state;
  }
};