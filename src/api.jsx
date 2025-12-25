const BASE_URL = import.meta.env.VITE_STREAKTRACKER_API_BASE_URL;
const token = localStorage.getItem("token")

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
    const response = await fetch(`${BASE_URL}/tasks`,{
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

export async function createHabit (token, formData) {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData), 
    });

    const data = await response.json()
    console.log(data)
    if (!response.ok) {
    throw data; 
    }
    return data
  } catch (error) {
    console.error(err)
  }
}

export async function deleteHabit (id, habit) {
  if (token) {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(habit),
      });

      if (!response.ok) {
        let errorMessage = "Failed to delete"
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {}  // Ignore if no JSON in error response
        throw new Error(errorMessage);
      }

      if (response.status === 204 || response.headers.get('content-length') === '0') {
        return null;  // or return { success: true } if you prefer
      }
      console.log('Status:', response.status);
      console.log('Content-Type:', response.headers.get('content-type'));
      console.log('Content-Length:', response.headers.get('content-length'));
      const text = await response.text();
      console.log('Raw body:', text || '(empty)');

      return await response.json();

    } catch (error) {
      console.error(error);
    }
    
  }
}

export async function updateHabit(id, habit) {
  if (token) {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(habit),
      });

      if (!response.ok) {
        throw new Error("Failed to update Habit");
      }

      return await response.json();

    } catch (error) {
      console.error(error);
    }
    
  }
}

export async function trackTask(taskId, trackedDate, isCompleted) {
  const response = await fetch(`${baseUrl}/tasks/${taskId}/track`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${getToken()}`,  // Bearer token required
    },
    body: JSON.stringify({
      tracked_date: trackedDate,   // Must be "MM/DD/YYYY"
      is_completed: isCompleted,  // true or false
    }),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to track task';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {}  // ignore if no JSON
    throw new Error(errorMessage);
  }

  // Success: 201 Created → parse the returned tracking record
  return await response.json();
}