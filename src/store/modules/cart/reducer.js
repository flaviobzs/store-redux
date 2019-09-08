export default function cart(state = [], action) {
  // quando é realizado uma action, todo os reduces são chamados, por isso, utililar esse switch para indicar apenar o necessario

  switch (action.type) {
    case '@cart/ADD':
      return [
        ...state,
        {
          ...action.product,
          amount: 1, // inicializar contador com 1
        },
      ];
    default:
      return state;
  }
}
