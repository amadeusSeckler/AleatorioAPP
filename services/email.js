const nodemailer = require("nodemailer");

const sendMail = async (infoMail) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            pool: true,
            auth: {
                user: process.env.MAIL_SENDER,
                pass: process.env.MAIL_PASS,
            },

        });

        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        await transporter.sendMail({
            from: infoMail.originMail,
            to: infoMail.targetMails,
            subject: infoMail.subjectMail,
            text: infoMail.textMail,
        });
    } catch (err) {
        console.log(err)
        console.log('Service Error')
    }
}

module.exports = sendMail
