import "./Footer.scss";
import footer__div from "../Img/footer__div.png";
import footer__img from "../Img/footer--img.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          className="footer__div"
          src={footer__div}
          alt="img"
          width={359}
          height={332}
        />

        <div className="footer__chair">
          <h3 className="footer__title">Luxury & Fancy Chair</h3>
          <p className="footer__text">
            All the Lorem Ipsum generators on the Internet tend to predefined
            chunks this the first true generator on the Internet.
          </p>

          <hr className="footer__line" />
        </div>

        <div className="footer__end">
          <div className="end__flex">
            <span className="footer__plus">20K+</span>
            <span className="footer__p">People Visiting this year</span>
            <span className="footer__plus">15</span>
            <span className="footer__p">Years Experience</span>
          </div>

          <div className="footer__flex">
            <img src={footer__img} alt="img" width={116} height={36} />
            <span className="flex__line"></span>
            <div>
              <h4 className="flex__title">Trust Members</h4>
              <p className="flex__text">
                More than 50k peoples integrate with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
