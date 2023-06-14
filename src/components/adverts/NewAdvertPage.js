import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { advertCreate } from '../../store/actions';
import Layout from '../layout/Layout';
import { getTags } from './service';

const NewAdvertPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const [advert, setAdvert] = useState({
    name: '',
    sale: false,
    price: 0.001,
    tags: [],
  });
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const tagsQuery = await getTags();
        setTags(tagsQuery);
      } catch (error) {}
      setIsLoading(false);
    }
    getData();
  }, []);
  const handleChange = (event) => {
    setAdvert({
      ...advert,
      [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value,
    });
  };
  const handleChangeSelect = (event) => {
    setAdvert({
      ...advert,
      tags: Object.values(event.target.selectedOptions).map((opt) => opt.value),
    });
  };

  const buttonEnabled = advert.name && advert.price && advert.tags;
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    let body = new FormData();
    Object.entries(advert).forEach(([key, value]) => {
      body.append(key, value);
    });
    const advertResponse = await dispatch(advertCreate(body));
    setIsLoading(false);

    navigate(`/adverts/${advertResponse.id}`);
  };
  return (
    <Layout>
      {isLoading && <div>Cargando...!</div>}
      {!isLoading && (
        <>
          <h2>New Advert Page</h2>
          <form onSubmit={handleSubmit}>
            <div className='element-form'>
              <label for='name'> Nombre</label>
              <input type='text' id='name' name='name' required onChange={handleChange} value={advert.name} />
            </div>
            <div className='element-form'>
              <label for='sale'> Se vende?</label>
              <input type='checkbox' id='sale' name='sale' onChange={handleChange} value={advert.sale} />
            </div>
            <div className='element-form'>
              <label for='price'> Precio</label>
              <input type='numeric' id='price' name='price' required onChange={handleChange} value={advert.price} />
            </div>
            <div className='element-form'>
              <label for='tags'>Tags</label>
              <select name='tags' id='tags' required multiple onChange={handleChangeSelect} value={advert.tag}>
                <option value=''> </option>
                {tags.map((tag) => {
                  return <option value={tag}>{tag} </option>;
                })}
              </select>
            </div>
            <div className='element-form'>
              <label for='photo'>Foto</label>
              <input type='file' id='photo' name='photo' onChange={handleChange} />
            </div>
            <div className='element-form'>
              <button type='submit' disabled={!buttonEnabled}>
                Crear anuncio
              </button>
            </div>
          </form>
        </>
      )}
    </Layout>
  );
};

export default NewAdvertPage;
