import Producto from './Producto';
import { useFiltrosContext } from '../../context/filtros.context';

const ListaProductos = () => {
	const { filtoProductos, indexPrimerProducto, indexUltimoProducto } =
		useFiltrosContext();
	return (
		<div style={{ width: '100%', padding: '0.5rem 0rem' }}>
			{filtoProductos.length > 0 ? (
				filtoProductos
					.slice(indexPrimerProducto, indexUltimoProducto)
					.map((item) => <Producto key={item.codigo} {...item} />)
			) : (
				<span>...</span>
			)}
		</div>
	);
};

export default ListaProductos;
