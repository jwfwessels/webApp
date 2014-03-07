 var Mocks = {};

 Mocks.generateBookings = function(list, count) {
     console.log("args: " + list + " " + count);
     for (var i = 0; i < count; i++) {
         list.add({
             name: i
         });
     }
 };

 console.log("loaded Mocks");
