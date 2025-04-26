// notification.js

export function showNotification(message, type = "success") {
    // Контейнер для всех уведомлений
    let container = document.querySelector('.notification-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notification-container';
        Object.assign(container.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: '1000'
        });
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    const closeBtn = document.createElement('button');

    // Стили для уведомления
    Object.assign(notification.style, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 20px',
        borderRadius: '12px',
        minWidth: '250px',
        maxWidth: '300px',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        position: 'relative',
    });

    // Цвета по типу
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745'; // зелёный
        message = 'Well done! ' + message;
    } else if (type === 'fail') {
        notification.style.backgroundColor = '#dc3545'; // красный
        message = 'Oh snap! ' + message;
    } else if (type === 'warning') {
        notification.style.backgroundColor = '#fd7e14'; // оранжевый
        message = 'Warning! ' + message;
    } else {
        notification.style.backgroundColor = '#333';
    }

    // Текст уведомления
    const text = document.createElement('span');
    text.textContent = message;

    // Кнопка закрытия
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        background: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        marginLeft: '10px',
        cursor: 'pointer',
    });

    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    notification.appendChild(text);
    notification.appendChild(closeBtn);
    container.appendChild(notification);

    // Автоудаление через 3 секунды
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
