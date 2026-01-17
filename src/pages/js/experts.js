(async () => {
    const endpoint = 'https://aura-testing.webflow.io/app/api/airtable.json';
    try {
        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            console.error('Airtable API error:', res.status, text);
            return;
        }

        const data = await res.json(); // expects { records: [...] }
        const list = document.getElementById('airtable-list');
        if (!list) return;

        list.innerHTML = (data.records || []).map((r) => {
            const f = r.fields || {};
            const imageUrl = f.Images?.[0]?.url || '';
            return `
        <li>
          <div class="expert-card">
            <img class="expert-img" src="${imageUrl}" alt="${f.Name || ''}">
            <h2 class="expert-heading">${f.Name || ''}</h2>
            <p><strong>Description:</strong> ${f.Description || '—'}</p>
            <p><strong>Specialties:</strong> ${f.Specialties || '—'}</p>
            <div class="links">
              ${f.Linkedin ? `<a href="${f.Linkedin}" target="_blank">LinkedIn</a>` : ''}
              ${f.Website ? `<a href="${f.Website}" target="_blank">Website</a>` : ''}
            </div>
          </div>
        </li>
      `;
        }).join('');
    } catch (e) {
        console.error('Fetch failed:', e);
    }
})();