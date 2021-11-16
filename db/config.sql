ALTER SYSTEM SET ssl TO 'ON';
ALTER SYSTEM SET ssl_cert_file TO '/var/lib/postgresql/pb-db.crt';
ALTER SYSTEM SET ssl_key_file TO '/var/lib/postgresql/pb-db.key';
ALTER SYSTEM SET ssl_ca_file TO '/var/lib/postgresql/pb-ca.crt';
ALTER SYSTEM SET ssl_crl_file TO '/var/lib/postgresql/pb-ca.crl';
