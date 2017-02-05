class GuessingGame {
    constructor() {
		this.min = 0;
		this.max = 0;
		this.attempt = 0;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
		this.attempt = Math.ceil((this.min + this.max) / 2);
		return this.attempt;
    }

    lower() {
		this.max = this.attempt;
		this.attempt = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
		this.min = this.attempt;
		this.attempt = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
