import css from './ImageCard.module.css';
import { ImageInterface } from '../App/App.types';

interface ImageCardProps {
  image: ImageInterface; //об'єкт типу ImageInterface, який містить інформацію про зображення
  onClick: (image: ImageInterface) => void; //функція, яка приймає об'єкт типу ImageInterface і нічого не повертає (void)
}
const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {//відображає зображення із стилями
  return (
    <div>
      <img
        className={css.card}
        onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;