// import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import Dogs from 'pages/Dogs';
// import DogDetails from 'pages/DogDetails';
// import { Layout } from './Layout';
// import { Gallery } from './Gallery';
// import { SubBreeds } from './SubBreeds';

// export const App = () => {
//   return (
//     // оголошуємо Routes де вкладені маршрути
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="dogs" element={<Dogs />} />
//         <Route path="dogs/:dogId" element={<DogDetails />}>
//           <Route path="subbreeds" element={<SubBreeds />} />
//           <Route path="gallery" element={<Gallery />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };



// ================================================
// початок

// // при кожному новому оголошнню тега заносимо його
// // в 'react-router-dom' тільки ті які будуть стилізуватися
// import { Routes, Route, NavLink } from 'react-router-dom';

// export const App = () => {
//   return <div>
//     <nav>
//       {/* тут буде стилізація NavLink*/}
//       {/* вказуємо шлях до наших сторінок to="/" -> path="/" */}
//       {/* при натисканні на лінкі вибираємо той чи інший Route */}
//       <NavLink to="/">Домашня</NavLink>
//       <NavLink to="/dogs">Колекція</NavLink>
//     </nav>
//     {/* // оголошуємо Routes де вкладені маршрути */}
//     <Routes>
//       {/* маршрут path="/" - це домашмя сторінка
//       і елемент це дів з назвою сторінкі */}
//        <Route path="/" element={<div>Home page</div>}></Route>
//        <Route path="/dogs" element={<div>Колекція</div>}></Route>
//     </Routes>
//   </div>
// };



// ===========================================

// можна обгорнути і в ul i li


// // при кожному новому оголошнню тега заносимо його
// // в 'react-router-dom' тільки ті які будуть стилізуватися
// import { Routes, Route, NavLink } from 'react-router-dom';

// export const App = () => {
//   return <div>
//     <ul>
//       <li>
//         {/* тут буде стилізація NavLink*/}
//         {/* вказуємо шлях до наших сторінок to="/" -> path="/" */}
//         {/* при натисканні на лінкі вибираємо той чи інший Route */}
//         <NavLink to="/">Домашня</NavLink>
//       </li>
//       <li>
//         <NavLink to="/dogs">Колекція</NavLink>
//       </li>  
//     </ul>
//     {/* // оголошуємо Routes де вкладені маршрути */}
//     <Routes>
//       {/* маршрут path="/" - це домашмя сторінка
//       і елемент це дів з назвою сторінкі */}
//       <Route path="/" element={<div>Home page</div>}></Route>
//       <Route path="/dogs" element={<div>Колекція</div>}></Route>
//       {/* сторінка одного елементу */}
//       <Route path="/dogs/:dogId" element={<div>Елемент колекція</div>}></Route>
//     </Routes>
//   </div>
// };





// ================================================

// // робимо сторінки в Pages Home.js, Dogs.js,DogDetails.js
// // при кожному новому оголошнню тега заносимо його
// // в 'react-router-dom' тільки ті які будуть стилізуватися
// import { Routes, Route, NavLink } from 'react-router-dom';
// // імпотуємо наш Home
// import Home from 'pages/Home';
// import Dogs from 'pages/Dogs';
// import DogDetails from 'pages/DogDetails';



// export const App = () => {
//   return <div>
//     <ul>
//       <li>
//         {/* тут буде стилізація NavLink*/}
//         {/* вказуємо шлях до наших сторінок to="/" -> path="/" */}
//         {/* при натисканні на лінкі вибираємо той чи інший Route */}
//         <NavLink to="/">Домашня</NavLink>
//       </li>
//       <li>
//         <NavLink to="/dogs">Колекція</NavLink>
//       </li>  
//     </ul>
//     {/* // оголошуємо Routes де вкладені маршрути */}
//     <Routes>
//       {/* маршрут path="/" - це домашмя сторінка
//       і елемент це дів з назвою сторінкі */}
//       {/* тепер тут посилання на сторінку */}
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/dogs" element={<Dogs/>}></Route>
//       {/* сторінка одного елементу */}
//       <Route path="/dogs/:dogId" element={<DogDetails/>}></Route>
//     </Routes>
//   </div>
// };




// =========================================================


// За допомогою Layout роєбиваємо на дві частини 
//  Верхня сторінка і нижня -компоненти



// робимо сторінки в Pages Home.js, Dogs.js,DogDetails.js
// при кожному новому оголошнню тега заносимо його
// в 'react-router-dom' тільки ті які будуть стилізуватися
import { Routes, Route } from 'react-router-dom';
// імпотуємо наш Home
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
import { Layout } from './Layout';
import { Gallery } from './Gallery';
import { SubBreeds } from './SubBreeds';



export const App = () => {
  return (
    // /*та розмітка що була виносимо в лояут  */
    
    // оголошуємо Routes де вкладені маршрути */
    <Routes>
      {/* на path="/" хочемо рендерити element={<Layout/>}*/}
      <Route path="/" element={<Layout/>}>
        {/* тепер нам -/- не потрібен так як шляхи відносні */}
        {/* а тут ми ставимо index що говорить про той самий шлях що і в батьків */}
        <Route index element={<Home/>}/>
        <Route path="dogs" element={<Dogs/>}/>
        {/* сторінка одного елементу */}
        <Route path="dogs/:dogId" element={<DogDetails />}>
          {/* робимо ще одне вкладення з DogDetails.js 
          з відносним шляхом*/}
          <Route path="subbreeds" element={<SubBreeds />}/>
          <Route path="gallery" element={<Gallery />} />
        </Route>  
      </Route>  
    </Routes>
  );
};