import produce from 'immer';

export default function cart(state = [], action) {
  // quando é realizado uma action, todo os reduces são chamados, por isso, utililar esse switch para indicar apenar o necessario

  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/DELETE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        // verificação se existe algum elemento no array
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
