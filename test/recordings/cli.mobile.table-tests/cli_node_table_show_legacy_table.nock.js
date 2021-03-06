// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table3/scripts')
  .reply(200, "[]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '63dfb1c441588c5596c51913c0bf4980',
  date: 'Wed, 08 Apr 2015 01:32:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table3')
  .reply(200, "{\"idType\":\"integer\",\"hasDeleted\":false,\"metrics\":{\"indexCount\":1,\"recordCount\":-1,\"sizeBytes\":0},\"name\":\"table3\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table3\\/\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '301',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'bc1770ed86ca8a32a06622f22f9d2b24',
  date: 'Wed, 08 Apr 2015 01:32:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table3/columns')
  .reply(200, "[{\"name\":\"id\",\"type\":\"bigint (MSSQL)\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table3\\/columns?columnName=id\\/\",\"indexed\":true,\"zumoIndex\":false}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '283',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '609ff12ec4a98a1785c9b8482c839b0e',
  date: 'Wed, 08 Apr 2015 01:32:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table3/permissions')
  .reply(200, "{\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/mobileservices\\/mobileservices\\/clitestnode1265\\/repository\\/service\\/table\\/table3.json\",\"insert\":\"application\",\"read\":\"application\",\"update\":\"application\",\"delete\":\"application\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '942e6e5e1be68754bbccbb51e1a3e306',
  date: 'Wed, 08 Apr 2015 01:32:56 GMT' });
 return result; }]];