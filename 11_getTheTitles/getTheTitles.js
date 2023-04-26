const getTheTitles = function(booksArray) {
    let list = [];
    booksArray.forEach(book => {
      const { title } = book;
      list.push(title);
    });
    console.log(list);
    return list;
  };
  
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];
  
  getTheTitles(books);
  // Do not edit below this line
  module.exports = getTheTitles;
  
