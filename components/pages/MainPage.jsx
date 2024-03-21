const React = require('react')
const Layout = require('../Layout')

function MainPage({ carts, title, user}) {
    return (
        <Layout title={title} user = {user}>
            <div className='order_container'>
                {carts.map((cart) => (
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={cart.img} />
                        <div className="card-body">
                            <div className="card-title">{cart.name}</div>
                            <p>Старая цена:</p>
                            <p className="card-text">{cart.price}</p>
                            <p>НОВАЯ ШИКАРНАЯ ЦЕНА СО СКИДКОЙ:</p>
                            <p className="card-text">
                                {cart.price -
                                    (cart.price / 100) * cart.discount}{' '}
                            </p>
                            <button className="btn btn-success">
                                <a href ={`/description/${cart.id}`}>Описание заказа</a>
                            </button>
                            <button className="btn btn-success">
                                Выкупить<a href=''></a>
                            </button>
                            <button className="btn btn-danger btn-lg delete" data-id = {cart.id}>
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
module.exports = MainPage

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
