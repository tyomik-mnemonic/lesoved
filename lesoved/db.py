# import dj_database_url


# DATABASE_ENGINE_POSTGRESQL = 'django.contrib.gis.db.backends.postgis'

# DATABASES = {
#     'default': dj_database_url.config(default='postgres:///'),
# }

DATABASES = {
   'default': {
       'ENGINE': 'django.contrib.gis.db.backends.postgis',
       'NAME': 'lesoved',
       'USER': 'postgres',
       'HOST': '172.17.0.2',
       'PASSWORD': 'igt_3631',
       'PORT': '5432',
       'OPTIONS': {
           'options': '-c search_path=forest'
        }
    }
}
