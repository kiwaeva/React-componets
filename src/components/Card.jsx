const Card = ({title, image, description, size=200}) => {
    return(
        <div style={{
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center", // <-- center title & description
            backgroundColor: "#fff"
          }}>
            <img src={image} alt={title} style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "8px",
            marginBottom: "12px",
            }}/>
            <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
            <p style={{ margin: 0 }}>{description}</p>
        </div>
    )
}

export default Card;