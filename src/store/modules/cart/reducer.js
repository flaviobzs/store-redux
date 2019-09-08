import produce from 'immer';

export default function cart(state = [], action) {
  // quando é realizado uma action, todo os reduces são chamados, por isso, utililar esse switch para indicar apenar o necessario

  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    case '@cart/DELETE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        // verificação se existe algum elemento no array
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
