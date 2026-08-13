const userSession = {
  username: "jdoe",
  email: "jdoe@example.com",
  password: "supersecret123",
  authToken: "abc123xyz",
  lastLogin: "2026-08-10",
};

function logoutUser(session) {
  delete session.authToken;
  return session;
}
console.log(logoutUser(userSession));

function getPublicProfile(user) {
  const { password, authToken, ...userCopy } = user;
  return userCopy;
}
console.log(getPublicProfile(userSession));
console.log(userSession);
