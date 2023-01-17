import '../styles/pages/home.scss';
import React from "react";
import Nav from '../components/Nav';
import MainImage from '../components/MainImage';
import ImageWithLink from '../components/ImageWithLink';
const Home = () => {
    return (

        <div>
            <Nav/>
            <MainImage slogan ="Trouver le jean qui vous convient !" title="Bernard's Comparator"/>
            <section id="presentation">
                <div id="textIntro">

            
                    <p>
                     Bienvenue sur notre site de comparateur de jeans ! Nous avons créé ce site afin de vous aider à trouver le jean parfait qui correspond à vos besoins et à votre style. Notre site regroupe les meilleures marques de jeans du marché, ainsi que de nombreux modèles différents de seconde main. Nous avons sélectionné pour vous les jeans les plus confortables, les plus durables et les plus tendance. Grâce à notre outil de comparaison en ligne, vous pourrez facilement comparer les différents modèles de jeans et trouver celui qui vous convient le mieux. Vous pourrez également lire les avis et les évaluations des autres clients pour vous faire une idée de la qualité des jeans que vous souhaitez acheter. Nous espérons que notre site vous aidera à trouver le jean parfait ! N'hésitez pas à nous contacter si vous avez des questions ou si vous avez besoin d'aide pour faire votre choix.
                     </p>
                </div>
                <div id="presentationCategories">
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/regularjean" src="./images/regular_jean.jpg" alt="Jean regular"/>
                    </div>
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/slimjean" src="./images/slim_jean.jpg" alt="Jean slim"/>
                    </div>
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/straightjean" src="./images/straight_jean.jpg" alt="Jean straight"/>
                    </div>
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/relaxjean" src="./images/relax_jean.jpg" alt="Jean relax"/>
                    </div>
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/loosejean" src="./images/loose_jean.jpg" alt="Jean loose"/>
                    </div>
                    <div className='imagesPresentationCategories'>
                        <ImageWithLink path="/skinnyjean" src="./images/skinny_jean.jpg" alt="Jean skinny"/>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;