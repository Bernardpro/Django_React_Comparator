import React from 'react';
import '../styles/components/footer.scss';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div>
             <h2 id="contact">Conctactez-nous</h2>
            <form action="">
                <input type="text" placeholder="Nom" value={name} onChange={(event) => setName(event.target.value)}/>
                <input type="text" placeholder="E-Mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Votre message ici..."></textarea>
                <button >Envoyer</button>
            </form> 
            <div id="secondLine"></div>
            <div id="copyrightAndIcons">
                <div id="copyright">
                    <span>© Maxime BERNARD; 2022</span>
                </div>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/maxime-bernard-6b5315242/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/Bernardpro"><i className="fa fa-github"></i></a>
                </div>
            </div>  
        </div>
    );
};

export default Footer;