import {pages} from '../controller/index';


let content = document.getElementById('root');
// ruta
const router = async (route) =>{

	content.innerHTML = '';
	switch (route) {
		case '#/':{
			return content.appendChild(pages.home());
		}
			
		case '#/posts':
			return content.appendChild(await pages.posts());

		case '#/products': 
			return console.log('products');

		default:
			return content.appendChild(pages.notFound());
	}

}
export {router};