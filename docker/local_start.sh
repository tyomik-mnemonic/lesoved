#!/bin/sh

set -e

sleep 7

python3 manage.py migrate --fake-initial --noinput
python3 manage.py loaddata forest renter cutarea forestry_geom
python3 manage.py runserver 0.0.0.0:8000

