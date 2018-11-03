module.exports = function (config) {
    process.env['dnsproxy_logging'] = 'dnsproxy:info';
    process.env['dnsproxy_host'] = config.external_ip;
    process.env['dnsproxy_reload_config'] = false;
    process.env['dnsproxy_domains__api.ustream.tv'] = config.external_ip;
    require('dns-proxy');
}
