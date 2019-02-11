import dj_database_url


DATABASE_ENGINE_POSTGRESQL = 'django.contrib.gis.db.backends.postgis'

DATABASES = {
    'default': dj_database_url.config(default='postgres:///'),
}
