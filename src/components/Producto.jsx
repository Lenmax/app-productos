import styles from '../../style/Producto.module.css';

const Producto = ({ codigo, descripcion, marca, precio, imagen }) => {
	return (
		<div className={`${styles.cardProducto}`}>
			<div className={`${styles.cardImagen}`}>
				<img
					className={`${styles.Imagen}`}
					src={imagen}
					alt={`Imagen ${descripcion}`}
				/>
			</div>
			<div className={`${styles.cardDetalle}`}>
				<span className={`${styles.Codigo}`}>Codigo: {codigo}</span>
				<p className={`${styles.Descripcion}`}>
					{descripcion} - <span> {marca}</span>
				</p>
				<span className={`${styles.Precio}`}>{precio}</span>
			</div>
		</div>
	);
};

export default Producto;
