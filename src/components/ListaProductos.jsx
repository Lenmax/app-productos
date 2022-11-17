import Producto from './Producto';
import { useFiltrosContext } from '../../context/filtros.context';

const ListaProductos = () => {
	const { filtoProductos, indexPrimerProducto, indexUltimoProducto } =
		useFiltrosContext();

	return (
		<div style={{}}>
			{filtoProductos
				.slice(indexPrimerProducto, indexUltimoProducto)
				.map((item) => (
					<Producto key={item.codigo} {...item} />
				))}
		</div>
	);
};

export default ListaProductos;
