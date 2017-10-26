import React, { Component } from 'react';
import './Menu.css'
import data from '../../api/menu.json'

class Menu extends Component {
	render(){
		return(
		<div className="Menu">
	        <ul className="Menu--lu">
				{data.map((menu,i) => {
					return (
						<div>
							<li key={i} className="Menu--li--header"><span>{menu.category}</span></li>
							{menu.items.map((items,i) =>
								<li>
					            	<a href="/">
					            		<i className={`${items.icon} Menu--glyph-icon`} aria-hidden="true"></i>
					            		<span>{items.title}</span>
					            	</a>
					           	</li>
							)}
						</div>
					)
				})}
	        </ul>
	    </div>
	)}
}

export default Menu