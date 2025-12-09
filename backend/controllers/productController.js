/**
 * 
 * Yhuri Best Shop - Product Controller
 * 
 */

export const getProducts = async (req, res) => {
    try {
        const products = await req.db.collection('products').find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await req.db.collection('products').findOne({ _id: req.params.id });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetech product' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const result = await req.db.collection('products').insertOne(req.body);
        res.status(201).json({ id: result.insertedId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};