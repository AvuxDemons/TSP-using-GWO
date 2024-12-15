export class GWO {
    constructor(populationSize, numCities, maxIterations, startCityIndex, fitnessFunction) {
        this.populationSize = populationSize;
        this.numCities = numCities;
        this.maxIterations = maxIterations;
        this.startCityIndex = startCityIndex;
        this.fitnessFunction = fitnessFunction;
        this.alphaPosition = [];
        this.alphaFitness = Infinity;
        this.betaPosition = [];
        this.betaFitness = Infinity;
        this.deltaPosition = [];
        this.deltaFitness = Infinity;
        this.positions = [];
        this.fitness = [];
    }

    initialize() {
        this.positions = [];
        this.fitness = [];

        // Create population with non-repeating cities
        for (let i = 0; i < this.populationSize; i++) {
            let position = [this.startCityIndex]; // Ensure the start city is the first city in the position
            let availableCities = [...Array(this.numCities).keys()].filter(city => city !== this.startCityIndex); // Exclude the start city

            // Select cities randomly without repetition, but exclude the start city
            for (let j = 0; j < this.numCities - 1; j++) {
                const randomIndex = Math.floor(Math.random() * availableCities.length);
                const selectedCity = availableCities.splice(randomIndex, 1)[0]; // Remove selected city from the list
                position.push(selectedCity);
            }

            this.positions.push(position);
            this.fitness.push(this.fitnessFunction(position));
        }
    }

    updateAlphaBetaDelta() {
        // Reset alpha, beta, and delta fitness for this iteration
        this.alphaFitness = Infinity;
        this.betaFitness = Infinity;
        this.deltaFitness = Infinity;

        for (let i = 0; i < this.populationSize; i++) {
            const currentFitness = this.fitness[i];
            if (currentFitness < this.alphaFitness) {
                // Shift beta and delta down
                this.deltaFitness = this.betaFitness;
                this.deltaPosition = [...this.betaPosition];
                this.betaFitness = this.alphaFitness;
                this.betaPosition = [...this.alphaPosition];
                // Update alpha
                this.alphaFitness = currentFitness;
                this.alphaPosition = [...this.positions[i]];
            } else if (currentFitness < this.betaFitness) {
                // Shift delta down
                this.deltaFitness = this.betaFitness;
                this.deltaPosition = [...this.betaPosition];
                // Update beta
                this.betaFitness = currentFitness;
                this.betaPosition = [...this.positions[i]];
            } else if (currentFitness < this.deltaFitness) {
                // Update delta
                this.deltaFitness = currentFitness;
                this.deltaPosition = [...this.positions[i]];
            }
        }
    }

    updatePosition(i, iter) {
        const position = this.positions[i];
        let newPosition = [...position]; // Copy the current position

        for (let j = 0; j < this.numCities; j++) {
            const a = 2 - (2 * iter) / this.maxIterations;
            const r1 = Math.random();
            const r2 = Math.random();
            const A1 = 2 * a * r1 - a;
            const C1 = 2 * r2;

            const D_alpha = Math.abs(C1 * this.alphaPosition[j] - newPosition[j]);
            const X1 = this.alphaPosition[j] - A1 * D_alpha;

            const r3 = Math.random();
            const r4 = Math.random();
            const A2 = 2 * a * r3 - a;
            const C2 = 2 * r4;

            const D_beta = Math.abs(C2 * this.betaPosition[j] - newPosition[j]);
            const X2 = this.betaPosition[j] - A2 * D_beta;

            const r5 = Math.random();
            const r6 = Math.random();
            const A3 = 2 * a * r5 - a;
            const C3 = 2 * r6;

            const D_delta = Math.abs(C3 * this.deltaPosition[j] - newPosition[j]);
            const X3 = this.deltaPosition[j] - A3 * D_delta;

            newPosition[j] = Math.floor((X1 + X2 + X3) / 3) % this.numCities;
        }

        // Ensure position is valid (non-repeating cities)
        newPosition = Array.from(new Set(newPosition));
        while (newPosition.length < this.numCities) {
            const missingCities = [...Array(this.numCities).keys()].filter(
                (x) => !newPosition.includes(x)
            );
            newPosition.push(missingCities.pop());
        }

        // Compare fitness and accept only the better solution
        const newFitness = this.fitnessFunction(newPosition);
        if (newFitness < this.fitness[i]) {
            this.positions[i] = newPosition;
            this.fitness[i] = newFitness;
        }
    }

    optimize(iter) {
        for (let i = 0; i < this.populationSize; i++) {
            this.updatePosition(i, iter);
        }
    }
}
