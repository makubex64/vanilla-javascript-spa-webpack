import Home from './home.controller'
import Posts from './post.controller'
import notFound from './404.controller'

const pages = {
	home: Home,
	posts: Posts,
	notFound: notFound
}
export {pages};