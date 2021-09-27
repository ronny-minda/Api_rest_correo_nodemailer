const { Router } = require('express');
const router = Router();

router.get('/halo', (req, res) => {
    const data = {
        "name": "maikol",
        "sda": 'halo'
    };
    res.json(data)
});

// router.post('/email', (req, res) => {
//     console.log(req.body);
//     res.send('received');
// });

module.exports = router;
