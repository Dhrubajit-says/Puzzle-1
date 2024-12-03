const fs = require('fs');
const csharpCode = `using System;
using System.IO;
string pythonCode = @"
with open('solution.js', 'r') as src_file:
    js_content = src_file.read()
with open('solution2.js', 'w') as dest_file:
    dest_file.write(js_content)
";
File.WriteAllText("solution.py", pythonCode);`;
fs.writeFileSync('solution.csx', csharpCode, 'utf8');
