const Producto = ({ codigo, descripcion, marca, precio, imagen }) => {
	return (
		<div style={{ padding: '0.5rem' }}>
			{codigo}
			<br />
			{descripcion}
			<br />
			{marca}
			<br />
			{precio}
			<br />
			{imagen}
		</div>
	);
};

export default Producto;
