// import { useEffect, useState } from "react";
import "./App.css";
import Form from "./crud/from";
import Navbar from "./crud/navbar";
// import Home from "./components/home";
// import Introduction from "./components/introduction";
// import Profile from "./components/profile";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Form />
      </>
    </div>
  );
}

// function App() {
// const [pacarSaya, setPacarSaya] = useState(0);
// const [namaPacar, setNamaPacar] = useState("");

// useEffect(() => {
//   if (pacarSaya === 0) {
//     setNamaPacar("Anda Jomblo");
//   } else if (pacarSaya === 1) {
//     setNamaPacar("Rania");
//   } else {
//     setNamaPacar("Buaya lu");
//   }
// }, [pacarSaya]);

//   return (
//     <div>
//       {/* <h4>nama pacar: {namaPacar}</h4>
//       <h1>saya memiliki: {pacarSaya} pacar</h1>
//       <button onClick={() => setPacarSaya((prev) => prev + 1)}>
//         Tambah Pacar
//       </button>
//       <button onClick={() => setPacarSaya((prev) => prev - 1)}>
//         Putus Pacar
//       </button> */}

//       {/* <Profile />
//       <Introduction nama="Muhammad Tabrizt" />
//       <Introduction nama="Nadia Luthmila Maulida" /> */}
//     </div>
//   );
// }

export default App;
