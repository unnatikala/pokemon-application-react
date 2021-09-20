import cardConstants from "./cardConstants";

const initialState = {
  data: [],
  currentPage: 1,
  dataValue: [],
  searchValue: "",
  searchValuevar: "",
  limit: 10,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case cardConstants.GET_CARD_LIST_SUCCESSFUL:
      return {
        ...state,
        data: action.data,
      };
    case cardConstants.SEARCH_RECORD_REQUEST:
      return {
        ...state,
        searchValuevar: true,
        searchValue: action.payload.search,
      };
    case cardConstants.LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };
    default:
      return state;
  }
};
