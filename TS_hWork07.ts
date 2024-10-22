class Queue<T> {
    // Prywatne pole prxzechowujące elementy kolejki "Queue"
    private items: T[] = [];

    // Metoda dopdająca elementy do końca kolejki
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Metoda usuwająca element z początku kolejki i zwracająca go
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Metoda zwracająca pierwszy element kolejki bez jego usuwania
    peek(): T | undefined {
        return this.items[0];
    }
    
    // Metoda sprawdzająca, czy kolejka jest pusta
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Metoda zwracająca liczbę elementów w kolejce
    size(): number {
        return this.items.length;
    }
}

// Testowanie dla typów liczbowych
const numberQueue = new Queue<number>();

console.log("Dodawanie elementów do kolejki liczbowej...");
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

console.log("Pierwszy element w kolejce (peek):", numberQueue.peek()); // Oczekiwane: 1
console.log("Rozmiar kolejki:", numberQueue.size()); // Oczekiwane: 3

console.log("Usuwanie elementu z kolejki (dequeue):", numberQueue.dequeue()); // Oczekiwane: 1
console.log("Nowy pierwszy element w kolejce (peek):", numberQueue.peek()); // Oczekiwane: 2
console.log("Rozmiar kolejki:", numberQueue.size()); // Oczekiwane: 2
console.log("Czy kolejka jest pusta?", numberQueue.isEmpty()); // Oczekiwane: false

console.log("Usuwanie pozostałych elementów z kolejki...");
numberQueue.dequeue();
numberQueue.dequeue();
console.log("Czy kolejka jest pusta?", numberQueue.isEmpty()); // Oczekiwane: true

// Testowanie dla typów string
const stringQueue = new Queue<string>();

console.log("Dodawanie elementów do kolejki string...");
stringQueue.enqueue("A");
stringQueue.enqueue("B");
stringQueue.enqueue("C");

console.log("Pierwszy element w kolejce (peek):", stringQueue.peek()); // Oczekiwane: "A"
console.log("Rozmiar kolejki:", stringQueue.size()); // Oczekiwane: 3

console.log("Usuwanie elementu z kolejki (dequeue):", stringQueue.dequeue()); // Oczekiwane: "A"
console.log("Nowy pierwszy element w kolejce (peek):", stringQueue.peek()); // Oczekiwane: "B"
console.log("Rozmiar kolejki:", stringQueue.size()); // Oczekiwane: 2
console.log("Czy kolejka jest pusta?", stringQueue.isEmpty()); // Oczekiwane: false

console.log("Usuwanie pozostałych elementów z kolejki...");
stringQueue.dequeue();
stringQueue.dequeue();
console.log("Czy kolejka jest pusta?", stringQueue.isEmpty()); // Oczekiwane: true
