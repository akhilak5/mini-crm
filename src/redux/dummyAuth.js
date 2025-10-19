// Simple in-memory dummy users
export const users = [];

export const registerUser = (name, email, password) => {
  // Check if email exists
  const exists = users.find(u => u.email === email);
  if (exists) return false;
  users.push({ name, email, password });
  return true;
};

export const loginUser = (email, password) => {
  return users.find(u => u.email === email && u.password === password);
};
