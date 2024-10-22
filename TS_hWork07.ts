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

// Użycie z obiektami:
interface Person {
    name: string;
    age: number;
}

const personQueue = new Queue<Person>();

console.log("Dodawanie elementów do kolejki obiektów Person...");
personQueue.enqueue({ name: "John", age: 30 });
personQueue.enqueue({ name: "Jane", age: 25 });
personQueue.enqueue({ name: "Tom", age: 40 });

console.log("Pierwszy element w kolejce (peek):", personQueue.peek()); // Oczekiwane: { name: "John", age: 30 }
console.log("Rozmiar kolejki:", personQueue.size()); // Oczekiwane: 3

console.log("Usuwanie elementu z kolejki (dequeue):", personQueue.dequeue()); // Oczekiwane: { name: "John", age: 30 }
console.log("Nowy pierwszy element w kolejce (peek):", personQueue.peek()); // Oczekiwane: { name: "Jane", age: 25 }

// Użycie z funkcjami:
const functionQueue = new Queue<() => void>();

console.log("Dodawanie funkcji do kolejki...");
functionQueue.enqueue(() => console.log("Funkcja 1"));
functionQueue.enqueue(() => console.log("Funkcja 2"));
functionQueue.enqueue(() => console.log("Funkcja 3"));

console.log("Wykonanie funkcji z początku kolejki...");
functionQueue.peek()?.(); // Oczekiwane: Funkcja 1
console.log("Usuwanie funkcji z kolejki i wykonanie:");
functionQueue.dequeue()?.(); // Oczekiwane: Funkcja 1

console.log("Nowy pierwszy element kolejki (wykonanie funkcji):");
functionQueue.peek()?.(); // Oczekiwane: Funkcja 2

//Użycie z tablicami (lub innymi kolekcjami):
const arrayQueue = new Queue<number[]>();

console.log("Dodawanie tablic do kolejki...");
arrayQueue.enqueue([1, 2, 3]);
arrayQueue.enqueue([4, 5, 6]);
arrayQueue.enqueue([7, 8, 9]);

console.log("Pierwsza tablica w kolejce (peek):", arrayQueue.peek()); // Oczekiwane: [1, 2, 3]
console.log("Rozmiar kolejki:", arrayQueue.size()); // Oczekiwane: 3

console.log("Usuwanie tablicy z kolejki (dequeue):", arrayQueue.dequeue()); // Oczekiwane: [1, 2, 3]
console.log("Nowa pierwsza tablica w kolejce (peek):", arrayQueue.peek()); // Oczekiwane: [4, 5, 6]

// Użycie z typami własnymi: Jeżeli masz własny typ, np. enum, również możesz go użyć:
enum Status {
    Pending,
    InProgress,
    Completed
}

const statusQueue = new Queue<Status>();

console.log("Dodawanie statusów do kolejki...");
statusQueue.enqueue(Status.Pending);
statusQueue.enqueue(Status.InProgress);
statusQueue.enqueue(Status.Completed);

console.log("Pierwszy status w kolejce (peek):", statusQueue.peek()); // Oczekiwane: Status.Pending
console.log("Rozmiar kolejki:", statusQueue.size()); // Oczekiwane: 3

console.log("Usuwanie statusu z kolejki (dequeue):", statusQueue.dequeue()); // Oczekiwane: Status.Pending
console.log("Nowy pierwszy status w kolejce (peek):", statusQueue.peek()); // Oczekiwane: Status.InProgress
