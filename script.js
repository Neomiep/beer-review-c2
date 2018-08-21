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
    for (let i in books) {
        $("#bookList").append("<li>Name: " + books[i].bookName + "<br> Category: " + books[i].bookCategory + "<br>Rating: " + books[i].bookRating + "</li>");
        i++
    }
}

$(".post-book").click(clicked)
$(".post-book").click(renderBooks)

let timesClicked = 0

const sortBooks = function () {
    timesClicked++
    if(timesClicked%2==0){
    books.sort(
        function (a, b) {
            if (a.bookRating - b.bookRating == 0) {
                return 0
            }
            else if (a.bookRating - b.bookRating > 0) {
                return 1
            }
            else {
                return -1
            }
        })
    }
    else{books.reverse(
        function (a, b) {
            if (a.bookRating - b.bookRating == 0) {
                return 0
            }
            else if (a.bookRating - b.bookRating > 0) {
                return 1
            }
            else {
                return -1
            }
        })

    }
    renderBooks()
}

$("#sortButton").click(sortBooks)