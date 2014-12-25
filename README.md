IPAMpy
======

_IP Management based on Python's Django Web Framework_

#### Features
* IPv4/IPv6 inventory management
* Create/Modify/Delete Network Segments, Networks, Hosts, Vlans, Vrfs 
* Resize, split or truncate Networks

#### Development
* Complete RESTful API
* Object filters, searching and changelogs
* User and Group permissions
* Token or Password authentication
* Modular, extendable, and very developer-friendly

#### Installation
1. Change Directory to Webspace

    ```
    # cd /path/to/webspace
    ```

2. Clone repository

    ```
    # git clone https://github.com/bensnyde/ipampy.git
    ```

3. Change Directory to ./ipampy

    ```
    # cd ./ipampy
    ```

4. Install dependencies

    ```
    # pip install -r requirements.txt
    ```

#### Configuration
1. Rename settings_database.py-sample to settings_database.py

    ```
    # cp ipampy/settings/settings_database.py-sample ipampy/settings/settings_database.py
    ```

2. Rename settings_secret_key.py-sample to settings_secret_key.py

	```
	# cp ipampy/settings/settings_secret_key.py-sample ipampy/settings/settings_secret_key.py
	```

3. _Optional_ set DEBUG = False in ipampy/settings.py

4. Populate the database

    ```
    # python ipampy/manage.py migrate
    ```

5. Setup Webserver

    * Production

        _https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/modwsgi/_

    * Development

        ```
        # python ipampy/manage.py runserver
        ```

#### Usage
1. Open website in browser
	* Default Username: admin
	* Default Password: ipampy


**Complete RESTful API documentation at API_DOCS.md**
