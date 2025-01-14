const nodemailer=require('nodemailer');

module.exports=async(email,subject,text)=>{
    try{
        const transporter=nodemailer.createTransport({
            host:process.env.HOST,
            service:process.env.SERVICE,
            port:587,

            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS,
            }
        });

        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text,
        })

        console.log(`Email sent to:${email}`);

    }catch(err){
        console.log(err);
        console.log(`Error sending email to ${email}`);
        throw err;
    }
}