export default class GetProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        return this.productRepository.findAll();
    }
}