d3.select("#leftText")
.append("p")
.append("text")
.text("The bar chart above displays how many extra points were made from 2010-2016. HOVER over the bars to see how many were made and attmepted. The Scatter Plot shows in the 2016 season how accurate kickers were on both field goals and extra points.")

d3.select("#rightText")
.append("p")
.append("text")
.text("The bar chart above displays how many field goals were made from 2010-2016. HOVER over the bars to see how many were made and attmepted.")




var margin = {top: 30, bottom: 100, right:30, left: 70};
   var width = 700 - margin.left - margin.right;
    var height = 450 - margin.top - margin.bottom;
var svg = d3.select("#barchart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");



       var initGraph1 =function(extraPoint){
    var subgroups = extraPoint.columns.slice(0)
    
//var groups = d3.map(extraPoint, function(d){return(d.group)}).keys()

console.log("valuegggs", subgroups);
console.log("values3", extraPoint);
           
           
           
  var xScale = d3.scaleBand()
        .domain([0,54])
        .range([0,width])

    var yScale = d3.scaleLinear()
        .domain([0,400])
        .range([ 0, height])
    
    
    
//name           
var namesValus = [];
          
extraPoint.forEach(gettingName);

           
function gettingName(item, index) {
  namesValus.push(item.Name) 
}

console.log("values4", namesValus);
           
//add X
var x = d3.scaleBand()
.domain(namesValus)
.range([0,width])
.padding([-.2])
svg.append("g")
    .attr("class", "text")
.attr("transform", "translate("+(0)+","+(height)+")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-12,5)rotate(-75)")
.style("text-anchor", "end");
           console.log(height);
           

     
            
           
//add y
var y = d3.scaleLinear()
.domain([0,400])
.range([height, 0])
svg.append("g")
.call(d3.axisLeft(y));

//show the bars
svg.append("g")
.selectAll("rect")
.data(extraPoint)
.enter()
.append("rect")
.attr("width", function(d){return 8})
.attr("height", function(d){return yScale(parseInt(d.extraPointMade));})
.attr("fill","black")
.attr("x", function(d,i){return i*11.6})
.attr('y', function(d){ return (height - parseInt(yScale(d.extraPointMade))); })
           
           
//tooltip
.on("mouseenter" ,function(extraPoint)
      {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
    
        d3.select("#attempted")
        .text("Attempted:"+extraPoint.extraPointAttempted);
        d3.select("#made")
        .text("Made:"+extraPoint.extraPointMade);
        
        
        
      })//tool tip off
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
    })

         
 var labels = d3.select("svg")
    .append("g")
    .classed("labels", true);
    
    labels.append("text")
    .text("NFL Extra Points 2010-2016")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+(width/2))
    .attr("y", margin.top-5)
    
    labels.append("text")
    .text("Player")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+width/2)
    .attr("y", height+(margin.bottom+margin.top-5))
    
    labels.append("g")
    .attr("transform", "translate(20,"+(margin.top+(height/2))+")")
    .append("text")
    .text("Made Extra Points")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(90)")
}
           
           

       
       
       
       
       
       
       
       
       
       
       
       
//Start of my second graph
       var svg2 = d3.select("#fieldGoals")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

       
       
     var initGraph2 =function(fieldGoal){
    var subgroups = fieldGoal.columns.slice(0)
    
var groups = d3.map(fieldGoal, function(d){return(d.group)}).keys()

console.log("valuegggs", subgroups);
console.log("values3", fieldGoal);
           
            var xScale = d3.scaleBand()
        .domain([0,100])
        .range([0,width])

    var yScale = d3.scaleLinear()
        .domain([0,200])
        .range([0, height])
    
    
           
var namesValus = [];
          
fieldGoal.forEach(gettingName);

           
function gettingName(item, index) {
  namesValus.push(item.Name) 
}

console.log("values4", namesValus);
           
//add X
var x = d3.scaleBand()
.domain(namesValus)
.range([0,width])
.padding([-.2])
svg2.append("g")
.attr("transform", "translate("+(0)+","+(height)+")")
         .attr("class", "text")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-12,5)rotate(-75)")
.style("text-anchor", "end");           console.log(height)

//add y
var y = d3.scaleLinear()
.domain([0,200])
.range([height, 0])
svg2.append("g")
.call(d3.axisLeft(y));

//show the bars
svg2.append("g")
.selectAll("g")
.data(fieldGoal)
.enter()
.append("rect")
.attr("width", function(d){return 8})
.attr("height", function(d){return yScale(parseInt(d.fieldGoalMade));})
.attr("fill","black")
.attr("x", function(d,i){return i*11.6})
.attr('y', function(d){ return (height - parseInt(yScale(d.fieldGoalMade))); })
         
    //tooltip
.on("mouseenter" ,function(fieldGoal)
      {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip2")
        .classed("hidden2",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
    
    d3.select("#made2")
        .text("Made:"+fieldGoal.fieldGoalMade);
        
        d3.select("#attempted2")
        .text("Attempted:"+fieldGoal.fieldGoalAttempted);
        
        
      })//tool tip off
    .on("mouseleave",function()
    {
        d3.select("#tooltip2")    
        .classed("hidden2",true);
    })              
         
         

var labels = d3.select("#fieldGoals svg")
    .append("g")
    .classed("labels", true);
    
    labels.append("text")
    .text("NFL Field Goals 2010-2016")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+width/2)
    .attr("y", margin.top-5)
    
    labels.append("text")
    .text("Player")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+width/2)
    .attr("y", height+(margin.bottom+margin.top-5))
    
    labels.append("g")
    .attr("transform", "translate(20,"+(margin.top+(height/2))+")")
    .append("text")
    .text("Made Field Goals")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(90)")
         
         
         
     }
       
     
     
     
     
     
    
     //start of my scatter plot graph 
   initGraph3 = function(percentages){
     var margins = {top: 35, bottom: 40, right:50, left: 60},
    width = 750 - margins.left - margins.right,
    height = 300 - margins.top - margins.bottom;
       
var svg3 = d3.select("#scatterPlot")
  .append("svg")
    .attr("width", width + margins.left + margins.right)
    .attr("height", height + margins.top + margins.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margins.left + "," + margins.top + ")");
       
       //add x axis
     var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width ]);
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
       
       // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg3.append("g")
    .call(d3.axisLeft(y));           
    
       //add dots
    svg3.append('g')
    .selectAll("dot")
    .data(percentages.filter(function(d,i){return i<50})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.extraPointPercentage); } )
      .attr("cy", function (d) { return y(d.fieldGoalPercentage); } )
      .attr("r", 7)
      .style("fill", "black")
      .style("opacity", 1)
      .style("stroke", "green")
    //tooltip
       
.on("mouseenter" ,function(percentages)
      {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip3")
        .classed("hidden3",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
    
    d3.select("#fieldGoal")
        .text(percentages.fieldGoalPercentage+"% on Field Goals");
        
        d3.select("#extraPoint")
        .text(percentages.extraPointPercentage+"% on Extra Points");
        
        d3.select("#name")
        .text("Player:"+" "+percentages.Name)
        
        
      })//tool tip off
    .on("mouseleave",function()
    {
        d3.select("#tooltip3")    
        .classed("hidden3",true);
    })   

var labels = d3.select("#scatterPlot svg")
    .append("g")
    .classed("labels", true);
    
    labels.append("text")
    .text("NFL Percentages 2016")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+width/2)
    .attr("y",  margins.top-10)
    
    labels.append("text")
    .text("Extra Points")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+width/2)
    .attr("y",height+(margins.bottom+margins.top-5))
    
    labels.append("g")
    .attr("transform", "translate(20,"+(margins.top+(height/2))+")")
    .append("text")
    .text("Field Goals")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(90)")
       
       

     
     
   }
     
     
     
var succFCN = function(values)
{
    console.log("values", values);
    var extraPoint = values[0];
    var fieldGoal = values[1];
    var percentages = values[2];
  initGraph1(extraPoint)
    initGraph2(fieldGoal)
    initGraph3(percentages)
}

var failFCN = function(error)
{
    console.log("error", error);
}


var extraPointPromise = d3.csv("data/extraPoints.csv")
var fieldGoalPromise = d3.csv("data/fieldGoals.csv")
var percentagesPromise = d3.csv("data/percentages.csv")

var promises = [extraPointPromise, fieldGoalPromise, percentagesPromise];

Promise.all(promises)
.then(succFCN, failFCN)
