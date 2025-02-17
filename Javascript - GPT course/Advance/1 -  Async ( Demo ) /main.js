// Using a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data loaded!" };
        resolve(data);
      }, 1000);
    });
  }
  
// Using async/await
  async function loadData() {
    try {
      const result = await fetchData();
      console.log(result.message);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
loadData();
  