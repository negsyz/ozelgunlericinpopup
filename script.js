const specialDays = [
    // Resmi Tatiller ve Önemli Günler
    { date: '01-01', title: 'Yeni Yıl', message: 'Yeni Yıl Kutlu Olsun!', image: 'images/yeni-yil.jpg' },
    { date: '23-04', title: '23 Nisan', message: 'Ulusal Egemenlik ve Çocuk Bayramı Kutlu Olsun!', image: 'images/23-nisan.jpg' },
    { date: '01-05', title: 'İşçi Bayramı', message: '1 Mayıs İşçi Bayramı Kutlu Olsun!', image: 'images/isci-bayrami.jpg' },
    { date: '19-05', title: '19 Mayıs', message: 'Atatürk'ü Anma, Gençlik ve Spor Bayramı Kutlu Olsun!', image: 'images/19-mayis.jpg' },
    { date: '15-07', title: '15 Temmuz', message: 'Demokrasi ve Milli Birlik Günü', image: 'images/15-temmuz.jpg' },
    { date: '30-08', title: '30 Ağustos', message: 'Zafer Bayramı Kutlu Olsun!', image: 'images/30-agustos.jpg' },
    { date: '29-10', title: '29 Ekim', message: 'Cumhuriyet Bayramı Kutlu Olsun!', image: 'images/29-ekim.jpg' },

    // Dini Bayramlar (2024 yılı için - her yıl güncellenmeli)
    { date: '10-04', title: 'Ramazan Bayramı', message: 'Ramazan Bayramınız Mübarek Olsun!', image: 'images/ramazan-bayrami.jpg' },
    { date: '16-06', title: 'Kurban Bayramı', message: 'Kurban Bayramınız Mübarek Olsun!', image: 'images/kurban-bayrami.jpg' },

    // Önemli Anma Günleri
    { date: '10-11', title: '10 Kasım', message: 'Atatürk'ü Saygı ve Özlemle Anıyoruz', image: 'images/10-kasim.jpg' },
    { date: '18-03', title: 'Çanakkale Zaferi', message: 'Çanakkale Zaferi'nin Yıl Dönümü', image: 'images/canakkale-zaferi.jpg' },

    // Diğer Önemli Günler
    { date: '14-02', title: 'Sevgililer Günü', message: 'Sevgililer Gününüz Kutlu Olsun!', image: 'images/sevgililer-gunu.jpg' },
    { date: '08-03', title: 'Dünya Kadınlar Günü', message: 'Dünya Kadınlar Günü Kutlu Olsun!', image: 'images/kadinlar-gunu.jpg' },
    { date: '14-03', title: 'Tıp Bayramı', message: 'Tıp Bayramı Kutlu Olsun!', image: 'images/tip-bayrami.jpg' },
    { date: '07-04', title: 'Dünya Sağlık Günü', message: 'Dünya Sağlık Günü Kutlu Olsun!', image: 'images/saglik-gunu.jpg' },
    { date: '23-04', title: 'Dünya Kitap Günü', message: 'Dünya Kitap Günü Kutlu Olsun!', image: 'images/kitap-gunu.jpg' },
    { date: '05-06', title: 'Dünya Çevre Günü', message: 'Dünya Çevre Günü Kutlu Olsun!', image: 'images/cevre-gunu.jpg' },
    { date: '27-06', title: 'Dünya KOBİ Günü', message: 'Dünya KOBİ Günü Kutlu Olsun!', image: 'images/kobi-gunu.jpg' },
    { date: '30-09', title: 'Dünya Çeviri Günü', message: 'Dünya Çeviri Günü Kutlu Olsun!', image: 'images/ceviri-gunu.jpg' },
    { date: '01-10', title: 'Dünya Kahve Günü', message: 'Dünya Kahve Günü Kutlu Olsun!', image: 'images/kahve-gunu.jpg' },
    { date: '29-10', title: 'Dünya İnternet Günü', message: 'Dünya İnternet Günü Kutlu Olsun!', image: 'images/internet-gunu.jpg' },
    { date: '03-12', title: 'Dünya Engelliler Günü', message: 'Dünya Engelliler Günü', image: 'images/engelliler-gunu.jpg' },
    { date: '24-11', title: 'Öğretmenler Günü', message: 'Öğretmenler Günü Kutlu Olsun!', image: 'images/ogretmenler-gunu.jpg' },
    { date: '05-12', title: 'Dünya Gönüllüler Günü', message: 'Dünya Gönüllüler Günü Kutlu Olsun!', image: 'images/gonulluler-gunu.jpg' },
    { date: '31-12', title: 'Yılbaşı', message: 'Mutlu Yıllar!', image: 'images/yilbasi.jpg' }
];

function checkSpecialDay() {
    const today = new Date();
    const currentDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    
    const specialDay = specialDays.find(day => day.date === currentDate);
    
    if (specialDay) {
        document.getElementById('popup-title').textContent = specialDay.title;
        document.getElementById('popup-message').textContent = specialDay.message;
        document.getElementById('popup-image').src = specialDay.image;
        showPopup();
    }
}

function showPopup() {
    document.getElementById("special-day-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("special-day-popup").style.display = "none";
}

window.onload = checkSpecialDay;
