const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')


router.get('/', (req, res) => {
    try {

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
module.exports = router;
