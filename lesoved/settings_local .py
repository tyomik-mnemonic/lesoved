#SITE_BASE_URL = 'http://local.forest:9001/'

# REDIS_PORT = 63801

DEBUG = True
# DEBUG_SQL = True
# DEBUG_TOOLBAR = True

# REDIS_ENABLED = False
# CACHEOPS_ENABLED = False
# CELERY_ENABLED = False

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'lesoved',
        'USER': 'postgres',
        'HOST': '172.17.0.2',
        'PASSWORD': 'ololopostgres88',
        'PORT': '5432',
        'OPTIONS': {
            'options': '-c search_path=forest'
        }
    }
}
