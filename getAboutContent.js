var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var content = fs.readFileSync("package-lock.json");
req = JSON.parse(content);
output = '';
for (var dependancy in req.dependencies) {
    output += `<li class="mdc-list-item" tabindex="0"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">code</span><a href="https://www.npmjs.com/package/${dependancy}">` + dependancy + ": version " + req.dependencies[dependancy].version + "<a></li>" + '\n';
}
fs.writeFileSync('modules.ejs', output);