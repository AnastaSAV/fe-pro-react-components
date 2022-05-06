import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

import Application from './Application';
import Header from './header/Header'

document.addEventListener('DOMContentLoaded', () => {
	createRoot(document.querySelector('.root')).render(<Application />);
});

