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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"2b4905ac-c73f-4957-a08e-377f38b7ee2d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"2b4905ac-c73f-4957-a08e-377f38b7ee2d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b4c3f5a9-84d6-42cf-9716-ad2f45680d4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '1cdd3c5f-c85c-42fd-9ac3-1f5e5acc00c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091024Z:1cdd3c5f-c85c-42fd-9ac3-1f5e5acc00c1',
  date: 'Mon, 11 Apr 2016 09:10:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"2b4905ac-c73f-4957-a08e-377f38b7ee2d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"2b4905ac-c73f-4957-a08e-377f38b7ee2d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b4c3f5a9-84d6-42cf-9716-ad2f45680d4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '1cdd3c5f-c85c-42fd-9ac3-1f5e5acc00c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091024Z:1cdd3c5f-c85c-42fd-9ac3-1f5e5acc00c1',
  date: 'Mon, 11 Apr 2016 09:10:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4252',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1a345aec-072f-4880-8dd2-8da8d14932bf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c968d2c6-7cb9-49f6-88e4-7e45109eb5c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091024Z:c968d2c6-7cb9-49f6-88e4-7e45109eb5c2',
  date: 'Mon, 11 Apr 2016 09:10:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"96c92112-7835-45d7-bcc7-a898f9c9c8bd\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4252',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1a345aec-072f-4880-8dd2-8da8d14932bf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c968d2c6-7cb9-49f6-88e4-7e45109eb5c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091024Z:c968d2c6-7cb9-49f6-88e4-7e45109eb5c2',
  date: 'Mon, 11 Apr 2016 09:10:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '92ac7ad2-3073-4b46-b677-ad897721da95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'cc85b978-486b-4a48-8e21-8523ddd6a619',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091055Z:cc85b978-486b-4a48-8e21-8523ddd6a619',
  date: 'Mon, 11 Apr 2016 09:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '92ac7ad2-3073-4b46-b677-ad897721da95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'cc85b978-486b-4a48-8e21-8523ddd6a619',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091055Z:cc85b978-486b-4a48-8e21-8523ddd6a619',
  date: 'Mon, 11 Apr 2016 09:10:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e61d6ae5-18f4-4c05-a23b-631a2e8f077e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '95341447-0b40-4f96-b371-fdc9464e2844',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091125Z:95341447-0b40-4f96-b371-fdc9464e2844',
  date: 'Mon, 11 Apr 2016 09:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/1a345aec-072f-4880-8dd2-8da8d14932bf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e61d6ae5-18f4-4c05-a23b-631a2e8f077e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '95341447-0b40-4f96-b371-fdc9464e2844',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091125Z:95341447-0b40-4f96-b371-fdc9464e2844',
  date: 'Mon, 11 Apr 2016 09:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4467',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd1288b2e-db6a-4737-95be-8350d5091a86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cddf5f15-60a3-4e78-90ad-2577a615f66f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091127Z:cddf5f15-60a3-4e78-90ad-2577a615f66f',
  date: 'Mon, 11 Apr 2016 09:11:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"8f644614-1e05-457b-935f-675ab7feede2\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4467',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd1288b2e-db6a-4737-95be-8350d5091a86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cddf5f15-60a3-4e78-90ad-2577a615f66f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T091127Z:cddf5f15-60a3-4e78-90ad-2577a615f66f',
  date: 'Mon, 11 Apr 2016 09:11:26 GMT',
  connection: 'close' });
 return result; }]];