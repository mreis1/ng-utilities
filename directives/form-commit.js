/*
*
* Form Commit
* What:
*	A utility class extends your form references inside your scopes
* Why: 
* 	
*/

angular.module('YOUR_MODULE')
  .directive('ngFormCommit', [function () {
      return {
        require: 'form',
        /**
         * <form ng-form-commit name="frmTest"></form>
         *
         *  $scope.frmTest.commit(function(formEl){  formEl.submit()  })
         *  // With formEl we can access the form element directly and event trigger the submit
         */
        link: function ($scope, $el, $attr, $form) {
          $form.commit = function (cb) {
            if (typeof cb === "function"){
              cb($el[0]);
            }
          };
        }
      };
    }
  ]);
