import './Image.css'
const Image = (props) => {
    const {src, alt} = props;
    return (
        <a>
            <img src={src} alt={alt} />
        </a>
    );
}

export default Image;
