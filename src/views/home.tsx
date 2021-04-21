import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../content/css/styles.css"
import "../content/css/main.css"
import Card from "../components/card";
import Image1 from "../content/img/centre-langues-Francais-general-300x200.jpg";
import Image2 from "../content/img/centre-langues-Francais-specialise-300x200.jpg";
import Image3 from "../content/img/Cours-francais-Enfants2-300x225.jpg";
import Image4 from "../content/img/centre-arts-peinture-eau-212x300.jpg";

let Courses = [
    {
        id: "1",
        img: {Image1},
        alt:"imagen1",
        courseName: "COURSE DE FRANÇAIS GENERAL",
    },
    {
        id: "2",
        img: {Image3},
        alt:"imagen2",
        courseName: "COURSE POR ENFANTS",
    },
    {
        id: "3",
        img: {Image2},
        alt:"imagen3",
        courseName: "COURSE DE FRANÇAIS ESPÉCIALISÉ",
    },
    {
        id: "4",
        img: {Image4},
        alt: "image4",
        courseName: "DÉCOUVREZ NOS ATELIERS",
    }
]

function Home(){
    return(
        <div className="container">
            <main className="main" role="main">
                <section id="section-apprendre" className="homepage">
                    <div className="container">
                        <div className="row description-box d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h2 className="homepage-title--alt2 color-langues">Apprendre le français</h2>

                                <p className="homepage-descrip">Le centre de langues de
                                    l’Alliance française de Bangkok propose une large gamme de cours de
                                    français, répondant ainsi aux besoins des quelque 1 200 étudiants qui
                                    fréquentent chaque trimestre ses locaux.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="class-offer d-flex justify-content-lg-between">
                    {Courses.map((item, index) =>(
                        <Card
                            id={item.id}
                            img={item.img}
                            courseName={item.courseName}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Home;