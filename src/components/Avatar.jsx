const Avatar = ({ name, imageUrl, size= 50 }) => {
    return (
        <div>
         <img src={imageUrl} alt={name} style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'contain',
         }}
         />
         <span style= {{display: 'block', fontWeight: "bold"}}> {name} </span>
        </div>
    );
};

export default Avatar;