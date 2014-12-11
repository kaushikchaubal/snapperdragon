(function() {
  var app = angular.module('learn', []);

  app.controller('StoreController', function() {
    this.products = courseList;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var courseList = [{
      name: 'Basic Java',
      description: "This course goes through the basic concepts of Java",
      shine: 8,
      level: "Basic",
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this course!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 2,
        body: "This course was too basic",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Node JS',
      description: "Get on the bleeding edge of back-end technology using this course",
      shine: 9,
      level: "Intermediate",
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this course was just OK, could honestly use more hands-on experience",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "This course was PERFECT for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Performance Measure and Attribution',
      description: "This topic covers the fundmantels of Performance Measure and Attribution",
      shine: 70,
      level: "Advanced",
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This course is WAY too in-depth for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Oh my! I love fund management after this!",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 5,
        body: "This feels like the course I always was looking for",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();
