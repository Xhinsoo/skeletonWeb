Virtual properties:
Are documents that you can get/set but does not persist in MongoDB.
The getters are useful for formatting or combining fields. firstName + LastName = FullName, path + user._id = url
Setters aer useful for de-composing a single values into multiple values for storage.