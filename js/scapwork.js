//current best

var margin = {top: 20, bottom: 10, right:30, left: 50},
    width = 4000 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
var svg = d3.select("#barchart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");

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
.attr("tranform", "translate("+0+","+0+")")
.attr("transform", "rotate(90)")
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
.attr("tranform", "translate("+0+","+0+")")
.call(d3.axisTop(x));
           console.log(height)

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



//wong with attempted draw axis


var margin = {top: 20, bottom: 10, right:30, left: 50},
    width = 4000 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
var graph = {width, height};
var svg = d3.select("#barchart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate("+margin.left+","+margin.top+")");
    

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
           
var xScale = d3.scaleLinear()
        .domain([0,namesValus])
        .range([0,graph.width])

    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])
    
    
var drawAxes = function(graph,margin,
                        xScale,yScale)
{
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var axes = d3.select("#barchart")
    .append("g"); 
    axes.append("g")
    .attr("transform", "translate("+margin.left+","+(margin.top+graph.height)+")")
    .call(xAxis);
   
    axes.append("g")
    .attr("transform", "translate("+margin.left+","+(margin.top)+")")
    .call(yAxis);
    
}
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

    drawAxes(graph,margin,xScale,yScale)  ;     
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
.attr("tranform", "translate("+0+","+0+")")
.call(d3.axisTop(x));
           console.log(height)

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


















//wrong
var succFCN = function(values)
{
    console.log("values", values);
    var extraPoint = values[0];
    var fieldGoal = values[1];
    var percentages = values[2];
    initGraph3(extraPoint);
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

//Bars
//Excellent
var drawExtraPoint = function(extraPoint,target,graphDim,
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(extraPoint)
        .enter()
        .append("g")
        .classed("bar",true)
    

    
    console.log(extraPoint[0])
    target.selectAll("rect")
    .data(extraPoint[1])
    .enter()
    .append("rect")
    .attr("x",function(extraPoint,index){
            console.log("index:",index)
            console.log("XP:",extraPoint)
            console.log("XP[0]:",extraPoint)
            console.log("Key: ",(extraPoint[0].key))
            //return xScale(index)
            return index * 165
    })
    
    .attr("y",function(extraPoint){
        console.log((extraPoint))
        return yScale(extraPoint[1])
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(extraPoint){
        console.log((extraPoint))
        return graphDim.height-(yScale((extraPoint[1]))
        
    )})
       .attr("fill",function(extraPoint){
        return colorScale("Lot")})
  //    tooltip
     .on("mouseover",function(extraPoint)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text(((extraPoint[1]-extraPoint[0])+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(extraPoint)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}

//Good
var drawRating2 = function(extraPoint,target,graphDim,
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(extraPoint)
        .enter()
        .append("g")
        .classed("bar",true)
    
       console.log(xScale.bandwidth)
    console.log(extraPoint[1])
    target.selectAll("rect")
    .data(extraPoint[1])
    .enter()
    .append("rect")
    .attr("x",function(extraPoint,index){
    console.log(index)
            //return xScale(index)
            return index * 165
    })
    
    .attr("y",function(extraPoint){
        console.log((extraPoint))
        return yScale(extraPoint[1]) 
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(extraPoint){
        console.log(yScale(extraPoint[0]))
        console.log(graphDim.height)
          return graphDim.height-(yScale((extraPoint[1]) - (extraPoint[0])))
    })
       .attr("fill",function(extraPoint){
        return colorScale("Little")})
  //    tooltip
     .on("mouseover",function(extraPoint)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text(((extraPoint[1]-extraPoint[0])+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(extraPoint)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
//Fair
var drawRating3 =function(extraPoint,target,graphDim,
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(extraPoint)
        .enter()
        .append("g")
        .classed("bar",true)
    
       console.log(xScale.bandwidth)
    console.log(extraPoint[0])
    target.selectAll("rect")
    .data(extraPoint[2])
    .enter()
    .append("rect")
    .attr("x",function(extraPoint,index){
            console.log("index:",index)
            console.log("OP:",extraPoint)
            console.log("OP[0]:",extraPoint)
            console.log("Key: ",(extraPoint[0].key))
            //return xScale(index)
            return index * 165
    })
    
    .attr("y",function(extraPoint){
        console.log((extraPoint))
        return yScale(extraPoint[1])
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(extraPoint){
        console.log((extraPoint))
        return graphDim.height-(yScale((extraPoint[1]) - (extraPoint[0]))
        
    )})
       .attr("fill",function(extraPoint){
        return colorScale("Almost")})
  //    tooltip
     .on("mouseover",function(extraPoint)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text(((extraPoint[1]-extraPoint[0])+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(extraPoint)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
var drawRating4 = function(extraPoint,target,graphDim,
                         xScale,yScale,colorScale)
{
    var bar = target
        .selectAll("g")
        .data(extraPoint)
        .enter()
        .append("g")
        .classed("bar",true)

    console.log(xScale.bandwidth)
    console.log(extraPoint[0])
    target.selectAll("rect")
    .data(extraPoint[3])
    .enter()
    .append("rect")
    .attr("x",function(extraPoint,index){
            return index * 165
    })
    
    .attr("y",function(extraPoint){
        console.log((extraPoint))
        return yScale(extraPoint[1])
    })

    .attr("width",xScale.bandwidth)
    .attr("height",function(extraPoint){
        console.log((extraPoint))
        return graphDim.height-(yScale((extraPoint[1]) - (extraPoint[0]))
        
    )})
    .attr("fill",function(extraPoint){
        return colorScale("Poor")})
  //    tooltip
     .on("mouseover",function(extraPoint)
{   
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
            .classed("fade",true);
            
            
        d3.select(this)
            .classed("fade",false)
            .classed("coloring",true)
            .raise(); //move to top
    }
       
   var xPos = d3.event.pageX;
        var yPos = d3.event.pageY;
       
    d3.select("#tooltip") 
       .classed("hidden",false)
       .style("top",yPos+"px")
       .style("left",xPos+"px")
       //console.log("It here")
     d3.select("div")
       .text(((extraPoint[1]-extraPoint[0])+"%"))
        .classed("hidden",false)    
console.log("It here")
})
.on("mouseout",function(extraPoint)
{
    if(! d3.select("#tooltip").classed("off"))
    {
        d3.selectAll(".bar")
        .classed("fade",false)
        .classed("coloring",false)
        
    }
})
}
var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
//Axes
var drawAxes3 = function(graphDim,margins,
                         xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);

    var yAxis= d3.axisLeft(yScale);
    
    var axes = d3.select("#stacked")
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top+graphDim.height)+")")
        .call(xAxis)
    
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top)+")")
        .call(yAxis)
 
}
//Labels
var drawLabels3 = function(graphDim,margins)
{
    var labels = d3.select("#stacked")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("Ratings of Police Performance")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",margins.top-20)
    
    labels.append("text")
        .text("Opinion on Cops...")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graphDim.width/2))
        .attr("y",(graphDim.height + 45)  + margins.top);

    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graphDim.height/2))+")")
        .append("text")
        .text("Answers Given")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
    
}

//Legend setup
var drawLegend3 = function(graphDim,margins)
{
    
 
   var categories = [
       {
           class:"Lot",
           name:"Excellent"
       },
       {
           class:"Little",
           name:"Good"
       },
       {
           class:"None",
           name:"Fair"
       },
        {
           class:"Poor",
           name:"Poor"
       }
       
    ]
var legend = d3.select("#stacked")
        .append("g")
        .classed("legend",true)
        .attr("transform","translate("+
              (margins.left+ 580) +","+
             (margins.top+10)+")");
var entries = legend.selectAll("g")
            .data(categories)
            .enter()
            .append("g")
            .classed("legendEntry", true)
.attr("class",function(categories)
             {
                return (categories.class);
             })


.attr("transform",function(categories,index)
              {
                return "translate(0,"+index*20+")";
              })
          

entries.append("rect")
        .attr("width", 10)
        .attr("height", 10)
    
entries.append("text")
                .text(function(category){return category.name;})
                .attr("x",15)
                .attr("y",10)
    
    
}
//graph setup
var initGraph3 = function(Data)
{
    //size of screen
    var screen = {width:690,height:575}
    //how much space on each side
    var margins = {left:60,right:20,top:75,bottom:50}

    
    
    var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);
    
    d3.select("#stacked")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var target = d3.select("#stacked")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
    

   var xScale = d3.scaleBand()
    .domain(["Holding officers accountable","Protecting from Crime","Treating racial and ethnic groups equally","Using appropriate force"])
        .range([0,(graph.width)])
        .paddingInner(.60)
    var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])

    
var graphset=[
    {Excellent:18, Good:45, Fair:19, Poor:16},
     {Excellent:22, Good:50, Fair:18, Poor:9},
     {Excellent:20, Good:45, Fair:19, Poor:14}, 
    {Excellent:19, Good:48, Fair:19, Poor:12},
]
var stack=d3.stack()
.keys(["Excellent","Good","Fair","Poor"])
gseries=stack(graphset)
     var colorScale=
        d3.scaleOrdinal()
   .range(["blue","black","white","GoldenRod"]);
    
    drawAxes3(graph,margins,xScale,yScale);
    var g0=target.append("g")
    
      var g1=target.append("g")
    .attr("transform","translate(0,0)")
    var g2=target.append("g")
    .attr("transform","translate(0,0)");
        var g3=target.append("g")
    .attr("transform","translate(0,0)");
  drawExtraPoint(gseries,target,graph,xScale,yScale,colorScale);
 drawRating2(gseries,g1,graph,xScale,yScale,colorScale);
    drawRating3(gseries,g2,graph,xScale,yScale,colorScale);
//    drawRating4(gseries,g3,graph,xScale,yScale,colorScale);
    drawLabels3(graph,margins);
    drawLegend3(graph,margins);
    
    
    
    
    
}

