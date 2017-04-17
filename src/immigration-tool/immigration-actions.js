// require('es6-promise').polyfill();
// import axios from 'axios';

// export const FETCH_TIMELINE_DATA = 'FETCH_TIMELINE_DATA';
// export const FETCH_SANCTIONS_BY_PRESIDENT = 'FETCH_SANCTIONS_BY_PRESIDENT';
// export const FETCH_TIMELINE_SLICE_DATA = 'FETCH_TIMELINE_SLICE_DATA';
// export const FETCH_CATEGORY_DESCRIPTIONS = 'FETCH_CATEGORY_DESCRIPTIONS';

// let S3_PATH;
// if (process.env.NODE_ENV === 'production') {
//   S3_PATH = 'https://s3.amazonaws.com/enigma-labs-prod';
// }
// else if (process.env.NODE_ENV === 'testing') {
//   S3_PATH = 'https://s3.amazonaws.com/enigma-labs-testing';
// }
// else {
//   S3_PATH = 'https://s3.amazonaws.com/enigma-labs-prod';
// }

// const SANCTIONS_TIMELINE_ENDPOINT = S3_PATH + '/sanctions-tracker/timeseries';
// const SANCTIONS_BY_PRESIDENT_DATA_ENDPOINT = S3_PATH + '/sanctions-tracker/presidents';
// const SANCTION_TIMELINE_DATE_ENDPOINT = S3_PATH + '/sanctions-tracker/';
// const CATEGORY_DESCRIPTIONS_ENDPOINT = S3_PATH + '/sanctions-tracker/categories';

// export function fetchTimelineSlice(dates) {
//   const fetchDates = dates.map(sanction => {
//     return axios.get(SANCTION_TIMELINE_DATE_ENDPOINT + sanction);
//   });
//   const request = axios.all(fetchDates);
//   return {
//     type: FETCH_TIMELINE_SLICE_DATA,
//     payload: request,
//   };
// }

// export const setTimelineData = (data, dates, slice) => (
//   {
//     type: FETCH_TIMELINE_DATA,
//     data: data,
//     dates: dates,
//     sliceTimelineData: slice,
//   }
// );

// // used for timeline, histogram, presidents line graph
// export const fetchTimelineData = () => (dispatch) => {
//  axios.get(SANCTIONS_TIMELINE_ENDPOINT)
//   .then((result) => {
//     const data = result.data.totals;
//     const dates = result.data.days;
//     const slicedDates = dates.slice(dates.length - 5);
//     const fetchDates = slicedDates.map(sanction => {
//       return axios.get(SANCTION_TIMELINE_DATE_ENDPOINT + sanction);
//     });

//     axios.all(fetchDates)
//          .then((results) => {
//             const sliceTimelineData = results.map((obj) => obj.data);
//             dispatch(setTimelineData(data, dates, sliceTimelineData));
//           });
//         });
// };

// // used for presidents bar chart
// export function fetchSanctionsByPresident() {
//   const request = axios.get(SANCTIONS_BY_PRESIDENT_DATA_ENDPOINT);
//   return {
//     type: FETCH_SANCTIONS_BY_PRESIDENT,
//     payload: request,
//   };
// }

// // used for presidents bar chart
// export function fetchCategoryDescriptions() {
//   const request = axios.get(CATEGORY_DESCRIPTIONS_ENDPOINT);
//   return {
//     type: FETCH_CATEGORY_DESCRIPTIONS,
//     payload: request,
//   };
// }
