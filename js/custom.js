//Variables
let bg_version = getUrlParameter('bg'),
    video = getUrlParameter('video'),
    qls = getUrlParameter('qls'),
    hero = $('.hero'),
    getStartedButton = $('[data-getStarted]'),
    videoContainer = $('.hero-right'),
    modalButton = $('[data-videoModal]'),
    modalCloseButton = $('[data-videoModalClose]');

//Scroll Anim init
AOS.init();


//Update hero based on Variant
switch(bg_version) {
  case '1':
    $(hero).addClass('background-v1');
  break;
  case '2':
    $(hero).addClass('background-v2');
  break;
  case '3':
    $(hero).addClass('background-v3');
  break;
  case '4':
    $(hero).addClass('background-v4');
  break;
  case '5':
    $(hero).addClass('background-v5');
  break;
  default:
    $(hero).addClass('background-v3');
}

//Show video if flaged in url
if(video == '1'){ showVideo();}

//Click events
$(document).ready(function() {
  //Get Started Button
  getStartedButton.click(function() {
    let baseUrl = 'https://www.rocketmortgage.com/l2/bamv2';
    window.location = baseUrl + '?qls=' + qls;
  });
  //Modal Open
  modalButton.click(function() {
    $('.modal-bg').removeClass('u-Hide');
    $('.modal-bg').addClass('d-flex');
  });
  //Modal Close
  modalCloseButton.click(function() {
    $('.modal-bg').addClass('u-Hide');
    $('.modal-bg').removeClass('d-flex');
  });
});


//Functions
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function showVideo() {
  $(videoContainer).removeClass('u-Hide');
  $(videoContainer).addClass('d-Flex');
}
