class SnakeCaser {
    constructor(rule, input) {
        this.rule = rule
        this.input = input
        this.output = this.processInput()
    }

    getOutput() {
        return this.output
    }

    processInput() {
        let input = this.input.split("\n")
        let output = []
        for (let line of input) {
            let replaced = line.replace(this.rule, word => {
                return this.toSnakeCase(word)
            });
            output.push(replaced)
        }
        return output.join("\n")
    }

    toSnakeCase(word) {
        word = word.split("")
        let snakeCased = []
        for (const letter of word) {
            let asciiValue = letter.charCodeAt(0)
            if (asciiValue >= 65 && asciiValue <= 90) {
                snakeCased.push("_" + String.fromCharCode(asciiValue + 32))
            } else {
                snakeCased.push(letter)
            }
        }
        return snakeCased.join("")
    }
}

module.exports = {
    SnakeCaser
}
