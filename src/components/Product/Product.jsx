import './Product.css'

const Product = (props) => {
    const {title, price, quantity} = props
    return (
        <tr>
           <td>{title}</td>
           <td>{price}</td>
           <td>{quantity}</td> 
        </tr>
    );
}

export default Product;
