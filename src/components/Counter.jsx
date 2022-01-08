//Aqui estou estudando o ESTADO do REACT, ou seja, o que eu tenho em memoria, eu posso usar o estado para fazer alguma coisa, como mudar o valor de uma variavel, ou seja, o estado do meu componente.
// Sao variavei que quando forem auteradas na minha aplicaçao, vao refletir nas auteraçoes da interface.

//Quando a funçao começar com o use ela se chama hook (gancho), eu posso usar o useState para criar uma variavel, eu posso usar o useEffect para fazer algo quando a pagina carregar.

import { useState } from "react";


export function Counter() {
    //A variavel eu dividi em dois, pois vai ter dois retornos, e pra dividir eu usei o array, por isso que esta assim const [counter, setCounter].
    // No caso deu quere mudar o valor de counter eu posso usar o setCounter.
    const [counter, setCounter] = useState(0);


    function increment() {
        // No caso deu quere mudar o valor de counter eu posso usar o setCounter.
        //em resumo aqui eu to falando o seguinte, se eu quiser mudar o valor de counter eu posso usar o setCounter, fazendo assim setCounter(counter + 1);
        setCounter(counter + 1);

    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}