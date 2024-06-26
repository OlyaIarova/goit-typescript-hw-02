import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImg } from '../api';
import toast, { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import { ImageInterface } from './App.types';

export default function App() {
  const [imgData, setImgData] = useState<ImageInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(``);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currantImg, setCurrantImg] = useState<ImageInterface | null>(null);

  function openModal(imgOnClick: ImageInterface): void {//Відкриття модального вікна з вибраним зображенням
    setCurrantImg(imgOnClick);
    setIsOpen(true);
  }

  function closeModal(): void {//Закриття модального вікна
    setCurrantImg(null);
    setIsOpen(false);
  }

  const handleLoadMore = (): void => {//Збільшення номера сторінки для завантаження більше зображень
    setPage(page + 1);
  };

  const handleSearch = (newSearchText: string): void => {//Оновлення пошукового запиту та скидання номера сторінки та даних зображень
    setQuery(newSearchText);
    setPage(1);
    setImgData([]);
  };

  useEffect(() => {//Використання useEffect для виконання пошуку зображень щоразу, коли змінюється query або page
    if (query === ``) {//Якщо query порожній, пошук не виконується.
      return;
    }
    async function findImg() {//виконує асинхронний запит на сервер для отримання зображень, оновлює стан зображень і обробляє помилки.
      try {
        setIsLoading(true);
        const data: ImageInterface[] = await fetchImg(query, page);

        if (data.length === 0) {
          toast.error('No images found. Please try a different search term.');
          setIsError(true);
        } else {
          setImgData(prevImg => [...prevImg, ...data]);
          setIsError(false);
        }
      } catch (error) {
        toast.error('Error fetching images. Please try again.');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    findImg();
  }, [query, page]);
  return (
    <div className={css.appContainer}>
      <Toaster position="top-right" />
      <SearchBar onSearch={handleSearch}></SearchBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {imgData.length > 0 ? (
        <>
          <ImageGallery images={imgData} onOpenModal={openModal} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      ) : (
        <p className={css.text}>Image gallery is empty... 📷🔎</p>
      )}
      {currantImg && (
        <ImageModal
          image={currantImg}
          isOpen={modalIsOpen}
          onCloseModal={closeModal}
        ></ImageModal>
      )}
    </div>
  );
}

