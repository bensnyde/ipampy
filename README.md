ipampy
======

_IP Management based on Python's Django Web Framework_

#### Installation

    1. Change Directory to Webspace

        ```
        # cd /path/to/webspace
        ```

    2. Clone repository

        ```
        # git clone https://github.com/bensnyde/ipampy.git```
        ```

    3. Install dependencies

        ```
        # pip install -r ipampy/requirements.txt
        ```

#### Configuration

    1. Rename ipampy/settings/settings_database.py-sample to ipampy/settings/settings_database.py
        ```# cp ipampy/settings/settings_database.py-sample ipampy/settings/settings_database.py```
    2. Rename ipampy/settings/settings_secret_key.py-sample to ipampy/settings/settings_secret_key.py
    	```# cp ipampy/settings/settings_secret_key.py-sample ipampy/settings/settings_secret_key.py```
    3. Populate the database
        ```# python ipampy/manage.py migrate```

#### Usage

	1. Configure webserver
		- https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/modwsgi/
		- ```# python ipampy/manage.py runserver```
	2. Open site in browser
		- Default Username: admin
		- Default Password: ipampy

**IPAMPY uses a complete RESTful API. API documentation at API_DOCS.MD**