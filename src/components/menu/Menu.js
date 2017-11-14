import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'
import data from './menu.json'

class Menu extends Component {
	render(){
		return(
			<div className="Menu">
		  	<ul className="Menu--lu">
					{data.map((menu) => {
						return (
							<div>
								<li key={menu.id} className="Menu--li--header"><span>{menu.category}</span></li>
								{menu.items.map((items) =>
									<li key={menu.id}>
						      		<Link to={items.link}>
						      			<i className={`${items.icon} Menu--glyph-icon`} aria-hidden="true"></i>
					         			<span>{items.title}</span>
						       		</Link>
				         	</li>
								)}
							</div>
						)
					})}
		    </ul>
		  </div>
		)
	}
}

export default Menu
