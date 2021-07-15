let fs = require("fs")
const path = require("path")
const { SnakeCaser } = require('./SnakeCaser')

const filename = "input.txt"

const input = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf-8"
})

function main(input) {
    let rule = new RegExp(/"([a-zA-Z]*)"/, "g")
    let snakeCaser = new SnakeCaser(rule, input)
    writeOutput(snakeCaser.getOutput())
}

function writeOutput(output, dir = "./output.txt") {
    fs.writeFile(path.join(__dirname, dir), output, function (err) {
        if (err) return console.log(err)
        console.log("finished")
    })
}

main(input)
