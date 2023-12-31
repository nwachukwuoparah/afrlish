export const orderReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex((item: any) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If item exists, update quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // If item does not exist, add to cart
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REDUCE_QUANTITY':
      const itemToReduceIndex = state.findIndex((item: any) => item.id === action.payload.id);

      if (itemToReduceIndex !== -1 && state[itemToReduceIndex].quantity > 1) {
        // If item exists and quantity > 1, reduce quantity
        const reducedCart = [...state];
        reducedCart[itemToReduceIndex].quantity -= 1;
        return reducedCart;
      } else {
        // If item does not exist or quantity is 1, remove from cart
        return state.filter((item: any) => item.id !== action.payload.id);
      }
    default:
      return state;
  }
};