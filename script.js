  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.appear').forEach(el => observer.observe(el));

  const rates = [479.77, 479.80, 479.50, 479.70, 479.78, 480.25, 478.22];
  let rIdx = 0;
  setInterval(() => {
    rIdx = (rIdx + 1) % rates.length;
    document.getElementById('rateDisplay').textContent = 'Bs. ' + rates[rIdx].toFixed(2);
  }, 4000);

  // Download handler
  function downloadAPK() {
      const btn = event.currentTarget;
      const orig = btn.innerHTML;
      
      // URL DIRECTA del APK (cambia "nombre-del-archivo.apk" por el real)
      const apkUrl = "https://github.com/wanxiturro/vex-tasa-libre-flutter/releases/download/v1.0.2/Vex.apk";
      
      btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Descargando...';
      btn.disabled = true;
      
      // Forzar la descarga
      const link = document.createElement('a');
      link.href = apkUrl;
      link.download = ''; // Esto sugiere descargar en lugar de navegar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => { 
          btn.innerHTML = orig; 
          btn.disabled = false; 
      }, 2000);
  }
