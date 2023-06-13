import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { getAdverts } from './service';
import { Link } from 'react-router-dom';
import Advert from './Advert';
import { connect } from 'react-redux';
import { getAdvertisements } from '../../store/selectors';
import { advertisementsLoaded } from '../../store/actions';

const AdvertsPage = ({ advertisements, onAdvertisementsLoaded }) => {
  const [filterName, setFilterName] = useState('');
  const [filterType, setFilterType] = useState('todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const advertsResponse = await getAdverts();
      onAdvertisementsLoaded(advertsResponse);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  let filteredAdverts = advertisements.filter((advert) =>
    (advert.name ?? '').toUpperCase().includes(filterName.toUpperCase())
  );
  if (filterType !== 'todos') {
    const isSale = filterType === 'sale';
    filteredAdverts = filteredAdverts.filter((advert) => advert.sale === isSale);
  }

  return (
    <Layout>
      <h1>Anuncios </h1>
      {isLoading && <div>Cargando...!</div>}
      {!isLoading && (
        <>
          <div className='element-form'>
            <label for='filterName'>Filtrar por nombre</label>
            <input
              id='filterName'
              type='text'
              onChange={(event) => setFilterName(event.target.value)}
              value={filterName}
            />
          </div>
          <div className='element-form'>
            <fieldset>
              <legend>Tipo de artículo</legend>
              <div>
                <input
                  type='radio'
                  id='todos'
                  name='todos'
                  value='todos'
                  checked={filterType === 'todos'}
                  onChange={(event) => setFilterType(event.target.value)}
                />
                <label for='todos'>Todos</label>
              </div>

              <div>
                <input
                  type='radio'
                  id='sale'
                  name='sale'
                  value='sale'
                  checked={filterType === 'sale'}
                  onChange={(event) => setFilterType(event.target.value)}
                />
                <label for='sale'>Venta</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='purchase'
                  name='purchase'
                  value='purchase'
                  checked={filterType === 'purchase'}
                  onChange={(event) => setFilterType(event.target.value)}
                />
                <label for='purchase'>Compra</label>
              </div>
            </fieldset>
          </div>
          <ul>
            {filteredAdverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  advertisements: getAdvertisements(state),
});
const mapDispatchToProps = (dispatch) => ({
  onAdvertisementsLoaded: (advertisements) => dispatch(advertisementsLoaded(advertisements)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvertsPage);
