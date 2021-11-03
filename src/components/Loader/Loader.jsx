import LoaderSpinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
    return (
         <LoaderSpinner
        type="Hearts"
        color="Red"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
}

export default Loader;