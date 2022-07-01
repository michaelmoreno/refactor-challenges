import { Bottles } from "../src/original";
import { BaseTest } from "./BaseTest";

class FirstTest extends BaseTest {

    verse0() {
        it('verse 0', () => {
            const verse = Bottles.verse(0)
            expect(verse).toEqual(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`)
        });
    }

    verse1() {    
        it('verse 1', () => {
            const verse = Bottles.verse(1)
            expect(verse).toEqual(`1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`)
        });
    }

    verse2() {    
        it('verse 2', () => {
            const verse = Bottles.verse(2)
            expect(verse).toEqual(`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`)
        });
    }

    defaultVerse(n: number) {
        it(`verse ${n}`, () => {
            const verse = Bottles.verse(n)
            expect(verse).toEqual(`${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around, ${n - 1} bottles of beer on the wall.\n`)
        })
    }
}

const test = new FirstTest(99, 0)
test.run()
