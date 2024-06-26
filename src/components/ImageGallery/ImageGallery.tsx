import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageInterface } from '../App/App.types';

interface ImageGalleryProps {
  images: ImageInterface[]; // Масив зображень типу ImageInterface
  onOpenModal: (image: ImageInterface) => void; //Функція для відкриття модального вікна з переданим зображенням
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpenModal }) => {// відображає список зображень у вигляді списку
  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li className={css.listItem} key={index}>
          {/* Рендеринг компонента ImageCard для кожного зображення */}
          <ImageCard image={image} onClick={onOpenModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

