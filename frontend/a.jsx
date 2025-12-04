import React from 'react';
import { createRoot } from 'react-dom/client';
import Entry from './src/Entry.jsx';
import './sss/a.css';
import './tailwind/main.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Entry />);
}