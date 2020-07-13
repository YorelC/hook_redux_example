export const actions = {
    GET_ITEMS: "get items",
    GET_ITEMS_SUCCESS: "get items success",
    ADD_ITEM: "add item",
    REMOVE_ITEM: "remove item"
  };
  
  export const createAction = (type, payload) => {
    return {
      type,
      payload
    };
  };
  