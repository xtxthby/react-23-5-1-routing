import { Link } from 'react-router-dom';

const Dogs = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
        return (
          // обгортаємо все в лінк для того щоб мати колекцію лішек
          // з собачками кожна окрема 
          // далі до шляху к собачкі пишемо що додати to={`${dog}`}
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
