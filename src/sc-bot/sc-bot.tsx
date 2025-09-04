import React, { useState } from 'react';

type FileItem = {
  name: string;
  label: string;
  desc: string;
};

const files: FileItem[] = [
  {
    name: 'file1.zip',
    label: 'File Anime 1',
    desc: 'Berisi gambar anime HD.',
  },
  {
    name: 'file2.zip',
    label: 'File Anime 2',
    desc: 'Kumpulan wallpaper anime.',
  },
  {
    name: 'file3.zip',
    label: 'File Anime 3',
    desc: 'Vector karakter anime populer.',
  },
];

function formatSize(size: number): string {
  if (size > 1024 * 1024)
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  else if (size > 1024)
    return (size / 1024).toFixed(2) + ' KB';
  else
    return size + ' B';
}

export default function ScBot() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [sizes, setSizes] = useState<{ [key: string]: string }>({});

  // Fetch file size on open
  const handleOpen = async (i: number, file: FileItem) => {
    setOpenIdx(i);
    if (!sizes[file.name]) {
      try {
        const res = await fetch(`/sc/${file.name}`, { method: "HEAD" });
        const size = res.headers.get('Content-Length');
        if (size) {
          setSizes(prev => ({ ...prev, [file.name]: formatSize(Number(size)) }));
        } else {
          setSizes(prev => ({ ...prev, [file.name]: 'Unknown' }));
        }
      } catch {
        setSizes(prev => ({ ...prev, [file.name]: 'Unknown' }));
      }
    }
  };

  return (
    <div style={{
      maxWidth: 380, margin: '48px auto', background: 'rgba(255,255,255,0.95)',
      borderRadius: 22, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: 32, textAlign: 'center'
    }}>
      <img src="https://i.imgur.com/9gFfVQv.png" alt="Anime Avatar"
        style={{ width: 90, height: 90, borderRadius: '50%', border: '3px solid #a7c7e7', marginBottom: 18 }} />
      <h1 style={{ color: '#5b54a1', fontSize: 24, margin: '8px 0' }}>Anime Download Link Tree</h1>
      <p style={{ color: '#555', marginBottom: 26 }}>Pilih file ZIP yang ingin kamu unduh:</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {files.map((f, i) => (
          <div key={f.name} style={{
            background: '#f8f8ff', borderRadius: 15, padding: '12px 8px 18px 8px',
            boxShadow: '0 2px 8px rgba(80,90,200,0.08)'
          }}>
            <button
              style={{
                background: 'linear-gradient(90deg,#fcb045 0%,#fd1d1d 100%)',
                color: 'white', border: 'none', padding: '13px 0', borderRadius: 14,
                fontWeight: 'bold', fontSize: 17, width: '90%', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(253,29,29,0.10)',
                transition: 'background 0.2s, transform 0.2s'
              }}
              onClick={() => handleOpen(i, f)}
            >
              Unduh {f.label}
            </button>
            {openIdx === i && (
              <div style={{
                marginTop: 14, color: '#333', fontSize: 15.5, paddingTop: 8,
                borderTop: '1px solid #ececec', animation: 'fadeIn .4s'
              }}>
                <p>
                  <strong>{f.label}</strong> — {f.desc}<br />
                  <span style={{ color: '#888', fontSize: 13 }}>
                    Ukuran: {sizes[f.name] ? sizes[f.name] : 'Memuat...'}, Format: ZIP
                  </span>
                </p>
                <a
                  href={`/sc/${f.name}`}
                  download={f.name}
                  style={{
                    display: 'inline-block', marginTop: 10, background: '#5b54a1',
                    color: '#fff', padding: '10px 30px', borderRadius: 10,
                    textDecoration: 'none', fontWeight: 'bold',
                    transition: 'background 0.2s, transform 0.2s'
                  }}
                  onClick={() => setOpenIdx(null)}
                >
                  Download Sekarang
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <footer style={{ marginTop: 12, color: '#888', fontSize: 14 }}>
        Desain oleh EZGT • Tema Anime
      </footer>
    </div>
  );
}
