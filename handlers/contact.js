const serviceMail = require('../services/email')

const sendMail = async (req, res) => {
    try {
        informationMail = {
            originMail: req.body.origin,
            targetMails: [process.env.MAIL_1, process.env.MAIL_2],
            subjectMail: req.body.subject,
            textMail: req.body.text
        }

        await serviceMail(informationMail)

        res.json({ success: true })

    } catch (err) {
        console.log(err)
        console.log('Handler Error')
        res.sendStatus(500)
    }
}

module.exports = sendMail 