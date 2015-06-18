@import  
(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.menu());
    
    var tasks = new TaskCollection();
    task.fetch().then(function(){
      console.log();
    });
  });
})();
