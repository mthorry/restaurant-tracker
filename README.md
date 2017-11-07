# Spots App 🍽
"Spots App" was created with a React frontend and Ruby on Rails backend. Created with @jnmiele. Users can save their favorite bars and restaurants ('spots') from the Yelp API. Users can sort their saved spots by name, price and/or rating.

## Backend
We created the backend of our app using Ruby on Rails. We used the Yelp API and fetch requests are done from the backend.
The models are `User`, `Restaurant` and `Spot`. A `User` can have many `spots`, and many `restaurants` through `spots`. The `Spot` model is the join table between `Restaurant` and `User` and holds a user's comments about the spot.

`User` and `Spot` models required a controller as CRUD actions are available to these models and the `spots_controller` also handled the creation of new `restaurants`. We also have an `auth_controller` for login and a `yelp_controller` for calls to the Yelp API. Active Model Serializers were used to store data.

## Frontend
The frontend was created using React. It has nearly a dozen components with two main containers: `RestaurantsContainer` and `SearchContainer`.

### Spots
**`RestaurantsContainer`** has two children: `RestaurantsList` and `SearchContainer`. We have `SearchContainer` as a child of `RestaurantsContainer` so the `Search` and `Restaurants` containers can communicate and pass props. The chils of `RestaurantsList` is `Spot` which renders the specific restaurant information with the user's comments. `Spots` are displayed in a tiled list with the option to click "My Notes" which toggles the view between user comments and restaurant info.

### Search
**`SearchContainer`** also has three children: `SpotForm`, `SearchResults` and `SearchResult` (which is a child of `SearchResults`). `SearchContainer` is responsible for handling the user's search. Information from the search form is passed to the `yelp_controller` on the backend and results from the API call are handled by `SearchResults` which passes individual restaurant info to `SearchResult` to be displayed. `SpotForm` becomes available after a user selects a restaurant to add from the search results and is responsible for collecting user comments for the restaurant. It then creates a new `spot`.

## Acknowledgements
Our classmates at Flatiron School are always the best and most helpful, so thank you! Also thank you to our instructors Johann Kerr, Lindsey Wells and Andrew Cohn for always giving us great feedback and suggestions.
