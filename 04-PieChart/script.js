var width = 400,
        height = 400;
radius = 200,
        colors = d3.scale.ordinal()
        .range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);

var piedata = [
   {
      label: "Stringer",
      value: 50
   },
   {
      label: "Bodie",
      value: 50
   },
   {
      label: "Crean",
      value: 80
   },
   {
      label: "Omar",
      value: 20
   },
   {
      label: "Bunk",
      value: 50
   },
   {
      label: "StephCake",
      value: 100
   }
];

var pie = d3.layout.pie()
        .value( function ( d )
        {
           return d.value;
        } )

var arc = d3.svg.arc()
        .outerRadius( radius )

var myChart = d3.select( '#piechart' ).append( 'svg' )
        .attr( 'width', '100%' )
        .attr( 'height', '100%' )
    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    .attr('preserveAspectRatio','xMinYMin')
        .append( 'g' )
        .attr( 'transform', 'translate(' + ( width - radius ) + ', ' + ( height - radius ) + ' )' )
        .selectAll( 'path' ).data( pie( piedata ) )
        .enter().append( 'g' )
        .attr('class', 'slice')

var slices = d3.selectAll('g.slice')
.append('path')
.attr('fill', function(d, i)
{
  return colors(i);
})
.attr('d', arc)

var text = d3.selectAll('g.slice')
.append('text')
.text(function(d, i)
{
  return d.data.label;
})
.attr('text-anchor', 'middle')
.attr('fill', 'white')
.attr('transform', function(d)
{
  d.innerRadius = 0;
  d.outerRadius = radius;
  return 'translate('+ arc.centroid(d) +')'
})

