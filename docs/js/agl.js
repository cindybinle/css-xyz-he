angular.module("app", []).controller('s1_nav_controller', function($scope){
  $scope.info_s1_nav_controller=[{
    link :"#top",
    text: "Hello"
  },{
    link :"#about",
    text: "About Me"
  },{
    link :"#skills",
    text: "Skills and Abilities"
  },{
    link :"#education",
    text: "Education"
  },{
    link :"#work",
    text: "Work Experience"
  },{
    link :"#portfolio",
    text: "Portfolio"
  },{
    link :"#download",
    text: "Social Networks"
  },{
    link :"#contacto",
    text: "Contact Me"
  }]
})
  .controller('s1_more_about_controller', function($scope) {
    $scope.info_s1_more_about_controller=[{
      img: "img/hacker.png",
      title: "Programmer",
      text: "I'm start learn programming from 2011. I also like design. I'm alway design for my life."
    },{
      img: "img/creative.png",
      title: "Creative",
      text: "I'm interested in creative. I am willing to do anything just because of my creative."
    },{
      img: "img/travel.png",
      title: "Travel",
      text: "I like travel in freetime. Place i visited: HoiAn , NhaTrang, Singapore, HoChiMinh, QuyNhon..."
    }]
  });