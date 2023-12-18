// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //..
]

function superbowlWin(array){
    const yearOfWin = array.find(records => records.result === "W");
    return yearOfWin ? yearOfWin.year : undefined;
}
superbowlWin(record);