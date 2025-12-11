export default class CreateProduct {
    constructor(productRepository) {
        this.productRepository = this.productRepository;
    }

    async execute(data) {
        return this.productRepository.create(data);
    }
}