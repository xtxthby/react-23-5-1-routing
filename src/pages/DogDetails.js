import { Link, Outlet, useParams } from 'react-router-dom';

const DogDetails = () => {
  // нам потрібні для карточки параметри
  //  де ми витягуємо значення { dogId }
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно подивитись на цю
  // собачку і якщо користувач зайшов з нової вкладки
  // }, [])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          {/* слеш ставити не потрібно бо використовуємо 
          відносний шлях http://localhost:3000/dogs/dog-4 
          далі він сам поставить /subbreeds */}
          <Link to="subbreeds">Різновид породи собаки</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      {/* тут знов рендеремо знизу 
      вкладеність Outlet відносно батьків  */}
      <Outlet />
    </>
  );
};

export default DogDetails;
