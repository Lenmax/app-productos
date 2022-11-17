import { useFiltrosContext } from '../../context/filtros.context';

const Paginacion = () => {
	const { filtoProductos, productosPorPagina, actualizarPagina } =
		useFiltrosContext();
	const nroPagina = [];
	for (
		let i = 1;
		i <= Math.ceil(filtoProductos.length / productosPorPagina);
		i++
	) {
		nroPagina.push(i);
	}
	return (
		<div>
			<nav>
				<ul>
					{nroPagina.map((number) => (
						<li key={number}>
							<a onClick={() => actualizarPagina(number)} href='#'>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Paginacion;
