const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/movies', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));





const Movie = mongoose.model('Movie', {  
  title: String,
  genre: String,
  plot: String
});

Movie.create([
  {
    title: 'Back to the Future IV.V',
    genre: 'History',
    plot: 'Historical representation of our timeline'
  },
  {
    title: 'Fast & the Furious 29',
    genre: 'SciFi',
    plot: 'Cyborg Rock still cannot catch Dom or Brian'
  },
  {
    title: 'Star Wars XXV',
    genre: 'Adventure',
    plot: 'Jedi and the Sith join forces against the Jar Jar Binks and the Gungans'
  }
])