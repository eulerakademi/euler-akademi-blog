'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Matematik Öğrenmenin Püf Noktaları',
    content: `
      Matematik öğrenmek, doğru yaklaşım ve stratejilerle herkes için mümkündür.
      
      ## Temel İlkeler
      
      - Konuları sırasıyla öğrenin
      - Bol pratik yapın
      - Hataları öğrenme fırsatı olarak görün
      - Günlük tekrar alışkanlığı edinin
      
      ## Çalışma Teknikleri
      
      1. Pomodoro tekniğini kullanın (25 dakika çalışma, 5 dakika mola)
      2. Konuları birbirine bağlayın
      3. Görsel materyallerden faydalanın
      4. Çözümlü örnekleri inceleyin
      
      Matematik, sabır ve düzenli çalışma ile aşılabilecek bir derstir!
    `,
    date: '2024-02-20',
    slug: 'matematik-ogrenme'
  },
  {
    id: 2,
    title: 'Türev Konusuna Giriş',
    content: `
      Türev, bir fonksiyonun anlık değişim oranını ifade eder.
      
      ## Temel Kavramlar
      
      - Limit kavramı
      - Süreklilik
      - Anlık değişim oranı
      - Teğet doğrusu
      
      ## Türev Formülleri
      
      1. Sabit fonksiyonun türevi
      2. Üs fonksiyonunun türevi
      3. Toplam ve fark kuralı
      4. Çarpım ve bölüm kuralı
      
      Türev, matematiğin en önemli konularından biridir!
    `,
    date: '2024-02-19',
    slug: 'turev-giris'
  },
  {
    id: 3,
    title: 'İntegral ve Uygulamaları',
    content: `
      İntegral, türevin tersi işlemidir ve alan hesaplamada kullanılır.
      
      ## İntegral Çeşitleri
      
      - Belirsiz integral
      - Belirli integral
      - Riemann toplamı
      
      ## Uygulama Alanları
      
      1. Alan hesaplama
      2. Hacim hesaplama
      3. Yol-hız problemleri
      4. Fizik problemleri
      
      İntegral, matematiğin en güçlü araçlarından biridir!
    `,
    date: '2024-02-18',
    slug: 'integral-uygulamalari'
  },
  {
    id: 4,
    title: 'Olasılık ve İstatistik',
    content: `
      Olasılık ve istatistik, veri analizi ve karar verme süreçlerinde kullanılır.
      
      ## Temel Kavramlar
      
      - Örnek uzay
      - Olay
      - Bağımlı ve bağımsız olaylar
      - Koşullu olasılık
      
      ## İstatistik Konuları
      
      1. Merkezi eğilim ölçüleri
      2. Dağılım ölçüleri
      3. Normal dağılım
      4. Hipotez testleri
      
      Olasılık ve istatistik, modern dünyanın vazgeçilmez araçlarıdır!
    `,
    date: '2024-02-17',
    slug: 'olasilik-istatistik'
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Yazı Bulunamadı</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block transform hover:translate-x-2 transition-transform">
          ← Ana Sayfaya Dön
        </Link>
        
        <h1 className="text-3xl font-bold mb-3 text-gray-800">{post.title}</h1>
        
        <div className="text-xs text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString('tr-TR')}
        </div>
        
        <div className="prose prose-sm max-w-none bg-white rounded-lg shadow-sm p-6">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('##')) {
              return (
                <h2 key={index} className="text-xl font-bold mt-6 mb-3 text-gray-800">
                  {paragraph.trim().replace('##', '')}
                </h2>
              );
            }
            if (paragraph.trim().startsWith('-')) {
              return (
                <li key={index} className="ml-4 mb-2 text-sm text-gray-700">
                  {paragraph.trim().replace('-', '')}
                </li>
              );
            }
            if (paragraph.trim().match(/^\d\./)) {
              return (
                <li key={index} className="ml-4 mb-2 text-sm text-gray-700">
                  {paragraph.trim()}
                </li>
              );
            }
            return (
              <p key={index} className="mb-3 text-sm text-gray-700">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>
      </article>
    </main>
  );
} 