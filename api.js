const API_URL = "http://localhost:3000";

async function getRequests() {
    const response = await fetch(`${API_URL}/requests`);
    return await response.json();
}

async function createRequest(request) {
    const response = await fetch(`${API_URL}/requests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    });

    return await response.json();
}

async function getProperties() {
    const response = await fetch(`${API_URL}/properties`);
    return await response.json();
}

async function createProperty(property) {
    const response = await fetch(`${API_URL}/properties`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(property)
    });

    return await response.json();
}
