import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/matthew-fernandez-83b628233">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
