const React = require('react')
const Layout = require('../Layout')
function MainPage({cart,title}){
    return(
        <Layout title ={title}>
<div>
    <div>
    {cart.map(carts=><div><img src = {carts.img}/>
    <div>{carts.name}</div>
    <div>{carts.price}</div>
    <button>Выкупить<a href= '/'></a></button>
    </div>)}
    
    </div>
</div>
</Layout>
    )
}
module.exports = MainPage