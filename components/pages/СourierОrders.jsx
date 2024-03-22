const React = require("react");
const Layout = require('../Layout')
const Cards = require('../ui/Cards')
function СourierОrders({ carts }) {
    return (
        <Layout>
            <div>Заказы, которые вы разместили</div>
            <Cards carts={carts} />
        </Layout>
    )
}

module.exports = СourierОrders