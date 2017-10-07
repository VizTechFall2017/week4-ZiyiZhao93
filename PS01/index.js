var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(150,100)');

/* Your code goes here */

d3.csv('QingDynastyGround.csv', function (dataIn) {
    console.log(dataIn);

    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return scaleX(d.x)
        })
        .attr('cy', function(d){
            return scaleY(d.y)
        })
        .attr('r', function(d){
            return d.r
        })
        .attr('fill', function(d){
            return d.fill
        });

    svg.append('g')
        .attr('transform', 'translate(0,400)')
        .call(d3.axisBottom(scaleX));

    svg.append('g')
        .call(d3.axisLeft(scaleY));

    svg.append('text')
        .attr('x',300)
        .attr('y',-30)
        .attr('font-size',24)
        .text('Qing Dynasty Ground Change');

    svg.append('text')
        .attr('x',765)
        .attr('y',435)
        .attr('font-size',16)
        .text('Year');

    svg.append('text')
        .attr('transform','rotate(270)')
        .attr('x',-90)
        .attr('y',-50)
        .attr('font-size',16)
        .text('10000 km^2');
});

var scaleX = d3.scaleLinear().domain([1610,1930]).range([0,800]);
var scaleY = d3.scaleLinear().domain([1320,0]).range([0,400]);

function buttonClicked(){
    console.log('here');
}