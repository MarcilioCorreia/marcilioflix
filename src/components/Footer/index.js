import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/marciliocorreia">
      <img className="Logo" src={Logo} alt="MarcilioFlix logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a Imersão React da Alura.
        Quer saber mais? Contate-me pelo
        {' '}
        <a href="https://www.linkedin.com/in/marciliocorreia">
          LinkedIn
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
