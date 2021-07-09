// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
  const baseUrl='http://ec2-54-213-155-125.us-west-2.compute.amazonaws.com:8080/'
  export const environment = {
  production: false,
  login: `${baseUrl}auth/login`,
  
  //add product
  addproduct: `${baseUrl}item/add`,
  allproduct: `${baseUrl}item/all/admin/published`,
  searchproduct:`${baseUrl}product/admin/search`,
  deleteproduct: `${baseUrl}product/delete`,
  findbyid: `${baseUrl}item/find`,
  updateproduct:`${baseUrl}item/update`,
  
  uploadImage:`${baseUrl}item/image/upload`,


  // add category
  addcategory: `${baseUrl}category/admin/create`,
  categoryall: `${baseUrl}category/getAll`,
  deleteCateogory: `${baseUrl}category/delete`,
  searchCategory: `${baseUrl}category/admin/search`,


  categorieslisting: `${baseUrl}category/admin/all`,
  subcategoryall: `${baseUrl}category/getAllSub`,
  subcategorylisting: `${baseUrl}category/admin/all/sub`,
  
  
};

