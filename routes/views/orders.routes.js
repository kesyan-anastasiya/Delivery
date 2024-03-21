const router = require('express').Router()
const CreateOrder = require('../../components/pages/CreateOrder')
const { District } = require('../../db/models')

router.get('/', (req, res) => {
    try {
        const districts = District.findAll()
        const html = res.renderComponent(CreateOrder, {
            districts,
            title: 'Create new order',
        })
        res.send(html)
    } catch ({ message }) {
        res.json({ message })
    }
})

router.post('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})

router.put('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})

router.delete('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})
module.exports = router
