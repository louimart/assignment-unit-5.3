console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// empty array named myCollection created.
let myCollection = [];

// album objects for reference
let cd1 = {
  title: 'First Love',
  artist: 'Utada Hikaru',
  yearPublished: 1999,
}
let cd2 = {
  title: 'Songs That Made Me Feel',
  artist: 'James Vickery',
  yearPublished: 2021,
}
let cd3 = {
  title: 'Songs in the Key of Life',
  artist: 'Stevie Wonder',
  yearPublished: 1976,
}

let cd4 = {
  title: 'Life is a Song Worth Singing',
  artist: 'Teddy Pendergrass',
  yearPublished: 1978,
}

let cd5 = {
  title: 'What\'s Going On',
  artist: 'Marvin Gaye',
  yearPublished: 1971,
}

let cd6 = {
  title: 'Building Balance',
  artist: 'Allen Stone',
  yearPublished: 2019,
}

let cd7 = {
  title: 'Overture',
  artist: 'James Vickery',
  yearPublished: 2020,
}

// new function addToCollection created.
function addToCollection(collection, title, artist, yearPublished) {
  // console.log(`running addToCollection...`)
  if (collection === myCollection) {
    let collection = {
      title,
      artist,
      yearPublished,
    }
    myCollection.push(collection);
  }
  return collection;
}

// entering myCollection information using the addtoCollection function.
console.log(addToCollection(myCollection, cd1.title, cd1.artist, cd1.yearPublished));
console.log(addToCollection(myCollection, cd2.title, cd2.artist, cd2.yearPublished));
console.log(addToCollection(myCollection, cd3.title, cd3.artist, cd3.yearPublished));
console.log(addToCollection(myCollection, cd4.title, cd4.artist, cd4.yearPublished));
console.log(addToCollection(myCollection, cd5.title, cd5.artist, cd5.yearPublished));
console.log(addToCollection(myCollection, cd6.title, cd6.artist, cd6.yearPublished));
console.log(addToCollection(myCollection, cd7.title, cd7.artist, cd7.yearPublished));

// displaying the updated myCollection.
console.log(myCollection);

// create showCollection
function showCollection(collection) {
  // console.log(`running showCollection...`)
  for (album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
  }
}
showCollection(myCollection);

// new function findByArtist
function findByArtist(collection, artist) {
  // empty array to hold list of matching albums.
  artistMatch = [];
  // for loop to check each album in the passed through collection.
  for (album of collection) {
    // checking if the album artist in the collection matches the specified artist.
    if (album.artist === artist) {
      // adding the matching album in the collection to the artistMatch array.
      artistMatch.push(album);
    }
  }
  // returning the results.
  return artistMatch;
}
// testing the function with and without matching artist
console.log(findByArtist(myCollection, 'James Vickery'));
console.log(findByArtist(myCollection, 'Michael Jackson'));

// Stretch Goal
// search by artist and year
function criteria(artist, year) {
  searchCriteria = {
    artist,
    year,
  }
  return searchCriteria
}
// console.log(criteria('Ray Charles', 1957));
console.log(criteria('James Vickery', 2020));
console.log(searchCriteria)
console.log(`Search criteria includes ${searchCriteria.artist}, ${searchCriteria.year}`);

function search(collection, searchCriteria) {
  searchMatch = [];
  for (album of collection) {
    console.log(album);
    console.log(album.artist);
    console.log(album.yearPublished);
    if (searchCriteria.artist === album.artist && searchCriteria.year === album.yearPublished) {
      console.log(collection.indexOf(album));
      console.log(true);
      searchMatch.push(album);
    } else if (album.artist === undefined || album.year === undefined){
      // console.log(collection.indexOf(album));
      console.log(searchCriteria.artist);
      console.log(searchCriteria.year);
    } else if (searchMatch.length === 0){
      console.log(collection.indexOf(album));
    } else console.log('end');
  } return searchMatch;
}
console.log(search(myCollection, searchCriteria));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
