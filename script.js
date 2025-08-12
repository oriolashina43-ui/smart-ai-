document.addEventListener('DOMContentLoaded', () => {
  fetch('predictions/fetchPredictions.js')
    .then(res => res.json())
    .then(data => {
      const predictionsDiv = document.getElementById('predictions');
      data.forEach(pred => {
        const p = document.createElement('p');
        p.textContent = `${pred.match} - ${pred.prediction}`;
        predictionsDiv.appendChild(p);
      });
    });
});
