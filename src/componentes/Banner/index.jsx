import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>

                <p className={styles.paragrafo}>
                    Bem-vindo ao meu espaço pessoal! Eu sou Vinicius Bastos,
                    Desenvolvedor Front-end. Aqui compartilho diversos
                    conhecimentos e espero que você descubra algo novo e
                    interessante.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img className={styles.minhaFoto} src="https://github.com/viniciusbastos-dev.png" alt="Foto do Vinícius Bastos" />
            </div>
        </div>
    );
}
