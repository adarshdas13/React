import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItem({ item, onUpdatequantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onUpdatequantity(item.id, item.quantity - 1)}>
            <FaMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdatequantity(item.id, item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>
        <button onClick={() => onRemove(item.id)} className="remove-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
