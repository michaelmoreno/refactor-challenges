export class Bottles {
    static song(): string {
        return Bottles.verses(99, 0);
    }

    static verses(hi: number, lo: number): string {
        return Array(hi - lo + 1)
            .fill(0)
            .map((_, i) => hi - (i + lo))
            .map(n => Bottles.verse(n))
            .join('\n');
    }
    static verse(n: number): string {
        return (
            this.bottlesOnWall(n) +
            this.reprise(n) +
            this.nextBottle(n) +
            this.bottlesOnWall(n) +
            '\n'
            )
    }
    static handlePlural(n: number) {
        return n != 1 ? 's' : ''
    }
    static handleLast(n: number) {
        return n > 1 ? 'one' : 'it'
    }
    static handleIfZero(n: number) {
        return n - 1 == 0 ? 'no more' : n - 1
    }
    static handleBounds(n: number) {
        return (n - 1 < 0 ? 99 : this.handleIfZero(n))
    }
    static handleNextBottle(n: number) {
        return (n > 0 ? 'Take ' + this.handleLast(n) + ' down and pass it around' : 'Go to the store and buy some more') + ', '
    }
    static bottlesOnWall(n: number)  {
        return this.handleBounds(n) + ' bottle' + this.handlePlural(n) + ' of beer on the wall, '
    }
    static reprise(n: number) {
        return n + ' bottle' + this.handlePlural(n) + ' of beer.\n'
    }
    static nextBottle(n: number) {
        return this.handleNextBottle(n)
    }
}

const song = Bottles.song()
console.log(song)


// realized that I attempted too big of a refactor at once,
// getting an extra "99 bottles of beer on the wall, 0 bottles of beer." on last output
// also did not realize that the two bottles on wall verse have different capitalization
