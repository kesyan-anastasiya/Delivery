const React = require("react");
const Layout = require('./../Layout')
const Cards = require('../ui/Cards')
function OrderHistory({carts}) {
return (
    <Layout>
        <div>Ваша история заказов</div>
        <Cards carts={carts} />
    </Layout>
)
}

module.exports = OrderHistory;