/* A propieade (props) funciona como se fosse o $this do php, 
nela eu consigo usar propieades que eu criei, como se fosse uma herança, onde consigo usar em outros aquivos. 
Nunca de esquece de quando for usar ela, tem que esta entre {}, pois  codigo javascript, entao fica assim;
<strong>{props.propiedade_que_pode_ser_usada}</strong>, isso funciona pois o componente RepositoryList e o componente pai, e o RepositoryItem  o filho.
*/

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    };
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>


            <a href={props.repository.html_url}>
                Acessar Repository
            </a>
        </li>
    );
}