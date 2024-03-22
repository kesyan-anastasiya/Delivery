const React = require('react')
const Layout = require('./../Layout')
const Form = require('../ui/Form')

function CreateOrder({ districts, title }) {
    return (
        <Layout>
            <Form districts={districts} />
        </Layout>
    )
}

module.exports = CreateOrder
