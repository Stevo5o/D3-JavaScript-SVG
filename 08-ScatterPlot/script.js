/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {
   var w = 800;
   var h = 450;
   var margin = {
      top: 60,
      bottom: 80,
      left: 80,
      right: 80
   };
   var width = w - margin.left - margin.right;
   var height = h - margin.top - margin.bottom;
   var svg = d3.select( "body" ).append( "svg" )
           .attr( "id", "chart" )
           .attr( "width", w )
           .attr( "height", h );
   var chart = svg.append( "g" )
           .classed( "display", true )
           .attr( "transform", "translate(" + margin.left + "," + margin.top + ")" );
   var x = d3.scale.linear()
           .domain( d3.extent( data, function ( d )
           {
              return d.age;
           } ) )
           .range( [ 0, width ] );
   var y = d3.scale.linear()
           .domain( [ 1, 5 ] )
           .range( [ height, 0 ] );
   var responseScale = d3.scale.linear()
           .domain( d3.extent( data, function ( d )
           {
              return d.responses;
           } ) )
           .range( [ 2, 15 ] );
   function plot( params )
   {
      var self = this;
      var donuts = d3.keys( params.data[0] ).filter( function ( d )
      {
         return d !== "age" && d !== "responses";
      } );

      this.selectAll( ".donut" )
              .data( donuts )
              .enter()
                .append( "g" )
                .attr( "class", function ( d )
                {
                   return d;
                } )
                .classed("donut", true);

      donuts.forEach(function(donut)
      {
          var g = self.selectAll("g." + donut );
          var arr = params.data.map(function(d)
            {
              return{
                key: donut,
                value: d[donut],
                age: d.age,
                responses: d.responses
              };
            });
          // enter()
          g.selectAll(".response")
              .data(arr)
              .enter()
                  .append("circle")
                  .classed("response", true)

          // update()
          g.selectAll(".response")
              .attr("r", function(d)
              {
                  return responseScale(d.responses);
              })
              .attr("cx", function(d)
              {
                  return x(d.age);
              })
              .attr("cy", function(d)
              {
                  return y(d.value);
              })

          // exit()
          .selectAll(".response")
              .data(arr)
              .exit()
              .remove();
      });
   }
   plot.call( chart, {
      data: data
   } );
}() );