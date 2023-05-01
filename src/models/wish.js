/**
 * @typedef { import("./types").Wish } Wish
 */

/**
 * @param   {Wish} wish
 * @param   {Map} store
 * @returns {void}
 */
// NOTE: Accessing the data store asynchronously for the potential change
// of the data source in the future.
const addWish = async (wish, store) => {
  store.set(wish.uid, wish);
};

/**
 * @param   {string} wishId
 * @param   {Map} store
 * @returns {Wish}
 */
const getWish = async (wishId, store) => {
  const wish = await store.get(wishId);
  return wish;
};

/**
 * @param   {Map} store
 * @returns {IterableIterator<Wish>}
 */
const listWish = async (store) => {
  const wish = await store.values();
  return wish;
};

module.exports = {
  addWish,
  getWish,
  listWish,
};
