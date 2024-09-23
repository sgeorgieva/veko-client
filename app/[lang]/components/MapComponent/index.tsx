"use client";

const MapComponent = ({ hrefLink }: any) => {
  return (
    <div className="w-full">
      <iframe
        width="600"
        height="350"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={hrefLink}
      />
    </div>
  );
};

export { MapComponent };
