import { useFiltrosContext } from '../../context/filtros.context';
import styles from '../../style/Paginacion.module.css';

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
		<>
			<nav className={`${styles.container}`}>
				<ul className={`${styles.paginacionBotones}`}>
					{nroPagina.map((number) => (
						<li key={number}>
							<a
								className={`${styles.paginationBoton}`}
								onClick={() => actualizarPagina(number)}
								href='#'
							>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Paginacion;
