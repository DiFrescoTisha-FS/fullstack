import React, { useState, useEffect, useRef } from 'react';
// import avatarIcon from '../../images/purple_logo.png';
import { BiSolidContact } from "react-icons/bi";
import {
  CustomButton, // Use CustomButton here
  ContactInfoContainer
} from "../contactinfo/ContactInfoElements";

const ContactInfo = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const contactInfoRef = useRef(null); // Ref for the ContactInfo component

  useEffect(() => {
    fetch('/api/auth/status', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        setIsAuthenticated(data.isAuthenticated);
      })
      .catch(err => console.error('Error fetching auth status:', err));

    // Event listener for outside click
    const handleOutsideClick = (event) => {
      if (contactInfoRef.current && !contactInfoRef.current.contains(event.target)) {
        setShowLoginMessage(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // Remove the event listener on cleanup
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleContactInfoToggle = () => {
    if (isAuthenticated) {
      setShowContactInfo(!showContactInfo);
      setShowLoginMessage(false);
    } else {
      setShowLoginMessage(true);
    }
  };

  return (
    <div ref={contactInfoRef}>
      <CustomButton className="bg-[#ac94f4] text-[#010606]" onClick={handleContactInfoToggle}>
        <BiSolidContact className="bg-[#010606]" size="24" />
        {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
      </CustomButton>
      {showContactInfo && isAuthenticated && (
        <ContactInfoContainer>
          <p>Email: difrescoc@gmail.com</p>
          <p>Phone: 828-708-9535</p>
        </ContactInfoContainer>
      )}
      {showLoginMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          You must be logged in to view contact information.
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
