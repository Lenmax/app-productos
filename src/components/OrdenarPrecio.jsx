import { useFiltrosContext } from '../../context/filtros.context';
const OrdenarPrecio = () => {
	const { ordenPrecioDecendente, setordenPrecioDecendente } =
		useFiltrosContext();
	return (
		<div>
			<button
				style={{}}
				onClick={() => setordenPrecioDecendente(!ordenPrecioDecendente)}
			>
				Ordenar por Precios mas {ordenPrecioDecendente ? 'alto' : 'bajo'}
			</button>
		</div>
	);
};

export default OrdenarPrecio;
