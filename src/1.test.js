server.respondWith('POST', /parties/, [200, {}, JSON.stringify(require('./DataSharing.connect.spec.lastEvents'))])
