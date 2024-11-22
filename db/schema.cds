namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity ApplicationDetail {
  key ApplicationId : Integer;
  key UniqueReference : String;
  ApplicationStatus: String;
  NumberOfTenants: String;
  buildingDetailsRef: Composition of many BuildingDetail;  // 1:N relationship
  // accountSiteRef: Association to AccountSiteDetail;  // 1:1 relationship
}

entity BuildingDetail {
  key BuildingId : Integer;
  BuildingName: String;
  AccountNumber: String;
  applicationDetailRef : Association to ApplicationDetail;  // Should refer to ApplicationDetail
}

// entity AccountSiteDetail {
//   key AccountSiteId : Integer;
//   CompanyName: String;
//   AccountManagerName: String;
//   applicationDetailRef: Association to ApplicationDetail;  // 1:1 relationship
// }
