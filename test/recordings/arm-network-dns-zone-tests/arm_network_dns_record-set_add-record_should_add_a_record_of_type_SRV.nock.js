// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '32e7672c-0a00-4920-a74f-6089d80b352c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b854759e-7e29-430d-9533-cf50274d15c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121612Z:b854759e-7e29-430d-9533-cf50274d15c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '32e7672c-0a00-4920-a74f-6089d80b352c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b854759e-7e29-430d-9533-cf50274d15c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121612Z:b854759e-7e29-430d-9533-cf50274d15c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"5d52f5b0-c132-4521-a146-97fc444e0c9b\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '5d52f5b0-c132-4521-a146-97fc444e0c9b',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '80dd6bd2-08bf-44c3-a51b-0a7d06cf176d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4b6267f8-3071-432f-99a9-ddee8b5a3253',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121614Z:4b6267f8-3071-432f-99a9-ddee8b5a3253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"5d52f5b0-c132-4521-a146-97fc444e0c9b\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '5d52f5b0-c132-4521-a146-97fc444e0c9b',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '80dd6bd2-08bf-44c3-a51b-0a7d06cf176d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4b6267f8-3071-432f-99a9-ddee8b5a3253',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121614Z:4b6267f8-3071-432f-99a9-ddee8b5a3253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"4c440ec2-6dbd-411e-9864-8f7918040ebb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '436',
  'content-type': 'application/json; charset=utf-8',
  etag: '4c440ec2-6dbd-411e-9864-8f7918040ebb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '6696c63e-caee-43b0-b3e0-80ea21f1d03b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fed431dc-46dd-4e11-8b86-37f0cf8b6d20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121616Z:fed431dc-46dd-4e11-8b86-37f0cf8b6d20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"4c440ec2-6dbd-411e-9864-8f7918040ebb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '436',
  'content-type': 'application/json; charset=utf-8',
  etag: '4c440ec2-6dbd-411e-9864-8f7918040ebb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '6696c63e-caee-43b0-b3e0-80ea21f1d03b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fed431dc-46dd-4e11-8b86-37f0cf8b6d20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121616Z:fed431dc-46dd-4e11-8b86-37f0cf8b6d20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:15 GMT',
  connection: 'close' });
 return result; }]];