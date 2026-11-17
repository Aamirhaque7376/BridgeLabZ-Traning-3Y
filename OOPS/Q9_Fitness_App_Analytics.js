// Q9. Fitness App Analytics (filter + reduce + map)

class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter((record) => record.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.workoutData.reduce(
            (total, record) => total + record.calories,
            0
        );

        return totalCalories / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(
            (record) => `${record.user} walked ${record.steps} steps and burned ${record.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users (more than 7000 steps):");
    console.log(analytics.getActiveUsers());

    console.log(`Average calories: ${analytics.getAverageCalories().toFixed(2)}`);

    console.log("User summaries:");
    analytics.getUserSummary().forEach((message) => console.log(message));
} catch (error) {
    console.log(`Analytics error: ${error.message}`);
}

// Demonstrate the empty-dataset error.
try {
    const emptyAnalytics = new FitnessAnalytics([]);
    console.log(emptyAnalytics.getAverageCalories());
} catch (error) {
    console.log(`Analytics error: ${error.message}`);
}
