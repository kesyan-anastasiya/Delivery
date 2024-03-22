const React = require('react')
const Layout = require('../Layout')
function DiscountPage({description_id,title,user}){
   
    return (
        <Layout title={title} user={user}>
            <div className="card-body four">
                <div>
                    <img
                        src={description_id.img}
                        style={{ width: '500px', height: '450px' }}
                    />
                </div>
                <div className="card-title">{description_id.description}</div>
                <a href={`/orders/buy/${description_id.id}`}>
                    <button className="btn btn-success">Выкупить</button>
                </a>
            </div>
        </Layout>
    )
}
module.exports = DiscountPage