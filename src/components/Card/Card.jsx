import './Card.scss';

import Info from '../Info/Info';
import About from '../About/About';
import Interests from '../Interests/Interests';
import Footer from '../Footer/Footer';

export default function Card() {
  return (
    <div className="Card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}