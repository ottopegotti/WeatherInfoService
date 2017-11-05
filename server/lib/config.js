const apiKey = '9119c5af-ea7c-401f-b177-cb1fc6d0d1e5';

if (typeof apiKey !== 'string') {
  throw new Error('Missing fmi apikey. Api key can be given as environment variable FMI_APIKEY');
}

exports.apiKey = apiKey;
