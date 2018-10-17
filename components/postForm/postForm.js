"use strict";

const postForm = {
    bindings: {
        postForm: "&"
    },
    templateUrl: "components/postForm/postForm.html"
};

angular
    .module("app")
    .component("postForm", postForm);