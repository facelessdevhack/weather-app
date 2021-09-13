fs = require('fs');
var name = 'city.list.json';
var m = JSON.parse(fs.readFileSync(name).toString());
m.forEach(function(p){
    delete p.id
    delete p.state
    delete p.country
    delete p.coord
});
        var newCitiesArr = []
        for(var i = 0; i < 100; i++) {
            delete m[i].id
            delete m[i].state
            delete m[i].country
            delete m[i].coord
            console.log(m[i].id)
            // newCitiesArr.push(m[i])
        }
fs.writeFileSync("city.json", JSON.stringify(m))