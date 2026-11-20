# BAJTBIT Avtomatizacija — spletna stran

Statična enostranska spletna stran (HTML + CSS + JS, brez gradnje/zaznavanja odvisnosti).

## Struktura

- `index.html` — celotna vsebina (hero, storitve, o nas, potek sodelovanja, kontakt)
- `css/style.css` — temna industrijska tema in odzivna postavitev
- `js/main.js` — mobilni meni, samodejno leto v nogi, osnovna potrditev obrazca

## Pred objavo

Podatki so pripravljeni kot primer in jih je treba zamenjati z resničnimi:

- e-pošta `info@bajtbit.si` in telefonska številka `+386 40 000 000` v razdelku Kontakt
- vrednosti v razdelku »O nas« (število projektov, leta izkušenj)

 Kot preprost strežniški nadomestek lahko obrazec povežete z vrsto storitev
 (npr. Formspree, Netlify Forms) — trenutno prikazuje le potrdilo v brskalniku.

## Predogled lokalno

```bash
python3 -m http.server 8000
```

Nato odpri `http://localhost:8000`.
