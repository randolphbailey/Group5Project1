## Oh The Places We Could Go!
***
## Description
User can do a text search (street address, business name) or drop a pin on the map to display Google Places information. Displays tweets geo-tagged in the area as well as a list of the most common hashtags used in that location.
***
## APIs
*[Twitter Search](https://developer.twitter.com/en/docs/tweets/search/overview/standard.html)
*[Google Maps] (https://developers.google.com/maps/documentation/)
***
## Firebase - Jimin Huh (Database & User Authentication)
Firebase was used for 2 main purposes in this project.

The first main use was to grab user authentication via Google sign-in, allowing us to store individualized data depending on the user.

When a user logs in via google OAuth, user then is stored as a unique uid. *(Line 21 - 50)

This uid is then stored in Firebases' Realtime Database, allowing the data to be kept seperate and dynamic. *(Line 54 - 80)

Through this, a user can log in and add a favorite location as a button. When clicking this button, it auto-populates the search bar with the direct address, saving time and effort of needing to remember the exact address.