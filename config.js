exports.settings = {
    "status_message": "A demo Node.js Google Talk Bot",
    "client": {
        "jid": "n.js.bot@gmail.com",
        "password": process.env.bot_password,
        "host": "talk.google.com",
        "port": 5222,
        "reconnect": true
    },
    "allow_auto_subscribe": true,
    "command_argument_separator": /\s*\;\s*/
};
