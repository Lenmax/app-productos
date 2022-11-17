import { createContext, useContext, useEffect, useState } from 'react';

const datosPruebaLocal = () => {
	const listaProductos = [];
	for (let index = 0; index < 35; index++) {
		listaProductos.push({
			codigo: index + 1,
			descripcion: `Producto${index + 1}`,
			marca: `Producto${index + 1}`,
			precio: Math.random().toFixed(2) * 999,
			imagen: 'img_aplicacion_sin_imagen.jpg',
		});
	}
	return listaProductos;
};

export const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
	const [listaProductos, setlistaProductos] = useState([]);
	const [minimoPrecio, setminimoPrecio] = useState(0);
	const [maximoPrecio, setmaximoPrecio] = useState(9999);
	const [ordenPrecioDecendente, setordenPrecioDecendente] = useState(true);

	const [paginaActual, setpaginaActual] = useState(1);
	const [productosPorPagina] = useState(5);
	const indexUltimoProducto = paginaActual * productosPorPagina;
	const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
	const actualizarPagina = (nroPagina) => setpaginaActual(nroPagina);

	const filtoProductos = listaProductos
		.sort((a, b) =>
			ordenPrecioDecendente ? a.precio - b.precio : b.precio - a.precio
		)
		.filter(
			(item) => item.precio >= minimoPrecio && item.precio <= maximoPrecio
		);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('http://localhost:5178/api/Productos');
				console.log(res);
				if (res.ok) {
					const data = await res.json();
					setlistaProductos(data);
				}
				setlistaProductos(datosPruebaLocal());
			} catch (error) {
				setlistaProductos(datosPruebaLocal());
			}
		};
		fetchPosts();
	}, []);

	return (
		<FiltrosContext.Provider
			value={{
				minimoPrecio,
				setminimoPrecio,
				maximoPrecio,
				setmaximoPrecio,
				ordenPrecioDecendente,
				setordenPrecioDecendente,
				filtoProductos,
				productosPorPagina,
				indexPrimerProducto,
				indexUltimoProducto,
				actualizarPagina,
			}}
		>
			{children}
		</FiltrosContext.Provider>
	);
};

export const useFiltrosContext = () => {
	const context = useContext(FiltrosContext);
	if (context === undefined)
		throw new Error('FiltrosContext se debe usar dentro de un FiltrosProvider');

	return context;
};
