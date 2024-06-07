import style from "../../components/footer/footer.module.css"
import logo from "../../assets/img/Logo-coinbase.svg"
import twitter from "../../assets/img/twitter.svg"
import facebook from "../../assets/img/Facebook.svg"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.footerLogo}>
                    <img src={logo}/>
                    <p>© 2024 Coinbase</p>
                </div>
                <div className={style.social}>
                    <h2>Redes Sociais</h2>
                    <div className={style.icon}>
                        <div>
                            <img src={twitter}/>
                        </div>
                        <div>
                            <img src={facebook}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;