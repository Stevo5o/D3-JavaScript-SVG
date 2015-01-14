var myStyles =
        [
           {
              width: 200,
              color: '#268BD2'
           },
           {
              width: 230,
              color: '#BD3613'
           },
           {
              width: 220,
              color: '#BD3613'
           },
           {
              width: 290,
              color: '#D11C24'
           },
           {
              width: 236,
              color: '#C61C6F'
           },
           {
              width: 230,
              color: '#595AB7'
           },
           {
              width: 210,
              color: '#2176C7'
           },
           {
              width: 280,
              color: '#CD3613'
           },
           {
              width: 240,
              color: '#BE3613'
           },
           {
              width: 250,
              color: '#BD3612'
           }
        ];
        
d3.selectAll('.item')
        .data(myStyles)
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
