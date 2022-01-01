import imagen from "../../src/media/imagen-salud.jpeg";

const Home = () => {

    return(
        <div>
            <img src={imagen} alt="Imagen de salud" width={500} height={500} />
        </div>
    )

}

export default Home;