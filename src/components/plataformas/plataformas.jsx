import style from "../../components/plataformas/plataformas.module.css"
import apple from "../../assets/img/Applestore.svg"
import play from "../../assets/img/Playstore.svg"

const plataformas = () => {
    return (
        <secion className={style.plataformas}>
            <div className={style.plataformasWrapper}>
                <div className={style.plataformasWrapperContent}>
                    {/* Texto plataformas */}
                    <div className={style.plataformasText}>
                        <h2>Se você prefere, baixe o app da Coinbase e abra facilmente sua conta grátis</h2>
                    </div>
                    {/* aplicativos */}
                    <div className={style.content}>
                        {/* Card AppleStore */}
                        <div className={style.plataformasCardDiv}>
                            <div className={style.plataformasCard}>
                                <a>
                                    <img src={apple} className={style.icon}/>
                                </a>
                            </div>
                            <div className={style.plataformasCardText}>
                                <h2>Clique para baixar seu App na Apple Store</h2>
                                <p>Baixe o aplicativo para iPhone</p>
                            </div>
                        </div>
                        {/* Card PlayStore */}
                        <div className={style.plataformasCardDiv}>
                            <div className={style.plataformasCard}>
                                <a>
                                    <img src={play} className={style.icon}/>
                                </a>
                            </div>
                            <div className={style.plataformasCardText}>
                                <h2>Clique para baixar seu app na Play Store</h2>
                                <p>Baixe o aplicativo para Android</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </secion>
    );
};

export default plataformas;