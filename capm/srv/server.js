// const cors = require('cors');
// const cds = require('@sap/cds');

// cds.on("bootstrap", async(app)=>{
//     app.use(cors({ origin: "*"}));
// })
const cors = require('cors');
const cds = require('@sap/cds');

cds.on('bootstrap', async (app) => {
  
app.use(cors({origin: "*"}))

  // If you want to log the requests to check
  app.use((req, res, next) => {
    console.log("Helo");
    console.log(`${req.method} request to ${req.url}`);
    next();
  });
});

cds.connect();  // Make sure to connect the service after setting up CORS