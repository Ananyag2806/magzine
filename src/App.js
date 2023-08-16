import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { useRef } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import useScrollSnap from './useScrollSnap';
import './style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@material-ui/core/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
	root: {
		display: 'grid',
	},
	left: {
		width: '40%',
		overflow: 'scroll',
	},
	right: {
		width: '60%',
	},
	scroll: {
		display: 'block',
	},
});

function App() {
	const classes = useStyles();

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
				<div className={classes.left}>
					<div className={classes.scroll}>
						akjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdl
					</div>
				</div>
				<div className={classes.right}>
					<div className={classes.scroll}>
						oaishlaksdhakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlfkjhoisdfkjahdf
					</div>
				</div>
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
