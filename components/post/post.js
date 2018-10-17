"use strict";
const post = {
    bindings: {
        posted: "<",
        index: "<",
        deleteThought: "&"
    },
    templateUrl: "components/post/post.html"
};

angular
    .module("app")
    .component("post", post);