-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 08 2021 г., 18:38
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `donuts-time`
--

-- --------------------------------------------------------

--
-- Структура таблицы `donut_blocks`
--

CREATE TABLE `donut_blocks` (
  `id` int(11) NOT NULL,
  `donut_file_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_component` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `second_component` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `sweetness` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `donut_blocks`
--

INSERT INTO `donut_blocks` (`id`, `donut_file_name`, `first_component`, `second_component`, `description`, `price`, `sweetness`) VALUES
(1, 'Donut_kesh.png', 'Солёная карамель', 'Кешью', 'Донат с&nbsp;начинкой из&nbsp;карамели,\r\nпокрытый солёной карамелью,\r\nглазурью и&nbsp;кешью', 110, 'non-sweet'),
(2, 'Donut_vish.png', 'Тёмный шоколад', 'Вишня', 'Донат с&nbsp;начинкой из&nbsp;вишнёвого крема, покрытый крошкой тёмного шоколада', 100, 'non-sweet'),
(4, 'Donut_slivki.png', 'Клубника', 'Сливки', 'Донат с&nbsp;начинкой из&nbsp;сливочного крема с&nbsp;клубничным вкусом и&nbsp;мятными чипсами', 120, 'sweet'),
(5, 'Donut_coconut.png', 'Кокос', 'Белый шоколад', 'Донат с&nbsp;начинкой из&nbsp;кокосового крема, покрытый крошкой из&nbsp;белого шоколада', 115, 'sweet'),
(6, 'Donut_vish2.png', 'Тёмный шоколад', 'Вишня', 'Донат с&nbsp;начинкой из&nbsp;вишнёвого пралине, покрытый кремом из&nbsp;тёмного шоколада', 100, 'non-sweet'),
(7, 'Donut_klukva.png', 'Куриный паштет', 'Клюква', 'Донат с&nbsp;начинкой из&nbsp;куриного паштета, покрытый клюквенным соусом и&nbsp;мятой', 100, 'non-sweet'),
(9, 'Donut_1.png', 'Шоколад', 'Карамель', 'Донат с начинкой из молочного шоколада, покрытый мятной карамелью', 110, 'sweet');

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `author` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `rating` int(11) NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `author`, `date`, `rating`, `text`) VALUES
(1, 'Валентина', '2020-06-21', 5, 'Недавно попробовала пончики Fan&nbsp;of&nbsp;donuts \r\nпо&nbsp;совету друзей, они&nbsp;нереально вкусные. Очень нежное\r\nнежирное тесто, очень много начинки, пончики тают\r\nво рту. Самое крутое, что&nbsp;ребята позиционируют\r\nсвой продукт, как&nbsp;натуральный. И&nbsp;они&nbsp;действительно\r\nнатуральные. Чувствуется, что они сделаны с&nbsp;душой.\r\nМой&nbsp;фаворит - КРЕМ-ЧИЗ! Реально мега отвал бошки!\r\nРекомендую всем эту&nbsp;доставку, не&nbsp;пожалеете)'),
(2, 'Татьяна', '2020-06-25', 5, 'Много раз&nbsp;заказывали пончики в&nbsp;другой компании,\r\nно&nbsp;они&nbsp;уже&nbsp;очень приелись. Тут&nbsp;недавно знакомые\r\nподсказали эту доставку. Столько всяких необычных\r\nвкусов, сегодня решились попробовать, взяли все.\r\nНе&nbsp;ну&nbsp;а&nbsp;что?)) Блин, это&nbsp;невероятные сочетания.\r\nКто&nbsp;бы&nbsp;мог&nbsp;подумать, что&nbsp;пончик с&nbsp;паштетом и&nbsp;клюквой\r\nменя так&nbsp;покорит) Тесто мягкое, начинки много\r\nкрасиво украшены. Я&nbsp;очень довольна, спасибо!!)'),
(3, 'Валентина', '2020-06-21', 5, 'Недавно попробовала пончики Fan&nbsp;of&nbsp;donuts \r\nпо&nbsp;совету друзей, они&nbsp;нереально вкусные. Очень нежное\r\nнежирное тесто, очень много начинки, пончики тают\r\nво рту. Самое крутое, что&nbsp;ребята позиционируют\r\nсвой продукт, как&nbsp;натуральный. И&nbsp;они&nbsp;действительно\r\nнатуральные. Чувствуется, что они сделаны с&nbsp;душой.\r\nМой&nbsp;фаворит - КРЕМ-ЧИЗ! Реально мега отвал бошки!\r\nРекомендую всем эту&nbsp;доставку, не&nbsp;пожалеете)'),
(4, 'Татьяна', '2020-06-25', 5, 'Много раз&nbsp;заказывали пончики в&nbsp;другой компании,\r\nно&nbsp;они&nbsp;уже&nbsp;очень приелись. Тут&nbsp;недавно знакомые\r\nподсказали эту доставку. Столько всяких необычных\r\nвкусов, сегодня решились попробовать, взяли все.\r\nНе&nbsp;ну&nbsp;а&nbsp;что?)) Блин, это&nbsp;невероятные сочетания.\r\nКто&nbsp;бы&nbsp;мог&nbsp;подумать, что&nbsp;пончик с&nbsp;паштетом и&nbsp;клюквой\r\nменя так&nbsp;покорит) Тесто мягкое, начинки много\r\nкрасиво украшены. Я&nbsp;очень довольна, спасибо!!)');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `donut_blocks`
--
ALTER TABLE `donut_blocks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `donut_blocks`
--
ALTER TABLE `donut_blocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
