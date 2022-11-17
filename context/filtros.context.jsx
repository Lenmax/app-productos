import { createContext, useContext, useState } from 'react';

const listaProductos = [];
for (let index = 0; index < 35; index++) {
	listaProductos.push({
		codigo: index + 1,
		descripcion: `Producto${index + 1}`,
		marca: `Producto${index + 1}`,
		precio: Math.random().toFixed(2) * 999,
		imagen:
			'https://realplaza.vteximg.com.br/arquivos/ids/16502762/image-eb2760b63bcf49e882bbb64ec4888252.jpg?v=637540366718200000',
	});
}

export const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
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
	console.log(filtoProductos.length);
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
