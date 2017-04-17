// import { createSelector } from 'reselect';
// import _ from 'lodash';

// const getAllSanctionsByPresident = (state) => state.immigatrations.byPresident;
// const getAllTimelineData = (state) => state.immigatrations.timelineData;
// const getTimelineSlice = (state) => state.immigatrations.timelineSlice;
// const getAllDates = (state) => state.immigatrations.timelineDates;
// const getAllDescriptions = (state) => state.immigatrations.categoryDescriptions;

// export const getDatesForTimeline = createSelector(
//   [ getAllDates ],
//   ( datesArray ) => {
//     if (datesArray && datesArray.length) {
//       return datesArray;
//     }
//   }
// );

// export const getTopSanctionsData = createSelector(
//   [ getAllTimelineData ],
//   ( topSanctionsObject ) => {
//     if (Object.keys(topSanctionsObject).length) {
//       // last date has latest counts for all categories
//       const topSanctions = topSanctionsObject[Object.keys(topSanctionsObject)[Object.keys(topSanctionsObject).length - 1]];
//       const reduced = Object.keys(topSanctions).filter(el => topSanctions[el].total > 40).map(sanction => topSanctions[sanction]);
//       const sortedTopSanctions = _.orderBy(reduced, 'total', 'desc');
//       return sortedTopSanctions;
//     }
//   }
// );

// export const getTimelineSliceData = createSelector(
//   [ getTimelineSlice ],
//   ( sanctionsSliceObject ) => {
//     return sanctionsSliceObject;
//   }
// );

// export const getSanctionsByPresident = createSelector(
//   [ getAllSanctionsByPresident ],
//   ( sanctionsPresidentsObject ) => {
//     return sanctionsPresidentsObject;
//   }
// );

// // fix
// export const getUniqueKeysForRecharts = createSelector(
//   [ getAllTimelineData ],
//   ( topSanctionsObject ) => {
//     if (Object.keys(topSanctionsObject).length) {
//       const topSanctions = topSanctionsObject[Object.keys(topSanctionsObject)[Object.keys(topSanctionsObject).length - 1]];
//       const keys = topSanctions.map(key => {
//           const keysObj = {};
//           keysObj.value  = key.category;
//           keysObj.label = key.category;
//           return keysObj;
//       });
//       const sortedKeys = _.sortBy(keys, 'value');
//       return sortedKeys;
//     }
//     return topSanctionsObject;
//   }
// );

// export const rechartsFormatter = createSelector(
//   [ getAllTimelineData ],
//   ( sanctionsDatesObject ) => {
//     const sanctions = sanctionsDatesObject;
//     if (Object.keys(sanctions).length) {
//       const datesData = [];
//       Object.keys(sanctions).map(date => {
//         const dateDataObj = {};
//         let total = 0;
//         if (!dateDataObj.hasOwnProperty(date)) {
//           dateDataObj.date = date;
//         }
//         if (sanctionsDatesObject.hasOwnProperty(date)) {
//            sanctions[date].map(sanction => {
//               dateDataObj[sanction.category] = sanction.total;
//               total += sanction.total;
//           });
//         }
//         dateDataObj.count = total;
//         datesData.push(dateDataObj);
//       });
//       return datesData;
//     }
//     return [];
//   }
// );

// export const getCategoryDescriptions = createSelector(
//   [ getAllDescriptions ],
//   ( categoryObj ) => {
//     if (Object.keys(categoryObj).length) {
//       return categoryObj;
//     }
//   }
// );
