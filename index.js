const rc = require('rc');
let config = rc('scsr', {
  web: {
    hostname: '0.0.0.0',
    port: 80,
    channel_number: null
  },
  dns: {
    external_ip: null
  },
  node_media_server: {
    rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 10,
      ping_timeout: 30
    }
  }
});


if (!config.dns.external_ip) {
  const os = require( 'os' );
  var networkInterfaces = os.networkInterfaces( );
  console.log(`
If you want the dns module to work select one of the following addressess and use
--dns.external_ip=<address>`);

Object.keys(networkInterfaces).forEach(interface => {
      networkInterfaces[interface].forEach(addresses => {
          console.log(`\t${interface} => ${addresses.address}`);
      })
  });
  console.log();
}

if (!config.web.channel_number) {
  console.log(`
Missing param --web.channel_number=<channel_number> 
Check the README.md to set get the right value.
`)
  process.exit(1);
}


if (config.web.channel_number) {require('./web_server')(config.web)};
if (config.dns.external_ip) { require('./dns_server')(config.dns) };
require('./rtmp_server')(config.node_media_server);