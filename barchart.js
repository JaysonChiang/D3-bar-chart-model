var dataset = [3, 14, 15, 24, 65, 2, 20, 15, 60, 32, 45, 14, 12, 53, 35, 3, 14, 16, 23, 45, 2, 20, 15, 6, 52, 25, 10, 12, 64, 35],
    w = 500,
    h = 300,
    barPadding = 1;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var circles = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
    return i * (w / dataset.length);
})
    .attr("y", function (d) {
    return h - d * 4;
})
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function (d) {
    return d * 4;
})
    .attr("fill", function (d) {
    return "rgb(0,0," + (d * 10) + ")";
});

var t = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
    return d;
})
    .attr("x", function (d, i) {
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
})
    .attr("y", function (d) {
    return h - (d * 4) + 15;
})
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");