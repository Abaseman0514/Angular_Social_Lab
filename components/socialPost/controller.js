"use strict"; {
  angular.module('app')
    .controller('SocialController', function () {
        const $ctrl = this;
        $ctrl.posts = [{
          title: "Dog",
          thought: "Peacocks baa ostriches owls. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Sage mower goat, raccoons rhubarb outhouse"
        },
        {
          title: "Cat",
          thought: "Peacocks baa ostriches owls. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Sage mower goat, raccoons rhubarb outhouse"
        },
        {
          title: "Pig",
          thought: "Peacocks baa ostriches owls. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Sage mower goat, raccoons rhubarb outhouse"
        },
        {
          title: "Cow",
          thought: "Peacocks baa ostriches owls. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Sage mower goat, raccoons rhubarb outhouse"
        },
        {
          title: "Whale",
          thought: "Peacocks baa ostriches owls. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Sage mower goat, raccoons rhubarb outhouse"
        }
      ];
      $ctrl.toggleElements = true;
      $ctrl.toggleDisplay = () => {
        $ctrl.toggleElements = false;
      };
      $ctrl.postForm = (newThought) => {
        $ctrl.posts.unshift(angular.copy(newThought));
        $ctrl.toggleElements = true;
      }
      $ctrl.deleteThought = (index) => {
        $ctrl.posts.splice(index, 1);
      }

        $ctrl.newPost = function () {
          $ctrl.posts.push({
            title: $post.newTitle,
            thought: $post.newThought
          });
          $ctrl.newTitle = '';
        }

        $ctrl.toggleSelect = (newPost) => {
          newPost.completed = !newPost.completed;
        }
      
      });
    }