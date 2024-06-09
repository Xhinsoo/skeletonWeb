Virtual properties:
Are documents that you can get/set but does not persist in MongoDB.
The getters are useful for formatting or combining fields. firstName + LastName = FullName, path + user._id = url
Setters are useful for de-composing a single values into multiple values for storage.

Express provides methods to specify what () to call for particular HTTP verb and url pattern, and methods to specify what template("view") engine is used, where template files are located and what template to use to use to render a response.

Express provide middleware () to add support for cookies, sessions, users auth and so on.

After importing express modules and declaring app, all that express offers is contained in the app obj. 

The app obj has methods for routing HTTP req, configuring middlewares, rendering HTML views, registering a template engine and so on.
