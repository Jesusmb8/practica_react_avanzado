import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { deleteAdvert } from './service';
import './Advert.css';
import { useSelector } from 'react-redux';
import { getAdvert } from '../../store/selectors';

function AdvertsPage() {
  const params = useParams();
  const navigate = useNavigate();
  // const [advert, setAdvert] = useState([]);
  const advert = useSelector(getAdvert(params.advertId));

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const advertDetail = await getAdvert(params.advertId);
  //       setAdvert(advertDetail);
  //     } catch (error) {
  //       if (error.status === 404) {
  //         return navigate('/404');
  //       }
  //     }
  //   }
  //   getData();
  // }, [navigate, params]);

  const handleDelete = async () => {
    if (window.confirm('¿Está seguro de eliminar el anuncio?')) {
      try {
        await deleteAdvert(params.advertId);
        navigate('/adverts');
      } catch (error) {
        navigate('/404');
      }
    }
  };

  let color = advert?.sale ? 'color-green' : 'color-blue';
  return (
    <Layout>
      <h1>Detalle de anuncio</h1>
      {advert && (
        <>
          <img className='img-detail' src={advert.photo} alt='Imagen del anuncio' />
          <p className='title'>{advert.name}</p>
          <p className='price'>{advert.price}€</p>
          <p className={color}>{advert.sale ? 'Se vende' : 'Se compra'}</p>
          <div>{advert.tags && advert.tags.map((tag) => <span className='tag'> {tag} </span>)}</div>
          <button onClick={handleDelete}> Pulse para eliminar el anuncio</button>
        </>
      )}
    </Layout>
  );
}

export default AdvertsPage;
