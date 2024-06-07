import style from "../../components/avancado/avancado.module.css"
import barra from "../../assets/img/barra.svg"

const Avancado = () => {
    return (
        <section className={style.Avancado}>
            <div className={style.avancadoWrapper}>
                <div className={style.coinBaseAvancado}>
                    <h2>Coinbase Avançado</h2>
                    <p>Turbine seus trades</p>
                    <div className={style.cards}>
                        <div className={style.conteudo}>
                            <img src={barra}/>
                            <div className={style.conteudoTexto}>
                                <h2>Ferramentas de Trade Avançadas</h2>
                                <p>Aproveite das ferramentas de trade mais poderosas. Para traders avançados que buscam uma plataforma sofisticada, com toda a segurança da Coinbase.</p>
                            </div>
                        </div>
                        <div className={style.conteudo}>
                            <img src={barra}/>
                            <div className={style.conteudoTexto}>
                                <h2>Use as melhores features para te guiar no seus investimentos</h2>
                                <p>De gráficos do TradingView, tipos diferentes de ordens, e uso de APIs, a Coinbase Advanced tem tudo o que você precisa para executar seus trades com eficiência.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.buttom}>
                        <a className={style.botao}>Ler mais</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Avancado;
