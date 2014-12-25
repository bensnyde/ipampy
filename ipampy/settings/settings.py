import os
from settings_secret_key import *
from settings_database import *

ALLOWED_HOSTS = []
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
DEBUG = True
LANGUAGE_CODE = 'en-us'
LOGIN_REDIRECT_URL = '/ipam/networks/'
LOGIN_URL = '/login/'
ROOT_URLCONF = 'urls'
TEMPLATE_DIRS = ('templates',)
TEMPLATE_DEBUG = True
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
WSGI_APPLICATION = 'wsgi.application'

MIGRATION_MODULES = {'apps.administration': 'administration'}

STATIC_ROOT = 'static/'
STATIC_URL = '/assets/'
STATICFILES_DIRS = ("templates/assets",)
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'common',
    'apps.administration',
    'apps.ipam',
    'rest_framework',
    'rest_framework.authtoken',
    'simple_history',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.DjangoModelPermissions',
    ),
    'DEFAULT_THROTTLE_CLASSES': (
        'rest_framework.throttling.UserRateThrottle',
    ),
    'DEFAULT_THROTTLE_RATES': {'user': '60/min'},
    'DEFAULT_FILTER_BACKENDS': (
        'rest_framework.filters.DjangoFilterBackend',
    ),
}
