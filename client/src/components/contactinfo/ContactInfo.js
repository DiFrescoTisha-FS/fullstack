import React, { useState } from 'react';
import avatarIcon from '../../images/tsbam.png';

import {
  CustomButton, // Use CustomButton here
  Icon,
  ContactInfoContainer
} from "../contactinfo/ContactInfoElements";

const ContactInfo = ({ user }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactInfoToggle = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div>
      <CustomButton onClick={handleContactInfoToggle}> {/* Use CustomButton */}
        <Icon src={avatarIcon} alt="User/Placeholder Icon" />
        {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
      </CustomButton> {/* Use CustomButton */}
      {showContactInfo && (
        <ContactInfoContainer>
          <p>Email: difrescoc@gmail.com</p>
          <p>Phone: 828-708-9535</p>
        </ContactInfoContainer>
      )}
    </div>
  );
};

export default ContactInfo;
