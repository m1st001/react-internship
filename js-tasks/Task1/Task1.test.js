const {customMap} = require("./Task1");
test('customMap test', () => {
    const array = [1, 2, 3];
    const result = [2, 3, 4];
    expect(array.customMap(x => x + 1)).toEqual(result);
});

const {getNewReleases} = require("./testData");
test('customMap movies array test', () => {
    const result = [{
        "id": 70111470,

        "title": "Die Hard",
    },
    {
        "id": 654356453,

        "title": "Bad Boys",
    }, 
    {
        "id": 65432445,

        "title": "The Chamber",
    }, 
    {
        "id": 675465,

        "title": "Fracture",
    }];

    const newReleases = getNewReleases();
    expect(newReleases.customMap(movie => {
        let movieObj = {};
        movieObj.id = movie.id;
        movieObj.title = movie.title;
        return movieObj;
    })).toEqual(result);
});

const {customFilter} = require("./Task1");
test('customFilter test', () => {
    const array = [1, 2, 3];
    const result = [3];
    expect(array.customFilter(x => x > 2)).toEqual(result);
});

test('customFilter movie.rating test', () => {
    const newReleases = getNewReleases();
    const result = [654356453, 675465];

    expect((newReleases.customFilter(x => x.rating == 5.0)).customMap(x => x.id)).toEqual(result);
});

const {getMovieLists} = require("./testData");
test('customFilter movieList test', () => {
  const movieLists = getMovieLists();
  const result = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
    },

    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
    },

    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
    },

    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
    },
  ];

  // first we get movie objects from lists
  let videos = [];
  movieLists.customMap(movieList => movieList.videos.map(movie => videos.push(movie)));

  videos.customMap(movie => {
    // transforming the .boxarts property into .boxart
    movie.boxart = movie.boxarts.customFilter(boxart => boxart.height == 200 && boxart.width == 150)[0].url;

    // deleting excess proprties
    delete movie.bookmark;
    delete movie.boxarts;
    delete movie.rating;
    delete movie.url;
  });

  expect(videos).toEqual(result);
});


const {customReduce} = require("./Task1");
test('customReduce test', () => {
    const array = [1,2,3];
    const result = 6;
    expect(array.customReduce((accumulator, currentValue) => accumulator + currentValue, 0)).toEqual(result);
});

test('customReduce test 2', () => {
    const array = [1,2,3];
    const result = 16;
    expect(array.customReduce((accumulator, currentValue) => accumulator + currentValue, 10)).toEqual(result);
});

test('customReduce get highest value', () => {
    const array = [2,3,1,4,5];
    const result = 5;
    expect(array.customReduce((highestValue, currentValue) => {
        return highestValue > currentValue ? highestValue : currentValue;
    })).toEqual(result);
});

const {getBoxarts} = require("./testData");
test('customReduce get the biggest boxart', () => {
    const array = getBoxarts();
    const result = "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg";

    array.map(boxart => {
        boxart.area = boxart.height * boxart.width;
    });

    const url = array.reduce((highestValue, currentValue) => {
        return highestValue.area > currentValue.area ? highestValue.url : currentValue.url;
    });

    expect(url).toEqual(result);
});

const {getVideos} = require("./testData");
test('customReduce reduce to object', () => {
    const array = getVideos();
    const result = {
         "65432445": "The Chamber",
         "675465": "Fracture",
         "70111470": "Die Hard",
         "654356453": "Bad Boys"
    };
    let obj = array.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue.title;
        return accumulator;
    }, {});

    expect(obj).toEqual(result);
});