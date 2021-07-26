const fs = require('fs');
const path = './server/db/contacts/';

module.exports = {
    async load(req, res, next) {
        try {
            const { userId } = req.body;
            const result = await fs.readFileSync(`${path}/${userId}/contacts.json`, 'utf-8');
            res.json(result);
        }
        catch {
            res.sendStatus(502);
        }
    }
}