document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.select');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const selectedPlatform = document.getElementById('selected-platform');

    selectElement.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-value');
            const text = item.querySelector('span').textContent;
            selectedPlatform.textContent = text;
            dropdownMenu.style.display = 'none';
            // Store the selected platform for use in QR code generation
            selectedPlatform.dataset.value = value;
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.style.display = 'none';
        }
    });
});

function generateQRCode() {
    const platform = document.getElementById('selected-platform').dataset.value;
    const identifier = document.getElementById('identifier').value;

    if (!identifier) {
        alert('Please enter a phone number or username!');
        return;
    }

    let profileUrl = '';

    // Format the URL based on the platform and identifier (phone number or username)
    if (platform === 'whatsapp') {
        profileUrl = `https://wa.me/${identifier}`;
    } else if (platform === 'github') {
        profileUrl = `https://github.com/${identifier}`;
    } else if (platform === 'telegram') {
        profileUrl = `https://t.me/${identifier}`;
    } else if (platform === 'facebook') {
        profileUrl = `https://www.facebook.com/${identifier}`;
    } else if (platform === 'snapchat') {
        profileUrl = `https://www.snapchat.com/add/${identifier}`;
    } else if (platform === 'instagram') {
        profileUrl = `https://www.instagram.com/${identifier}`;
    } else if (platform === 'x') {
        profileUrl = `https://x.com/${identifier}`;
    } else if (platform === 'linkedin') {
        profileUrl = `https://www.linkedin.com/in/${identifier}`;
    } else {
        alert('Please select a valid platform!');
        return;
    }

    // Generate QR code for the URL
    
    const qrCode = document.getElementById('qr-code');
    qrCode.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(profileUrl)}" alt="QR Code">`;
}

const text = "SCAN IT, REACH IT!!🫣"; // Change this to your desired text
const textElement = document.getElementById("animated-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust typing speed here (200 ms)
    } else {
        textElement.classList.add("show"); // Add the class for the full display
    }
}

document.addEventListener("DOMContentLoaded", typeText);

