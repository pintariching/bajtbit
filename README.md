# BAJTBIT Avtomatizacija — spletna stran

Statična enostranska spletna stran (le HTML + CSS, brez JavaScripta in brez gradnje).

## Struktura

- `index.html` — celotna vsebina (hero, storitve, o nas, potek sodelovanja, kontakt)
- `assets/logo.svg` — logotip (uporabljen v glavi in kot favicon)
- `css/style.css` — temna industrijska tema v barvah logotipa (oranžna `#ff9a30` in modra `#258bfa`) in odzivna postavitev

Mobilni meni je izveden izključno s CSS (potrditveno polje, brez skripte).

## Pred objavo

Podatki so pripravljeni kot primer in jih je treba zamenjati z resničnimi:

- e-pošta `info@bajtbit.si` in telefonska številka `+386 40 000 000` v razdelku Kontakt
- vrednosti v razdelku »O nas« (število projektov, leta izkušenj)
- leto v nogi strani je zapisano statično

    Kontaktni obrazec trenutno nima strežniške obdelave; povežite ga s storitvijo,
    ki omogoča delo brez JavaScripta (npr. Netlify Forms, Formspree), ali lastnim zaledjem.

## Predogled lokalno

```bash
python3 -m http.server 8000
```

Nato odpri `http://localhost:8000`.
