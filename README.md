# SAP – Senzorická Analýza Potravín

> Komplexný repozitár o senzorike, senzometrii a analýze potravín.

## Obsah

**Začnite tu:** [`index.html`](index.html) — úvodná stránka s prehľadom a navigáciou medzi kapitolami.

> 🔗 **Prepojené s [SaIT – Senzometria v R](https://github.com/senzorika/SaIT):** ku každej kapitole sú odkazy na praktické cvičenia v R (skripty SK/EN + [teória s grafmi](https://senzorika.github.io/SaIT/teoria/index.html)). Súhrnná mapa je [nižšie](#prepojenie-so-sait--senzometria-v-r).
>
> ✅ **Revízia 09/2026:** obsah bol skontrolovaný — prepočítané tabuľky a príklady, opravené odkazy na normy ISO a predpisy, odstránené neoveriteľné citácie. Zoznam opráv: [Overenie zdrojov](kapitoly/12_overenie.html#vysledky).

| # | Kapitola | Prezentácia |
|---|---|---|
| 01 | [Literatúra o chuti](kapitoly/01_literatura_chut.html) | [slajdy](prezentacie/01_literatura_chut.qmd) |
| 02 | [Podmienky laboratória](kapitoly/02_laboratorium.html) | [slajdy](prezentacie/02_laboratorium.qmd) |
| 03 | [ISO metódy](kapitoly/03_iso_metody.html) | [slajdy](prezentacie/03_iso_metody.qmd) |
| 04 | [Senzorické metódy (sprievodca)](kapitoly/04_metody_senzoriky.html) | [slajdy](prezentacie/04_metody_senzoriky.qmd) |
| 05 | [Diskriminačné metódy](kapitoly/05_diskriminacne_metody.html) | [slajdy](prezentacie/05_diskriminacne_metody.qmd) |
| 06 | [Deskriptívne profily](kapitoly/06_deskriptivne_profily.html) | [slajdy](prezentacie/06_deskriptivne_profily.qmd) |
| 07 | [Škálovanie](kapitoly/07_skalovanie.html) | [slajdy](prezentacie/07_skalovanie.qmd) |
| 08 | [Spotrebiteľská senzorická veda](kapitoly/08_spotrebitelska_veda.html) | [slajdy](prezentacie/08_spotrebitelska_veda.qmd) |
| 09 | [Senzorické claims](kapitoly/09_claims.html) | [slajdy](prezentacie/09_claims.qmd) |
| 10 | [Senzorická trvanlivosť (shelf-life)](kapitoly/10_shelf_life.html) | [slajdy](prezentacie/10_shelf_life.qmd) |
| 11 | [Vzorce a parametre](kapitoly/11_vzorce.html) | [slajdy](prezentacie/11_vzorce.qmd) |
| 12 | [Overenie zdrojov](kapitoly/12_overenie.html) | [slajdy](prezentacie/12_overenie.qmd) |

## Štruktúra repozitára

```
index.html          úvodná stránka
kapitoly/           12 kapitol (HTML so SVG diagramami) — jediný zdroj obsahu
assets/             spoločný dizajn (sap.css) a navigácia (sap.js)
prezentacie/        Quarto (reveal.js) slajdy ku kapitolám + ich CSS
```

Kapitoly sú samostatné HTML súbory — otvoria sa priamo v prehliadači, netreba nič kompilovať. Slajdy vygenerujete príkazom `quarto render prezentacie/<súbor>.qmd`.

## Prepojenie so SaIT – Senzometria v R

[SaIT](https://github.com/senzorika/SaIT) je sesterský repozitár s praktickými cvičeniami zo senzometrie v R (R skript SK + EN, teoretická stránka s grafmi, prednáškové slajdy). SAP vysvetľuje **metódy a ich použitie**, SaIT ukazuje **štatistické vyhodnotenie v R**.

| Kapitola SAP | Cvičenia SaIT (📖 teória) | Prednáška SaIT |
|---|---|---|
| [Literatúra o chuti](kapitoly/01_literatura_chut.html) | [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) inštrumentálne vs. senzorické · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) text mining | [Úvod do senzometrie a R](https://senzorika.github.io/SaIT/prezentacie/sk/01_uvod.html) |
| [Podmienky laboratória](kapitoly/02_laboratorium.html) | [5d](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) neúplné bloky · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) veľkosť panelu · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) výkonnosť panelu | [Panel ako merací prístroj](https://senzorika.github.io/SaIT/prezentacie/sk/04_panel.html) |
| [ISO metódy](kapitoly/03_iso_metody.html) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Senzorické metódy (sprievodca)](kapitoly/04_metody_senzoriky.html) | 5a – 18 (mapa v [kap. 9](kapitoly/04_metody_senzoriky.html#sait)) | všetky |
| [Diskriminačné metódy](kapitoly/05_diskriminacne_metody.html) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) binomický test · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′, test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) sila testu · [19](https://senzorika.github.io/SaIT/teoria/cvicenie19.html) prípadová štúdia | [Rozlišovacie testy a Thurstonov model](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Deskriptívne profily](kapitoly/06_deskriptivne_profily.html) | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) ANOVA · [7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) PCA · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) zmiešané modely · [17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) CATA · [18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) TDS/TCATA | [Viacrozmerné metódy](https://senzorika.github.io/SaIT/prezentacie/sk/05_viacrozmerne_metody.html) · [Rýchle a temporálne metódy](https://senzorika.github.io/SaIT/prezentacie/sk/07_rychle_temporalne_metody.html) |
| [Škálovanie](kapitoly/07_skalovanie.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) interval spoľahlivosti · [4](https://senzorika.github.io/SaIT/teoria/cvicenie04.html) grafy · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) JAR · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′ | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Spotrebiteľská senzorická veda](kapitoly/08_spotrebitelska_veda.html) | [8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) segmentácia · [9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) CA · [11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) TURF, pref. mapa · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Senzorické claims](kapitoly/09_claims.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [Rozlišovacie testy](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Shelf-life](kapitoly/10_shelf_life.html) | [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) Kaplan-Meier, cut-off · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) prípadová štúdia | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Vzorce a parametre](kapitoly/11_vzorce.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) · [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) | — |
| [Overenie zdrojov](kapitoly/12_overenie.html) | kontrolné výpočty: [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html), [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html), [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html), [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | — |

Ďalšie: [datasety](https://github.com/senzorika/SaIT/tree/master/datasety) · [Shiny aplikácie (PCA, TDS, TCATA, NPS, LDA)](https://github.com/senzorika/SaIT/tree/master/Senzometricke_appky) · [anglické verzie cvičení](https://senzorika.github.io/SaIT/theory_EN/index.html)

## O repozitári

Študijné materiály o senzorickej analýze potravín: fyziológia vnímania chutí, senzorické laboratórium, ISO metódy, rozlišovacie, deskriptívne a spotrebiteľské metódy (vrátane QC a NPD), senzorické claims, trvanlivosť, vzorce a záznam overenia zdrojov.

---

*Vytvorené s ❤️ pre senzorickú komunitu*
