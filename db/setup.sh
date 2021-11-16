#!/bin/bash
set -e

cat << EOF > /var/lib/postgresql/data/pg_hba.conf
# TYPE    DATABASE      USER        ADDRESS     METHOD      OPTIONS
hostssl   postgres      postgres    all         cert        clientcert=verify-full
EOF

echo 'Successfully overwritten pg_hba.conf file'
