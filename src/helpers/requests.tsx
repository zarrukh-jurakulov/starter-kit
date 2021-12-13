const baseUrl = "192.168.1.172/bonitotest/hs";

const requests = {
  getSidebar: `${baseUrl}/catalogs/favorites`,
  getCategories: `${baseUrl}/catalogs/categories`,
  getManufacturer: `${baseUrl}/catalogs/manufacturer`,
  getProducts: `${baseUrl}/catalogs/getproducts?new=true`,
  news: `${baseUrl}/catalogs/news`,
  comment: `${baseUrl}/catalogs/comment?uidProduct=01dd4a89-75c9-11eb-949e-b42e99c0763a`,
  shops: `${baseUrl}/catalogs/shops`,
  collections: `${baseUrl}/catalogs/collection`,
  files: `${baseUrl}/catalogs/files?uid=c5271398-4076-11ec-b2cd-58a023a454fb`,
  productInfo: `${baseUrl}/catalogs/productinfo?uid=437673ce-5d3b-11ea-854b-1c1b0ddf4de8`,
  sendFavourites: `${baseUrl}/catalogs/favorites`,
  getFavourites: `${baseUrl}/catalogs/favorites`,
  viewed: `${baseUrl}/catalogs/viewed`,
  sendComment: `${baseUrl}/catalogs/comment`,
  deleteFavourite: `${baseUrl}/catalogs/favorites`,
  sendCard: `${baseUrl}/catalogs/cart`,
  deleteCard: `${baseUrl}/catalogs/cart`,
  getCard: `${baseUrl}`,
  getProductImage: `${baseUrl}/pictures/photoproduct?uid=&preview=`,
  characteristicImage: `${baseUrl}/pictures/photocharacteristic?uidProduct=&uidColor=`,
  orders: `${baseUrl}/orders/order`,
};

export default requests;
