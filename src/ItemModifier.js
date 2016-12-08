'use strict'

class ItemModifier {

  constructor (type) {

    switch (type)
    {

     case AgeCheese: return AgeCheese
     case BackStage: return BackStage
     case Sulfuras:  return Sulfuras
     case Conjured:  return Conjured
     case Default:   return Default

    }

  }

  AgeCheese (sell_in, quality) {
     if (sell_in > 0) { sell_in-- }

     quality = quality + 1

      return [sell_in, quality]
  }

  BackStage(sell_in, quality) {
    if (sell_in == 0) {
      quality = 0
    }
    else if (sell_in < 6) {
      sell_in = sell_in - 1
      quality = quality + 3
    }
    else if (sell_in < 11) {
      sell_in = sell_in - 1
      quality = quality + 2
    }
    else {
      sell_in = sell_in - 1
      quality = quality + 1
    }
    return [sell_in, quality]
  }

  Sulfuras (sell_in, quality) {
    return [sell_in, quality]
  }

  Conjured (sell_in, quality) {
    sell_in = sell_in - 1
    if (quality > 0){
      if (sell_in > 0) {
        quality = quality - 2
      }
      else {
        quality = quality - 4
      }
    }
    return [sell_in, quality]
  }

  Default (sell_in, quality) {
    sell_in = sell_in - 1
    if (quality > 0){
      if (sell_in > 0) {
        quality = quality - 1
      }
      else {
        quality = quality - 2
      }
    }
    return [sell_in, quality]
  }


}
