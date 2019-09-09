export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(id) {
  return {
    type: '@cart/ADD_SUCCESS',
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/DELETE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
