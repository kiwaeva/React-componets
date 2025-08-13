const Avatar = ({ name, imageUrl, size= 50 }) => {
    return (
        <div className='avatar'>
         <img src={imageUrl} alt={name} style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'cover',
            objectPosition: 'top',
         }}
         />
         <span style= {{display: 'flex', fontWeight: "bold"}}> {name} </span>
        </div>
    );
};

export default Avatar;