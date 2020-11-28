import React, { Component } from "react"
import { storeProducts, detailProduct } from "./data"


const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            products: [],
            detailProduct: detailProduct,
            modalProduct: detailProduct,
            modalOpen: false,
            cart: [],
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(product => {
            const singleItem = {...product }
            return tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }
    addToCart = (id) => {
        let product = this.getItem(id);
        let tempCart = this.state.cart
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(product)
        let tempProduct = tempProducts[index]
        tempProduct.count = 1
        tempProduct.inCart = true
        tempProduct.total = tempProduct.price
        tempCart.push(tempProduct)
        this.setState(() => {
            return {
                products: tempProducts,
                detailProduct: tempProduct,
                cart: tempCart,
                count: this.state.count + 1
            }
        }, () => { this.addTotals() })
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState(() => {
            return {
                count: this.state.count - 1,
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => { this.addTotals() })

    }
    clearCart = () => {
        this.setState(() => {
            return {
                cart: [],
                count: 0
            }
        }, () => {
            this.addTotals()
            this.setProducts()
        })

    }
    increment = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count++
            product.total = product.count * product.price
        this.setState(() => {
            return {
                count: this.state.count + 1,
                cart: [...tempCart]
            }
        }, () => { this.addTotals() })
    }
    decrement = (id) => {
        let count = 0
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count--
            tempCart.map(item => {
                return count += item.count
            })
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price
            this.setState(() => {
                return {
                    cart: [...tempCart],
                    count: count
                }
            }, () => { this.addTotals() })
        }

    }
    addTotals() {
        let subTotal = 0
        this.state.cart.map(product => {
            return subTotal += product.total
        })
        const tempTax = subTotal * 0.2
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
        console.log(this.state.cartTotal)
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }
    openModal = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {
                modalOpen: true,
                modalProduct: product
            }
        })
        console.log("modal open")
    }
    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    render() {
        return ( < ProductContext.Provider value = {
                {
                    ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart

                }
            } > { this.props.children } < /ProductContext.Provider>)
        }
    }
    const ProductConsumer = ProductContext.Consumer;

    export { ProductProvider, ProductConsumer }