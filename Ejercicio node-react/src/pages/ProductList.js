import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
import StickyCart from "../components/StickyCart"; // Asegúrate de la ruta correcta

const ProductList = ({ addToCart, cartItems, removeFromCart }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const data = [
          {
            _id: "63741002e2c75d8744f80a52",
            id: 3,
            title: "Stranger Things",
            creator: "Matt Duffer, Ross Duffer",
            rating: 8.7,
            dates: "2016-",
            image:
              "https://es.web.img3.acsta.net/pictures/19/06/04/16/39/4888520.jpg",
            channel: "Netflix",
          },
          {
            _id: "63741002e2c75d8744f80a51",
            id: 2,
            title: "Breaking Bad",
            creator: "Vince Gilligan",
            rating: 9.4,
            dates: "2008-2013",
            image:
              "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
            channel: "AMC",
          },
          {
            _id: "63741002e2c75d8744f80a53",
            id: 4,
            title: "The Boys",
            creator: "Eric Kripke",
            rating: 8.7,
            dates: "2019-",
            image:
              "https://es.web.img3.acsta.net/pictures/20/08/05/09/15/4715259.jpg",
            channel: "Prime Video",
          },
          {
            _id: "63741002e2c75d8744f80a59",
            id: 11,
            title: "Médico de familia",
            creator: "Daniel Écija",
            rating: 5.4,
            dates: "1995–1999",
            image: "http://peticiones.online/images/series/series01.jpg",
            channel: "Telecinco",
          },
          {
            _id: "63741002e2c75d8744f80a5a",
            id: 14,
            title: "Los Serrano",
            creator: "Daniel Écija; ‎Álex Pina",
            rating: 7.4,
            dates: "2003-2008",
            image: "http://peticiones.online/images/series/series02.jpg",
            channel: "Telecinco",
          },
          {
            _id: "63741002e2c75d8744f80a5c",
            id: 16,
            title: "Lleno, por favor",
            creator: "Vicente Escrivá",
            rating: 5.8,
            dates: "1993",
            image: "http://peticiones.online/images/series/series04.jpg",
            channel: "Antena 3",
          },
          {
            _id: "63741002e2c75d8744f80a54",
            id: 5,
            title: "The Mandalorian",
            creator: "Jon Favreau",
            rating: 8.8,
            dates: "2019-",
            image:
              "https://static.wikia.nocookie.net/esstarwars/images/2/29/MandoS2PosterES.jpg",
            channel: "Disney +",
          },
          {
            _id: "63741002e2c75d8744f80a50",
            id: 1,
            title: "Juego de Tronos",
            creator: "David Benioff, D.B. Weiss",
            rating: 9.2,
            dates: "2011-2019",
            image:
              "https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg",
            channel: "HBO",
          },
          {
            _id: "63741002e2c75d8744f80a55",
            id: 7,
            title: "Peaky Blinders",
            creator: "Steven Knight",
            rating: 8.8,
            dates: "2013-",
            image:
              "https://es.web.img3.acsta.net/pictures/18/11/24/02/21/0536396.jpg",
            channel: "BBC",
          },
          {
            _id: "63741002e2c75d8744f80a56",
            id: 8,
            title: "Vikings",
            creator: "Michael Hirst",
            rating: 8.5,
            dates: "2013-2020",
            image:
              "https://m.media-amazon.com/images/I/71K8PxDUOsL._AC_SY741_.jpg",
            channel: "Prime Video",
          },
          {
            _id: "63741002e2c75d8744f80a57",
            id: 9,
            title: "The Walking Dead",
            creator: "Frank Darabont, Angela Kang",
            rating: 8.2,
            dates: "2010-2022",
            image:
              "https://m.media-amazon.com/images/I/61EEBfj+THL._AC_SY741_.jpg",
            channel: "AMC",
          },
          {
            _id: "63741002e2c75d8744f80a58",
            id: 6,
            title: "WandaVision",
            creator: "Jac Schaeffer",
            rating: 8,
            dates: "2021",
            image:
              "https://static.wikia.nocookie.net/disney/images/5/5e/WandaVision_official_teaster_poster.png",
            channel: "Disney +",
          },
          {
            _id: "63741002e2c75d8744f80a5b",
            id: 15,
            title: "Farmacia de guardia",
            creator: "Antonio Mercero",
            rating: 6.6,
            dates: "1991-1996",
            image: "http://peticiones.online/images/series/series03.jpg",
            channel: "Antena 3",
          },
          {
            _id: "63741002e2c75d8744f80a5d",
            id: 17,
            title: "Compañeros",
            creator: "Daniel Écija",
            rating: 5.8,
            dates: "1998-2002",
            image: "http://peticiones.online/images/series/series05.jpg",
            channel: "Antena 3",
          },
          {
            _id: "63741002e2c75d8744f80a5e",
            id: 18,
            title: "Al salir de clase",
            creator: "Antonio Cuadri",
            rating: 3.8,
            dates: "1997-2002",
            image: "http://peticiones.online/images/series/series06.jpg",
            channel: "Telecinco",
          },
          {
            _id: "63741002e2c75d8744f80a65",
            id: 24,
            title: "Spider-Man: No Way Home",
            creator: "Jon Watts",
            rating: 8.7,
            dates: "2021",
            image:
              "https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
            channel: "Marvel Studios",
          },
          {
            _id: "63741002e2c75d8744f80a66",
            id: 25,
            title: "Avengers: Endgame",
            creator: "Anthony Russo, Joe Russo",
            rating: 8.4,
            dates: "2019",
            image:
              "https://www.themoviedb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
            channel: "Marvel Studios",
          },
          {
            _id: "63741002e2c75d8744f80a67",
            id: 26,
            title: "Black Panther",
            creator: "Ryan Coogler",
            rating: 7.3,
            dates: "2018",
            image:
              "https://www.themoviedb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            channel: "Marvel Studios",
          },
          {
            _id: "63741002e2c75d8744f80a68",
            id: 27,
            title: "Doctor Strange",
            creator: "Scott Derrickson",
            rating: 7.5,
            dates: "2016",
            image:
              "https://www.themoviedb.org/t/p/original/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
            channel: "Marvel Studios",
          },
          {
            _id: "63741002e2c75d8744f80a69",
            id: 28,
            title: "Captain America: Civil War",
            creator: "Anthony Russo, Joe Russo",
            rating: 7.8,
            dates: "2016",
            image:
              "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
            channel: "Marvel Studios",
          },

          {
            _id: "63741002e2c75d8744f80a70",
            id: 29,
            title: "Guardians of the Galaxy",
            creator: "James Gunn",
            rating: 8.0,
            dates: "2014",
            image:
              "https://www.themoviedb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
            channel: "Marvel Studios",
          },
          {
            _id: "63741002e2c75d8744f80a73",
            id: 32,
            title: "The Lord of the Rings: Las dos Torres",
            creator: "Peter Jackson",
            rating: 8.9,
            dates: "2002",
            image:
              "https://www.themoviedb.org/t/p/w1280/up6gIHZlfEQZkHIfQwcOOaGOzOt.jpg",

            channel: "New Line Cinema",
          },
          {
            _id: "63741002e2c75d8744f80a74",
            id: 33,
            title: "Gladiator II",
            creator: "Ridley Scott",
            rating: 8.5,
            dates: "2024",
            image:
              "https://www.themoviedb.org/t/p/w1280/u2LADrvXAyMiBVhVoWhLi8WiXAL.jpg",
            channel: "DreamWorks",
          },
          {
            _id: "63741002e2c75d8744f80a73",
            id: 32,
            title: "The Lord of the Rings: The Return of the King",
            creator: "Peter Jackson",
            rating: 8.9,
            dates: "2003",
            image:
              "https://www.themoviedb.org/t/p/w1280/suvlZfDAoq5vfVUrfb468KJhFlL.jpg",
            channel: "New Line Cinema",
          },
          {
            _id: "63741002e2c75d8744f80a74",
            id: 33,
            title: "Gladiator",
            creator: "Ridley Scott",
            rating: 8.5,
            dates: "2000",
            image:
              "https://www.themoviedb.org/t/p/w1280/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
            channel: "DreamWorks",
          },
          {
            _id: "63741002e2c75d8744f80a75",
            id: 34,
            title: "Braveheart",
            creator: "Mel Gibson",
            rating: 8.4,
            dates: "1995",
            image:
              "https://www.themoviedb.org/t/p/w1280/cDMYybBU4COJfTwcPgnihwY5EiP.jpg",
            channel: "20th Century Fox",
          },
          {
            _id: "63741002e2c75d8744f80a76",
            id: 35,
            title: "Inception",
            creator: "Christopher Nolan",
            rating: 8.8,
            dates: "2010",
            image:
              "https://www.themoviedb.org/t/p/w1280/sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg",
            channel: "Warner Bros.",
          },
        ];
        setPeliculas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeliculas();
  }, []);

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Lista de Películas</h1>
      <div className="row">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={pelicula.image}
                className="card-img-top"
                alt={pelicula.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">
                  <strong>Creador:</strong> {pelicula.creator}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {pelicula.rating}
                </p>
                <p className="card-text">
                  <strong>Fechas:</strong> {pelicula.dates}
                </p>
                <p className="card-text">
                  <strong>Canal:</strong> {pelicula.channel}
                </p>
                <Button variant="primary" onClick={() => addToCart(pelicula)}>
                  + Añadir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <StickyCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductList;
