// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-04-30-preview', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Network/virtualNetworks/xplattestvnet4168/subnets/xplattestsubnet8387\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"ab9ca93d-5cda-439c-99da-62cd75738b31\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2648',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/c00718a1-8c32-4f9c-8b16-ebda17f1b381?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'c00718a1-8c32-4f9c-8b16-ebda17f1b381',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ffed504d-ce0d-464b-8aed-22312d0400cc',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110243Z:ffed504d-ce0d-464b-8aed-22312d0400cc',
  date: 'Thu, 16 Feb 2017 11:02:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-04-30-preview', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Network/virtualNetworks/xplattestvnet4168/subnets/xplattestsubnet8387\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"ab9ca93d-5cda-439c-99da-62cd75738b31\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2648',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/c00718a1-8c32-4f9c-8b16-ebda17f1b381?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': 'c00718a1-8c32-4f9c-8b16-ebda17f1b381',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ffed504d-ce0d-464b-8aed-22312d0400cc',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110243Z:ffed504d-ce0d-464b-8aed-22312d0400cc',
  date: 'Thu, 16 Feb 2017 11:02:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/c00718a1-8c32-4f9c-8b16-ebda17f1b381?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T11:02:43.2247999+00:00\",\r\n  \"endTime\": \"2017-02-16T11:02:43.6154513+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c00718a1-8c32-4f9c-8b16-ebda17f1b381\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '0dc58612-1b8f-4001-8427-c093e27ecab3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'c7f1daca-0f13-4a01-8d09-bd925239697c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110313Z:c7f1daca-0f13-4a01-8d09-bd925239697c',
  date: 'Thu, 16 Feb 2017 11:03:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Compute/locations/southeastasia/operations/c00718a1-8c32-4f9c-8b16-ebda17f1b381?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-16T11:02:43.2247999+00:00\",\r\n  \"endTime\": \"2017-02-16T11:02:43.6154513+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c00718a1-8c32-4f9c-8b16-ebda17f1b381\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '0dc58612-1b8f-4001-8427-c093e27ecab3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'c7f1daca-0f13-4a01-8d09-bd925239697c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110313Z:c7f1daca-0f13-4a01-8d09-bd925239697c',
  date: 'Thu, 16 Feb 2017 11:03:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Network/virtualNetworks/xplattestvnet4168/subnets/xplattestsubnet8387\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"ab9ca93d-5cda-439c-99da-62cd75738b31\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '01146049-c2e6-498a-bf63-5288e100447f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '1be2b638-6bda-4802-85ac-72d0dc6e6e2c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110313Z:1be2b638-6bda-4802-85ac-72d0dc6e6e2c',
  date: 'Thu, 16 Feb 2017 11:03:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\",\r\n          \"managedDisk\": {\r\n            \"storageAccountType\": \"Premium_LRS\"\r\n          }\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        },\r\n        \"dataDisks\": [\r\n          {\r\n            \"lun\": 0,\r\n            \"createOption\": \"Empty\",\r\n            \"caching\": \"None\",\r\n            \"managedDisk\": {\r\n              \"storageAccountType\": \"Premium_LRS\"\r\n            },\r\n            \"diskSizeGB\": 32\r\n          }\r\n        ]\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Network/virtualNetworks/xplattestvnet4168/subnets/xplattestsubnet8387\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"ab9ca93d-5cda-439c-99da-62cd75738b31\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '01146049-c2e6-498a-bf63-5288e100447f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '1be2b638-6bda-4802-85ac-72d0dc6e6e2c',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110313Z:1be2b638-6bda-4802-85ac-72d0dc6e6e2c',
  date: 'Thu, 16 Feb 2017 11:03:13 GMT',
  connection: 'close' });
 return result; }]];