import ProductRepository from "../../../domain/interfaces/ProductRepository.js";
import ProductModel from "./ProductModal.js";
import Product from "../../../domain/entities/Product.js";

export default class ProductRepositoryMongo extends ProductRepository {
    async create(data) {
        const doc = await ProductModel.create(data);
        return new Product({ id: doc._id, ...doc.toObject() });
    }

    async findAll() {
        const docs = await ProductModal.find();
        return docs.map(doc => new Product({ id: doc._id, ...doc.toObject() }));
    }

    async finById(id) {
        const doc = await ProductModel.findByIdAndUpdate(id, data, { new: true });
        return new Product({ id: doc._id, ...doc.toObject() });
    }

    async delete(id) {
        return ProductModel.findByIdAndDelete(id);
    }
}