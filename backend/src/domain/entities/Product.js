export default class Product {
  constructor({ id = null, name, price, description, createdAt = new Date() }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.createdAt = createdAt;
  }
}
