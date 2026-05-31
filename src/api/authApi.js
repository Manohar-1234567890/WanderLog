// Mock auth - simulating API responses for demo purposes
const mockUsers = {
  "eve.holt@reqres.in": "cityslicka",
  "test@example.com": "password123",
};

export const loginUser = async (email, password) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (mockUsers[email] && mockUsers[email] === password) {
    return {
      token: "mock-token-" + Date.now(),
      user: { id: 1, email },
    };
  }

  throw new Error("Invalid email or password");
};

export const registerUser = async (email, password) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (mockUsers[email]) {
    throw new Error("User already exists");
  }

  mockUsers[email] = password;

  return {
    token: "mock-token-" + Date.now(),
    user: { id: 1, email },
  };
};