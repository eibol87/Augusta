import React from 'react';
import './Menu.css'
import data from '../../api/menu.json'
//specify the base color/background of the parent container if needed
data.forEach(dato => console.log(dato))
const Menu = () => (
    <div className="Menu">
        <ul className="Menu--lu">
            <li className="Menu--li--header"><span>ALTAS</span></li>
            <li>
            	<a href="/">
            		<i className="fa fa-archive Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Articulos</span>
            	</a>
           	</li>
            <li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Clientes</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-usd Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Cobros</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Complentos</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-money Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Pagos</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-tree Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Proveedores</span>
            	</a>
           	</li>
           	<li className="Menu--li--header"><span>Stock</span></li>
            <li>
            	<a href="/">
            		<i className="fa fa-sign-in Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Entradas</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-search Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Buscar</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Finalizar</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Salidas</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Facturar</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Lista Facturas</span>
            	</a>
           	</li>
           	<li className="Menu--li--header"><span>Listados</span></li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Por dias de salida</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-address-book-o Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Prendas en Stock</span>
            	</a>
           	</li>
           	<li>
            	<a href="/">
            		<i className="fa fa-star Menu--glyph-icon" aria-hidden="true"></i>
            		<span>Top Ten</span>
            	</a>
           	</li>
        </ul>
    </div>
)

export default Menu