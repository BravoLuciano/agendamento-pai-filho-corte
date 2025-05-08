
import React, { useEffect, useRef } from 'react';

const LocationMap = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
      <iframe
        ref={mapRef}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9630598830824!2d-47.34772722467819!3d-22.841708636434507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89be305232e15%3A0xbdfcc39a9fe3b7b7!2sR.%20Alfredo%20Spindola%20de%20Melo%2C%20265%20-%20Parque%20Gramado%2C%20Americana%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715180280639!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Barbearia Pai e Filho"
      ></iframe>
    </div>
  );
};

export default LocationMap;
