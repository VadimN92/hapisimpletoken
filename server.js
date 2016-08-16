const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server();
server.connection({ port: 8080 });

server.method('authed', (token, next) => {
    console.log(token);
    if(token == "1234") {
        next("Success");
    } else {
        next(Boom.unauthorized('invalid token'));
    }
});

server.route({
    method: 'POST',
    path: '/',
    config: { 
        pre: [
            { method: 'authed(raw.req.headers.token)', assign: "token" }
        ],
       handler: function (request, reply) {
          return reply(request.pre.token);
       }
    }
});

server.start((err) => {

    if (err) {
      throw err;
    }
    console.log('Server started at: ' + server.info.uri);
});


/*
* chech then user logined or not (return false or true(token))



*/

