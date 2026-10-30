import PropTypes from "prop-types";
const Product = (props) => {
  const {
    product: { title, price, quantity },
  } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

export default Product;
