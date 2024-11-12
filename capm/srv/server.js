const cds = require('@sap/cds');
  
const ORIGINS = { 'https://port3002-workspaces-ws-n9djj.us10.trial.applicationstudio.cloud.sap': 1}
cds.on('bootstrap', app => app.use ((req, res, next) => {
    if (req.headers.origin in ORIGINS) {
      res.set('access-control-allow-origin', req.headers.origin)
      if (req.method === 'OPTIONS') // preflight request
        return res.set('access-control-allow-methods', 'GET,HEAD,PUT,PATCH,POST,DELETE').end()
    }
    next()
}))