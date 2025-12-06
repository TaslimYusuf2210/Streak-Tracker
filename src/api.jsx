const BASE_URL = import.meta.env.VITE_STREAKTRACKER_API_BASE_URL;

export async function registerUser(userData) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData), 
    });

    const data = await response.json()
    console.log(data)
    if (!response.ok) {
    throw data; 
    }
    return data
}

export async function loginUser (userData) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData), 
    });

    const data = await response.json()
    console.log(data)
    if (!response.ok) {
    throw data; 
    }
    return data
}

export async function getUserProfile(token) {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
    if (!response.ok) {
      throw new Error("Failed to fetch habits")
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    
  }
}

export async function getAnalytics(token) {
  try {
    const response = await fetch(`${BASE_URL}/analytics/tasks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
    if (!response.ok) {
      throw new Error("Failed to fetch habits")
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error", error)
  }
}

export async function getAllHabits(token) {
  try {
    const response = await fetch(`${BASE_URL}/habits`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
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