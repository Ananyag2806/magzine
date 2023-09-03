import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import useScrollSnap from './useScrollSnap';
import './style.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import image from './img/1.jpg';
import ai from './img/3.png';
import persona from './img/4.png';
import art from './img/5.png';
import image2 from './img/2.jpg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
	h1: {
		fontSize: '50px',
		fontWeight: '500',
	},
	h4: {
		fontWeight: '350',
		color: '#bcbcbc',
	},
	buttonGrp: {
		justifyContent: 'center',
		color: '#ffffff',
	},
	icon: {
		height: '80px',
	},
});

function Landing() {
	const classes = useStyles();

	const [result, setResult] = useState('');
	const containerRef = React.createRef();

	const [bind, unbind] = useScrollSnap(
		containerRef,
		{ snapDestinationY: '90%' },
		() => console.log('snapped')
	);

	return (
		<div id='container' ref={containerRef}>
			<div className='page first-page'>
				<div className={classes.hero}>
					<img
						className={classes.image}
						src={image}
						width={'100%'}></img>
					<div className={classes.header}>
						<h1 className={classes.h1}>
							Introducing Your Own Personalized Magazine — Curated
							Just for You
						</h1>
						<h4 className={classes.h4}>
							Experience a magazine that knows you. From topics
							you love to stories that matter to you
						</h4>
						<Stack
							className={classes.buttonGrp}
							spacing={2}
							direction='row'>
							<Button variant='outlined'>View</Button>
							<Button variant='outlined'>Custum</Button>
						</Stack>
					</div>
				</div>
			</div>
			<div className='page second-page'>
				<h2>Features</h2>
				<Stack spacing={2} direction='row'>
					<img className={classes.icon} src={persona} />
					<img className={classes.icon} src={ai} />
					<img className={classes.icon} src={art} />
				</Stack>
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

export default Landing;
