interface IProduct {
    _id: number;                //_id can NOT be altered by the user
    _name: string;
    _price: number;
    _quantity: number;
}

class Inventory {
    //fetching data included in the array as a string
    private products: IProduct[] = [];

    //Add new products
    addProduct(product: IProduct) {
        if (this.products.length === 0) {                                       //Chuỗi trống -> khởi tạo từ id 1
            product._id = 1;
        }
        else {
            product._id = this.products[this.products.length - 1]._id + 1;      //Chuỗi ko trống -> id = vị trí kế tiếp của id cuối cùng trong array
        }
        this.products.push(product);                                            //Thêm vào cuối chuỗi
    }

    //Update pre-existing products
    updateProduct(id: number, updateProduct: Partial<IProduct>) {
        const i = this.products.findIndex((product) => product._id === id);
        if (i < 0) {
            console.log('No Products found!!!');
        }
        else {
            //this.products[i] = updateProduct;
        }
    }

    //Delete pre-existing products
    deleteProduct(id: number) {
        const index = this.products.findIndex((product) => product._id === id); //Tìm trong chuỗi products dựa trên id cấp vào
        if (index !== -1) {
            this.products.splice(index, 1);                                     //X
        }
    }

    //Get all products
    getAllProducts() {
        return this.products;
    }
}
