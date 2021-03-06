// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506\",\r\n  \"name\": \"xplatTestaAvail506\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '7115ef4a-8e3d-4ce5-826d-62953ce5e955',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8fe1b580-e5de-4d90-be78-7e4a2b0469ed',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070625Z:8fe1b580-e5de-4d90-be78-7e4a2b0469ed',
  date: 'Sun, 29 Jan 2017 07:06:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506\",\r\n  \"name\": \"xplatTestaAvail506\",\r\n  \"sku\": {\r\n    \"name\": \"Classic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '7115ef4a-8e3d-4ce5-826d-62953ce5e955',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8fe1b580-e5de-4d90-be78-7e4a2b0469ed',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070625Z:8fe1b580-e5de-4d90-be78-7e4a2b0469ed',
  date: 'Sun, 29 Jan 2017 07:06:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '807959a4-0b88-44e6-ba35-7a228fe82b75',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1f04dbbb-ce7a-408f-8025-f3f5906af1ab',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070626Z:1f04dbbb-ce7a-408f-8025-f3f5906af1ab',
  date: 'Sun, 29 Jan 2017 07:06:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGAvailCreate7879/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail506?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '807959a4-0b88-44e6-ba35-7a228fe82b75',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1f04dbbb-ce7a-408f-8025-f3f5906af1ab',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T070626Z:1f04dbbb-ce7a-408f-8025-f3f5906af1ab',
  date: 'Sun, 29 Jan 2017 07:06:26 GMT',
  connection: 'close' });
 return result; }]];