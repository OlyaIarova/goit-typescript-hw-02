export interface ImageInterface {
  id: string; //Унікальний ідентифікатор зображення
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
