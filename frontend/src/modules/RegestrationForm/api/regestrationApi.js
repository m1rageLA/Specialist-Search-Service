const regestrationApi = async (e, formData) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        return { success: true, data }; 
      }
      else {
        const data = await response.json();
        console.error("Ошибка при регистрации:", data.error);
        return { success: false, error: "Regestration error" };
      }
    } catch (error) {   
      console.error("Error during API call", error);
      return { success: false, error: "Error during API call" }
    }
  };

export default regestrationApi;