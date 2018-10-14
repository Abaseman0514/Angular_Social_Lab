"use strict";

const socialPosts = {
    template:`
        <h1 id="title">My Thoughts</h1>
        <section class="maincontainer">
            <button class="buttonthought" ng-click="$ctrl.toggleDisplay();" ng-show="$ctrl.toggleElements">New Thought</button>
            <post-form post-form="$ctrl.postForm(newThought);" ng-hide="$ctrl.toggleElements"></post-form>
            <post 
                delete-thought="$ctrl.deleteThought($index);"
                posted="thought"
                index="$index"
                ng-repeat="thought in $ctrl.posts track by $index"></post>
        </section>
        `,
    controller: function () {
        const $ctrl = this;
        $ctrl.posts = [];
        $ctrl.toggleElements = true;
        $ctrl.toggleDisplay = () => {
            $ctrl.toggleElements = false;
          };
        $ctrl.postForm = (newThought) => {
            $ctrl.posts.unshift(angular.copy(newThought));
        }
        $ctrl.deleteThought = (index) => {
            $ctrl.posts.splice(index, 1);
        }
    }
};


angular
    .module("app")
    .component("socialPosts", socialPosts);