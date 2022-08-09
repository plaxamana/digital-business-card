import './Footer.scss';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="socials__container">
          <a href="https://instagram.com/pj.lax">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/_plaxamana">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/plaxamana">
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  )
}
