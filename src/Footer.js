import { useState, useEffect, Fragment } from 'react';
import { useRef } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import useScrollSnap from './useScrollSnap';
import './style.css';
import Custom from './Custom';
import View from './View';
import Landing from './Landing';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { makeStyles } from '@material-ui/core/styles';
import image from './img/1.jpg';
import image2 from './img/2.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		display: 'grid',
	},
	footer: {
		position: 'fixed' /* Set the navbar to fixed position */,
		bottom: '0' /* Position the navbar at the top of the page */,
		width: '100%' /* Full width */,
	},
});

function Footer() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className='footer'>
				<h4 className={classes.text}>
					Made with ⚛ by{' '}
					<a href='ananyag2806.github.io/portfolio/'>Ananya</a>
				</h4>
			</div>
		</Fragment>
	);
}

export default Footer;
