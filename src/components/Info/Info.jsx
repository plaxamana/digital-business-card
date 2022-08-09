import './Info.scss';
import profilePicture from '../../assets/philip-small.jpg';
import Email from '../../assets/email.svg';
import LinkedIn from '../../assets/linkedin.svg';

export default function Info() {

  const Button = ({ target, text }) => (
    <a href={`${text === 'Email' ? `mailto: ${target}` : `${target}`}`} className={`btn ${text === 'LinkedIn' && 'btn--linkedin'}`}>{text === 'LinkedIn' ? <img src={LinkedIn} /> : <img src={Email} />}{text}</a>
  )

  return (
    <div className="Info">
      <img src={profilePicture} alt="Philip standing in front the Toronto skyline" className="picture" />
      <div className="body container">
        <h1>Philip Laxamana</h1>
        <p>Font End Software Engineer</p>
        <a href="https://philiplaxamana.com">philiplaxamana.com</a>
        <div className="btn__container">
          <Button text="Email" target="philip.j.laxamana@gmail.com"/>
          <Button text="LinkedIn" target="https://linkedin.com/in/plaxamana" />
        </div>
      </div>
    </div>
  )
}
