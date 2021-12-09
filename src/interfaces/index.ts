export interface IProduct {
    name: string,
    price: number
}

export interface GetProductsResponse {
    products: IProduct[]
}

export interface GetSingleProductResponse {
    products: IProduct
}