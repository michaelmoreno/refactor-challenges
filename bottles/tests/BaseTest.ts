export abstract class BaseTest {
    min: number
    max: number
    
    constructor(max = 99, min = 0) {
        this.min = min
        this.max = max
    }

    run() {
        let n = this.max
        while (n >= this.min) {
            const handler = (this as unknown as any)[`verse${n}`]
            if (handler) {
                handler.call(this)
            } else {
                this.defaultVerse(n)
            }
            n--
        }
    }

    abstract defaultVerse(n: number): void
}
