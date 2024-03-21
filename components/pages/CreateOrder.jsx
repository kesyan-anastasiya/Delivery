const React = require('react')
const Layout = require('./../Layout')
const Form = require('../ui/Form')

function CreateOrder({districts, title}) {
    console.log(districts)
    return (
        <Layout>
            {districts.map((district) => (
                <p>{district.name}</p>
            ))}
            <Form />
        </Layout>
    )
}

module.exports = CreateOrder
