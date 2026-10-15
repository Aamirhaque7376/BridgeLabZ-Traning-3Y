// Q4: Array Performance Analyzer

// Generate 8 random integer scores from 30 through 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedScores = scores.filter(score => score >= 50);
const labeledScores = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log("===== Student Performance Summary =====");
console.log(labeledScores.join("\n"));
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (score >= 50): ${passedScores.length} out of ${scores.length}`);
console.log("========================================");
