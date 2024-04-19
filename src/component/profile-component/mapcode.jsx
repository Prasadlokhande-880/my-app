import React, { useState, useEffect } from "react";

function RandomLocationMap() {
  const [randomLat, setRandomLat] = useState(null);
  const [randomLng, setRandomLng] = useState(null);

  useEffect(() => {
    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to update the src attribute of the iframe with random coordinates
    function updateMapWithRandomLocation() {
      const latLngRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
      const iframeSrc =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22850.92153753926!2d72.89887431563523!3d19.12345163056503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e60c35a127%3A0x2637fcdb4b53fcbb!2sPowai%20Plaza!5e0!3m2!1sen!2sin!4v1713541890472!5m2!1sen!2sin";

      const matches = iframeSrc.match(latLngRegex);
      if (matches) {
        const minLat = parseFloat(matches[1]) - 0.5;
        const maxLat = parseFloat(matches[1]) + 0.5;
        const minLng = parseFloat(matches[2]) - 0.6;
        const maxLng = parseFloat(matches[2]) + 0.09;

        const newRandomLat = getRandomNumber(minLat, maxLat);
        const newRandomLng = getRandomNumber(minLng, maxLng);

        setRandomLat(newRandomLat);
        setRandomLng(newRandomLng);
      } else {
        // Handle case where regex match is not found
        console.error("Regex match not found in iframe source.");
      }
    }

    updateMapWithRandomLocation();
  }, []); // Run only once on component mount

  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22850.92153753926!2d${randomLng}!3d${randomLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e60c35a127%3A0x2637fcdb4b53fcbb!2sPowai%20Plaza!5e0!3m2!1sen!2sin!4v1713541890472!5m2!1sen!2sin`}
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default RandomLocationMap;
