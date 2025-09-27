const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.json({ resource: 'roles', ok: true });
});

module.exports = router;


