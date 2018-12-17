# Decode Docker deployment 

* Nginx for static serve or and proxy
* UWSGI, NGINX + Flask

## settings

## lets encrypt certs

* get http server up on port 80
* see "domains" and "certs" directories
* make sure a .well-known directory is publically accessable in nginx config file ( location /.well-known { alias /domains/domain.nl/.well-known; } ) IMPORTANT: REBUILD AND RERUN THE PROXY CONTAINER! (DISABLE PROXY)
* run something like "sudo certbot certonly --webroot -w . -d www.domain.nl -d domain.nl" in specific domain directory
* certs for domain are in "/etc/letsencrypt/archive/www.domain.nl/ (rename cert names) to cert.pem chain.pem fullchain.pem privkey.pem


