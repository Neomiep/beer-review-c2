const books = []

const addBookToArray = function (name, category, rating) {
    books.push({ bookName: name, bookCategory: category, bookRating: rating })
    console.log(books)
}
const clicked = function () {
    let name = $(".book-input").val()
    let category = $(".category-input").val()
    let rating = $("#select").val()
    addBookToArray(name, category, rating);
}

const renderBooks = function () {
    $("#bookList").empty()
    for (let i of books) {
        $("#bookList").append("<li>Name: " + i.bookName + "<br> Category: " + i.bookCategory + "<br>Rating: " + i.bookRating + "</li>");
    }
}

$(".post-book").click(clicked)
$(".post-book").click(renderBooks)

let timesClicked = 0

const sortBooks = function () {
    timesClicked++
    if(timesClicked%2==0){
    books.sort(
        function (a, b) {return a.bookRating - b.bookRating})
    }
    else{books.sort(function (a, b) {return b.bookRating - a.bookRating})
    }
    renderBooks()
}

$("#sortButton").click(sortBooks)