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
import image from './img/1.jpg';
import image2 from './img/2.jpg';

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
	hero: {
		backgroundColor: 'black',
		position: 'relative',
		overflow: 'hidden',
	},
	left: {
		width: '40%',
		overflowY: 'hidden',
		whiteSpace: 'normal',
		wordWrap: 'break-word',
		height: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	right: {
		width: '60%',
		overflowY: 'auto',
		whiteSpace: 'normal',
		wordWrap: 'break-word',
	},
	image: {
		opacity: '0.5',
		objectFit: 'cover',
		width: '100%',
		height: '100%',
	},

	header: {
		fontSize: '80px',
		color: 'white',
		textAlign: 'center',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: 'fit-content',
		margin: 'auto',
	},
});

function View() {
	const classes = useStyles();

	const [result, setResult] = useState('');
	const containerRef = React.createRef();
	const [imageResult, setImageResult] = useState('');

	const [bind, unbind] = useScrollSnap(
		containerRef,
		{ snapDestinationY: '90%' },
		() => console.log('snapped')
	);
	useEffect(() => {
		const openai = new OpenAIApi(
			new Configuration({
				apiKey: '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',
			})
		);

		// openai
		// 	.createChatCompletion({
		// 		model: 'gpt-3.5-turbo',
		// 		messages: [
		// 			{
		// 				role: 'user',
		// 				content: 'Hello ChatGpt',
		// 			},
		// 		],
		// 	})
		// 	.then((res) => {
		// 		console.log(res.data.choices[0].message.content);
		// 		setResult(res.data.choices[0].message.content);
		// 	});

		// openai
		// 	.createImage({
		// 		prompt: "Create a visually stunning cover for a personalized AI magazine. The cover should include mesmerizing graphics, a headline that reads 'Unlocking the Potential of Personalized AI,' and elements that represent artificial intelligence, such as neural networks, circuits, and glowing lines",
		// 		n: 1,
		// 		size: '512x512',
		// 	})
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
	}, []);

	// const generateImage = async () => {
	// 	const res = await openai.createImage({
	// 		prompt: "Create a visually stunning cover for a personalized AI magazine. The cover should include mesmerizing graphics, a headline that reads 'Unlocking the Potential of Personalized AI,' and elements that represent artificial intelligence, such as neural networks, circuits, and glowing lines",
	// 		n: 1,
	// 		size: '512x512',
	// 	});

	// 	setResult(res.data.data[0].url);
	// };

	return (
		<div id='container' ref={containerRef}>
			<div className='page first-page'>
				<div className={classes.hero}>
					{result.length > 0 ? (
						<img
							className='result-image'
							src={imageResult}
							alt='result'
						/>
					) : (
						<></>
					)}
					<h1 className={classes.header}>React Is Awesome</h1>
				</div>
			</div>
			<div className='page second-page'>
				<div className={classes.left}>
					<img
						className={classes.image}
						src={image2}
						width={'100%'}></img>
					<h1 className={classes.header}>React Is Awesome</h1>
				</div>
				<div className={classes.right}>
					<p>
						oaishlaksdhakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlakjsdf;lkjsd;flkjasd;lkfjdlfkjhoisdfkjahdf
					</p>
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

export default View;
