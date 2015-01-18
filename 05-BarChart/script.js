/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {
   var w = 800;
   var h = 450;
   var data = [ 132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21 ];
   var x = d3.scale.linear()
           .domain( [ 0, d3.max( data ) ] )
           .range( [ 0, w ] );
   var y = d3.scale.linear()
           .domain( [ 0, data.length ] )
           .range( [ 0, h ] );

   var svg = d3.select( "body" ).append( 'svg' )
           .attr( 'id', 'chart' )
           .attr( 'width', w )
           .attr( 'height', h );

   svg.selectAll( ".bar" )
           .data( data )
           .enter()
           .append( 'rect' )
           .classed( 'bar', 'true' )
           .attr( 'x', 0 )
           .attr( 'y', function ( d, i )
           {
              return y( i );
           } )
           .attr( 'width', function ( d, i )
           {
              return x( d );
           } )
           .attr( 'height', function ( d, i )
           {
              return y( 1 ) - 1;
           } );
   svg.selectAll( ".bar-label" )
           .data( data )
           .enter()
            .append( 'text' )
            .classed( 'bar-label', true )
            .attr( 'x', function ( d, i )
            {
               return x( d );
            } )
            .attr( 'y', function ( d, i )
            {
               return y( i );
            } )
            .attr( 'dx', -4 )
            .attr( 'dy', function ( d, i )
            {
               return y( 1 ) / 1.5 + 2;
            } )
            .text( function ( d, i )
            {
               return d;
            } );
}() );