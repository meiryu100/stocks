import axios from 'axios';

export const apiHelper = (
  method,
  url,
  actionCreator,
  dispatch,
  data = {},
  payload
) => {
  axios({
    method,
    url,
    data,
  })
  .then(function (res) {    
    dispatch(actionCreator(res.data, payload));    
  }).catch(function (error) {
    console.log(`Something went wrong: ${error}`);
  });
};
