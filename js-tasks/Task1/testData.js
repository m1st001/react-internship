function getNewReleases() {
    var newReleases = [{

        "id": 70111470,

        "title": "Die Hard",

        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",

        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",

        "rating": [4.0],

        "bookmark": []

}, {

        "id": 654356453,

        "title": "Bad Boys",

        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",

        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",

        "rating": [5.0],

        "bookmark": [{ id: 432534, time: 65876586 }]

}, {

        "id": 65432445,

        "title": "The Chamber",

        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",

        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",

        "rating": [4.0],

        "bookmark": []

}, {

        "id": 675465,

        "title": "Fracture",

        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",

        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",

        "rating": [5.0],

        "bookmark": [{ id: 432534, time: 65876586 }]
    }];

    return newReleases;
}
exports.getNewReleases = getNewReleases;

function getMovieLists() {
    var movieList = [{

        name: "Instant Queue",

        videos : [{

                "id": 70111470,

                "title": "Die Hard",

                "boxarts": [{

width: 150,

height: 200,
url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"

}, {

width: 200,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"

}],

                "url": "http://api.netflix.com/catalog/titles/movies/70111470",

                "rating": 4.0,

                "bookmark": []

        }, {

                "id": 654356453,

                "title": "Bad Boys",

                "boxarts": [{

width: 200,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"

}, {

width: 150,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"

}],

                "url": "http://api.netflix.com/catalog/titles/movies/70111470",

                "rating": 5.0,

                "bookmark": [{ id: 432534, time: 65876586 }]

        }]

}, {

        name: "New Releases",

        videos: [{

                "id": 65432445,

                "title": "The Chamber",

                "boxarts": [{

width: 150,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"

}, {

width: 200,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"

}],

                "url": "http://api.netflix.com/catalog/titles/movies/70111470",

                "rating": 4.0,

                "bookmark": []

        }, {

                "id": 675465,

                "title": "Fracture",

                "boxarts": [{

width: 200,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"

}, {

width: 150,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"

}, {

width: 300,

height: 200,

url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"

}],

                "url": "http://api.netflix.com/catalog/titles/movies/70111470",

                "rating": 5.0,

                "bookmark": [{ id: 432534, time: 65876586 }]

        }]

    }];

    return movieList;
}
exports.getMovieLists = getMovieLists;

function getBoxarts() {
    var boxarts = [{

        width: 200,

        height: 200,

        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"

    }, {

        width: 150,

        height: 200,

        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"

    }, {

        width: 300,

        height: 200,

        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"

    }, {

        width: 425,

        height: 150,

        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"

    }];

    return boxarts;
}
exports.getBoxarts = getBoxarts;

function getVideos() {
    var videos = [{

        "id": 65432445,

        "title": "The Chamber"

    }, {

        "id": 675465,

        "title": "Fracture"

    }, {

        "id": 70111470,

        "title": "Die Hard"

    }, {

        "id": 654356453,

        "title": "Bad Boys"

    }];

    return videos;
}
exports.getVideos = getVideos;