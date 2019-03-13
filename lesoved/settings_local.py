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
        'NAME': 'lesovedWBD',
        'USER': 'postgres',
        'HOST': '172.16.16.40',
        'PASSWORD': 'igt_3631',
        'PORT': '25432',
        'OPTIONS': {
            'options': '-c search_path=public'#БД для разработки.
        }
    }
}

'''
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'release',
        'USER': 'postgres',
        'HOST': '172.16.16.40',
        'PASSWORD': 'igt_3631',
        'PORT': '25432',
        'OPTIONS': {
            'options': '-c search_path=public'
        }
    }
}'''#БД для релиза