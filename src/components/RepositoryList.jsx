import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
//Aqui eu to colocando dentro de uma variavel um nome de repository, assim consigo chamar ele aonde eu quero.
//const repositoryName = 'Unform';
//Na tag strong eu uso o { } e dentro dela eu chamo a variavel que criei (repositoryName).


/* A propieade (props) funciona como se fosse o $this do php, 
nela eu consigo usar propieades que eu criei, como se fosse uma herança, onde consigo usar em outros aquivos. 
Nunca de esquece de quando for usar ela, tem que esta entre {}, pois  codigo javascript, entao fica assim;
<RepositoryItem propiedade_que_pode_ser_usada="josueh" />, isso funciona pois o componente RepositoryList e o componente pai, e o RepositoryItem  o filho.
*/


// Aqui eu to criando uma nova variavel e to atribuindo a ela um novo objeto (name, description, link).
/* const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https//github.com/unform/unform'
} */

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    //Aqui eu fiz uma chamada a uma api/url, usando o useEffect
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            //Aqui eu pego o retorno da api e transformo em json.
            .then(response => response.json())
            //Aqui eu pedo o data(que e o retorno da api), e armazeno dentro da variavel setRepositories.
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repository</h1>

            <ul>
                {repositories.map(repository => {
                    //Aqui eu to entrando dentro da variavel repositories e todando um map(percorrer todo o objeto).) 
                    //console.log(repository);
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}


            </ul>
        </section>
    )
}