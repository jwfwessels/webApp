 var Mocks = {};

 Mocks.generateBookings = function(list, count) {
     console.log("args: " + list + " " + count);
     for (var i = 1; i <= count; i++) {
         list.add({
             name: i
         });
     }
     console.log("list length " + list.length);
 };

 console.log("loaded Mocks");
