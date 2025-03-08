import { useState } from 'react';
import Image from 'next/image';
import image from '../public/images/image.jpeg';
import logo from '../public/images/logo.svg';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <body>
            <header>
                <nav>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className={`menu ${menuOpen ? 'open' : ''}`}>
                        <a>Serviços</a>
                        <a>Sobre mim</a>
                        {/* <a>Agenda</a> */}
                        <a>Contato</a>
                    </div>
                </nav>
            </header>
            <main>
                <div className="titulo">
                    <Image src={logo} width={400} height={400} />
                    <h3>CPR xx/xxxxx</h3>
                </div>

                <div className="card">
                    <Image
                        src={image}
                        alt="Imagem Exemplo"
                        width={500}
                        height={300}
                        className="card-img"
                    />
                    <div className="card-content">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <a href="#" className="btn">Entre em contato</a>
                    </div>
                </div>

                <div className="servicos">
                    <h1>Serviços</h1>
                    <div className="cards">
                        <div className="card">
                            <div className="card-content">
                                <h2>Psicoterapia</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2>Avaliação psicológica</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div><Image src={logo} width={100} height={100} /></div>
                <div>
                    <p>Luciana Pereira Dantas Pacheco Pacelli</p>
                    <p>CRP XX/XXXXX</p>
                    <p>(84)99999-9999</p>
                    <p>lucianapereira@gmail.com</p>
                    <a href="#">Entre em contato</a>
                </div>
            </footer>
        </body>
    );
}
