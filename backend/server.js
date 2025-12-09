import express from 'express';
import cors from 'cors';
import productRoutes from './routes/ptoductRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const entry = express();
const PORT = process.env.PORT || 5000;

entry.use(cors());
entry.use(express.json());

// Routes
entry.use('/api/products', productRoutes);
entry.use('/api/contact', contactRoutes);

entry.get('/api/health', (req, res) => {
    res.json({ message: 'Backend is running' });
});

entry.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});