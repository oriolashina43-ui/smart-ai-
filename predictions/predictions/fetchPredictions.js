// Example static predictions until backend is live
const predictions = [
  { match: "Team A vs Team B", prediction: "Over 2.5" },
  { match: "Team C vs Team D", prediction: "Both Teams To Score" }
];

// Export in JSON format so front-end can fetch it
if (typeof module !== "undefined") {
  module.exports = predictions;
} else {
  console.log(predictions);
}
