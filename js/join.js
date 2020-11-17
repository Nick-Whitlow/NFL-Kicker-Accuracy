var margin = {top: 40, bottom: 100, right:30, left: 70},
    width = 4000 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
var svg = d3.select("#barchart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

 var xScale = d3.scaleBand()
        .domain([0,100])
        .range([0,width])

    var yScale = d3.scaleLinear()
        .domain([0,1])
        .range([height,0])

       var initGraph1 =function(extraPoint){
    var subgroups = extraPoint.columns.slice(0)
    
var groups = d3.map(extraPoint, function(d){return(d.group)}).keys()

console.log("valuegggs", subgroups);
console.log("values3", extraPoint);
           
           
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
.padding([0.2])
svg.append("g")
    .attr("class", "text")
.attr("transform", "translate("+(0)+","+(height)+")")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end");
           console.log(height);
           

     
           
//           var quizMeans = function(penguin){
//    //array of quiz grades
//   var studentQuiz  = penguin.quizes.map(function(quiz){
//        return quiz.grade; 
//    })
//    return d3.mean(studentQuiz).toFixed(2);
//}
//           
           
//add y
var y = d3.scaleLinear()
.domain([0,100])
.range([height, 0])
svg.append("g")
.call(d3.axisLeft(y));

//show the bars
svg.append("g")
.selectAll("g")
.data(extraPoint)
.enter()
.append("rect")
.attr("width", function(d){return 60})
.attr("height", function(d){return parseInt(d.extraPointMade);})
.attr("fill","green")
.attr("x", function(d,i){return i*75.6})
.attr("y", function(d){return 0})
           
           
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
    .text("NFL Extra Point Accuracy 2010-2016")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+(width/2))
    .attr("y", margin.top)
    
    labels.append("text")
    .text("Player")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+width/2)
    .attr("y", height+(margin.bottom+margin.top))
    
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
.padding([0.2])
svg2.append("g")
.attr("transform", "translate("+(0)+","+(height)+")")
         .attr("class", "text")
.call(d3.axisBottom(x))
.selectAll("text")
.attr("transform", "translate(-10,0)rotate(-45)")
.style("text-anchor", "end");           console.log(height)

//add y
var y = d3.scaleLinear()
.domain([0,100])
.range([height, 0])
svg2.append("g")
.call(d3.axisLeft(y));

//show the bars
svg2.append("g")
.selectAll("g")
.data(fieldGoal)
.enter()
.append("rect")
.attr("width", function(d){return 60})
.attr("height", function(d){return parseInt(d.fieldGoalMade);})
.attr("fill","green")
.attr("x", function(d,i){return i*75.6})
.attr("Y", function(d){return 0})
         
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
    .text("NFL Field Goal Accuracy 2010-2016")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left + margin.left + margin.left)
    .attr("y", margin.top)
    
    labels.append("text")
    .text("Player")
    .classed("label", true)
    .attr("text-anchor", "middle")
    .attr("x", margin.left+width/2)
    .attr("y", height+(margin.bottom+margin.top))
    
    labels.append("g")
    .attr("transform", "translate(20,"+(margin.top+(height/2))+")")
    .append("text")
    .text("Made Field Goals")
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
