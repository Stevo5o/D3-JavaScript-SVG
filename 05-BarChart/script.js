/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {
   var data =
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
              },
              {
                 key: 'Crumb',
                 value: 78
              },
              {
                 key: 'Chocolate',
                 value: 43
              },
              {
                 key: 'Coconut',
                 value: 20
              },
              {
                 key: 'Cream',
                 value: 16
              },
              {
                 key: 'Cruller',
                 value: 30
              },
              {
                 key: 'Éclair',
                 value: 8
              },
              {
                 key: 'Fritter',
                 value: 17
              },
              {
                 key: 'Bearclaw',
                 value: 21
              }
           ];
   var w = 800;
   var h = 450;
   var margin = {
      top: 20,
      bottom: 40,
      left: 80,
      right: 20
   };
   var width = w - margin.left - margin.right;
   var height = h - margin.top - margin.bottom;
   var x = d3.scale.linear()
           .domain( [ 0, d3.max( data, function ( d )
              {
                 return d.value;
              } ) ] )
           .range( [ 0, width ] );
   var y = d3.scale.ordinal()
           .domain( data.map( function ( entry )
           {
              return entry.key;
           } ) )
           .rangeBands( [ 0, height ] );
   var linearColorScale = d3.scale.linear()
           .domain( [ 0, data.length ] )
           .range( [ "#572500", "#F68026" ] );
   var ordinalColorScale = d3.scale.category20();
   var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom'); 
   var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left'); 
   var svg = d3.select( "body" ).append( 'svg' )
           .attr( 'id', 'chart' )
           .attr( 'width', w )
           .attr( 'height', h );
   var chart = svg.append( 'g' )
           .classed( 'display', true )
           .attr( 'transform', 'translate(' + margin.left + ',' + margin.top + ')' );

   plot = function ( params )
   {
      this.selectAll( ".bar" )
              .data( params.data )
              .enter()
              .append( 'rect' )
              .classed( 'bar', 'true' )
              .attr( 'x', 0 )
              .attr( 'y', function ( d, i )
              {
                 return y( d.key );
              } )
              .attr( 'height', function ( d, i )
              {
                 return y.rangeBand() - 1;
              } )
              .attr( 'width', function ( d )
              {
                 return x( d.value );
              } )
              .style( "fill", function ( d, i )
              {
                return ordinalColorScale(i);
                 // return linearColorScale( i );
              } );
      this.selectAll( ".bar-label" )
              .data( params.data )
              .enter()
              .append( 'text' )
              .classed( 'bar-label', true )
              .attr( 'x', function ( d )
              {
                 return x( d.value );
              } )
              .attr( 'dx', -4 )
              .attr( 'y', function ( d, i )
              {
                 return y( d.key );
              } )
              .attr( 'dy', function ( d, i )
              {
                 return y.rangeBand() / 1.5 + 2;
              } )
              .text( function ( d )
              {
                 return d.value;
              } )
      this.append('g')
              .classed('x axis', true)
              .attr('transform', "translate(" + 0 + "," + height + ")")
              .call(xAxis); 

      this.append('g')
              .classed('y axis', true)
              .attr('transform', "translate(0,0)")
              .call(yAxis);
   };
   plot.call( chart, {
      data: data
   } );
}() );