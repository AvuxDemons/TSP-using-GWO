export const coordinates = {
    Surabaya: { x: -7.250445, y: 112.768845 },
    Malang: { x: -7.96662, y: 112.632632 },
    Probolinggo: { x: -7.754669, y: 113.215913 },
    Tuban: { x: -6.967195, y: 112.038849 },
    Madiun: { x: -7.631573, y: 111.529809 },
    Sumenep: { x: -7.004613, y: 113.849285 },
    Jombang: { x: -7.55, y: 112.233333 },
    Banyuwangi: { x: -8.233333, y: 114.366667 },
    Trenggalek: { x: -8.066667, y: 111.666667 },
    Bojonegoro: { x: -7.133333, y: 111.866667 },
};

export function performanceFunction(position) {
    let distance = 0;
    const cities = Object.keys(coordinates);

    // Loop through the positions and calculate distances
    for (let i = 0; i < position.length - 1; i++) {
        const city1Name = cities[position[i]];
        const city2Name = cities[position[i + 1]];
        console.log(city1Name, city2Name);

        // Ensure city names exist in coordinates
        if (coordinates[city1Name] && coordinates[city2Name]) {
            const city1 = coordinates[city1Name];
            const city2 = coordinates[city2Name];

            // Calculate distance using Euclidean distance formula
            const dx = city2.x - city1.x;
            const dy = city2.y - city1.y;
            distance += Math.sqrt(dx * dx + dy * dy);
        } else {
            // Handle case where city names are invalid or not found
            console.error(`Invalid city names: ${city1Name}, ${city2Name}`);
            return Infinity; // Return a large number to indicate an error
        }
    }

    return distance;
}