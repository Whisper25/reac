import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const {cartProducts} = props;
    const showItems = (product) => <CartItem key={product.id} product={product}/>;
    return (
        <section>
            <h2>cart</h2>
            {
                cartProducts.length===0 ? 
                <p>empty cart</p>:
                <ol>
                    {cartProducts.map(showItems)}
                </ol>
            }
        </section>
    );
}

export default Cart;
