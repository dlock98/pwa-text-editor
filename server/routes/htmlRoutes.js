const path = require('path');

 module.exports = (app) =>
   app.get('/', (req, res) =>
     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
     app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`))
   );