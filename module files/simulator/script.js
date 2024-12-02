document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const plantDropdown = document.getElementById("plant-dropdown");
    const plantingArea = document.getElementById("planting-area");
    const feedback = document.getElementById("feedback");
    const plantStage = document.getElementById("plant-stage");
    const waterBtn = document.getElementById("water-btn");
    const sunlightBtn = document.getElementById("sunlight-btn");
  
    let waterCount = 0;
    let sunlightCount = 0;
  
    startBtn.addEventListener("click", () => {
      plantingArea.style.display = "block";
      feedback.textContent = `You've selected ${plantDropdown.value}. Plant it by watering and adding sunlight!`;
    });
  
    waterBtn.addEventListener("click", () => {
      waterCount++;
      updatePlant();
    });
  
    sunlightBtn.addEventListener("click", () => {
      sunlightCount++;
      updatePlant();
    });
  
    function updatePlant() {
      if (waterCount >= 3 && sunlightCount >= 3) {
        plantStage.src = "seed3.jpg"; 
        feedback.textContent = "Congratulations! Your plant is fully grown!";
      } else if (waterCount >= 2 && sunlightCount >= 2) {
        plantStage.src = "seed2.jpg"; 
        feedback.textContent = "Your plant is growing! Keep it up!";
      } else {
        plantStage.src = "sayote seed.jpg"; 
        feedback.textContent = "Keep watering and adding sunlight!";
      }
    }
  });
  