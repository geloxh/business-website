import CreateProduct from "../../application/product/CreateProduct.js";
import GetProduct from "../../application/product/GetProduct.js";

const repo = new ProductRepositoryMongo();

export const createProduct = async (req, res) => {
    try {
        const useCase = new CreateProduct(repo);
        const product = await useCase.execute(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const useCase = new GetProducts(repo);
        const products = await useCase.execute();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
