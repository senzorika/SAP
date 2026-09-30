# SAP – Senzorická Analýza Potravín

> Komplexný repozitár o senzorike, senzometrii a analýze potravín.

## Obsah

**Začnite tu:** [`index.html`](index.html) — úvodná stránka s prehľadom a navigáciou medzi kapitolami.

> 🔗 **Prepojené s [SaIT – Senzometria v R](https://github.com/senzorika/SaIT):** ku každej kapitole sú odkazy na praktické cvičenia v R (skripty SK/EN + [teória s grafmi](https://senzorika.github.io/SaIT/teoria/index.html)). Súhrnná mapa je [nižšie](#prepojenie-so-sait--senzometria-v-r).

| # | Kapitola | Kalkulátor | Prezentácia |
|---|---|---|---|
| 01 | [Úvod do senzoriky a vnímanie chuti](kapitoly/01_uvod_vnimanie_chuti.html) | [Prah citlivosti (BET, 3-AFC)](kapitoly/01_uvod_vnimanie_chuti.html#kalkulator) | [slajdy](prezentacie/01_uvod_vnimanie_chuti.html) |
| 02 | [Senzorické laboratórium a panel](kapitoly/02_laboratorium.html) | [Trojciferné kódy a Williamsov dizajn poradia](kapitoly/02_laboratorium.html#kalkulator) | [slajdy](prezentacie/02_laboratorium.html) |
| 03 | [Prehľad senzorických metód](kapitoly/03_prehlad_metod.html) | [Poradový test – Friedman (ISO 8587)](kapitoly/03_prehlad_metod.html#kalkulator) | [slajdy](prezentacie/03_prehlad_metod.html) |
| 04 | [Normy ISO a štandardné testy](kapitoly/04_iso_metody.html) | [Vyhodnotenie rozlišovacieho testu (rozdiel, podobnosť)](kapitoly/04_iso_metody.html#kalkulator) | [slajdy](prezentacie/04_iso_metody.html) |
| 05 | [Diskriminačné metódy](kapitoly/05_diskriminacne_metody.html) | [Počet hodnotiteľov a sila testu (p_d, d′)](kapitoly/05_diskriminacne_metody.html#kalkulator) | [slajdy](prezentacie/05_diskriminacne_metody.html) |
| 06 | [Škálovanie](kapitoly/06_skalovanie.html) | [Hedonická škála – priemer, IS, prijatie](kapitoly/06_skalovanie.html#kalkulator) | [slajdy](prezentacie/06_skalovanie.html) |
| 07 | [Deskriptívne profily](kapitoly/07_deskriptivne_profily.html) | [ANOVA hodnotiteľ × vzorka, LSD](kapitoly/07_deskriptivne_profily.html#kalkulator) | [slajdy](prezentacie/07_deskriptivne_profily.html) |
| 08 | [Spotrebiteľská senzorická veda](kapitoly/08_spotrebitelska_veda.html) | [Penalty analýza (JAR)](kapitoly/08_spotrebitelska_veda.html#kalkulator) | [slajdy](prezentacie/08_spotrebitelska_veda.html) |
| 09 | [Senzorické tvrdenia (claims)](kapitoly/09_claims.html) | [Párový preferenčný test – nadradenosť, parita](kapitoly/09_claims.html#kalkulator) | [slajdy](prezentacie/09_claims.html) |
| 10 | [Senzorická trvanlivosť (shelf-life)](kapitoly/10_shelf_life.html) | [Q10, Ea, Arrheniusov odhad trvanlivosti](kapitoly/10_shelf_life.html#kalkulator) | [slajdy](prezentacie/10_shelf_life.html) |
| 11 | [Vzorce a štatistické výpočty](kapitoly/11_vzorce.html) | [Popisná štatistika a t-test](kapitoly/11_vzorce.html#kalkulator) | [slajdy](prezentacie/11_vzorce.html) |
| P | [Príloha: Zdroje a literatúra](kapitoly/priloha_zdroje.html) | — | — |

Kapitoly sú zoradené v poradí prednášok: základy (01–04) → metódy (05–08) → aplikácie a výpočty (09–11). Každá kapitola má sekciu **🧮 Kalkulátor** s interaktívnou tabuľkou alebo výpočtom; ten istý kalkulátor je aj na slajde pred záverom prezentácie.

## Štruktúra repozitára

```
index.html          úvodná stránka
kapitoly/           11 kapitol + príloha (HTML so SVG diagramami) — jediný zdroj obsahu
assets/             spoločný dizajn (sap.css), navigácia (sap.js) a kalkulátory (sap-calc.js)
prezentacie/        Quarto (reveal.js) slajdy ku kapitolám: zdroj .qmd + vyrenderované .html, spoločné knižnice v libs/
```

Kapitoly sú samostatné HTML súbory — otvoria sa priamo v prehliadači, netreba nič kompilovať. Slajdy sú v repozitári už vyrenderované (`prezentacie/*.html`) a dajú sa púšťať priamo odtiaľ. Po úprave `.qmd` ich pregenerujete príkazom `quarto render prezentacie` a výsledné `.html` (prípadne aj `libs/`) commitnete spolu so zdrojom. Slajdy načítavajú `libs/`, `styles.css` a `../assets/sap-calc.js` relatívne, preto ich nechajte v priečinku `prezentacie/`.

## Prepojenie so SaIT – Senzometria v R

[SaIT](https://github.com/senzorika/SaIT) je sesterský repozitár s praktickými cvičeniami zo senzometrie v R (R skript SK + EN, teoretická stránka s grafmi, prednáškové slajdy). SAP vysvetľuje **metódy a ich použitie**, SaIT ukazuje **štatistické vyhodnotenie v R**.

| Kapitola SAP | Cvičenia SaIT (📖 teória) | Prednáška SaIT |
|---|---|---|
| [Úvod a vnímanie chuti](kapitoly/01_uvod_vnimanie_chuti.html) | [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) inštrumentálne vs. senzorické · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) text mining | [Úvod do senzometrie a R](https://senzorika.github.io/SaIT/prezentacie/sk/01_uvod.html) |
| [Laboratórium a panel](kapitoly/02_laboratorium.html) | [5d](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) neúplné bloky · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) veľkosť panelu · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) výkonnosť panelu | [Panel ako merací prístroj](https://senzorika.github.io/SaIT/prezentacie/sk/04_panel.html) |
| [Prehľad metód](kapitoly/03_prehlad_metod.html) | 5a – 18 (mapa v [sekcii SaIT](kapitoly/03_prehlad_metod.html#sait)) | všetky |
| [Normy ISO](kapitoly/04_iso_metody.html) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Diskriminačné metódy](kapitoly/05_diskriminacne_metody.html) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) binomický test · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′, test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) sila testu · [19](https://senzorika.github.io/SaIT/teoria/cvicenie19.html) prípadová štúdia | [Rozlišovacie testy a Thurstonov model](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Škálovanie](kapitoly/06_skalovanie.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) interval spoľahlivosti · [4](https://senzorika.github.io/SaIT/teoria/cvicenie04.html) grafy · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) JAR · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′ | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Deskriptívne profily](kapitoly/07_deskriptivne_profily.html) | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) ANOVA · [7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) PCA · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) zmiešané modely · [17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) CATA · [18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) TDS/TCATA | [Viacrozmerné metódy](https://senzorika.github.io/SaIT/prezentacie/sk/05_viacrozmerne_metody.html) · [Rýchle a temporálne metódy](https://senzorika.github.io/SaIT/prezentacie/sk/07_rychle_temporalne_metody.html) |
| [Spotrebiteľská senzorická veda](kapitoly/08_spotrebitelska_veda.html) | [8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) segmentácia · [9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) CA · [11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) TURF, pref. mapa · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Senzorické tvrdenia](kapitoly/09_claims.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [Rozlišovacie testy](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Shelf-life](kapitoly/10_shelf_life.html) | [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) Kaplan-Meier, cut-off · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) prípadová štúdia | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Vzorce a výpočty](kapitoly/11_vzorce.html) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) · [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) | — |

Ďalšie: [datasety](https://github.com/senzorika/SaIT/tree/master/datasety) · [Shiny aplikácie (PCA, TDS, TCATA, NPS, LDA)](https://github.com/senzorika/SaIT/tree/master/Senzometricke_appky) · [anglické verzie cvičení](https://senzorika.github.io/SaIT/theory_EN/index.html)

## O repozitári

Študijné materiály o senzorickej analýze potravín: vnímanie chuti, senzorické laboratórium, prehľad metód a normy ISO, rozlišovacie, deskriptívne a spotrebiteľské metódy (vrátane QC a NPD), senzorické tvrdenia, trvanlivosť a vzorce — s kalkulátorom a prednáškou ku každej kapitole a prílohou so zdrojmi a literatúrou.

---

*Vytvorené s ❤️ pre senzorickú komunitu*
