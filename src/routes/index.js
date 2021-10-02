const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.get('/halo', (req, res) => {

    
    res.status(200).send({ success: true });
});

router.post('/email', async (req, res) => {
    // console.log(req.body);

    const { nombre, email, mensaje } = req.body;

    // contentHTML = `
    //     <h1>Envio de Gmail</h1>
    //     <p>nombre: ${ nombre }</p><br/>
    //     <p>email: ${ email }</p><br/>
    //     <p>mensaje ${ mensaje }</p><br/>
    // `;
    
    
    contentHTML = `
    <body style="width:100%;font-family:Roboto, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
    <div class="es-wrapper-color" style="background-color:#F6F6F6"> 
     <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
          <![endif]--> 
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
       <tbody><tr style="border-collapse:collapse"> 
        <td valign="top" style="padding:0;Margin:0"> 
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tbody><tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0;background-image:url(https://ucbcri.stripocdn.email/content/guids/CABINET_29936052ba2cfe1a7ef446bcd25f069f/images/87521588765113874.png);background-repeat:no-repeat;background-position:center top;background-color:#010520" background="https://ucbcri.stripocdn.email/content/guids/CABINET_29936052ba2cfe1a7ef446bcd25f069f/images/87521588765113874.png" bgcolor="#010520"> 
             <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
               <tbody><tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:35px"> 
                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tbody><tr style="border-collapse:collapse"> 
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tbody><tr style="border-collapse:collapse"> 
                        <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:60px;mso-line-height-rule:exactly;font-family:Roboto, sans-serif;font-size:50px;font-style:normal;font-weight:normal;color:#FFFFFF">Mi nombre es ${ nombre }</h1></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Roboto, sans-serif;font-size:28px;font-style:normal;font-weight:normal;color:#FFFFFF">Mi correo es ${ email } </h1></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Roboto, sans-serif;line-height:23px;color:#ffffff;font-size:15px"> ${ mensaje } <br><br><br></p></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#164AFF;background:#164AFF;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="mailto:ronny.michael.minda.vera@gmail.com" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#164AFF;border-width:10px 20px 10px 20px;display:inline-block;background:#164AFF;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center"> ${ email } 
                           <!--[if !mso]><!-- --><img src="https://ucbcri.stripocdn.email/content/guids/CABINET_29936052ba2cfe1a7ef446bcd25f069f/images/43611589546122850.png" alt="icon" width="16" align="absmiddle" style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;vertical-align:middle;margin-left:10px"> 
                           <!--<![endif]--></a></span></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" height="40" style="padding:0;Margin:0"></td> 
                       </tr> 
                     </tbody></table></td> 
                   </tr> 
                 </tbody></table></td> 
               </tr> 
             </tbody></table></td> 
           </tr> 
         </tbody></table> 
         </td> 
       </tr> 
     </tbody></table> 
    </div>  
   
  </body>
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
