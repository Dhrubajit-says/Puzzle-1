It is a **JavaScript** program that outputs the code itself in C# and Python. 
If you run the `solution.js`, it will create a file named `solution.csx` ( **A C# program** )
When you run the `solution.csx`, it will create a file named `solution.py` ( **A Python program** )
And finally when you run the `solution.py` file it will generate a file named `solution2.js`, which is the identical of `solution.js`. <br>( `solution.js == solution2.js` )<br> 

Run this commands to check by yourself :<br> 
make sure you have installed node, dotnet and python3 in your system.<br>

`> node solution.js > solution.csx` <br>
`> dotnet script solution.csx > solution.py` <br>
`> python3 solution.py > solution2.js`<br>
`> diff solution.js solution2.js`<br>
`> `<br>

If solution.js and solution2.js are identical, there will be no output
