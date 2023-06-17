//import * as React from 'react';
const welcome = {
 greeting: "Good Evening",
 name: "Keith",
};

const list = [
{
title: 'React',
url: 'https://reactjs.org/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://redux.js.org/',
author: 'Dan',
num_comments: 2,
points: 5,
objectID: 1,
},
];

function App() {
	return (
		<div id="main">
		<h1> {welcome.greeting} {welcome.name}</h1>
		<Search />
		<hr />
		<List />
		<hr />
		<List />
		</div>
		);
	}

function List() {
		return (
		<ul>
		{list.map(function (item)  {
			return ( 
			<li key={item.objectID}>
			<span><a href={item.url}>{item.title}</a></span> 
			<span>    points: {item.points}</span></li>
			);
			}
		)
		}
		</ul>
);
}

function Search() {
	return (
		<div>
		<label htmlFor="search">Search: </label>
		<input id="search" type="text" />
		</div>
);
}

export default App;
