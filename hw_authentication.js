var scriptTags = document.querySelectorAll('script');
var redirectUrl, domain, clientId;
for(var i = scriptTags.length - 1; i >= 0 ; i--){
  if (/hw\_authentication/.test(scriptTags[i].src)){
    redirectUrl = scriptTags[i].dataset.redirectUrl;
    clientId = scriptTags[i].dataset.clientId;
    domain = scriptTags[i].dataset.domain;
   break;
  }
}

if (redirectUrl === undefined){
  console.error('Please include on this script the redirectUrl data attribute');
  alert('Hw authentication is not correctly configure');
}

var lock = new Auth0Lock(clientId, domain,{
    theme: {
      logo: 'https://www.healthwiseglobal.com/images/healthwise-logo.jpg?',
      primaryColor: '#022e4d'
    },
    languageDictionary: {
      title: ""
    },
    auth: {
      redirectUrl: redirectUrl,
      responseType: 'code',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  });
lock.show();
