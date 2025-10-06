export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              TÜBİTAK Projesi
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-300">Ana Sayfa</a>
              <a href="#documents" className="text-white hover:text-blue-400 transition-colors duration-300">📁 Belgeler</a>
              <a href="#project-details" className="text-white hover:text-blue-400 transition-colors duration-300">📋 Detaylar</a>
              <a href="#team" className="text-white hover:text-blue-400 transition-colors duration-300">👥 Ekip</a>
              <a href="#timeline" className="text-white hover:text-blue-400 transition-colors duration-300">⏱️ Süreç</a>
              <a href="#gallery" className="text-white hover:text-blue-400 transition-colors duration-300">📸 Galeri</a>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-bounce delay-1000"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-sm mb-4 animate-fade-in">
              TÜBİTAK PROJESİ
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Aile Yapısının
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gelişimi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up max-w-4xl mx-auto">
            Ekipçe gerçekleştirdiğimiz TÜBİTAK projesi kapsamında aile yapısının gelişimini inceleyen, 
            belgelerimizi ve başarılarımızı sergileyen dijital platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Projeyi İncele
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
              Belgelerimiz
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Proje Ekibi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Araştırmacılar</h3>
              <p className="text-gray-300">Proje yürütücüleri ve ana araştırmacılar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Danışmanlar</h3>
              <p className="text-gray-300">Akademik danışmanlar ve uzmanlar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Destekleyiciler</h3>
              <p className="text-gray-300">TÜBİTAK ve kurumsal destekleyiciler</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section - Enhanced */}
      <section id="documents" className="py-20 px-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              📁 Proje Belgeleri & Ekler
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TÜBİTAK projesi kapsamında üretilen tüm belgeler, raporlar, sunumlar ve ekler burada paylaşılmaktadır.
            </p>
          </div>

          {/* Main Documents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Ana Belgeler</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">PDF</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TÜBİTAK Proje Önerisi</h3>
                <p className="text-gray-300 text-sm mb-4">Orijinal proje önerisi ve detaylı araştırma planı</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">2.5 MB • 45 sayfa</span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    İndir
                  </button>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">ONAY</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TÜBİTAK Onay Belgesi</h3>
                <p className="text-gray-300 text-sm mb-4">Resmi proje onay belgesi ve bütçe detayları</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">1.2 MB • 8 sayfa</span>
                  <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                    İndir
                  </button>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">RAPOR</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Final Araştırma Raporu</h3>
                <p className="text-gray-300 text-sm mb-4">Kapsamlı araştırma bulguları ve analiz sonuçları</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">8.7 MB • 156 sayfa</span>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                    İndir
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Destekleyici Belgeler</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">İstatistiksel Analiz</h4>
                <p className="text-gray-300 text-xs mb-3">SPSS analiz sonuçları</p>
                <button className="text-blue-400 hover:text-blue-300 text-xs">İndir (3.2 MB)</button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">Sunum Dosyaları</h4>
                <p className="text-gray-300 text-xs mb-3">PowerPoint sunumları</p>
                <button className="text-blue-400 hover:text-blue-300 text-xs">İndir (15.8 MB)</button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">Sertifikalar</h4>
                <p className="text-gray-300 text-xs mb-3">Başarı belgeleri</p>
                <button className="text-blue-400 hover:text-blue-300 text-xs">İndir (2.1 MB)</button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">Görsel Materyaller</h4>
                <p className="text-gray-300 text-xs mb-3">Fotoğraflar ve grafikler</p>
                <button className="text-blue-400 hover:text-blue-300 text-xs">İndir (24.5 MB)</button>
              </div>
            </div>
          </div>

          {/* Download All Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Tüm Belgeleri İndir</h3>
              <p className="text-gray-300 mb-6">Proje kapsamındaki tüm belgeleri tek seferde indirebilirsiniz</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                📦 Tüm Belgeleri İndir (ZIP - 58.2 MB)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Information */}
      <section id="project-details" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            📋 Proje Detayları
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Project Overview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Proje Özeti</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-300">Proje Kodu:</span>
                  <span className="text-white font-semibold">TÜBİTAK-2024-XXX</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-300">Başlangıç Tarihi:</span>
                  <span className="text-white font-semibold">Ocak 2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-300">Bitiş Tarihi:</span>
                  <span className="text-white font-semibold">Aralık 2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-gray-300">Bütçe:</span>
                  <span className="text-white font-semibold">₺XXX,XXX</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Durum:</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Tamamlandı</span>
                </div>
              </div>
            </div>

            {/* Research Objectives */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Araştırma Hedefleri</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Aile yapısındaki değişimleri analiz etmek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Sosyo-ekonomik faktörlerin etkisini incelemek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Gelecek projeksiyonları oluşturmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-gray-300">Politika önerileri geliştirmek</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Araştırma Metodolojisi</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Nicel Araştırma</h4>
                <p className="text-gray-300 text-sm">Anket çalışması ve istatistiksel analiz</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Nitel Araştırma</h4>
                <p className="text-gray-300 text-sm">Derinlemesine görüşmeler ve odak grupları</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Karşılaştırmalı Analiz</h4>
                <p className="text-gray-300 text-sm">Uluslararası örneklerle karşılaştırma</p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Temel Bulgular</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">📊 İstatistiksel Bulgular</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• %XX oranında aile yapısı değişimi tespit edildi</li>
                  <li>• En yüksek değişim XX yaş grubunda gözlendi</li>
                  <li>• Sosyo-ekonomik faktörlerin %XX etkisi</li>
                  <li>• Bölgesel farklılıklar %XX oranında</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">🎯 Politika Önerileri</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Aile destek politikalarının güçlendirilmesi</li>
                  <li>• Eğitim ve istihdam alanında iyileştirmeler</li>
                  <li>• Sosyal güvenlik sisteminin modernizasyonu</li>
                  <li>• Genç aileler için özel destek programları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Proje Süreci
          </h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-6"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Proje Başlangıcı</h3>
                <p className="text-gray-300">TÜBİTAK proje önerisi hazırlanması ve sunumu</p>
                <span className="text-sm text-blue-400">Ocak 2024</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-6"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Onay Süreci</h3>
                <p className="text-gray-300">Proje değerlendirmesi ve onay süreci</p>
                <span className="text-sm text-green-400">Mart 2024</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-6"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Araştırma Aşaması</h3>
                <p className="text-gray-300">Veri toplama ve analiz çalışmaları</p>
                <span className="text-sm text-yellow-400">Nisan - Ağustos 2024</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-6"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Raporlama</h3>
                <p className="text-gray-300">Araştırma bulgularının raporlanması</p>
                <span className="text-sm text-purple-400">Eylül 2024</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-6"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Sunum ve Sergi</h3>
                <p className="text-gray-300">Proje sonuçlarının sunumu ve sergilenmesi</p>
                <span className="text-sm text-red-400">Ekim 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Proje Galerisi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ekip Toplantısı</h3>
              <p className="text-gray-300 text-sm">Proje planlama toplantısı</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Araştırma Çalışması</h3>
              <p className="text-gray-300 text-sm">Veri toplama süreci</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sunum Hazırlığı</h3>
              <p className="text-gray-300 text-sm">Final sunumu hazırlık aşaması</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ekip Fotoğrafı</h3>
              <p className="text-gray-300 text-sm">Proje ekibi birlikte</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Başarı Belgeleri</h3>
              <p className="text-gray-300 text-sm">TÜBİTAK onay belgeleri</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sergi Standı</h3>
              <p className="text-gray-300 text-sm">Proje sergi alanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Proje Hakkında İletişim
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Proje Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Proje Kodu</p>
                    <p className="text-gray-300">TÜBİTAK-2024-XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Proje Süresi</p>
                    <p className="text-gray-300">12 Ay (Ocak - Aralık 2024)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Kurum</p>
                    <p className="text-gray-300">[Üniversite/Kurum Adı]</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">İletişim Formu</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Adınız Soyadınız" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="E-posta Adresiniz" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Kurum/Üniversite" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder="Proje hakkında sorularınız..." 
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">TÜBİTAK Projesi</h3>
              <p className="text-gray-300 text-sm">
                Aile yapısının gelişimi konusunda yürütülen bilimsel araştırma projesi
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Hızlı Linkler</h3>
              <div className="space-y-2">
                <a href="#team" className="block text-gray-300 hover:text-blue-400 transition-colors">Ekip</a>
                <a href="#documents" className="block text-gray-300 hover:text-blue-400 transition-colors">Belgeler</a>
                <a href="#timeline" className="block text-gray-300 hover:text-blue-400 transition-colors">Süreç</a>
                <a href="#gallery" className="block text-gray-300 hover:text-blue-400 transition-colors">Galeri</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 proje@universite.edu.tr</p>
                <p>📞 +90 (XXX) XXX XX XX</p>
                <p>📍 [Üniversite Adresi]</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TÜBİTAK Projesi - Aile Yapısının Gelişimi. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
