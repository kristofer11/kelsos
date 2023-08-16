import React from 'react';

const MapComponent = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.1843686218845!2d-122.09181732335915!3d47.913469971219655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa9b3b0bce01b%3A0x1a6c3a3ffd2ee532!2s216%20Maple%20Ave%2C%20Snohomish%2C%20WA%2098290!5e0!3m2!1sen!2sus!4v1692147078904!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='mapIframe'
      ></iframe>
    </div>
  );
};

export default MapComponent;
