const baseUrl='http://13.229.61.221:3010/api-be/'
export const environment = {
  production: true,
  login: `${baseUrl}auth/login`,
  addcategory: `${baseUrl}category/admin/create`,
  addproduct: `${baseUrl}product/admin/create`,
  allproduct: `${baseUrl}product/admin/all`,
  categoryall: `${baseUrl}category/getAll`,
  categorieslisting: `${baseUrl}category/admin/all`,
  subcategoryall: `${baseUrl}category/getAllSub`,
  subcategorylisting: `${baseUrl}category/admin/all/sub`,
  deleteCateogory: `${baseUrl}category/delete`,
  deleteproduct: `${baseUrl}product/delete`
};
