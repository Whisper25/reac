
const CartItem = () => {
    const {
        product: { id, title, price, quantity },
      } = props;
    return (
        <div>
            <li >
                {title} quantity = {quantity} price = {price}
            </li>
        </div>
    );
}

export default CartItem;
