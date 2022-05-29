"use strict";
let data = [];
for (let i = 0; i <= 10; i++) {
    data.push(i);
}
console.log(data);
// Linear - O(n)
function linear(data) {
    data.forEach(item => {
        console.log(item);
    });
}
//Quadratic - O(n**2) - polynomial
function quadratic(data) {
    data.forEach(item => {
        data.forEach(item2 => {
            console.log(item, item2);
        });
    });
}
//Cubic - O(n**3) - polynomial
function cubic(data) {
    data.forEach(item => {
        data.forEach(item2 => {
            data.forEach(item3 => {
                console.log(item, item2, item3);
            });
        });
    });
}
function getTime(entryfunction, data) {
    performance.mark("marker-a");
    entryfunction(data);
    performance.mark("marker-b");
    performance.measure("A to B", "marker-a", "marker-b");
    let { duration } = performance.getEntriesByType("measure")[0];
    performance.clearMarks();
    performance.clearMeasures();
    return duration;
}
console.log(getTime(quadratic, data));
console.log(getTime(cubic, data));
//# sourceMappingURL=index.js.map