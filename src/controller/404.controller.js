import view from '../views/404.html';

export default () => {
	const divELement = document.createElement('div');
	divELement.innerHTML = view;

	return divELement;
}