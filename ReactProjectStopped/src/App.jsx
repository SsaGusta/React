//link aula https://www.youtube.com/watch?v=2RWsLmu8yVc&t=237s

import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá, Mundo!");

  //States (Estado)
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
