const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { ApplicationDetails, BuildingDetails } = this.entities;

  this.on('READ', 'ApplicationDetails', async(req)=>{
    return "Read the ApplicatioinDetails Entity"
  })
  
  // Handle POST for ApplicationDetails
  this.on('CREATE', 'ApplicationDetails', async (req) => {

    const { UniqueReference, ApplicationStatus, NumberOfTenants, buildingDetailsRef } = req.data;
    
    // Create the ApplicationDetail entry
    const applicationDetail = await INSERT.into(ApplicationDetails).entries({
      UniqueReference,
      ApplicationStatus,
      NumberOfTenants
    });

    // If there are building details, insert them
    if (buildingDetailsRef && Array.isArray(buildingDetailsRef)) {
      // Loop through the building details and insert them
      for (let building of buildingDetailsRef) {
        await INSERT.into(BuildingDetails).entries({
          BuildingName: building.BuildingName,
          AccountNumber: building.AccountNumber,
          applicationDetailRef: applicationDetail[0].ApplicationId // Linking back to ApplicationDetail
        });
      }
    }

    return applicationDetail; // Return the created ApplicationDetail
  });
});
