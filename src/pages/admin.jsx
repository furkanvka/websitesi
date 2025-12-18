import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

const API_URL = 'http://localhost:8080';

export default function AdminDashboard() {
  // --- AUTH STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  
  // --- DATA STATE ---
  const [links, setLinks] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    source: ''
  });

  // 1. Sayfa yüklendiğinde Token kontrolü
  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // 2. Giriş başarılıysa verileri çek
  useEffect(() => {
    if (isLoggedIn) {
      fetchLinks();
      fetchTags();
    }
  }, [isLoggedIn]);

  // --- AUTH İŞLEMLERİ ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('admin_token', data.token);
        setToken(data.token);
        setIsLoggedIn(true);
      } else {
        alert("Hatalı şifre!");
      }
    } catch (err) {
      alert("Sunucuya bağlanılamadı.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    setToken('');
  };

  // --- API İSTEKLERİ (GET, POST, DELETE) ---
  const fetchLinks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/links`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.status === 401) return handleLogout();
      const data = await response.json();
      setLinks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Veri çekme hatası:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await fetch(`${API_URL}/tags`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setAvailableTags(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Tagler çekilemedi:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, tags: selectedTags };

    try {
      const response = await fetch(`${API_URL}/links`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({ title: '', url: '', description: '', source: '' });
        setSelectedTags([]);
        fetchLinks();
        fetchTags();
      } else if (response.status === 401) {
        handleLogout();
      } else {
        alert("Kayıt hatası!");
      }
    } catch (err) {
      alert("Bağlantı hatası!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bu linki silmek istediğinize emin misiniz?")) return;

    try {
      const response = await fetch(`${API_URL}/links?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchLinks();
        fetchTags();
      } else if (response.status === 401) {
        handleLogout();
      } else {
        alert("Silme işlemi başarısız.");
      }
    } catch (err) {
      alert("Bağlantı hatası!");
    }
  };

  // --- YARDIMCI FONKSİYONLAR ---
  const toggleTag = (tagName) => {
    setSelectedTags(prev => 
      prev.includes(tagName) ? prev.filter(t => t !== tagName) : [...prev, tagName]
    );
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = tagInput.trim().toLowerCase();
      if (val && !selectedTags.includes(val)) {
        setSelectedTags([...selectedTags, val]);
      }
      setTagInput('');
    }
  };

  // --- RENDER (GİRİŞ EKRANI) ---
  if (!isLoggedIn) {
    return (
      <Layout title="Giriş">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div className="card shadow--md padding--lg" style={{ width: '350px' }}>
            <h3 className="text--center">Yönetici Girişi</h3>
            <form onSubmit={handleLogin}>
              <div className="margin-bottom--md">
                <input 
                  type="password" 
                  placeholder="Admin Şifresi" 
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="button button--primary button--block" type="submit">Giriş Yap</button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  // --- RENDER (ANA PANEL) ---
  return (
    <Layout title="Admin Paneli">
      <main className="container margin-vert--lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>Link Yönetimi</h1>
          <button className="button button--danger button--outline" onClick={handleLogout}>Çıkış Yap</button>
        </div>

        <div className="row">
          {/* Giriş Formu (Sol) */}
          <div className="col col--4">
            <div className="card shadow--md">
              <div className="card__header"><h3>Yeni Link Ekle</h3></div>
              <div className="card__body">
                <form onSubmit={handleSubmit}>
                  <div className="margin-bottom--md">
                    <label className="text--bold">Başlık *</label>
                    <input name="title" className="button--outline" style={{ width: '100%', padding: '8px' }} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                  </div>
                  
                  <div className="margin-bottom--md">
                    <label className="text--bold">URL *</label>
                    <input name="url" type="url" className="button--outline" style={{ width: '100%', padding: '8px' }} value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} required />
                  </div>

                  <div className="margin-bottom--md">
                    <label className="text--bold">Seçili Etiketler</label>
                    <div className="margin-bottom--sm" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {selectedTags.map(tag => (
                        <span key={tag} className="badge badge--primary">
                          {tag} <span onClick={() => toggleTag(tag)} style={{ cursor: 'pointer', marginLeft: '5px' }}>×</span>
                        </span>
                      ))}
                    </div>
                    <input 
                      placeholder="Etiket yazıp Enter'a bas..." 
                      value={tagInput} 
                      onChange={e => setTagInput(e.target.value)} 
                      onKeyDown={handleTagKeyDown} 
                      style={{ width: '100%', padding: '8px' }} 
                    />

                    {/* Mevcut Etiket Listesi */}
                    <div className="margin-top--md padding--sm" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '8px' }}>
                      <small className="text--bold">Kayıtlı Etiketler:</small>
                      <div className="margin-top--xs" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', maxHeight: '100px', overflowY: 'auto' }}>
                        {availableTags.map(tag => (
                          <span
                            key={tag.ID}
                            onClick={() => toggleTag(tag.Name)}
                            className={`badge ${selectedTags.includes(tag.Name) ? 'badge--primary' : 'badge--secondary'}`}
                            style={{ cursor: 'pointer', fontSize: '0.7rem' }}
                          >
                            {tag.Name} {selectedTags.includes(tag.Name) ? '✓' : '+'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="button button--primary button--block" type="submit">Kaydet</button>
                </form>
              </div>
            </div>
          </div>

          {/* Liste (Sağ) */}
          <div className="col col--8">
            <div className="card shadow--md" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
              <div className="card__header"><h3>Kayıtlı Linkler ({links.length})</h3></div>
              <div className="card__body">
                {isLoading ? <p className="text--center">Yükleniyor...</p> : (
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--ifm-color-emphasis-200)' }}>
                        <th style={{ textAlign: 'left', padding: '10px' }}>Başlık & URL</th>
                        <th style={{ textAlign: 'left', padding: '10px' }}>Etiketler</th>
                        <th style={{ textAlign: 'right', padding: '10px' }}>İşlem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {links.map((link) => (
                        <tr key={link.id} style={{ borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
                          <td style={{ padding: '10px' }}>
                            <div className="text--bold">{link.title}</div>
                            <small><a href={link.url} target="_blank" rel="noreferrer">{link.url}</a></small>
                          </td>
                          <td style={{ padding: '10px' }}>
                            {link.tags?.map(t => <span key={t} className="badge badge--info margin-right--xs" style={{ fontSize: '0.6rem' }}>{t}</span>)}
                          </td>
                          <td style={{ padding: '10px', textAlign: 'right' }}>
                            <button className="button button--danger button--sm" onClick={() => handleDelete(link.id)}>Sil</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}