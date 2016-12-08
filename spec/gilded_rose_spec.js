'use strict'

describe("Given Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
    expect(true).toEqual(true)
  })

  describe('When an Item is created', () => {
    it('Should populate the Item object', () => {
      let item = new Item('Elixir of the Mongoose', 5, 7)

      expect(item).toEqual(jasmine.objectContaining({name: 'Elixir of the Mongoose', sell_in: 5, quality: 7}))
      expect(item.sell_in).toBe(5)
    })

    describe('When the applications is ran', () => {

      it('Should have a sell_in value which denotes the number of days we have to sell the item', () => {
        let expectedItems = items.filter((value) => {
          return value.sell_in != undefined
        })

        expect(expectedItems.length).toEqual(items.length)

      })

      it('All items have a quality value which denotes how valuable the item is', () => {
        let expectedItems = items.filter((value) => {
          return value.quality != undefined
        })

        expect(expectedItems.length).toEqual(items.length)
      })
      

      describe('When the array only has the Aged Brie item', () => {
        it('Should decrease the sell_in value and increase the quality', () => {
          items = []
          items.push(new Item('Aged Brie', 2, 0))

          update_quality()

          expect(items[0].sell_in).toBeLessThan(2)
          expect(items[0].quality).toEqual(1)

        })
      })

      describe('When the array only has the Sulfuras item', () => {
        it('Should not increase or decrease the sell_in or quality', () => {
          items = []
          items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))

          update_quality()

          expect(items[0].sell_in).toEqual(0)
          expect(items[0].quality).toEqual(80)
        })
      })

      describe('When the array only has the Backstage passes item', () => {
        it('When sell_in equals 0 it should set quality to 0', () => {
          items = []
          items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20))

          update_quality()

          expect(items[0].sell_in).toEqual(0)
          expect(items[0].quality).toEqual(0)
        })
        it('When sell_in less than 6 and greater than zero it should increse quality by 3', () => {
          items = []
          items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20))

          update_quality()

          expect(items[0].sell_in).toEqual(4)
          expect(items[0].quality).toEqual(23)
        })
        it('When sell_in less than 11 and greater than 5 it should increse quality by 2', () => {
          items = []
          items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20))

          update_quality()

          expect(items[0].sell_in).toEqual(8)
          expect(items[0].quality).toEqual(22)
        })
        it('When sell_in greater than 10 it should increse quality by 1', () => {
          items = []
          items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 12, 20))

          update_quality()

          expect(items[0].sell_in).toEqual(11)
          expect(items[0].quality).toEqual(21)
        })
      })
      describe('When the array only has Conjured items degrade in quality twice as fast as normal items', () => {
        it('Should decrease the sell_in value and decrease the quality by 2', () => {
          items = []
          items.push(new Item('Conjured Mana Cake', 5, 7))

          update_quality()

          expect(items[0].sell_in).toEqual(4)
          expect(items[0].quality).toEqual(5)

        })
        it('Should leave sell_in value at 0 and decrease the quality by 4', () => {
          items = []
          items.push(new Item('Conjured Mana Cake', 0, 7))

          update_quality()

          expect(items[0].sell_in).toEqual(-1)
          expect(items[0].quality).toEqual(3)

        })
        it('Should leave quality value at 0 and decrease sell_in 1', () => {
          items = []
          items.push(new Item('Conjured Mana Cake', 0, 0))

          update_quality()

          expect(items[0].sell_in).toEqual(-1)
          expect(items[0].quality).toEqual(0)

        })
      })

      describe('When the array only has a normal item', () => {
        it('Should decrease the sell_in value and decrease the quality by 1', () => {
          items = []
          items.push(new Item('Elixir of the Mongoose', 5, 7))

          update_quality()

          expect(items[0].sell_in).toEqual(4)
          expect(items[0].quality).toEqual(6)

        })
        it('Should leave sell_in value at 0 and decrease the quality by 2', () => {
          items = []
          items.push(new Item('Elixir of the Mongoose', 0, 7))

          update_quality()

          expect(items[0].sell_in).toEqual(-1)
          expect(items[0].quality).toEqual(5)

        })
        it('Should leave quality value at 0 and decrease sell_in 1', () => {
          items = []
          items.push(new Item('Elixir of the Mongoose', 0, 0))

          update_quality()

          expect(items[0].sell_in).toEqual(-1)
          expect(items[0].quality).toEqual(0)

        })
      })

    })
  })

})
