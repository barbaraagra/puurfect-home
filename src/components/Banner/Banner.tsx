import "./Banner.css"
import catBannerImage from "../../assets/images/cat-home.png";

const Banner = () => {
  return (
    <div className="BannerContainer">
        <img className="bannerImage" src={catBannerImage} alt="Cat Banner" />
        <article className="bannerText">
            <p className="bannerTextRegular">
                Adote agora e ganhe
            </p>
            <p className="bannerTextAlt">
                10% de descontos
            </p>
            <p className="bannerTextRegular">
                em compras nas Patinhas Mimadas
            </p>
        </article>
    </div>
  )
}

export default Banner