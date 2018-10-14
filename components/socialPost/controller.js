"use strict"; {
 angular.module('app')
   .controller('SocialController', function(){
      const $ctrl = this;

      $ctrl.posts = [
        {title: "test", thought: "placeholder"}
      ]

      $ctrl.newPost = function() {
        $ctrl.posts.push ({title: $post.newTitle, thought: $post.newThought});
        $ctrl.newpost = '';
      }
        
     $ctrl.toggleSelect = (newPost) => {
          newPost.completed = !newPost.completed;
      }

      // $ctrl.toggle = function() {
      //     vm.newPostBlueBox = !newPostBlueBox.newPostBlueBox;
      // };

      });
 }  



 
