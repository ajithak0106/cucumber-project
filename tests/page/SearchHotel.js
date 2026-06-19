export class SearchHotel{
    constructor(page){
        this.page = page
        this.location = page.locator('//select[@id="location"]')
        this.hotels = page.locator('//select[@id="hotels"]')
        this.roomtype = page.locator('//select[@id="room_type"]')
        this.noOfRoom = page.locator('//select[@id="room_nos"]')
        this.adultsperroom = page.locator('//select[@id="adult_room"]')
        this.childperroom = page.locator('//select[@id="child_room"]')
        this.searchbutton = page.locator('//input[@id="Submit"]')

    }
    async SelectLocation(location){
        await this.location.selectOption(location)
    }
    async SelectHotels(hotelsType){
        await this.hotels.selectOption(hotelsType)
    }
    async SelectRoomType(roomtype){
        await this.roomtype.selectOption(roomtype)
    }
    async RoomCount(roomcount){
        await this.noOfRoom.selectOption(roomcount)
    }
    async SelectAdultsCount(adultCount){
        await this.adultsperroom.selectOption(adultCount)
    }
    async SelectChildCount(childCount){
        await this.childperroom.selectOption(childCount)
    }
    async ClickSearchButton() {
        await this.searchbutton.click()
    }




}