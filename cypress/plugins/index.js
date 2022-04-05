module.exports = (on) => {
    on('task', {
        async redis() {

            const { createClient } = require('redis');
            const client = createClient({
                host: '127.0.0.1',
                port: 6379
            });

            client.on('error', (err) => console.log('Redis Client Error', err));
  
            try {
                await client.connect();
                await client.set('mael', 'blabla');
              } catch (err) {
                return 'error';
              }

            return 'ok';
        },
    })
}  
