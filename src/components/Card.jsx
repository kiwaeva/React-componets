import '../index.css';

const Card = ({title, image, description}) => {
    return(
        <div className='card'>
            <img src={image} alt={title}/>
            <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
            <p style={{ margin: 0 }}>{description}</p>
        </div>
    );
};

export default Card;