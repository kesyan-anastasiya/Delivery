const React = require('react')

function Cards({ carts, user }) { 
    // console.log(user.status);
    return (
<div className="order_container">
            {carts.map((cart) => (
                
                <div key={cart.id} className="card" style={{ width: '25rem' }}>
                    <img
                        className="card-img-top"
                        src={cart.img}
                        style={{ width: '300px', height: '250px' }}
                    />
                    

                    <div className="card-body">
                        <div className="card-title">{cart.name}</div>
                        <p>Старая цена:</p>
                        <p className="card-text">{cart.price}</p>
                        <p>НОВАЯ ШИКАРНАЯ ЦЕНА СО СКИДКОЙ:</p>
                        <p className="card-text">
                            {Math.ceil(
                                cart.price - (cart.price / 100) * cart.discount
                            )}
                        </p>

                        <a href={`/description/${cart.id}`}>
                            <button className="btn btn-secondary">
                                Описание заказа
                            </button>
                        </a>
                        { (user?.status === 'lox' &&  (
                           <>  
                             <button className="btn btn-success">
                             Выкупить<a href={`/orders/buy/${cart.id}`}></a>
                         </button>
                         </>
                         ))}
                       
                { (user?.status === 'Admin' &&  (  
                <><a
                            className="btn btn-secondary"
                            href={`/orders/${cart.id}`}
                        >
                            Изменить
                        </a>
                        <button
                            className="btn btn-secondary delete"
                            data-id={cart.id}
                        >
                            Удалить
                        </button></>))}
                    </div>
                </div>
            ))}
        </div>
    )
}

module.exports = Cards
