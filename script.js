function getRandomDelay() {
      return (Math.random() * 2 + 1).toFixed(3); 
    }

    function createPromise(name) {
      const delay = parseFloat(getRandomDelay());
      return new Promise((resolve) => {
        setTimeout(() => resolve({ name, time: delay }), delay * 1000);
      });
    }

    const startTime = performance.now();

    const promises = [
      createPromise("Promise 1"),
      createPromise("Promise 2"),
      createPromise("Promise 3")
    ];

    Promise.all(promises).then((results) => {
      const endTime = performance.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(3);

      const tbody = document.getElementById("output");


      tbody.innerHTML = "";

      results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${result.name}</td>
          <td>${result.time}</td>
        `;
        tbody.appendChild(row);
      });

      const totalRow = document.createElement("tr");
      totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>${totalTime}</strong></td>
      `;
      tbody.appendChild(totalRow);
    });