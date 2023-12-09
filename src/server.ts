function generateRandomString(length: number) {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const books: string[] = ['111', '222', '333'];

export const fetchBooks = () => {
  return [...books]; //
};

export const addBook = () => {
  books.push(generateRandomString(5));
};
