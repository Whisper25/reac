import PropTypes from "prop-types";
const Product = (props) => {
  product: {id, title, price, quantity }, addNewProduct } = props;
  const addToCart = () => addNewProduct(id)
  return (
    <tr onClick={addToCart}>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );


Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

export default Product;
