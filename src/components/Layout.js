
// тут передамо NavLink, Outlet з розмітки
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

// localhost:3000/
//localhost:3000/dogs
//localhost:3000/dogs/dog-5
//  Layout - переклвдається як макет
export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Домашняя</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Коллекция</StyledLink>
          </li>
        </ul>
      </header>
      {/* тут ми вказуємо куди ми хочемо рендерити Layout з Арр */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
