const loginApi = async (formData) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, token: data.token }
        } else {
            const data = await response.json();
            return { success: false, error: data.error }
        }
    } catch (error) {
        console.error("Error during API call", error);
        return { success: false, error: "Error during API call" }
    }
};

export default loginApi;