const fs = require('fs');
const path = './server/db/users/';

module.exports = {
    async load(req, res) {
        try {
            const result = await fs.readFileSync(`${path}/users.json`, 'utf-8');
            res.json(result);
        }
        catch {
            res.sendStatus(500);
        }
    }
}