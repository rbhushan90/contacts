angular.module('starter')
.controller('appAvailCtrl', function($scope, $cordovaInAppBrowser, $cordovaSocialSharing){

  var message = "This is a Test Message";
  var subject = "A-Subject";
  var link = "http://www.bbc.co.uk";
  var image = null;

    document.addEventListener("deviceready", onDeviceReady, false);

     function onDeviceReady() {
        alert("device ready");
     }

     $scope.share = function() {
       $cordovaSocialSharing
       .share(message, subject) // Share via native share sheet
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occured. Show a message to the user
         alert("failed to share");
       });
     }

    $scope.openFacebook = function() {
      alert("open FB");
      $cordovaSocialSharing.canShareVia("facebook", message, image, link).then(function(result) {
          $cordovaSocialSharing.shareViaFacebook(message, image, link);
      }, function(error) {
          alert("Cannot share on Facebook");
      });
    }


    $scope.openTwitter = function() {
      $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
          $cordovaSocialSharing.shareViaTwitter(message, image, link);
      }, function(error) {
          alert("Cannot share on Twitter");
      });
    }


    $scope.openWhatsApp = function() {
        $cordovaSocialSharing.canShareVia("whatsapp", message, image, link).then(function(result) {
              $cordovaSocialSharing.shareViaWhatsApp(message, image, link);
        }, function(error) {
              alert("Cannot share on WhatsApp");
        });
    }


    $scope.openSMS = function() {
      $cordovaSocialSharing
       .shareViaSMS(message, "07969606742")
       .then(function(result) {
         // Success!
       }, function(err) {
         // An error occurred. Show a message to the user
           alert("Cannot share on SMS");
       });
     }

     $scope.openEmail = function() {
       var toArr = ['cheng@doctor.com'];

       $cordovaSocialSharing
      //   .shareViaEmail(message, subject, toArr, ccArr, bccArr, file)
         .shareViaEmail(message, subject, toArr)
         .then(function(result) {
           // Success!
         }, function(err) {
           // An error occurred. Show a message to the user
           alert("cannot share on Email");
         });

      }
});
