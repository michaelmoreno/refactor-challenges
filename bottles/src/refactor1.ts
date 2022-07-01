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
        return this.handleIfZero(n) + ' bottle' + this.handlePlural(n) + ' of beer on the wall, ' +
            n + ' bottle' + this.handlePlural(n) + ' of beer.\n' +
            (n > 0 ? 'Take ' + this.handleLast(n) + ' down and pass it around' : 'Go to the store and buy some more') + ', ' +
            this.handleBounds(n) + ' bottle' + this.handlePlural(n) + ' of beer on the wall.\n';
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
}

const song = Bottles.song()
console.log(song)
