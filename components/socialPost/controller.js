"use strict"; {
 angular.module('app')
   .controller('SocialController', function(){
      const $ctrl = this;

      $ctrl.posts = [
        {title: "test", thought: "placeholder"}
      ]

      $ctrl.newPost = function() {
        $ctrl.posts.push ({title: $ctrl.newTitle, thought: $ctrl.newThought});
        $ctrl.newpost = '';
    
      }
   });
 }  



 
