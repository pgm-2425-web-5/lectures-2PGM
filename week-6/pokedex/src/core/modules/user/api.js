export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@pokedex.com" && password === "123456") {
        resolve({
          email,
          username: "admin",
        });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 2000);
  });
};
