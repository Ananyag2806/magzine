import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'grid',
	},
	footer: {
		position: 'fixed' /* Set the navbar to fixed position */,
		bottom: '0' /* Position the navbar at the top of the page */,
		width: '100%' /* Full width */,
		background: '#f1f1f1',
	},
	text: {
		textAlign: 'center',
		textDecoration: 'none',
		fontWeight: '500',
		margin: '5px',
		padding: '0',
	},
});

function Footer() {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.footer}>
				<h4 className={classes.text}>
					Made with ⚛ by{' '}
					<a href='ananyag2806.github.io/portfolio/'>Ananya</a>
				</h4>
			</div>
		</Fragment>
	);
}

export default Footer;
