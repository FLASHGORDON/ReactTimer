var React = require("react");
var ReactDOM = require("react-dom");
var {Route,Router,IndexRoute,hashHistory} = require("react-router");
var Main = require("./component/Main.jsx");

//load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
// require('style-loader!css-loader!sass-loader!../styles/app.scss')
$(document).foundation();
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('template')
);
