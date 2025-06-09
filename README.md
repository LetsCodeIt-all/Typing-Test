# 🧠 Typing Speed Test Web App

A fun and functional typing speed tester built using **HTML, CSS, and JavaScript**. This app fetches random quotes using the [API Ninjas Quote API](https://api-ninjas.com/api/quotes) and lets users test their typing speed and accuracy in real-time.

---

## 🚀 Features

- Fetches random quotes dynamically via API
- Measures typing **speed (WPM)** and **accuracy (%)**
- Start/Done button to control the test
- Clean and simple user interface

---


---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

---

## ⚙️ How It Works

1. Click the `Start` button.
2. A random quote appears.
3. Type the quote in the textbox.
4. Click `Done` when finished.
5. The app shows:
   - Words per minute (WPM)
   - Time taken
   - Typing accuracy

---

## 🔑 API Used

**Quote API** from [API Ninjas](https://api-ninjas.com/api/quotes)

> You need an API key (free) to fetch quotes.

```js
fetch("https://api.api-ninjas.com/v1/quotes", {
  method: "GET",
  headers: {
    "X-Api-Key": "YOUR_API_KEY_HERE"
  }
});
