import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageInterface } from "../App/App.types";

Modal.setAppElement('#root');

interface ImageModalProps {
  image: ImageInterface; // Об'єкт зображення типу ImageInterface
  onCloseModal: () => void; // Функція для закриття модального вікна
  isOpen: boolean; // Прапорець для відображення або приховування модального вікна
}

const ImageModal: React.FC<ImageModalProps> = ({
  image: {
    urls: { regular },
    alt_description,
  }, //деструктуризація для доступу до властивостей об'єкта image.
  onCloseModal,
  isOpen,
}) => {
  const customStyles: Modal.Styles = {
    //Стилі для модального вікна:
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    },
  };

  return (
    <Modal
      className={css.Modal}
      overlayClassName={css.Overlay}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      {/* зображення, яке закриває модальне вікно при кліку.*/}
      <img src={regular} alt={alt_description} onClick={onCloseModal} />
    </Modal>
  );
};
export default ImageModal;

