import articles from '../models/articlesModel'
import categorie from '../models/categorieModel'
export const CATEGORIES = [
    new categorie(1,'boissons', 'red'),
    new categorie(2,'chips', 'red'),
    new categorie(3,'chocolats', 'red'),
    new categorie(4,'bonbons', 'red'),
    new categorie(5,'biscuits', 'red'),


]

// Une autre méthode pour créer une dataBase

export const ARTICLES = [
    new articles(1,'coca-cola', 1, 'https://sodishop.sn/wp-content/uploads/2021/06/ART0154-Coca-Cola-Boisson-en-Canette-Maximum-de-Gout-330ml-Sodishop-Mali-Achat-Vente.jpg', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(2, 'lays', 2, 'https://www.carrefour.fr/media/540x540/Photosite/PGC/EPICERIE/3168930008125_PHOTOSITE_20210729_180548_0.jpg?placeholder=1', '1,27 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(3, 'mars', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5iUZSJQcNJbWMei6lbzSAA4r7ZG69e9Zww&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(4, 'mentos', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FR-HnfuEQcPebuXNlvUftOMAjKTeEFZuSg&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(5, 'lulu', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcc9otEzjNSOXBGLGqKvUVBl2dRss8LIIJw&usqp=CAU', '1,50 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(6,'fanta', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviFhC5nGQxRSTL9rdNKrOrVyHD2RQo5X0xQ&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(7, 'brets', 2,'https://boutique.brets.fr/Files/132646/Img/03/125g_originale_r_-z.png', '1,24 Є' , 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(8, 'lindt', 3, 'https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=60,format=auto,metadata=none/assets/images/grocery/2809731/580x580.jpg', '1,91 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(9, 'haribo', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xUQFxfItVJ55x-dZhH9jJjmXYwxXkz10rA&usqp=CAU', '1,95 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(10, 'granola', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hlwmJbYKbeQP8BoGeHtkNW4ZzHPF1EXeVA&usqp=CAU', '2,75 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(11,'sprite', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OSBcTI2_Fa4g0LquTbrt5Xfh-4cPjFI4OQ&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(12, 'pringles', 2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDGKO7MsGYM8G07flo7PtMFkiCHesBto6xw&usqp=CAU', '1,85 Є' , 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(13, 'snikers', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE8QomWPoX_oV1joK1l3UUvBw6xKgQdkuJQ&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(14, 'arlequin', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEY6reL9LiDw1kWUxKj1fzGBkB-3a6wdDQQw&usqp=CAU', '2,15 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(15, 'deliChoc', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82jCVszeIn2q_49cyNHPpkZzCSoIpY0SnMA&usqp=CAU', '1,39 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(16,'schweppes', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsoYm_7AXCkJQbv5_bHizcUXlspJjiyYGiA&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(17, 'doritos', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBEEnAw2S42Ebn00OcplTB-UOD9jxUH_gsg&usqp=CAU', '1,85 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(18, 'twix', 3,    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5RWDErq3Q32KQ-GM2hfhT0FMlUhDt809JQ&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(19, 'ricola', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4_-NUYNfvB5E0S7BAgRJC_Qw8b80Sw8eYg&usqp=CAU', '1,49 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(20, 'belVita', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmCCSfhhycj7p1BK6AcX4yrYJ5cnzC5Gi4w&usqp=CAU', '2,06 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(21,'orangina', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw56uej_Ze-S_9LmhMBZIvDIp1VqKl2J2pHw&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(22, 'ruffles', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn_O4lWRL23iqc4ZAINNMM24jS5uF7XTGXA&usqp=CAU', '1,99 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(23, 'milka', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRkP8suibXGdJk9nmXA2lktPENOj5OtXx8Q&usqp=CAU', '1,99 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(24, 'smarties', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsROO9ewGxy2v8svg66mV6LzXzccxDdiq1Q&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(25, 'prince', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnomViyckYfcnpfpILohB2tO0zxQz72x3KA&usqp=CAU', '1,45 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(26,'lipton', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YQh_G6MuG-CfxRBDNKZe7DgqAKi3rcloDg&usqp=CAU', '1 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(27, 'cheetos', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVo9duOuDHNXUrPVXprr7w6tOgS_bE-Pp1KA&usqp=CAU', '2,49 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(28, 'kinder', 3, 'https://www.cdiscount.com/pdt2/6/8/3/1/700x700/cas8000500110683/rw/kinder-chocolat-t16-200.jpg', '2,31 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(29, 'caramBar', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnkrb748RyY7OeGWJ_8VJIPdNRzyzz1mVEmg&usqp=CAU', '1,73 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),
    new articles(30, 'oreo', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOq9qKm1VJF8zD9Z8Neju5068WyECZoifCw&usqp=CAU', '0,87 Є', 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression'),


]