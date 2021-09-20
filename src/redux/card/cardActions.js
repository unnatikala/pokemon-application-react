import cardConstants from "./cardConstants";

export default {
  dispatchGetListAction: () => {
    return {
      type: cardConstants.GET_CARD_LIST,
    };
  },
  searchRecord: (search) => {
    return {
      type: cardConstants.SEARCH_RECORD_REQUEST,
      payload: { search },
    };
  },
  pageLimitRecord: (limit) => {
    return {
      type: cardConstants.LIMIT,
      payload: { limit },
    };
  },
};
