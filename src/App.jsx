import { FiltrosProvider } from '../context/filtros.context';
import FiltroPrecio from './components/FiltroPrecio';
import ListaProductos from './components/ListaProductos';
import OrdenarPrecio from './components/OrdenarPrecio';
import Paginacion from './components/Paginacion';
import styles from '../style/App.module.css';

function App() {
	return (
		<div className={styles.mainContainer}>
			<FiltrosProvider>
				<h1 className={`${styles.textCenter} ${styles.wFull}`}>
					Lista de Productos
				</h1>
				<FiltroPrecio />
				<OrdenarPrecio />
				<ListaProductos />
				<Paginacion />
			</FiltrosProvider>
		</div>
	);
}

export default App;
