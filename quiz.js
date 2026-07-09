const QUIZ = [
  {
    q: "Motosiklet kullanırken kask takmak kimin için zorunludur?",
    options: ["Sadece sürücü için", "Sadece şehir dışında", "Sürücü ve yolcu için", "Sadece 125cc üstü motosikletlerde"],
    correct: 2,
    explain: "Kask, sürücü ve varsa yolcu için kanunen zorunludur; şehir içi/dışı ya da motor hacmi fark etmez."
  },
  {
    q: "\"DUR\" levhası gördüğünde ne yapmalısın?",
    options: ["Yavaşlayıp yoluna devam et", "Tam durup yolu kontrol ettikten sonra hareket et", "Sadece gece durman gerekir", "Sadece karşıdan araç varsa dur"],
    correct: 1,
    explain: "DUR levhası tam durma zorunluluğu getirir; yolu kontrol etmeden geçmek, karşıdan gelebilecek bir aracı gözden kaçırma riski taşır."
  },
  {
    q: "Islak zeminde frenleme mesafesi kuru zemine göre nasıl değişir?",
    options: ["Değişmez", "Kısalır", "Uzar", "Sadece arka teker için değişir"],
    correct: 2,
    explain: "Islak zeminde lastik tutuşu azaldığından durma mesafesi belirgin şekilde uzar; takip mesafesini buna göre artırmak gerekir."
  },
  {
    q: "Şerit değiştirmeden önce yapılması gereken en kritik kontrol nedir?",
    options: ["Sadece dikiz aynasına bakmak", "Hiçbir kontrol gerekmez", "Omuz üzerinden kör nokta kontrolü", "Sadece korna çalmak"],
    correct: 2,
    explain: "Aynalar kör noktayı tam kapsamaz; şerit değiştirmeden önce omuz üzerinden dönüp kontrol etmek zorunludur."
  },
  {
    q: "Viraja girerken önerilen genel teknik nedir?",
    options: ["Viraj içinde sert fren yapmak", "Yavaşla - gir - hızlan prensibi", "Sabit çok yüksek hızda girmek", "Gazı tamamen kapatıp sürüklenmek"],
    correct: 1,
    explain: "Virajdan önce yavaşlamak, viraj içinde sabit veya hafif hızlanan gaz kullanmak, motosikletin dengesini korur."
  },
  {
    q: "Üçgen şekilli, beyaz zemin üzerine kırmızı kenarlıklı levhalar hangi tür işarettir?",
    options: ["Bilgi işareti", "Tehlike uyarı işareti", "Yasaklayıcı işaret", "Yön ve mesafe işareti"],
    correct: 1,
    explain: "Üçgen, kırmızı kenarlıklı levhalar tehlike uyarı işaretleridir ve ilerideki bir tehlikeye karşı önceden uyarır."
  },
  {
    q: "Azami hız sınırını gösteren levha nasıl görünür?",
    options: ["Mavi kare, ortasında P harfi", "Kırmızı kenarlıklı beyaz daire, içinde sayı", "Sarı elmas şekli", "Yeşil dikdörtgen"],
    correct: 1,
    explain: "Hız sınırı levhaları kırmızı kenarlıklı beyaz dairesel levhalardır, ortasında km/saat cinsinden sayı bulunur."
  },
  {
    q: "Kuru zeminde motosikletin toplam frenleme gücünün büyük kısmı nereden gelir?",
    options: ["Sadece arka fren", "Sadece motor freni", "Ön fren ağırlıklı, dengeli kullanım", "Sadece el freni"],
    correct: 2,
    explain: "Kuru zeminde genel kural yaklaşık %70 ön, %30 arka fren oranıdır; sadece arka frene güvenmek durma mesafesini uzatır."
  },
  {
    q: "Gece sürüşünde karşı yönden araç geldiğinde ne yapılmalı?",
    options: ["Farları tam açık bırakmak", "Kısa farla geçişe izin vermek", "Farları tamamen kapatmak", "Sinyal vermeden geçmek"],
    correct: 1,
    explain: "Uzun far, karşıdan gelen sürücüyü kamaştırabilir; araçlar yaklaşırken kısa fara geçmek güvenliği artırır."
  },
  {
    q: "\"Yol Ver\" levhası neyi ifade eder?",
    options: ["Tam durma zorunluluğu", "Kesişen yoldaki araçlara öncelik tanımak, gerekirse durmak", "Hız sınırı", "Park yasağı"],
    correct: 1,
    explain: "Yol Ver levhası DUR kadar kesin bir durma zorunluluğu getirmez, ama kesişen yoldaki araçlara öncelik tanımayı ve gerekirse durmayı gerektirir."
  },
  {
    q: "Takip mesafesi neye göre ayarlanmalıdır?",
    options: ["Sabit 1 metre", "Hız ve yol/hava koşullarına göre", "Sadece önündeki aracın büyüklüğüne göre", "Trafik yoğunluğuna bakılmaksızın hep aynı"],
    correct: 1,
    explain: "Güvenli takip mesafesi; hıza, yol yüzeyine ve hava koşullarına göre değişir — ıslak zeminde ve yüksek hızda artırılmalıdır."
  },
  {
    q: "Motosiklet montunda bulunması gereken en önemli özelliklerden biri nedir?",
    options: ["Sadece şık görünüm", "Omuz ve dirsekte darbe koruyucu", "Kalın kumaş olması", "Parlak renkli olması"],
    correct: 1,
    explain: "Montun koruyuculuğu, omuz ve dirsek gibi darbe alma ihtimali yüksek bölgelerdeki sert koruyucularla sağlanır."
  },
  {
    q: "Yağmur başladığında ilk dakikalarda yol neden daha kaygandır?",
    options: ["Yağmur suyu her zaman aynı derecede kaygandır", "Yol üstündeki yağ ve toz henüz yıkanmamıştır", "Sadece lastikler ıslanır", "Kayganlık hep sabittir"],
    correct: 1,
    explain: "Yağmurun ilk dakikalarında, yol yüzeyindeki biriken yağ ve toz henüz yıkanmadığı için zemin normalden daha kaygandır."
  },
  {
    q: "\"Girişi Olmayan Yol\" levhası genellikle hangi durumda karşımıza çıkar?",
    options: ["Otoparklarda", "Tek yönlü yola ters yönden giriş noktasında", "Okul bölgelerinde", "Köprülerde"],
    correct: 1,
    explain: "Bu levha, tek yönlü bir yola ters yönden araç girişini engellemek için o girişin başına konur."
  },
  {
    q: "Türkiye'de motosikletle şeritler arası sürekli geçiş (lane splitting) genel olarak nasıl değerlendirilir?",
    options: ["Her zaman serbesttir", "Sadece otoyollarda serbesttir", "Genel olarak trafik kurallarına aykırıdır", "Sadece motosikletliler arasında serbesttir"],
    correct: 2,
    explain: "Motosikletler de diğer araçlar gibi kendi şeridinde seyretmek zorundadır; şeritler arası sürekli geçiş genel trafik kurallarına aykırı kabul edilir."
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-form");
  if (!container) return;
  QUIZ.forEach((item, i) => {
    const block = document.createElement("div");
    block.className = "quiz-question";
    const optionsHtml = item.options.map((opt, j) => `
      <label class="q-option">
        <input type="radio" name="q${i}" value="${j}">
        <span>${opt}</span>
      </label>
    `).join("");
    block.innerHTML = `
      <p class="q-text"><span class="q-num">${i + 1}.</span>${item.q}</p>
      <div class="q-options">${optionsHtml}</div>
      <div class="q-explain" id="explain-${i}"></div>
    `;
    container.appendChild(block);
  });
}

function scoreMessage(score, total) {
  const pct = score / total;
  if (pct === 1) return "Mükemmel! Trafik bilgin çok sağlam.";
  if (pct >= 0.7) return "Gayet iyi! Birkaç konuyu tekrar gözden geçirebilirsin.";
  if (pct >= 0.4) return "Fena değil ama Trafik Kuralları ve Sürüş Teknikleri sayfalarını tekrar incelemende fayda var.";
  return "Trafik Kuralları ve Sürüş Teknikleri sayfalarını baştan gözden geçirmeni öneririz.";
}

function gradeQuiz() {
  let score = 0;
  QUIZ.forEach((item, i) => {
    const options = document.querySelectorAll(`input[name="q${i}"]`);
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    options.forEach((opt) => {
      const label = opt.closest(".q-option");
      label.classList.remove("correct", "incorrect");
      if (parseInt(opt.value, 10) === item.correct) label.classList.add("correct");
    });
    if (selected) {
      const chosenIdx = parseInt(selected.value, 10);
      if (chosenIdx === item.correct) {
        score++;
      } else {
        selected.closest(".q-option").classList.add("incorrect");
      }
    }
    const explainEl = document.getElementById(`explain-${i}`);
    explainEl.textContent = item.explain;
    explainEl.style.display = "block";
  });

  const total = QUIZ.length;
  const resultBox = document.getElementById("quiz-result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `<h3>Sonucun: ${score} / ${total}</h3><p>${scoreMessage(score, total)}</p>`;
  resultBox.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  const btn = document.getElementById("grade-btn");
  if (btn) btn.addEventListener("click", gradeQuiz);
});
