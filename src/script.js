import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

// import router
import {router} from './router/index.router.js';

router(window.location.hash);

// script 
window.addEventListener('hashchange', () =>{
	router(window.location.hash);
});