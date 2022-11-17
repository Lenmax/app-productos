import { useFiltrosContext } from '../../context/filtros.context';
import styles from '../../style/OrdenarPrecio.module.css';
const OrdenarPrecio = () => {
	const { ordenPrecioDecendente, setordenPrecioDecendente } =
		useFiltrosContext();
	return (
		<div className={`${styles.container}`}>
			<button
				className={`${styles.btnOrdenar}`}
				onClick={() => setordenPrecioDecendente(!ordenPrecioDecendente)}
			>
				Ordenar por Precios mas {ordenPrecioDecendente ? 'alto' : 'bajo'}
			</button>
		</div>
	);
};

export default OrdenarPrecio;
