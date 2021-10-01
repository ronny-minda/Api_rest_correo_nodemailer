const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.get('/halo', (req, res) => {

    
    res.status(200).send({ success: true });
});

router.post('/email', async (req, res) => {
    // console.log(req.body);

    const { nombre, email, mensaje } = req.body;

    contentHTML = `
        <h1>Envio de Gmail</h1>
        <p>nombre: ${ nombre }</p><br/>
        <p>email: ${ email }</p><br/>
        <p>mensaje ${ mensaje }</p><br/>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ronny.michael.minda.vera@gmail.com',
            pass: 'bnqqfuffowpehljo'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    

    let info = await transporter.sendMail({
        from: '"Prueba" <ronny.michael.minda.vera@gmail.com>', // sender address,
        to: 'ronny.michael.minda.vera@gmail.com',
        subject: 'Prueba',
        // text: 'Hello World'
        html: contentHTML
    })



    console.log(contentHTML);



        // const data = {
        //     "name": "maikol",
        //     "sda": 'halo'
        // };
        // res.json(data)
    // res.send('received');
    res.status(200).send({ success: true });
    console.log("sent response");
});

module.exports = router;
