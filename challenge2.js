const jsonFile = require("./db.json");
let sensor1 = jsonFile["sensors"][0]["time_series"]
let sensor2 = jsonFile["sensors"][1]["time_series"]
// number of time series
let n = sensor1.length
let max_value = 0
//time_window = [from, to]
let time_window = []
for(let i=0; i<n-3; i++){
	sum_value = 0
	for(let di=0; di<4; di++){
		sum_value += sensor1[i+di]["value"]
		sum_value += sensor2[i+di]["value"]
	}
	let avg = sum_value/8
	console.log(avg)
	if(max_value<avg){
		max_value = avg
		time_window = [sensor1[i]["timestamp"], sensor1[i+3]["timestamp"]]
	}
}
console.log("The one-hour time window with maximum average PM10 value is from " + time_window[0] + "s to " + time_window[1] + "s.")
console.log("MaxValue: "+max_value)