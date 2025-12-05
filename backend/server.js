import express from 'express';
import cors from 'cors';

const entry = express();
const PORT = process.env.PORT || 5000;

entry.use(cors());
entry.use(express.json());

entry.get('/api/health', (req, res) => {
    res.json({ message: 'Backend is running' });
});

entry.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});