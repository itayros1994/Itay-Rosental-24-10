export const routes = [

    // {
    //     path: '/toy/edit/:productId?',
    //     component: ToyEdit
    // },
    // {
    //     path: '/toy/details/:toyId',
    //     component: ToyDetails
    // },

    {
        path: '/',
        component: ShopingCartApp
    }, 
    {
        path: '/shoppingCart/edit/:productId?',
        component: ShoppingCartEdit
        
    }, 
    {
        path: '/shoppingCart/cart/',
        component: UserCart
        
    }, 

]