class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;

  addProduct(title, description, price, img, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El codigo ${code} ya existe`);
        break;
      }
    }
    const newProduct = {
      title,
      description,
      price,
      img,
      code,
      stock,
    };
    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProduct,
        id: ProductManager.id,
      });
    } else {
      console.log("Se requiere completar todos los campos");
    }
  }
  getProduct() {
    return this.products;
  }
  existe(id) {
    return this.products.find((producto) => producto.id === id);
  }
  getProductById(id) {
    !this.existe(id) ? console.log("Not found") : console.log(this.existe(id));
  }
}
const productos = new ProductManager();
//1era llamada = empty array
console.log(productos.getProduct());
console.log("array vacio, parte de la consigna");
//añadir productos
productos.addProduct("titulo1", "descripcion1", 1000, "img1", "abc123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "img1", "abc124", 10);
//2da llamada = product's array
console.log(productos.getProduct());
console.log("array con productos");
//código repetido
productos.addProduct("titulo3", "descripcion3", 1000, "img1", "abc123", 15);
console.log(
  "El producto titulo3 no se puede agregar porque el CODE ya existe en otro producto"
);
//buscar por ID de producto, probando con id número 2
productos.getProductById(2);
console.log("Se encuentra el producto solicitado con ID numero 2");
//buscar por ID no encontrado, buscando ID número 4
productos.getProductById(4);
console.log("ID no encontrado, en este caso se intento buscar ID numero 4");
