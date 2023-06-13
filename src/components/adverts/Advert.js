import './Advert.css';

const Advert = ({ price, name, sale, tags, photo }) => {
  let color = sale ? 'color-green' : 'color-blue';
  return (
    <div className='advert'>
      <p style={{ textAlign: 'center' }}>
        <img className='anuncio' src={photo} alt='Imagen del anuncio' />
      </p>

      <p className='title'>{name}</p>
      <p className='price'>{price} € </p>
      <p className={color}>{sale ? 'Se vende' : 'Se compra'}</p>
      <div>
        {tags.map((tag) => (
          <span className='tag'> {tag} </span>
        ))}
      </div>
    </div>
  );
};

export default Advert;
