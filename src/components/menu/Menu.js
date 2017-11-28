import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'
import data from './menu.json'

class Menu extends Component {
	render(){
		return(
			<div className="Menu">
		  	<ul className="Menu--lu">
					{
						data.map( menu  => (
							<div key={menu.id} >
								<li className="Menu--li--header"><span>{menu.category}</span></li>
								{
									menu.items.map( submenu =>
									<li key={submenu.id}>
						      		<Link to={submenu.link}>
						      			<i className={`${submenu.icon} Menu--glyph-icon`} aria-hidden="true"></i>
					         			<span>{submenu.title}</span>
						       		</Link>
				         	</li>
								)
							}
							</div>
						)
					)
				}
		    </ul>
		  </div>
		)
	}
}

export default Menu
