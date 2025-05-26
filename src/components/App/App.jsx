import favBooks from "../../assets/favBooks.json";
import BookList from "../BookList/BookList";
import Card from "../Card/Card";
import Product from "../Product/Product";
import { DiAndroid } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
// import Mailbox from "../Mailbox/Mailbox";

export default function App() {
  return (
    // <div>
    //   <h1>Best selling</h1>

    //   <Product name="Tacos With Lime" price={10.99} />
    //   <Product
    //     name="Fries and Burger"
    //     imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
    //     price={14.29}
    //   />
    //   {/* <Mailbox username="Oleksii" messages="" /> */}
    // </div>
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
      {/* <Card text="Message as a text prop" /> */}
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
        <p>
          <DiAndroid size={35} />
          <DiDatabase size={35} />
          react-icons
        </p>
      </Card>
    </>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
