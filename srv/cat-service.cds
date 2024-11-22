using my.bookshop as my from '../db/schema';
@path: '/service'
service CatalogService {
  @readonly entity Books as projection on my.Books;
  entity ApplicationDetails as projection on my.ApplicationDetail;
  entity BuildingDetails as projection on my.BuildingDetail;
//   entity AccountSites as projection on my.AccountSiteDetail;
}