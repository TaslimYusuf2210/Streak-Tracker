const BASE_URL = import.meta.env.VITE_STREAKTRACKER_API_BASE_URL;

export async function registerUser(userData) {
    try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // tells the server we’re sending JSON
      },
      body: JSON.stringify(userData), // convert object to JSON
    });

    if (!response.ok) {
        console.log(`Response not okay:${response.status}`)
    }

    const data = await response.json()
    return data
    } catch (error) {
        console.error("Registration failed", error)
        throw error;
    }
}

export async function getHabits() {
  try {
    const response = await fetch(`${BASE_URL}/habits`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch habits")
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching habits:", error)
    throw error;
  }
}