document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addPredictionForm');
  const list = document.getElementById('predictionList');
  const matchInput = document.getElementById('matchName');
  const predictionInput = document.getElementById('prediction');

  let predictions = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const match = matchInput.value.trim();
    const pred = predictionInput.value.trim();

    if (!match || !pred) {
      alert("Please fill in both fields.");
      return;
    }

    predictions.push({ match, prediction: pred });
    updateList();
    form.reset();
  });

  function updateList() {
    list.innerHTML = '';

    predictions.forEach(({ match, prediction }) => {
      const li = document.createElement('li');
      li.textContent = `${match} - ${prediction}`;
      list.appendChild(li);
    });
  }
});
