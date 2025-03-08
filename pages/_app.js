import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import '../styles/globals.css'; // Importando os estilos globais, se necessário

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
