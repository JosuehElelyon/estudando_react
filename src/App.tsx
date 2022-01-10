import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {

    //Aqui eu chamo os meus components criados, na pasta components.
    return (
        <>
            <RepositoryList />
        </>
    );

}