// Mock user data (for simplicity)
const users = [
    { username: "demoUser", password: "demoPassword" },
    { username: "mako116", password: "benzema123" },

    // Add more users as needed
];

let currentUser = null;

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check if the provided credentials match any user
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Successful login
        currentUser = user;
        document.getElementById('login-form').reset();
        showChatContainer();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    currentUser = null;
    hideChatContainer();
}

function showChatContainer() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.chat-container').style.display = 'block';
}

function hideChatContainer() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.chat-container').style.display = 'none';
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const formattedMessage = `<div class="message">${currentUser.username}: ${message}</div>`;
        document.getElementById('chat-messages').innerHTML += formattedMessage;
        messageInput.value = '';
    }
}
