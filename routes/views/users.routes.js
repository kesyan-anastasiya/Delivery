const router = require('express').Router()
const configJWT = require('../../middleware/configJWT');

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

router.get("/logout", async (req, res) => {
    delete res.app.locals.user
    res.redirect('/')
})

router.get('/logout', async (req, res) => {
    res
        .clearCookie(configJWT.access.type)
        .clearCookie(configJWT.refresh.type);
    res.send()
})

module.exports = router;
