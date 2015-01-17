/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {

   var data = [ 132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21];

   var w = 800;
   var h = 450;
   var svg = d3.select( "body" ).append( 'svg' )
           .attr( 'id', 'chart' )
           .attr( 'width', w )
           .attr( 'height', h );

   svg.selectAll( ".bar" )
           .data( data )
           .enter()
           .append( 'rect' )
           .attr( 'class', 'bar' )
           .attr( 'x', 0 )
           .attr( 'y', function ( d, i )
           {
              return i * 20;
           } )
           .attr( 'width', function ( d, i )
           {
              return d;
           } )
           .attr( 'height', 19 )
}() );