var data = ["курорт", "диско", "клубы", "ночная жизнь", "водный спорт", "семейный", "шопинг", "марина", "горы", "спокойствие", "роскошь", "достопримечательности", "религия", "история", "пляжи", "древность", "руины", "культура", "наследие", "традиции"];

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    margin = { top: 30, right: 30, bottom: 30, left: 40 },
    g = svg.append("g").attr("transform", "translate(" + width * 3 / 2 + "," + height / 2 + ")");//center the g element by taking half of height and width

var layout = d3.layout
    .cloud()
    .size([width - margin.left - margin.right, height - margin.top - margin.bottom])
    .words(data.map(function (d) { return { text: d, size: 10 + Math.random() * 20 }; }))
    .padding(5)
    .rotate(function () { return ~~(Math.random() * 2) * 90; })
    .fontSize(function (d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
    g.selectAll(".word")
        .data(words)
        .join("text")
        .attr("class", "word")
        .style("font-size", function (d) { return d.size + "px"; })
        .style("fill", function (d, i) { return "steelblue"; })
        .attr("text-anchor", "middle")
        .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .style("fill", function (d) {
            if (d.text === "visualization") {
                return "red"; // Change the color of "visualization" to red
            } else {
                return "black"; // Set the color of other words to black or any other color you prefer
            }
        })
        .text(function (d) { return d.text; });
}


// const data = ["hello", "world", "d3", "word", "cloud", "visualization"];

// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height"),
//     margin = { top: 20, right: 20, bottom: 30, left: 40 },
//     g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var layout = d3.layout
//     .cloud()
//     .size([width - margin.left - margin.right, height - margin.top - margin.bottom])
//     .words(data.map(function (d) { return { text: d, size: 10 + Math.random() * 20 }; }))
//     .padding(5)
//     .rotate(function () { return ~~(Math.random() * 2) * 90; })
//     .fontSize(function (d) { return d.size; })
//     .on("end", draw);

// layout.start();

// function draw(words) {
//     g.selectAll(".word")
//         .data(words)
//         .join("text")
//         .attr("class", "word")
//         .style("font-size", function (d) { return d.size + "px"; })
//         .attr("text-anchor", "middle")
//         .attr("transform", function (d) {
//             return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//         })
//         .style("fill", function (d) {
//             if (d.text === "visualization") {
//                 return "red"; // Change the color of "visualization" to red
//             } else {
//                 return "black"; // Set the color of other words to black or any other color you prefer
//             }
//         })
//         .text(function (d) { return d.text; });

// }