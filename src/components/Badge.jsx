import { useState } from "react";
import mailIcon from './images/mail.svg'

const Badge = ({
  label,
  color = "gray",
  icon = null,
  dismissible = false,
  showIcon = false 
}) => {
  const [visible, setVisible] = useState(true);

  const styles = {
    container: {
      backgroundColor: color,
      color: "#fff",
      padding: "4px 10px",
      fontSize: "12px",
      borderRadius: "12px",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontWeight: "bold",
      minWidth: "30px",
      justifyContent:"center",
    },
    icon: {
      fontSize: "14px",
    },
    close: {
      marginLeft: "6px",
      padding: "15px 0",
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: "14px",
      lineHeight: "0",
    },
  };

  if (!visible) return null;

  return (
    <span style={styles.container}>
      {icon && <span style={styles.icon}>{icon}</span>}
      {/* Conditionally show the icon only when showIcon is true */}
      {showIcon && (
        <img src={mailIcon} alt="" style={{ width: "14px", height: "14px" }} />
      )}
      {label}
      {dismissible && (
        <button style={styles.close} onClick={() => setVisible(false)}>
          ×
        </button>
      )}
    </span>
  );
};

export default Badge;
