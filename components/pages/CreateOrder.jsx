const React = require('react')
const Layout = require('./../Layout')
const Form = require('../ui/Form')

function CreateOrder(district, title) {
    return (
        <Layout title={title}>
            <Form district={district} />
        </Layout>
    )
}

module.exports = CreateOrder
