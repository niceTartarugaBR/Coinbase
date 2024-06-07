import style from "../../components/estatistica/estatistica.module.css"

const Estatistica = () => {
    return (
        <section className={style.estatistica}>
            <div className={style.pais}>
                <h2>+100</h2>
                <p>de Países</p>
            </div>
            <div className={style.protecao}>
                <h2>US$ 193 bi</h2>
                <p>Ativos sob proteção</p>
            </div>
            <div className={style.funcionarios}>
                <h2>+3.400</h2>
                <p>Funcionários trabalhando para você!</p>
            </div>
        </section>
    );
};

export default Estatistica;