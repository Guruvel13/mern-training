import logo from "../../assets/logo.png"

const Gallery = (SECE) => {
    return(
        <div>
            <h2>Welcome to {SECE.page} page</h2>
            <img src={logo} alt="SECE"/>
            <h3>This image is {SECE.img}</h3>
        </div>
    );
};
export default Gallery;