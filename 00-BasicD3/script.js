var myStyles =
        [
           {
              name: 'Avon Barksdale',
              width: 200,
              color: '#268BD2'
           },
           {
              name: 'Russell "Stringer" Bell',
              width: 230,
              color: '#BD3613'
           },
           {
              name: 'D\'Angelo Barksdale',
              width: 220,
              color: '#BD3613'
           },
           {
              name: 'Bodie',
              width: 290,
              color: '#D11C24'
           },
           {
              name: 'Poot Carr',
              width: 236,
              color: '#C61C6F'
           },
           {
              name: 'Marlo Stanfield',
              width: 230,
              color: '#595AB7'
           },
           {
              name: 'Chris Partlow',
              width: 210,
              color: '#2176C7'
           },
           {
              name: 'Monk Metcalf',
              width: 280,
              color: '#CD3613'
           },
           {
              name: 'Felicia "Snoop" Pearson',
              width: 240,
              color: '#BE3613'
           },
           {
              name: 'Fruit',
              width: 250,
              color: '#BD2502'
           }
        ];

// select before divs exist: time travel
d3.selectAll('#chart').selectAll('div')
        .data(myStyles)
        // changes the data method, sub selection
        .enter().append('div')
        .classed('item', true)
        .text(function(d)
        {
        	return d.name;
        })
        .style({
           'color': 'white',
           'background': function (d)
           {
              return d.color;
           },
           'width': function (d)
           {
              return d.width + 'px';
           }
        });
        
var numbers = [ 21, 39, 79, 49, 48, 29, 26, 66, 12, 61, 90, 49, 43 ];
var numbersMinValue = d3.min(numbers);
var numbersMaxValue = d3.max(numbers);
var numbersLoHiValue = d3.extent(numbers);
console.log(numbersMinValue, numbersMaxValue, numbersLoHiValue);

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
                 key: 'baerclaw',
                 value: 21
              }
           ];
var donutsMinValue = d3.min(donuts, function(d)
  {
    return d.value;
  });
var donutsMaxValue = d3.max(donuts, function(d)
  {
    return d.value;
  });
var donutsLoHiValue = d3.extent(donuts, function(d)
  {
    return d.value;
  });

console.log(donutsMinValue, donutsMaxValue, donutsLoHiValue);

