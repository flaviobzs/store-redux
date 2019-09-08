import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { dispatch } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/pairs';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <strong>{product.priceFormatted}</strong>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={product.amount}
                    name=""
                    id=""
                  />
                  <button>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: '@cart/DELETE',
                      id: product.id,
                    })
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

// mapear o state e transformalo em forma de propriedade (redux)
const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
