import style from './ErrorMessage.module.css';

//відображення повідомлення про помилку в інтерфейсі користувача
const ErrorMessage: React.FC = () => {
  return (
    <h2 className={style.errorText}>
      Whoops, something went wrong! Reload page, please!
    </h2>
  );
};
export default ErrorMessage;