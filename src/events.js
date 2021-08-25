const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    router.get('/userMessages', function (req, res, next) {
        db.query(
            'SELECT mail, subject, text, userMessageId FROM user, message, userMessage' +
            ' where user.userId = userMessage.userId' +
            ' and message.messageId = userMessage.messageId',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.delete('/userMessage/:id', function (req, res, next) {
        db.query(
            'DELETE FROM userMessage WHERE userMessageId=?',
            [req.params.id],
            (error) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                } else {
                    res.status(200).json({status: 'ok'});
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;

