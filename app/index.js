const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
require('./styles.css');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);