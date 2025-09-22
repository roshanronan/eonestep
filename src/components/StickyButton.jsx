import { useState } from "react";

const StickyButton = ({
  content,
  imageSrc,
  bgColor,
  top = "50%",
  type = "whatsapp", // 'whatsapp' or 'email'
  textColor = "white",
  hoverWidth = 270,
  whatsappNo = 0,
  defaultMessage = "Hello, I want to know more!",
  emailAddress = "",
  emailSubject = "Inquiry",
  emailBody = "Hello, I would like to know more about your services."
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (type === 'whatsapp' && whatsappNo) {
      const message = encodeURIComponent(
        defaultMessage 
      );
      window.open(`https://wa.me/${whatsappNo}?text=${message}`, "_blank");
    }

     if (type === 'email' && emailAddress) {
      const subject = encodeURIComponent(emailSubject || "Inquiry");
      const body = encodeURIComponent(emailBody || "Hello, I would like to know more about your services.");
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, "_blank");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: top,
        right: 0,
        zIndex: 9999,
        transition: "width 0.3s",
        width: hovered ? hoverWidth : 44,
        height: 44,
        background: bgColor,
        borderRadius: "22px 0 0 22px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={content}
        style={{ width: 32, height: 32, margin: "0 6px" }}
      />
      <span
        style={{
          color: textColor,
          fontWeight: 600,
          fontSize: 16,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          whiteSpace: "nowrap",
          marginLeft: 8,
        }}
      >
        {content}
      </span>
    </div>
  );
};

export default StickyButton;
