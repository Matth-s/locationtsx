export interface Materiel {
  downPayment: number;
  category: string;
  date: Date | null;
  description: string;
  id: string;
  presentationPicture: string;
  pictureArray: Image[];
  name: string;
  price: number;
}

export interface Image {
  image: string;
}
