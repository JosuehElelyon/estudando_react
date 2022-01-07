//Aqui eu to colocando dentro de uma variavel um nome de repository, assim consigo chamar ele aonde eu quero.
const repositoryName = 'Unform';
//Na tag strong eu uso o { } e dentro dela eu chamo a variavel que criei (repositoryName).

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repository</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repository
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repository
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repository
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar Repository
                    </a>
                </li>
            </ul>
        </section>
    )
}