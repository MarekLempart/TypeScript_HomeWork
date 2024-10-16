// Krok 1: Zdefiniowanie interfejsów
interface User {
    username: string;
    email: string;
}

interface Admin extends User {
    adminCode: string;
}

interface Guest extends User {
    guestCode: string
};

// Krok 2: Utworzenie funkcje do rejestracji użytkowników z użyciem narrowing i operatora in.

const registerUser = (user: User | Admin | Guest): void => {
    if('adminCode' in user) {
        console.log('Admin created');
    } else if('guestCode' in user) { 
        console.log('Guest created');        
    } else {
        console.log('User created')
    }
}

// Testowanie funkcji

const user1: User = { 
    username: 'JohnDoe', 
    email: 'john@gmail.com' 
};

const admin1: Admin = { 
    username: 'AdminJane', 
    email: 'admin.jane@gmail.com', 
    adminCode: 'ADM001'
};

const guest1: Guest = {
    username: 'GuestJohn',
    email: 'guest.John@gmail.com',
    guestCode: 'GST123'
}

registerUser(user1);  // Powinno wypisać: 'User created'
registerUser(admin1); // Powinno wypisać: 'Admin created'
registerUser(guest1); // Powinno wypisać: 'Guest created'
