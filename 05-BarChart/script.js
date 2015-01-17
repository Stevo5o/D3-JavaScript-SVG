/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {

   var numbers = [ 21, 39, 79, 49, 48, 29, 26, 66, 12, 61, 90, 49, 43 ];

   // console.log(numbers.join('-'));

   document.getElementById( 'numbers' ).innerHTML = numbers.join( '-' );

   var donut =
           {
              key: 'Glazed',
              value: 132
           };

   // console.log( donut.key, donut.value );

   var donuts =
           [
              {
                 key: 'Glazed',
                 value: 132
              },
              {
                 key: 'Jelly',
                 value: 71
              },
              {
                 key: 'Holes',
                 value: 337
              },
              {
                 key: 'Sprinkles',
                 value: 93
              }
           ];

   // console.log(donuts[1]);

   // console.log( donuts[1].key, donuts[1].value );

   for(var i = 0, len = donuts.length; i < len; i++)
   {
   		console.log(donuts[i].key, donuts[i].value);
   }

   donuts.forEach(function(entry)
   {
   		console.log(entry.key, entry.value);
   });

   // document.getElementById( 'numbers' ).innerHTML = JSON.stringify(donuts);
   // document.getElementById( 'numbers' ).innerHTML = donuts[1].key, donuts[1].value;

}() );