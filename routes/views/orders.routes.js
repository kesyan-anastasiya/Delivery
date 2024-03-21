const router = require('express').Router()
const CreateOrder = require('../../components/pages/CreateOrder')
const { District } = require('./../../db/models')

router.get('/', async (req, res) => {
    try {
        const districts = await District.findAll()
        const html = res.renderComponent(CreateOrder, {
            districts,
            title: 'Create new order',
        })
        res.status(200).send(html)
    } catch ({ message }) {
        res.status(500).json({ message })
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
