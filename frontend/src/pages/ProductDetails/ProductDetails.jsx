// import useParams from "react-router-dom"
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams();
    return (
        <div>
            <h1>ProductDetail Id: {id} </h1>
        </div>
    );
}

export default ProductDetails;