// Q8. Movie Ticket Booking System (inheritance + prototype chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log("----- MOVIE TICKET -----");
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket price: Rs. ${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket1 = new OnlineTicket("The Adventure", "A10", 200, 25);
const onlineTicket2 = new OnlineTicket("The Adventure", "A11", 200, 25);

// OnlineTicket objects can use printTicket() through the prototype chain.
onlineTicket1.printTicket();
console.log(`Convenience fee: Rs. ${onlineTicket1.convenienceFee}`);
console.log(`Total amount: Rs. ${onlineTicket1.getTotalAmount()}`);
console.log(`printTicket inherited: ${onlineTicket2.printTicket === MovieTicket.prototype.printTicket}`);
