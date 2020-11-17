
var margin = {top: 20, bottom: 10, right:30, left: 50},
    width = 4000 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
var svg = d3.select("#barchart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

       initGraph=function(extraPoint){
    var subgroups = extraPoint.columns.slice(0)
    
var groups = d3.map(extraPoint, function(d){return(d.group)}).keys()

console.log("valuegggs", subgroups);
console.log("values3", extraPoint);
           
           
           
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
.attr("tranform", "translate("+0+","+0+")")
.call(d3.axisTop(x));
           console.log(height)

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
.attr("Y", function(d){return 0})

}


var succFCN = function(values)
{
    console.log("values", values);
    var extraPoint = values[0];
    var fieldGoal = values[1];
    var percentages = values[2];
    initGraph(extraPoint)
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
