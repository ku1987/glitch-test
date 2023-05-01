// Global data store to save the data to the memory.
// Stored data is cleared every time the server is restarted.

// TODO: Create data store interface to enable dependency injection.
const store = new Map();

module.exports = store;
