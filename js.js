function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).catch(error => console.error('Помилка під час поширення:', error));
    } else {
        // Якщо браузер не підтримує Web Share API – копіюємо посилання в буфер обміну
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Посилання скопійовано! Поділіться ним вручну.');
        }).catch(error => console.error('Не вдалося скопіювати:', error));
    }
}
