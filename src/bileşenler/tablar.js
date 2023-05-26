import axios from "axios";
const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divCreate = document.createElement("div");
  divCreate.classList.add("topics");
  for (let i = 0; i < konu.length; i++) {
    const divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = konu[i];
    divCreate.appendChild(divTab);
    console.log(divTab);
  }
  
  return divCreate;
};

const tabEkleyici = async (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
axios.get("http://localhost:5001/api/konular")
  .then((res) => {
    const data = res.data.konular;
    const topic = Tablar(data);
    document.querySelector(secici).append(topic);
  });
};

export { Tablar, tabEkleyici };