"use client";

import ClientOnly from './components/ClientOnly';
import { useState } from 'react';

type Generation = 'sessiz' | 'boomer' | 'x' | 'y' | 'z' | 'alfa';
type Metaphor = { emoji: string; text: string; size: 'large' | 'medium' | 'small'; meaning: string; quote: string };

// Quiz 1: Short quiz component
type AnswerKey = 'tarih' | 'otorite' | 'dogal' | 'teknoloji' | 'bag';
function ShortQuiz() {
  const [answers, setAnswers] = useState<Record<number, AnswerKey | null>>({ 1: null, 2: null, 3: null });
  const questions: { id: number; text: string; options: { key: AnswerKey; label: string }[] }[] = [
    { id: 1, text: 'Aileyi en çok hangi ifadeyle özdeşleştirirsiniz?', options: [
      { key: 'otorite', label: 'Kale / Düzen' },
      { key: 'dogal', label: 'Bahçe / Doğa' },
      { key: 'teknoloji', label: 'Ağ / Platform' },
      { key: 'bag', label: 'Takım / Dayanışma' },
    ]},
    { id: 2, text: 'Aile içi rol dağılımı sizce nasıl olmalı?', options: [
      { key: 'otorite', label: 'Net kurallar ve roller' },
      { key: 'bag', label: 'Esnek ama birlikte karar' },
      { key: 'teknoloji', label: 'Duruma göre hızlı uyum' },
      { key: 'dogal', label: 'Doğal akışta şekillensin' },
    ]},
    { id: 3, text: 'Aileyi anlatan bir araç seçseniz?', options: [
      { key: 'tarih', label: 'Tarih şeridi' },
      { key: 'dogal', label: 'Ağaç' },
      { key: 'teknoloji', label: 'Wi‑Fi yönlendirici' },
      { key: 'bag', label: 'Köprü' },
    ]},
  ];
  const resultMap: Record<AnswerKey, { title: string; desc: string; era: string }> = {
    tarih: { title: 'Tarihsel Duyarlılık', desc: 'Kökler ve süreklilik sizin için önemli.', era: 'İslamiyet Öncesi / İslamiyet Sonrası' },
    otorite: { title: 'Düzen ve Sorumluluk', desc: 'Net roller ve istikrarı önemsiyorsunuz.', era: 'İslamiyet Sonrası' },
    dogal: { title: 'Doğal Akış', desc: 'İlişkilerde doğallık ve dengeye değer veriyorsunuz.', era: 'X Kuşağı eğilimleri' },
    teknoloji: { title: 'Uyum ve İnovasyon', desc: 'Teknoloji ve esnekliğe açıksınız.', era: 'Y/Z/Alfa Kuşakları' },
    bag: { title: 'Bağ Kurucu', desc: 'Birlikte üretmeye ve dayanışmaya inanıyorsunuz.', era: 'Modern Çağ' },
  };
  const setAns = (qid: number, key: AnswerKey) => setAnswers(prev => ({ ...prev, [qid]: key }));
  const allAnswered = Object.values(answers).every(Boolean);
  const computeResult = () => {
    const counts: Record<AnswerKey, number> = { tarih: 0, otorite: 0, dogal: 0, teknoloji: 0, bag: 0 };
    Object.values(answers).forEach((k) => { if (k) counts[k] += 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as AnswerKey;
  };
  const resultKey = allAnswered ? computeResult() : null;
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
      <div className="space-y-6">
        {questions.map(q => (
          <div key={q.id} className="">
            <h3 className="font-semibold text-amber-900 mb-3">{q.id}. {q.text}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {q.options.map(opt => (
                <label key={opt.key} className={`cursor-pointer select-none rounded-xl border p-3 text-sm transition-all ${answers[q.id] === opt.key ? 'border-amber-500 bg-amber-50' : 'border-amber-200 hover:bg-amber-50/60'}`}> 
                  <input type="radio" name={`q-${q.id}`} className="mr-2 align-middle" onChange={() => setAns(q.id, opt.key)} checked={answers[q.id] === opt.key} />
                  <span className="text-amber-800">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        {!allAnswered && <p className="text-amber-600 text-sm">Tüm soruları işaretleyin.</p>}
        {resultKey && (
          <div className="inline-block mt-2 text-left bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
            <div className="text-xs mb-1 text-amber-600">Önerilen dönem / eğilim</div>
            <div className="text-lg font-bold text-amber-900">{resultMap[resultKey].title}</div>
            <div className="text-amber-800 text-sm mb-1">{resultMap[resultKey].desc}</div>
            <div className="text-amber-700 text-sm">Yakın: {resultMap[resultKey].era}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Quiz 2: Puzzle block
function PuzzleBlock() {
  type PItem = { q: string; a: string };
  const parts: PItem[] = [
    { q: 'Ailede ilk öğretmen kimdir?', a: 'anne' },
    { q: 'Aileyi bir ağaca benzetirsek, kökleri kimdir?', a: 'geçmiş kuşaklar' },
    { q: '“Bir elin nesi var, iki elin sesi var” neyi anlatır?', a: 'birlik' },
  ];
  const [revealed, setRevealed] = useState<boolean[]>(Array(parts.length).fill(false));
  const [inputs, setInputs] = useState<string[]>(Array(parts.length).fill(''));
  const onCheck = (i: number) => {
    const ok = inputs[i].trim().toLowerCase();
    const ans = parts[i].a.toLowerCase();
    if (ok && ans.startsWith(ok)) {
      setRevealed(prev => prev.map((v, idx) => (idx === i ? true : v)));
    }
  };
  const complete = revealed.every(Boolean);
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {parts.map((p, i) => (
          <div key={i} className={`rounded-xl border p-3 ${revealed[i] ? 'bg-amber-50 border-amber-300' : 'bg-white border-amber-200'}`}>
            <div className="text-sm font-semibold text-amber-900 mb-2">Soru {i + 1}</div>
            <div className="text-amber-800 text-sm mb-3">{p.q}</div>
            {!revealed[i] ? (
              <div className="flex items-center gap-2">
                <input value={inputs[i]} onChange={e => setInputs(prev => prev.map((v, idx) => (idx === i ? e.target.value : v)))} placeholder="Cevap" className="flex-1 text-sm rounded-lg border border-amber-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                <button onClick={() => onCheck(i)} className="px-3 py-1 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600">Kontrol</button>
              </div>
            ) : (
              <div className="text-green-700 text-sm font-medium">Parça yerleşti! ✅</div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Array(9).fill(0).map((_, i) => (
          <div key={i} className={`h-16 rounded-lg flex items-center justify-center text-xs font-semibold ${i < revealed.filter(Boolean).length ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' : 'bg-amber-100 text-amber-600'}`}>Parça {i + 1}</div>
        ))}
      </div>
      {complete && (
        <div className="mt-4 text-center text-amber-900 font-semibold">Metafor açığa çıktı: Birlikte Daha Güçlüyüz 🌳</div>
      )}
      <div className="mt-4 text-amber-700 text-xs text-center">İpucu: Dijitalde her doğru cevap bir parçayı görünür yapar.</div>
    </div>
  );
}

// Quiz 3: Contest block
function ContestBlock() {
  type Q = { q: string; a: string; choices: string[] };
  const section1: Q[] = [
    { q: 'Aile içinde en önemli iletişim aracı nedir?', a: 'konuşmak', choices: ['Konuşmak', 'Yazışmak', 'Sessizlik', 'Kurallar'] },
  ];
  const section2: Q[] = [
    { q: 'Şerife Bacı kimdir?', a: 'kurtuluş', choices: ['Roman kahramanı', 'Kurtuluş', 'Bilim insanı', 'Sanatçı'] },
  ];
  const section3: Q[] = [
    { q: 'Bugünün ailelerinde iletişim daha çok nasıl sağlanıyor?', a: 'telefon', choices: ['Mektup', 'Telgraf', 'Telefon', 'Duman'] },
  ];
  const all = [...section1, ...section2, ...section3];
  const [sel, setSel] = useState<(string | null)[]>(Array(all.length).fill(null));
  const score = sel.reduce((s, v, i) => (v && v.toLowerCase().includes(all[i].a) ? s + 10 : s), 0);
  const finished = sel.every(Boolean);
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
      <div className="space-y-6">
        <div>
          <div className="text-amber-900 font-bold mb-2">🏠 Bölüm 1: Aile Değerleri</div>
          {section1.map((qq, idx) => (
            <div key={idx} className="border border-amber-200 rounded-xl p-3">
              <div className="text-sm text-amber-800 mb-2">{qq.q}</div>
              <div className="flex flex-wrap gap-2">
                {qq.choices.map((c, ci) => (
                  <button key={ci} onClick={() => setSel(prev => prev.map((v, i) => (i === 0 ? c : v)))} className={`px-3 py-1 rounded-full text-sm border ${sel[0] === c ? 'bg-amber-500 text-white border-amber-500' : 'border-amber-200 text-amber-700 hover:bg-amber-50'}`}>{c}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-amber-900 font-bold mb-2">🇹🇷 Bölüm 2: Tarihsel ve Kültürel Bilinç</div>
          {section2.map((qq, idx) => (
            <div key={idx} className="border border-amber-200 rounded-xl p-3">
              <div className="text-sm text-amber-800 mb-2">{qq.q}</div>
              <div className="flex flex-wrap gap-2">
                {qq.choices.map((c, ci) => (
                  <button key={ci} onClick={() => setSel(prev => prev.map((v, i) => (i === 1 ? c : v)))} className={`px-3 py-1 rounded-full text-sm border ${sel[1] === c ? 'bg-amber-500 text-white border-amber-500' : 'border-amber-200 text-amber-700 hover:bg-amber-50'}`}>{c}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-amber-900 font-bold mb-2">💬 Bölüm 3: Kuşaklar Arası Farklar</div>
          {section3.map((qq, idx) => (
            <div key={idx} className="border border-amber-200 rounded-xl p-3">
              <div className="text-sm text-amber-800 mb-2">{qq.q}</div>
              <div className="flex flex-wrap gap-2">
                {qq.choices.map((c, ci) => (
                  <button key={ci} onClick={() => setSel(prev => prev.map((v, i) => (i === 2 ? c : v)))} className={`px-3 py-1 rounded-full text-sm border ${sel[2] === c ? 'bg-amber-500 text-white border-amber-500' : 'border-amber-200 text-amber-700 hover:bg-amber-50'}`}>{c}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <div className="inline-block bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-amber-800 text-sm font-semibold">Puan: {score} / 30</div>
        {finished && (
          <div className="mt-3 text-sm text-amber-700">Tebrikler! Basılabilir bir “Aile Bilinci” rozeti eklenebilir.</div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedGeneration, setSelectedGeneration] = useState<Generation>('sessiz');
  const [selectedMetaphor, setSelectedMetaphor] = useState<Metaphor | null>(null);

  // Günlük öneriler veri seti ve seçim fonksiyonu (client-only kullanılacak)
  const dailyBooks = [
    { title: 'Küçük Kadınlar', author: 'Louisa May Alcott', year: 1868, emoji: '📖', blurb: 'Kardeşlik, dayanışma ve büyüme öyküsü.' },
    { title: 'Anne Frank’in Hatıra Defteri', author: 'Anne Frank', year: 1947, emoji: '📔', blurb: 'Umut, aile ve insanlık üzerindeki etkileyici bir tanıklık.' },
    { title: 'Bülbülü Öldürmek', author: 'Harper Lee', year: 1960, emoji: '📗', blurb: 'Adalet, empati ve aile değerleri.' },
    { title: 'Babalar ve Oğullar', author: 'Ivan Turgenyev', year: 1862, emoji: '📘', blurb: 'Kuşak çatışması ve değişen değerler.' },
    { title: 'Sefiller', author: 'Victor Hugo', year: 1862, emoji: '📚', blurb: 'Merhamet, adalet ve aile bağları.' },
    { title: 'Pal Sokağı Çocukları', author: 'Ferenc Molnár', year: 1906, emoji: '📙', blurb: 'Dostluk, sadakat ve çocukluk.' },
    { title: 'Çalıkuşu', author: 'Reşat Nuri Güntekin', year: 1922, emoji: '📕', blurb: 'Azim, emek ve aidiyet.' },
    { title: 'Baba', author: 'Orhan Kemal', year: 1964, emoji: '📖', blurb: 'Aile sorumluluğu ve toplumsal gerçekler.' },
    { title: 'Huzur', author: 'Ahmet Hamdi Tanpınar', year: 1949, emoji: '📘', blurb: 'İç huzur arayışı ve ilişkiler.' },
    { title: 'Yüzyıllık Yalnızlık', author: 'Gabriel García Márquez', year: 1967, emoji: '📗', blurb: 'Aile mirası ve zamanın döngüsü.' },
    { title: 'Uçurtma Avcısı', author: 'Khaled Hosseini', year: 2003, emoji: '📙', blurb: 'Bağışlanma, sadakat ve aile yaraları.' },
    { title: 'And the Mountains Echoed', author: 'Khaled Hosseini', year: 2013, emoji: '📔', blurb: 'Kader, aile ve seçimler.' },
    { title: 'Bir Çocuğun Hikayesi', author: 'Peyami Safa', year: 1914, emoji: '📕', blurb: 'Çocukluk, hassasiyet ve aile gölgesi.' },
    { title: 'Masumiyet Müzesi', author: 'Orhan Pamuk', year: 2008, emoji: '📖', blurb: 'Aşk, hatıralar ve nesnelerin dili.' },
    { title: 'Yeşil Kiraz', author: 'Gülten Dayıoğlu', year: 1976, emoji: '📗', blurb: 'Gençlik, aile ve toplumsal beklentiler.' },
    { title: 'Eylül', author: 'Mehmet Rauf', year: 1901, emoji: '📘', blurb: 'İlişkilerde kırılganlık ve iç dünya.' },
    { title: 'Fareler ve İnsanlar', author: 'John Steinbeck', year: 1937, emoji: '📙', blurb: 'Dostluk, hayaller ve korunmasızlık.' },
    { title: 'Küçük Prens', author: 'Antoine de Saint-Exupéry', year: 1943, emoji: '📖', blurb: 'Sevgi, sorumluluk ve masumiyet.' },
    { title: 'Heidi', author: 'Johanna Spyri', year: 1881, emoji: '📗', blurb: 'Doğa, şefkat ve büyüme.' },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', year: 1911, emoji: '📘', blurb: 'İyileşme, dostluk ve aile.' },
    { title: 'Tom Sawyer’in Maceraları', author: 'Mark Twain', year: 1876, emoji: '📙', blurb: 'Çocukluk maceraları ve özgürlük.' },
    { title: 'Oliver Twist', author: 'Charles Dickens', year: 1838, emoji: '📕', blurb: 'Merhamet, sınıf ve aile arayışı.' },
    { title: 'İncir Kuşları', author: 'Sinan Akyüz', year: 2014, emoji: '📖', blurb: 'Aşk, savaş ve aile dayanışması.' },
    { title: 'Serenad', author: 'Zülfü Livaneli', year: 2011, emoji: '📗', blurb: 'Tarih, kimlik ve bağlar.' },
    { title: 'Çocuk Kalbi', author: 'Edmondo de Amicis', year: 1886, emoji: '📘', blurb: 'Erdem, empati ve aile değerleri.' },
    { title: 'Şeker Portakalı', author: 'José Mauro de Vasconcelos', year: 1968, emoji: '📙', blurb: 'Çocukluk, yoksulluk ve sevgi.' },
    { title: 'Momo', author: 'Michael Ende', year: 1973, emoji: '📕', blurb: 'Zaman, dostluk ve toplumsal eleştiri.' },
    { title: 'Martı Jonathan Livingston', author: 'Richard Bach', year: 1970, emoji: '📖', blurb: 'Özgürlük, amaç ve kendini aşma.' },
    { title: 'Tersine Dünya', author: 'Serpil Ural', year: 1988, emoji: '📗', blurb: 'Toplumsal roller üzerine düşündürücü bir hikâye.' },
    { title: '80 Günde Devriâlem', author: 'Jules Verne', year: 1872, emoji: '📘', blurb: 'Macera, dostluk ve değerler.' }
  ];
  const dailyFilms = [
    { title: 'Coco', director: 'Lee Unkrich', year: 2017, emoji: '🎬', blurb: 'Aile ve anılar üzerine dokunaklı bir yolculuk.' },
    { title: 'Up', director: 'Pete Docter', year: 2009, emoji: '🎈', blurb: 'Dostluk, sevgi ve kayıplarla yüzleşme.' },
    { title: 'Inside Out', director: 'Pete Docter', year: 2015, emoji: '🧠', blurb: 'Duygular ve aile iletişimi.' },
    { title: 'The Mitchells vs. The Machines', director: 'Mike Rianda', year: 2021, emoji: '🤖', blurb: 'Teknoloji çağında aile olabilmek.' },
    { title: 'Finding Nemo', director: 'Andrew Stanton', year: 2003, emoji: '🐟', blurb: 'Baba-oğul bağı ve cesaret.' },
    { title: 'Encanto', director: 'Byron Howard', year: 2021, emoji: '🏡', blurb: 'Kuşaklar arası ilişkiler ve beklentiler.' },
    { title: 'Brave', director: 'Brenda Chapman', year: 2012, emoji: '🏹', blurb: 'Anne-kız ilişkisi ve özgürleşme.' },
    { title: 'Wonder', director: 'Stephen Chbosky', year: 2017, emoji: '💫', blurb: 'Empati, okul ve aile desteği.' },
    { title: 'The Boy and the Heron', director: 'Hayao Miyazaki', year: 2023, emoji: '🕊️', blurb: 'Büyüme, kayıp ve bağlar.' },
    { title: 'The Pursuit of Happyness', director: 'Gabriele Muccino', year: 2006, emoji: '💼', blurb: 'Baba sevgisi ve mücadele.' },
    { title: 'Little Miss Sunshine', director: 'Jonathan Dayton & Valerie Faris', year: 2006, emoji: '🌻', blurb: 'Farklılıklarla güçlü aile.' },
    { title: 'Babam ve Oğlum', director: 'Çağan Irmak', year: 2005, emoji: '🇹🇷', blurb: 'Kuşak çatışması ve sevgi.' },
    { title: 'Babamın Kanatları', director: 'Kıvanç Sezer', year: 2016, emoji: '🏗️', blurb: 'Emek ve aile sorumluluğu.' },
    { title: 'Bizim Aile', director: 'Orhan Aksoy', year: 1975, emoji: '👨‍👩‍👧‍👦', blurb: 'Klasik Türk aile dayanışması.' },
    { title: 'Neşeli Günler', director: 'Orhan Aksoy', year: 1978, emoji: '😊', blurb: 'Kardeşlik ve barışma.' },
    { title: 'Canım Kardeşim', director: 'Ertem Eğilmez', year: 1973, emoji: '🧒', blurb: 'Aile sevgisi ve fedakârlık.' },
    { title: 'Kelebeğin Rüyası', director: 'Yılmaz Erdoğan', year: 2013, emoji: '🦋', blurb: 'Dayanışma ve umut.' },
    { title: 'Minari', director: 'Lee Isaac Chung', year: 2020, emoji: '🌿', blurb: 'Göçmen aile mücadelesi.' },
    { title: 'October Sky', director: 'Joe Johnston', year: 1999, emoji: '🚀', blurb: 'Baba-oğul ilişkisi, bilim sevgisi.' },
    { title: 'Akeelah and the Bee', director: 'Doug Atchison', year: 2006, emoji: '🐝', blurb: 'Aile desteği ve eğitim.' },
    { title: 'Paddington', director: 'Paul King', year: 2014, emoji: '🧸', blurb: 'Aile sıcaklığı ve toplumsal kabul.' },
    { title: 'Ratatouille', director: 'Brad Bird', year: 2007, emoji: '🐭', blurb: 'Destekleyici aile figürü ve tutku.' },
    { title: 'Moana', director: 'Ron Clements & John Musker', year: 2016, emoji: '🌊', blurb: 'Kökler, cesaret ve aidiyet.' },
    { title: 'Soul', director: 'Pete Docter', year: 2020, emoji: '🎷', blurb: 'Hayatın anlamı ve değerler.' },
    { title: 'The Good Dinosaur', director: 'Peter Sohn', year: 2015, emoji: '🦖', blurb: 'Aile ve cesaret.' },
    { title: 'The Lion King', director: 'Roger Allers & Rob Minkoff', year: 1994, emoji: '🦁', blurb: 'Büyüme, sorumluluk ve miras.' },
    { title: 'Elemental', director: 'Peter Sohn', year: 2023, emoji: '🔥', blurb: 'Farklılıklar ve aile bağlılığı.' },
    { title: 'Ferdinand', director: 'Carlos Saldanha', year: 2017, emoji: '🐂', blurb: 'Barışçıl karakter ve sevgi dolu aile.' },
    { title: 'Abominable', director: 'Jill Culton', year: 2019, emoji: '🏔️', blurb: 'Kayıp, yolculuk ve aile bağı.' },
    { title: 'Turning Red', director: 'Domee Shi', year: 2022, emoji: '🧧', blurb: 'Ergenlik, kültür ve aile iletişimi.' }
  ];
  const dailyDocs = [
    { title: 'Babies', author: 'Thomas Balmès', year: 2010, emoji: '👶', blurb: 'Dünyanın dört yerinde bebeklerin büyüme süreci.' },
    { title: 'He Named Me Malala', author: 'Davis Guggenheim', year: 2015, emoji: '🎓', blurb: 'Kız çocuklarının eğitimi ve aile desteği.' },
    { title: 'Life Itself', author: 'Steve James', year: 2014, emoji: '🎬', blurb: 'Yaşam, destek ve aile bağı.' },
    { title: 'My Octopus Teacher', author: 'Pippa Ehrlich & James Reed', year: 2020, emoji: '🐙', blurb: 'Doğa sevgisi ve içsel bağlar.' },
    { title: 'The Biggest Little Farm', author: 'John Chester', year: 2018, emoji: '🌱', blurb: 'Aileyle doğa içinde yaşam.' },
    { title: 'Daughters of Destiny', author: 'Vanessa Roth', year: 2017, emoji: '📚', blurb: 'Eğitimle değişen hayatlar.' },
    { title: 'Paper Clips', author: 'Elliot Berlin & Joe Fab', year: 2004, emoji: '📎', blurb: 'Empati ve tarih bilinci.' },
    { title: 'Happy', author: 'Roko Belic', year: 2011, emoji: '😊', blurb: 'Mutluluğun kaynağı: aile, toplum, doğa.' },
    { title: 'I Am', author: 'Tom Shadyac', year: 2010, emoji: '🌍', blurb: 'İnsanlık, paylaşım ve sorumluluk.' },
    { title: 'The Rescue', author: 'Elizabeth Chai Vasarhelyi & Jimmy Chin', year: 2021, emoji: '🛟', blurb: 'Dayanışma ve umut.' },
    { title: 'The Deepest Breath', author: 'Laura McGann', year: 2023, emoji: '🌊', blurb: 'Aile desteği ve cesaret.' },
    { title: 'Liyana', author: 'Aaron & Amanda Kopp', year: 2017, emoji: '🧵', blurb: 'Hikâyelerle iyileşme.' },
    { title: 'Growing Up Wild', author: 'Various', year: 2016, emoji: '🐾', blurb: 'Doğadaki aileler.' },
    { title: 'March of the Penguins', author: 'Luc Jacquet', year: 2005, emoji: '🐧', blurb: 'Penguen ailesinin dayanışması.' },
    { title: 'Jane', author: 'Brett Morgen', year: 2017, emoji: '🧠', blurb: 'Bilim, doğa ve anne figürü.' }
  ];
  const getDailyIndex = (length: number) => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = (hash * 31 + today.charCodeAt(i)) % 2147483647;
    }
    return hash % length;
  };

  // Metafor verileri
  const getMetaphorsForGeneration = (generation: Generation): Metaphor[] => {
    const metaphors: Record<Generation, Metaphor[]> = {
      sessiz: [
        { emoji: '🏠', text: 'Aile = Kale', size: 'large', meaning: 'Aile güvenli bir sığınak, herkesin rolü belli', quote: 'Ailemiz bir kale gibiydi, herkes kendi görevini bilirdi.' },
        { emoji: '👑', text: 'Baba = Kral', size: 'medium', meaning: 'Baba ailenin mutlak otoritesi', quote: 'Babam evin kralıydı, her karar ondan gelirdi.' },
        { emoji: '🌹', text: 'Anne = Gül', size: 'medium', meaning: 'Anne güzellik ve zarafetin simgesi', quote: 'Annem evin gülüydü, her şeyi güzelleştirirdi.' },
        { emoji: '⚔️', text: 'Çocuk = Asker', size: 'small', meaning: 'Çocuklar disiplinli ve itaatkar', quote: 'Çocuklar asker gibi eğitilirdi.' }
      ],
      boomer: [
        { emoji: '🏭', text: 'Aile = Fabrika', size: 'large', meaning: 'Aile düzenli ve verimli bir sistem', quote: 'Ailemiz düzenli bir fabrika gibi çalışırdı.' },
        { emoji: '⚙️', text: 'Baba = Motor', size: 'medium', meaning: 'Baba ailenin çalışan gücü', quote: 'Babam evin motoruydu, her şeyi o çalıştırırdı.' },
        { emoji: '🌺', text: 'Anne = Bahçe', size: 'medium', meaning: 'Anne büyüten ve besleyen', quote: 'Annem evin bahçesiydi, hepimizi büyüttü.' },
        { emoji: '🔧', text: 'Çocuk = Alet', size: 'small', meaning: 'Çocuklar aile sisteminin parçası', quote: 'Her çocuk ailenin bir aletiydi.' }
      ],
      x: [
        { emoji: '🏢', text: 'Aile = Şirket', size: 'large', meaning: 'Aile profesyonel bir organizasyon', quote: 'Ailemiz bir şirket gibi organize olmuştu.' },
        { emoji: '💼', text: 'Baba = CEO', size: 'medium', meaning: 'Baba stratejik kararlar alan lider', quote: 'Babam ailenin CEO\'su gibiydi.' },
        { emoji: '🌿', text: 'Anne = Doğa', size: 'medium', meaning: 'Anne doğal ve organik yaklaşım', quote: 'Annem doğa gibiydi, her şeyi doğal yapardı.' },
        { emoji: '💻', text: 'Çocuk = Bilgisayar', size: 'small', meaning: 'Çocuklar teknoloji ile büyüyor', quote: 'Çocuklar bilgisayar gibi hızlı öğreniyordu.' }
      ],
      y: [
        { emoji: '💻', text: 'Aile = Ağ', size: 'large', meaning: 'Aile birbirine bağlı bir sistem', quote: 'Ailemiz bir ağ gibi birbirine bağlı.' },
        { emoji: '🖥️', text: 'Baba = Server', size: 'medium', meaning: 'Baba bilgi ve kaynak sağlayan', quote: 'Babam ailenin server\'ı gibiydi.' },
        { emoji: '🌐', text: 'Anne = Platform', size: 'medium', meaning: 'Anne herkesin üzerinde durduğu zemin', quote: 'Annem ailenin platformuydu.' },
        { emoji: '📱', text: 'Çocuk = Uygulama', size: 'small', meaning: 'Çocuklar esnek ve uyarlanabilir', quote: 'Çocuklar uygulama gibi güncelleniyordu.' }
      ],
      z: [
        { emoji: '🎮', text: 'Aile = Oyun', size: 'large', meaning: 'Aile interaktif ve eğlenceli', quote: 'Ailemiz bir oyun gibi, herkes kendi karakterini oynuyor.' },
        { emoji: '🎯', text: 'Baba = Coach', size: 'medium', meaning: 'Baba rehberlik eden antrenör', quote: 'Babam ailenin coach\'u gibiydi.' },
        { emoji: '✨', text: 'Anne = Influencer', size: 'medium', meaning: 'Anne etkileyici ve ilham veren', quote: 'Annem ailenin influencer\'ıydı.' },
        { emoji: '🎪', text: 'Çocuk = Performans', size: 'small', meaning: 'Çocuklar sürekli performans gösteren', quote: 'Çocuklar sürekli performans gösteriyordu.' }
      ],
      alfa: [
        { emoji: '🤖', text: 'Aile = AI', size: 'large', meaning: 'Aile yapay zeka gibi öğrenen sistem', quote: 'Ailemiz bir yapay zeka gibi öğreniyor ve gelişiyor.' },
        { emoji: '🧠', text: 'Baba = Algoritma', size: 'medium', meaning: 'Baba mantıklı kararlar veren sistem', quote: 'Babam bir algoritma gibi mantıklı kararlar veriyor.' },
        { emoji: '💫', text: 'Anne = Data', size: 'medium', meaning: 'Anne bilgi ve deneyim kaynağı', quote: 'Annem ailenin data\'sı gibiydi.' },
        { emoji: '🚀', text: 'Çocuk = Startup', size: 'small', meaning: 'Çocuklar yenilikçi girişimler', quote: 'Çocuklar startup gibi yenilikçi.' }
      ]
    };
    return metaphors[generation] || [];
  };

  const generations: { id: Generation; name: string; color: 'slate' | 'blue' | 'purple' | 'green' | 'pink' | 'yellow'; icon: string }[] = [
    { id: 'sessiz', name: 'Sessiz Kuşak', color: 'slate', icon: 'S' },
    { id: 'boomer', name: 'Baby Boomers', color: 'blue', icon: 'B' },
    { id: 'x', name: 'X Kuşağı', color: 'purple', icon: 'X' },
    { id: 'y', name: 'Y Kuşağı', color: 'green', icon: 'Y' },
    { id: 'z', name: 'Z Kuşağı', color: 'pink', icon: 'Z' },
    { id: 'alfa', name: 'Alfa Kuşağı', color: 'yellow', icon: 'α' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Compact Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/50 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div className="text-base font-bold text-amber-800 font-serif">
                Kuşakların Gözüyle Aile
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#home" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Ana Sayfa</a>
              <a href="#about" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Amaç</a>
              <a href="#metafor-haritasi" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Metaforlar</a>
              <a href="#oneriler" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Öneriler</a>
              <a href="#quiz" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Quiz</a>
              <a href="#atolyeler" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">Atölyeler</a>
              <a href="#contact" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-amber-50">İletişim</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Subtle Background Pattern */}
        <ClientOnly>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50"></div>
          {/* Timeline stripes moving horizontally */}
          <div className="absolute inset-0 hero-timeline opacity-20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </ClientOnly>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <ClientOnly>
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full text-sm shadow-lg animate-fade-in">
                Kuşakların Yolculuğu
              </span>
            </ClientOnly>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 font-serif leading-tight">
            <ClientOnly>
              <span className="animate-fade-in">
                Kuşakların Gözüyle Aile:
                <span className="block text-amber-700 mt-2">Metaforik Bir Yolculuk</span>
              </span>
            </ClientOnly>
          </h1>
          <p className="text-lg md:text-xl text-amber-800 mb-10 max-w-4xl mx-auto leading-relaxed">
            Bu proje, farklı kuşakların aileyi nasıl algıladığını metaforlar üzerinden görünür kılar.
            Tarihsel arka plan ve kültürel bağlam eşliğinde, değişen roller ve değerler üzerine
            sade ve anlaşılır bir yolculuk sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="px-8 py-3 border-2 border-amber-500 text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-all duration-300 text-base">
              Projenin Amacı
            </a>
            <a href="#metafor-haritasi" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl text-base">
              Kuşakların aileye bakışını keşfet!
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <ClientOnly>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/60"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400/40 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400/40 rounded-full animate-float delay-500"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400/40 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-amber-500/40 rounded-full animate-float delay-1500"></div>
          </div>
        </ClientOnly>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-amber-900 mb-12 font-serif">
            Projenin Amacı
          </h2>

          {/* Compact Summary */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 shadow-xl mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Araştırma Amacı</h3>
              <p className="text-amber-800 leading-relaxed max-w-4xl mx-auto">
                Farklı kuşakların aile olgusunu nasıl anlamlandırdığını metaforlar üzerinden inceleyerek 
                Türk ailesinin değişen değer ve rollerini görünür kılar. Akademik olarak aile sosyolojisine 
                katkı sunmayı, toplumsal olarak kuşaklar arası diyaloğu güçlendirmeyi amaçlar.
              </p>
            </div>
          </div>

          {/* Research Questions - Compact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">❓</span>
                Araştırma Soruları
              </h3>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Kuşaklar aileyi hangi metaforlarla tanımlıyor?</li>
                <li>• Metaforlar kuşaklar arasında nasıl farklılaşıyor?</li>
                <li>• Değişen toplumsal koşullar aileye bakışı nasıl dönüştürüyor?</li>
                <li>• Roller metaforlar içinde nasıl konumlanıyor?</li>
              </ul>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">🎯</span>
                Alt Amaçlar
              </h3>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Kuşak-temelli metafor atlası oluşturmak</li>
                <li>• Tarihsel bağlamla metaforların ilişkisini kurmak</li>
                <li>• Kuşaklar arası diyaloğu güçlendirmek</li>
                <li>• Aile sosyolojisine katkı sunmak</li>
              </ul>
            </div>
          </div>

          {/* Methodology - Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-lg">👥</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Örneklem</h3>
              <p className="text-amber-700 text-sm">150 kişi, 6 kuşak</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Veri Toplama</h3>
              <p className="text-amber-700 text-sm">Yarı yapılandırılmış görüşme</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-lg">🔍</span>
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Analiz</h3>
              <p className="text-amber-700 text-sm">İçerik ve tematik analiz</p>
            </div>
          </div>

          {/* Keywords & Team - Compact */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-2 text-amber-600 text-sm">🏷️</span>
                Anahtar Kelimeler
              </h3>
              <div className="flex flex-wrap gap-2">
                {['aile', 'kuşaklar', 'metafor', 'sosyoloji', 'kültür'].map((k) => (
                  <span key={k} className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800 border border-amber-200">{k}</span>
                ))}
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-2 text-amber-600 text-sm">👥</span>
                Ekip & Yer
              </h3>
              <p className="text-amber-700 text-sm mb-2">Prof. Dr. [Danışman]</p>
              <p className="text-amber-700 text-sm mb-2">Dr. [Araştırmacı]</p>
              <p className="text-amber-700 text-sm font-semibold">Kahramanmaraş, 2025–2026</p>
            </div>
          </div>

          {/* Process Timeline - Compact */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg">
            <h3 className="text-lg font-bold text-amber-900 mb-4 text-center">Araştırma Süreci</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-sm font-bold mb-2">1</div>
                <p className="text-xs text-amber-700">Veri Toplama</p>
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300"></div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-sm font-bold mb-2">2</div>
                <p className="text-xs text-amber-700">Analiz</p>
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300"></div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-sm font-bold mb-2">3</div>
                <p className="text-xs text-amber-700">Bulgular</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metafor Haritası Section */}
      <section id="metafor-haritasi" className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-16 font-serif">
            Etkileşimli Metafor Haritası
          </h2>
          
          {/* Kuşak Seçici */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {generations.map((kuşak) => (
              <button
                key={kuşak.id}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  kuşak.color === 'slate' ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' :
                  kuşak.color === 'blue' ? 'bg-blue-200 text-blue-800 hover:bg-blue-300' :
                  kuşak.color === 'purple' ? 'bg-purple-200 text-purple-800 hover:bg-purple-300' :
                  kuşak.color === 'green' ? 'bg-green-200 text-green-800 hover:bg-green-300' :
                  kuşak.color === 'pink' ? 'bg-pink-200 text-pink-800 hover:bg-pink-300' :
                  'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
                }`}
                onClick={() => setSelectedGeneration(kuşak.id)}
              >
                {kuşak.icon} {kuşak.name}
              </button>
            ))}
          </div>

          {/* Metafor Bulutu */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-amber-200 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-center text-amber-900 mb-8">
              {selectedGeneration === 'sessiz' && 'Sessiz Kuşağın Metaforları'}
              {selectedGeneration === 'boomer' && 'Baby Boomers Metaforları'}
              {selectedGeneration === 'x' && 'X Kuşağının Metaforları'}
              {selectedGeneration === 'y' && 'Y Kuşağının Metaforları'}
              {selectedGeneration === 'z' && 'Z Kuşağının Metaforları'}
              {selectedGeneration === 'alfa' && 'Alfa Kuşağının Metaforları'}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {getMetaphorsForGeneration(selectedGeneration).map((metafor: Metaphor, index: number) => (
                <div
                  key={index}
                  className="group cursor-pointer relative"
                  onClick={() => setSelectedMetaphor(metafor)}
                >
                  <div className={`px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-110 ${
                    metafor.size === 'large' ? 'text-2xl' : 
                    metafor.size === 'medium' ? 'text-lg' : 'text-base'
                  } ${
                    selectedGeneration === 'sessiz' ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' :
                    selectedGeneration === 'boomer' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                    selectedGeneration === 'x' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                    selectedGeneration === 'y' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                    selectedGeneration === 'z' ? 'bg-pink-100 text-pink-800 hover:bg-pink-200' :
                    'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  }`}>
                    {metafor.emoji} {metafor.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metafor Detay Popup */}
          {selectedMetaphor && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl mb-4">{selectedMetaphor.emoji}</div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">{selectedMetaphor.text}</h3>
                  <p className="text-amber-800 mb-6">{selectedMetaphor.meaning}</p>
                  <div className="text-sm text-amber-600 italic mb-6">"{selectedMetaphor.quote}"</div>
                  <button
                    onClick={() => setSelectedMetaphor(null)}
                    className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          )}
          
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sessiz Kuşak */}
            <div className="group cursor-pointer bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-slate-500 to-slate-600 text-white flex items-center justify-center text-2xl font-bold mb-3">S</div>
                <h3 className="text-xl font-bold text-slate-900">Sessiz Kuşak</h3>
                <p className="text-slate-600 text-sm">1928-1945</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-slate-700">Savaş sonrası, gelenekçi, aile değerlerine bağlı</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-200 text-slate-800 rounded text-xs">🏠 Aile = Kale</span>
                    <span className="px-2 py-1 bg-slate-200 text-slate-800 rounded text-xs">👑 Baba = Kral</span>
                    <span className="px-2 py-1 bg-slate-200 text-slate-800 rounded text-xs">🌹 Anne = Gül</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600 italic">
                  "Ailemiz bir kale gibiydi, herkes kendi görevini bilirdi."
                </div>
              </div>
            </div>

            {/* Baby Boomers */}
            <div className="group cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-3">B</div>
                <h3 className="text-xl font-bold text-blue-900">Baby Boomers</h3>
                <p className="text-blue-600 text-sm">1946-1964</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-blue-700">Refah dönemi, çalışkan, aile odaklı</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">🏭 Aile = Fabrika</span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">⚙️ Baba = Motor</span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">🌺 Anne = Bahçe</span>
                  </div>
                </div>
                <div className="text-xs text-blue-600 italic">
                  "Ailemiz düzenli bir fabrika gibi çalışırdı."
                </div>
              </div>
            </div>

            {/* X Kuşağı */}
            <div className="group cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-3">X</div>
                <h3 className="text-xl font-bold text-purple-900">X Kuşağı</h3>
                <p className="text-purple-600 text-sm">1965-1980</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-purple-700">Bağımsız, pragmatik, değişim dönemi</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">🏢 Aile = Şirket</span>
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">💼 Baba = CEO</span>
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">🌿 Anne = Doğa</span>
                  </div>
                </div>
                <div className="text-xs text-purple-600 italic">
                  "Ailemiz bir şirket gibi organize olmuştu."
                </div>
              </div>
            </div>

            {/* Y Kuşağı */}
            <div className="group cursor-pointer bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mb-3">Y</div>
                <h3 className="text-xl font-bold text-green-900">Y Kuşağı</h3>
                <p className="text-green-600 text-sm">1981-1996</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-green-700">Teknoloji ile büyüdü, esnek, eşitlikçi</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">💻 Aile = Ağ</span>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">🖥️ Baba = Server</span>
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">🌐 Anne = Platform</span>
                  </div>
                </div>
                <div className="text-xs text-green-600 italic">
                  "Ailemiz bir ağ gibi birbirine bağlı."
                </div>
              </div>
            </div>

            {/* Z Kuşağı */}
            <div className="group cursor-pointer bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center text-2xl font-bold mb-3">Z</div>
                <h3 className="text-xl font-bold text-pink-900">Z Kuşağı</h3>
                <p className="text-pink-600 text-sm">1997-2012</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-pink-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-pink-700">Dijital yerliler, çeşitlilik, akışkan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">🎮 Aile = Oyun</span>
                    <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">🎯 Baba = Coach</span>
                    <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">✨ Anne = Influencer</span>
                  </div>
                </div>
                <div className="text-xs text-pink-600 italic">
                  "Ailemiz bir oyun gibi, herkes kendi karakterini oynuyor."
                </div>
              </div>
            </div>

            {/* Alfa Kuşağı */}
            <div className="group cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex items-center justify-center text-2xl font-bold mb-3">α</div>
                <h3 className="text-xl font-bold text-yellow-900">Alfa Kuşağı</h3>
                <p className="text-yellow-600 text-sm">2013-2025</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Karakteristik</h4>
                  <p className="text-sm text-yellow-700">AI ile büyüyor, global, hibrit</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Metaforlar</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">🤖 Aile = AI</span>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">🧠 Baba = Algoritma</span>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">💫 Anne = Data</span>
                  </div>
                </div>
                <div className="text-xs text-yellow-600 italic">
                  "Ailemiz bir yapay zeka gibi öğreniyor ve gelişiyor."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akademik Sonuçlar Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-16 font-serif">
            Akademik Sonuçlar
          </h2>

          {/* Metafor Sayısı Tablosu */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Kuşaklara Göre Metafor Dağılımı</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-amber-200">
                    <th className="text-left py-3 px-4 font-semibold text-amber-800">Kuşak</th>
                    <th className="text-center py-3 px-4 font-semibold text-amber-800">Toplam Metafor</th>
                    <th className="text-center py-3 px-4 font-semibold text-amber-800">Aile Rolleri</th>
                    <th className="text-center py-3 px-4 font-semibold text-amber-800">Teknoloji Temalı</th>
                    <th className="text-center py-3 px-4 font-semibold text-amber-800">Doğa Temalı</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { kuşak: 'Sessiz Kuşak', toplam: 47, roller: 32, teknoloji: 2, doğa: 18 },
                    { kuşak: 'Baby Boomers', toplam: 52, roller: 28, teknoloji: 5, doğa: 22 },
                    { kuşak: 'X Kuşağı', toplam: 48, roller: 25, teknoloji: 12, doğa: 28 },
                    { kuşak: 'Y Kuşağı', toplam: 61, roller: 22, teknoloji: 35, doğa: 15 },
                    { kuşak: 'Z Kuşağı', toplam: 58, roller: 18, teknoloji: 42, doğa: 8 },
                    { kuşak: 'Alfa Kuşağı', toplam: 45, roller: 15, teknoloji: 38, doğa: 5 }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-amber-100 hover:bg-amber-50/50">
                      <td className="py-3 px-4 font-medium text-amber-800">{row.kuşak}</td>
                      <td className="py-3 px-4 text-center text-amber-700">{row.toplam}</td>
                      <td className="py-3 px-4 text-center text-amber-700">{row.roller}</td>
                      <td className="py-3 px-4 text-center text-amber-700">{row.teknoloji}</td>
                      <td className="py-3 px-4 text-center text-amber-700">{row.doğa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tematik Analiz Sonuçları */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Destekleyici Aile</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Sessiz Kuşak</span>
                  <div className="w-24 bg-amber-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Baby Boomers</span>
                  <div className="w-24 bg-amber-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">X Kuşağı</span>
                  <div className="w-24 bg-amber-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">65%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Teknolojik Aile</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Y Kuşağı</span>
                  <div className="w-24 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Z Kuşağı</span>
                  <div className="w-24 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">89%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Alfa Kuşağı</span>
                  <div className="w-24 bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Bağ Kuran Aile</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">X Kuşağı</span>
                  <div className="w-24 bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Y Kuşağı</span>
                  <div className="w-24 bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700">Z Kuşağı</span>
                  <div className="w-24 bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                  <span className="text-amber-600 text-sm">76%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Öne Çıkan Farklılıklar */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Öne Çıkan Farklılıklar</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Teknoloji Temalı Metaforlar</h4>
                  <p className="text-amber-700 text-sm">Z ve Alfa kuşaklarında teknoloji metaforları %80+ oranında</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Doğa Temalı Metaforlar</h4>
                  <p className="text-amber-700 text-sm">X kuşağında doğa metaforları en yüksek (%58)</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Otorite Temalı Metaforlar</h4>
                  <p className="text-amber-700 text-sm">Sessiz kuşakta otorite metaforları %90+ oranında</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Ortak Benzerlikler</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Tüm kuşaklarda "aile = sığınak" metaforu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Anne figüründe "besleyici" temaları</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Çocuklarda "büyüme" metaforları</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Aile birliği vurgusu tüm kuşaklarda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Görselleştirme Grafikleri */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">Metafor Kategorileri Dağılımı</h3>
              <div className="space-y-4">
                {[
                  { kategori: 'Aile Rolleri', yüzde: 35, renk: 'bg-amber-500' },
                  { kategori: 'Teknoloji', yüzde: 28, renk: 'bg-blue-500' },
                  { kategori: 'Doğa', yüzde: 22, renk: 'bg-green-500' },
                  { kategori: 'Otorite', yüzde: 15, renk: 'bg-purple-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                    <span className="text-amber-700 font-medium w-24">{item.kategori}</span>
                    <div className="flex-1 bg-amber-200 rounded-full h-3">
                      <div className={`h-3 rounded-full ${item.renk}`} style={{width: `${item.yüzde}%`}}></div>
                    </div>
                    <span className="text-amber-600 text-sm w-12">{item.yüzde}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">Kuşaklar Arası Metafor Sayısı</h3>
              <div className="space-y-3">
                {[
                  { kuşak: 'Sessiz', sayı: 47, renk: 'bg-slate-500' },
                  { kuşak: 'Boomers', sayı: 52, renk: 'bg-blue-500' },
                  { kuşak: 'X', sayı: 48, renk: 'bg-purple-500' },
                  { kuşak: 'Y', sayı: 61, renk: 'bg-green-500' },
                  { kuşak: 'Z', sayı: 58, renk: 'bg-pink-500' },
                  { kuşak: 'Alfa', sayı: 45, renk: 'bg-yellow-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-amber-700 font-medium w-16">{item.kuşak}</span>
                    <div className="flex-1 bg-amber-200 rounded-full h-4">
                      <div className={`h-4 rounded-full ${item.renk}`} style={{width: `${(item.sayı/61)*100}%`}}></div>
                    </div>
                    <span className="text-amber-600 text-sm w-8">{item.sayı}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-16 font-serif">
            Tarihsel Dönemler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg text-center transition-all duration-300 group-hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏹</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">İslamiyet Öncesi</h3>
                <p className="text-amber-700">M.Ö. 2000 - M.S. 600</p>
                <p className="text-amber-800 mt-4">Göçebe yaşam, ataerkil yapı ve geleneksel aile değerleri</p>
              </div>
              
              {/* Hover Section - İslamiyet Öncesi Detayları */}
              <div className="hidden group-hover:block absolute top-0 left-full ml-4 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-2xl z-50">
                <h4 className="text-xl font-bold text-amber-900 mb-4">🏹 İslamiyet Öncesi</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Kültürel Özellikler</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Göçebe yaşam tarzı</li>
                      <li>• Ataerkil toplum yapısı</li>
                      <li>• Şamanizm inancı</li>
                      <li>• Savaşçı kültür</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Aile Rolleri</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Baba: Aile reisi</li>
                      <li>• Anne: Çadır yöneticisi</li>
                      <li>• Çocuklar: Erken sorumluluk</li>
                      <li>• Yaşlılar: Danışman</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg text-center transition-all duration-300 group-hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🕌</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">İslamiyet Sonrası</h3>
                <p className="text-amber-700">M.S. 600 - 1800</p>
                <p className="text-amber-800 mt-4">Dini etkiler, Osmanlı aile yapısı ve mahalle sistemi</p>
              </div>
              
              {/* Hover Section - İslamiyet Sonrası Detayları */}
              <div className="hidden group-hover:block absolute top-0 left-full ml-4 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-2xl z-50">
                <h4 className="text-xl font-bold text-amber-900 mb-4">🕌 İslamiyet Sonrası</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Dini Etkiler</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Nikah kurumu</li>
                      <li>• Miras hukuku</li>
                      <li>• Aile görevleri</li>
                      <li>• Dini eğitim</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Osmanlı Dönemi</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Harem sistemi</li>
                      <li>• Mahalle yapısı</li>
                      <li>• Lonca sistemi</li>
                      <li>• Şehir ailesi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg text-center transition-all duration-300 group-hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏙️</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Modern Çağ</h3>
                <p className="text-amber-700">1800 - Günümüz</p>
                <p className="text-amber-800 mt-4">Şehirleşme, çekirdek aile ve modern değerler</p>
              </div>
              
              {/* Hover Section - Modern Çağ Detayları */}
              <div className="hidden group-hover:block absolute top-0 left-full ml-4 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-2xl z-50">
                <h4 className="text-xl font-bold text-amber-900 mb-4">🏙️ Modern Çağ</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Değişimler</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Çekirdek aile yapısı</li>
                      <li>• Kadın-erkek eşitliği</li>
                      <li>• Şehirleşme etkisi</li>
                      <li>• Modern değerler</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-amber-800 mb-2">Günümüz</h5>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• Çalışan kadın</li>
                      <li>• Tek ebeveyn aile</li>
                      <li>• Teknoloji etkisi</li>
                      <li>• Global değerler</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Günün Önerisi Section */}
      <section id="oneriler" className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-12 font-serif">
            Günün Önerisi
          </h2>
          <ClientOnly>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {(() => {
                const b = dailyBooks[getDailyIndex(dailyBooks.length)];
                const f = dailyFilms[getDailyIndex(dailyFilms.length)];
                const d = dailyDocs[getDailyIndex(dailyDocs.length)];
                return (
                  <>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-2xl text-white">
                          {b.emoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">Kitap</span>
                          </div>
                          <h3 className="text-2xl font-bold text-amber-900">{b.title}</h3>
                          <p className="text-amber-700 text-sm mb-2">{b.author} • {b.year}</p>
                          <p className="text-amber-800">{b.blurb}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-2xl text-white">
                          {f.emoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">Film</span>
                          </div>
                          <h3 className="text-2xl font-bold text-amber-900">{f.title}</h3>
                          <p className="text-amber-700 text-sm mb-2">Yönetmen: {f.director} • {f.year}</p>
                          <p className="text-amber-800">{f.blurb}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-2xl text-white">
                          {d.emoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-100 text-green-700 border border-green-200">Belgesel</span>
                          </div>
                          <h3 className="text-2xl font-bold text-amber-900">{d.title}</h3>
                          <p className="text-amber-700 text-sm mb-2">{d.author} • {d.year}</p>
                          <p className="text-amber-800">{d.blurb}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
            <p className="text-center text-amber-600 text-sm mt-6">Her gün UTC tarihine göre otomatik güncellenir.</p>
          </ClientOnly>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-12 font-serif">Kısa Quiz</h2>
          <ClientOnly>
            <ShortQuiz />
          </ClientOnly>

          {/* 🧩 1. Benim Ailem Benim Bulmacam */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-4">🧩 Benim Ailem Benim Bulmacam</h3>
            <p className="text-amber-800 text-center mb-4 text-sm">Amaç: Aile kavramını oyun yoluyla keşfetmek; her parça bütünü tamamlar.</p>
            <ClientOnly>
              <PuzzleBlock />
            </ClientOnly>
          </div>

          {/* 🏆 2. Aile Bilgi Yarışması */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-4">🏆 Aile Bilgi Yarışması</h3>
            <p className="text-amber-800 text-center mb-4 text-sm">3 bölüm, her doğru 10 puan. Sonunda küçük bir sertifika/rozet verilebilir.</p>
            <ClientOnly>
              <ContestBlock />
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Atölyeler Section */}
      <section id="atolyeler" className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-amber-900 mb-6 font-serif">Etkileşimli Atölyeler</h2>
          <p className="text-center text-amber-800 mb-12 max-w-3xl mx-auto">Amaç: Katılımcıların kuşak farkını deneyimlemesini sağlamak.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Eskiden – Şimdi Eşleştirmesi */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-lg">🔁</div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">“Eskiden – Şimdi” Eşleştirmesi</h3>
                  <p className="text-amber-700 text-sm">Gençler, eski eşyaları (radyo, soba, gaz lambası) güncel karşılıklarıyla (telefon, klima, LED lamba) eşleştirir.</p>
                </div>
              </div>
              <div className="text-amber-800 text-sm">
                <span className="font-semibold">Tartışma:</span> “Hangisi aileyi daha çok bir araya getiriyordu?”
              </div>
            </div>

            {/* Aile Zaman Tüneli */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-lg">🧵</div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">“Aile Zaman Tüneli” Atölyesi</h3>
                  <p className="text-amber-700 text-sm">Katılımcılar ailelerinden bir anı yazar ve bir ip üzerinde kronolojik asar; ortaya duygusal bir zaman çizgisi çıkar.</p>
                </div>
              </div>
              <div className="text-amber-800 text-sm">Malzemeler: ip, mandal, kartlar, kalem.</div>
            </div>

            {/* Dedem Anlattı */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-lg">🎙️</div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">“Dedem Anlattı” Hikâye Paylaşımı</h3>
                  <p className="text-amber-700 text-sm">Kısa (2 dk) ses kayıtları veya canlı anlatımlar; serginin sesli bölümü olarak kullanılabilir.</p>
                </div>
              </div>
              <div className="text-amber-800 text-sm">İpucu: Sessiz alan, mikrofon ve kulaklık istasyonları hazırlayın.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-16 font-serif">
            İletişim
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Proje Bilgileri</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Proje Kodu</h4>
                <p className="text-amber-700">TÜBİTAK-2024-XXX</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Kurum</h4>
                <p className="text-amber-700">[Üniversite Adı]</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">E-posta</h4>
                <p className="text-amber-700">proje@universite.edu.tr</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Telefon</h4>
                <p className="text-amber-700">+90 (XXX) XXX XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}