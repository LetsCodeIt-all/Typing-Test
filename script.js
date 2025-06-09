const Sentence = document.querySelector(".Quote");
const Typed = document.querySelector("#typingBox");
const Btn = document.querySelector("button");

    let StartTime, endTime;

    Btn.addEventListener("click", () => {
      const action = Btn.innerText.toLowerCase();
 Sentence.value ="Loading";
      if (action === "start") {
        Typed.removeAttribute("disabled");
        Typed.value = "";
        SentenceApi();
      } else if (action === "done") {
        Typed.setAttribute("disabled", true);
        endTyping();
      } 
    });

    async function SentenceApi() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
          method: "GET",
          headers: {
            "X-Api-Key": "SVBKIzCu1y82MmXy74fPUw==k5227rO9HcJgyLb4",
          },
        });

        const res = await response.json();
        const Text = res[0].quote;
        Sentence.value =Text.trim();
        startTimer();
      } catch (error) {
        Sentence.value = "Failed to load quote.";
        console.error("Error fetching quote:", error);
      }
    }

    function startTimer() {
      StartTime = new Date().getTime();
      Btn.innerText = "Done";
      Typed.focus();
    }

    function endTyping() {
      endTime = new Date().getTime();
      const TotalTime = (endTime - StartTime) / 1000;

      const original = Sentence.value.trim();
      const typedText = Typed.value.trim();

      
      CheckMistake(original, typedText,TotalTime);

      Btn.innerText = "Start";
      Sentence.value = "";
      Typed.value = "";
    }

    function CalculateTypingSpeed(TotalTime, typedText,accuracy) {
      const words = typedText.trim() === "" ? 0 : typedText.trim().split(/\s+/).length;

      if (words !== 0) {
        const speed = Math.round((words / TotalTime) * 60);
        alert(`📈 Typing Speed: ${speed} WPM\n⏱ Time Taken: ${TotalTime.toFixed(2)}s\n ✅ Accuracy: ${accuracy}%`);
      } else {
        alert(`⛔ Typing Speed: 0 WPM\n⏱ Time Taken: ${TotalTime.toFixed(2)}s`);
      }
    }

    function CheckMistake(original, typedText,TotalTime) {

      let correct = 0;
      const minLen = Math.min(original.length, typedText.length);

      for (let i = 0; i < minLen; i++) {
        if (typedText[i] === original[i]) {
          correct++;
        }
      }

      const accuracy = ((correct / original.length) * 100).toFixed(2);
    
     CalculateTypingSpeed(TotalTime, typedText,accuracy);
    }