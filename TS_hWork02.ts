enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Fantasy = "Fantasy",
  Biography = "Biography",
  ScienceFiction = "ScienceFiction",
}

type Book = {
  title: string;
  author: string;
  yearPublished: number;
  genre: Genre;
  isAvailable: boolean;
};

const library: Book[] = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkiena",
    yearPublished: 1954,
    genre: Genre.Fantasy,
    isAvailable: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    yearPublished: 2011,
    genre: Genre.Biography,
    isAvailable: true,
  },
  {
    title: "The Stars My Destination",
    author: "Alfred Bester",
    yearPublished: 1956,
    genre: Genre.ScienceFiction,
    isAvailable: false,
  },
  {
    title: "title",
    author: "author",
    yearPublished: 1956,
    genre: Genre.ScienceFiction,
    isAvailable: false,
  },
];

console.log(library);
