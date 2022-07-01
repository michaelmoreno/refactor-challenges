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
        return (n == 0 ? 'No more' : n) + ' bottle' + (n != 1 ? 's' : '') + ' of beer on the wall, ' +
            n + ' bottle' + (n != 1 ? 's' : '') + ' of beer.\n' +
            (n > 0 ? 'Take ' + (n > 1 ? 'one' : 'it') + ' down and pass it around' : 'Go to the store and buy some more') + ', ' +
            (n - 1 < 0 ? 99 : n - 1 == 0 ? 'no more' : n - 1) + ' bottle' + (n - 1 != 1 ? 's' : '') + ' of beer on the wall.\n';
    }
}

const song = Bottles.song()

console.log(song)
