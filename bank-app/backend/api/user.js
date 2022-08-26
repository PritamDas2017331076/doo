const express = require('express')
const router = express.Router();
const User = require('../db/user')
const auth = require('../middleware/auth')

router.use(express.json())
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/me', auth, async(req, res) => {
    try {
        res.status(200).send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


router.post('/add', async(req, res) => {
    const user = req.body.user;
    const email = req.body.email;
    const amount = req.body.amount;
    const password = req.body.password;

    try {
        User.findOne({ user: user }, function(err, user) {
            console.log(user);
            if (user) console.log('fine one lol')
                /* if (err) return res.redirect('/signupform') */

            if (user) {
                console.log('just stop it')
                console.log('This user is used')
                return
            }
        })
    } catch {
        console.log('user is used')
    }

    const newUser = new User({ user, email, amount, password });

    try {
        const token = await newUser.generateAuthToken();
        res.status(200).send({ newUser, token })
    } catch (e) {
        res.status(400).send(e);
    }
})

router.route('/login').post(async(req, res) => {
    try {
        const userr = await User.findByCredentials(req.body.user, req.body.password)
        const token = await userr.generateAuthToken()
        res.status(200).send({ userr, token })
    } catch (e) {
        res.status(400).json(e)
    }
})

router.get('/logout', auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
            //req.user.tokens = []
        await req.user.save();
        res.status(200).send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/:id', async(req, res) => {
    console.log(req.params)
    try {
        const user = await User.findById(req.params.id)
        if (!user)
            return res.status(404).send()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const userr = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!userr)
            return res.status(404).send()
        res.status(200).send(userr)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.patch('/transaction/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        let amount = user.amount
        if (req.body.cost > amount) {
            res.status(400).send('remove some product')
            return
        }
        const chg = { amount: amount - req.body.cost }
        const userr = await User.findByIdAndUpdate(req.params.id, chg, { new: true, runValidators: true })
        if (!userr)
            return res.status(404).send()
        User.findOne({ user: 'ecomerce' }, async function(err, use) {
            if (err) console.log('error', err)
            else console.log('ise', use)
            const chh = { amount: use.amount + req.body.cost }
            const ecomerce = await User.findByIdAndUpdate(use._id, chh, { new: true, runValidators: true })
            console.log(ecomerce)
        })


        res.status(200).send(userr)
    } catch (e) {
        res.status(500).send(e.message)
    }
})


router.delete('/:id', async(req, res) => {
    try {
        const userr = await User.findByIdAndDelete(req.params.id)
        if (!userr)
            return res.status(404).send()
        res.status(200).send(userr)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router;