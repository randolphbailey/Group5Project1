## Oh The Places We Could Go!
***
## Description
User can do a text search (street address, business name) or drop a pin on the map to display Google Places information. Displays tweets geo-tagged in the area as well as a list of the most common hashtags used in that location.
***
## APIs
*[Twitter Search](https://developer.twitter.com/en/docs/tweets/search/overview/standard.html)
*[Google Maps] (https://developers.google.com/maps/documentation/)

## Firebase - Jimin Huh (Database & User Authentication)
Firebase was used for 2 main purposes in this project.

The first main use was to grab user authentication via Google sign-in, allowing us to store individualized data depending on the user.

When a user logs in via google OAuth, user then is stored as a unique uid. *(Line 21 - 50)

This uid is then stored in Firebases' Realtime Database, allowing the data to be kept seperate and dynamic. *(Line 54 - 80)


Through this, a user can log in and add a favorite location as a button. When clicking this button, it auto-populates the search bar with the direct address, saving time and effort of needing to remember the exact address.

## Google Maps and Associated APIs
Three Google APIs were used for this project.

The first was the main map API.  This simply takes an arbitrary, empty div tag and generates a new Google map inside of it.  Various options such as the height and width of the map can be changed through the CSS of the div tag.

The second was the places API.  The primary purpose of this is actually to enable search functionality.  This is, again, accomplished by pointing the API to an arbitrary text box, which the API then changes to enable features such as suggested results via AJAX.  The places API is also necessary to get place names of thing searched for so that this may be passed to the Twitter API.

The final API is the geocoding API.  This serves as an add on to the map and places APIs, and returns information needed by the Twitter API for locations or searches that might be ambiguous.  Searching for "Tokyo," for instance, does not yield information that can reliably be searched for.  The geocoding API solves this, and can also find place names based on addresses, instead of name.

A future improvement would be to enable Tweet searching simply by clicking a POI in the map element, and passing the info of that to the Twitter API.  This proved to be significantly more difficult than expected.