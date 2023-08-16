import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { useRef } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import useScrollSnap from './useScrollSnap';
import './style.css';

function App() {
	const [result, setResult] = useState('');
	const containerRef = React.createRef();

	const [bind, unbind] = useScrollSnap(
		containerRef,
		{ snapDestinationY: '90%' },
		() => console.log('snapped')
	);
	// useEffect(() => {
	// 	const openai = new OpenAIApi(
	// 		new Configuration({
	// 			apiKey: process.env.REACT_APP_API_KEY,
	// 		})
	// 	);

	// 	openai
	// 		.createChatCompletion({
	// 			model: 'gpt-3.5-turbo',
	// 			messages: [
	// 				{
	// 					role: 'user',
	// 					content: 'Hello ChatGpt',
	// 				},
	// 			],
	// 		})
	// 		.then((res) => {
	// 			console.log(res.data.choices[0].message.content);
	// 			setResult(res.data.choices[0].message.content);
	// 		});
	// }, []);

	return (
		<div id='container' ref={containerRef}>
			<div className='page first-page'>
				<div>I</div>
				<div className='hint'>scroll down</div>
			</div>
			<div className='page second-page'>
				<div>II</div>
			</div>
			<div className='page third-page'>
				<div>III</div>
			</div>
			<div className='page fourth-page'>
				<div>IV</div>
				<div className='hint'>scroll up</div>
			</div>
		</div>
	);
}

export default App;
