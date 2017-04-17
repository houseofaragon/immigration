import { FETCH_TIMELINE_DATA, FETCH_SANCTIONS_BY_PRESIDENT, FETCH_TIMELINE_SLICE_DATA, FETCH_CATEGORY_DESCRIPTIONS } from './immigration-actions';

const INITIAL_STATE = { timelineData: [], lastDateEqualsChangeDate: false, categoryDescriptions: {},  timelineSlice: [], topSanctions: [], byPresident: {} };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_TIMELINE_DATA:
        return {
          ...state,
          timelineData: action.data,
          timelineDates: action.dates,
          timelineSlice: action.sliceTimelineData,
        };
      case FETCH_TIMELINE_SLICE_DATA:
        return {
          ...state,
          timelineSlice: action.payload.map(d => {
            return d.data;
          }),
        };
      case FETCH_SANCTIONS_BY_PRESIDENT:
        return {
          ...state,
          byPresident: action.payload.data,
        };
      case FETCH_CATEGORY_DESCRIPTIONS:
        return {
          ...state,
          categoryDescriptions: action.payload.data,
        };
      default:
        return state;
    }
}
