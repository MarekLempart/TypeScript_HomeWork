// Krok 1: Definiowanie interfejsu "ContactInterface"
interface ContactInterface {
    // [index: number]: string;
    name: string;
    email: string;
    phone: string;
}

// Krok 2a: Funkcja "addContact"
const addContact = (addressBook: ContactInterface[], contact: ContactInterface): void => {
    // walidacja
    if (!contact.name || !contact.email || !contact.phone) {
        console.error("All fields (name, email, phone) must be filled in.");
        return;
    }
    addressBook.push(contact);
};

// Krok 2b: Funkcja "getContacts"
const getContacts = (addressBook: ContactInterface[]): void => {
    console.log("List contacts:");
    addressBook.forEach((contact, index) => {
        console.log(`${index +1}. Name: ${contact.name}, Email: ${contact.email}, Phone:${contact.phone};`);
    });
};

// Krok 3: Tworzenie Ksiąki adresowej "addressBook" - początkowo pusta tablica
const addressBook: ContactInterface[] = [];

// Cześć dodatkwa: funckja do wyszukiwania kontaktów "searchContactByName"
const searchContactByName = (addressBook: ContactInterface[], name: string): void => {
    const foundContacts = addressBook.filter(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (foundContacts.length === 0) {
        console.log(`No contacts found for name: ${name}`);
    } else {
        console.log(`Contacts found for name: ${name}`);
        foundContacts.forEach((contact, index) => {
            console.log(`${index + 1}. Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone};`);
        })
    }
};

// Część dodatkow: funkcja do usuwnia kontaktów "removeContact"
const removeContact = (addressBook: ContactInterface[], name: string): void => {
    const initialLength = addressBook.length;
    const filteredContact = addressBook.filter(contact => contact.name.toLowerCase() !== name.toLowerCase());

    if (initialLength === filteredContact.length) {
        console.log(`No contacts found for name: ${name}`);
    } else {
        addressBook.length = 0; // Czyszczenie ksiąki adresowej
        addressBook.push(...filteredContact); // Dodawanie przefiltrowanych kontaktów
        console.log(`The contact with the name: "${name}" has been deleted!`);
    }
};

// Dodanie kilku adresów
addContact(addressBook, { name: "Yarpen Zigrin", email: "yarpen.zigrin@gmail.com", phone: "600-345-678"});
addContact(addressBook, { name: "Zoltan Chivay", email: "zoltan.chivay@gmail.com", phone: "600-700-345"});
addContact(addressBook, { name: "Triss Merigold", email: "triss.merigold@gmail.com", phone: "600-200-600"});

// Wyświetlenie listy kontaktów - wywołanie  funkcji "getContacts"
getContacts(addressBook);

// Wyszukiwanie kontaktów
searchContactByName(addressBook, "Zoltan Chivay");
searchContactByName(addressBook, "Marek Nowak"); // Test z imieniem, które nie istnieje

// Usuwanie kontaktu
removeContact(addressBook, "Yarpen Zigrin");
getContacts(addressBook); // Wyświetlamy listę po usunięciu

removeContact(addressBook, "Marek Nowak"); // Test usunięcia kontaktu, który nie istnieje

getContacts(addressBook);