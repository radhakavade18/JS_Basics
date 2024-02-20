let restaurant = {
    name: 'ABS',
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability : function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return seatsLeft >= partySize
    },
    seatParty: function(partySize){
        if(partySize > 75){
            return 'No seats available'
        }
        this.guestCount += partySize;
    },
    removeParty : function(partySize){
        this.guestCount -= partySize;
        return this.guestCount;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(2);
console.log(restaurant.checkAvailability(4));