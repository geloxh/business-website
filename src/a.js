import React from 'react';
import { createRoot } from 'react-dom/client';
import Entry from './Entry.js';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<Entry />);