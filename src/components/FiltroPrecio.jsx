import { useFiltrosContext } from '../../context/filtros.context';
import styles from '../../style/FiltroPrecio.module.css';

const FiltroPrecio = () => {
	const { minimoPrecio, setminimoPrecio, maximoPrecio, setmaximoPrecio } =
		useFiltrosContext();
	return (
		<div className={`${styles.container}`}>
			<h3>Filtro por Precio</h3>
			<label htmlFor='inpDesde'>Desde: </label>
			<input
				style={{}}
				placeholder='desde'
				id='inpDesde'
				type={'number'}
				value={minimoPrecio}
				onChange={(e) => setminimoPrecio(e.target.value)}
			></input>
			<label htmlFor='inpHasta'>hasta</label>
			<input
				placeholder='hasta'
				id='inpHasta'
				type={'number'}
				value={maximoPrecio}
				onChange={(e) => setmaximoPrecio(e.target.value)}
			></input>
		</div>
	);
};

export default FiltroPrecio;
