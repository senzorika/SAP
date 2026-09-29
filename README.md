# SAP – Senzorická Analýza Potravín

> Komplexný repozitár o senzorike, senzometrii a analýze potravín.

## Obsah

| Priečinok | Obsah |
|---|---|
| 📚 [`literatura/`](literatura/) | Prehľad literatúry o vnímaní chutí, fyziológiu a najnovšom výskume |
| 🧪 [`laboratorium/`](laboratorium/) | Podmienky senzorického laboratória, vybavenie, dizajn |
| 📋 [`iso_metody/`](iso_metody/) | Prehľad ISO metód pre senzorickú analýzu |
| 🔬 [`metody/`](metody/) | Všetky senzorické metódy vrátane QC a NPD |
| 🏷️ [`claims/`](claims/) | Senzorické claims a ich overovanie |
| 📅 [`shelf_life/`](shelf_life/) | Senzorické testy trvanlivosti |
| 📐 [`vzorce/`](vzorce/) | Výpočty, vzorce a parametre |
| ✅ [`overenie/`](overenie/) | Overenie zdrojov a pravdivosti informácií |
| 🌐 [`html/`](html/) | HTML verzie kapitol s vizuálnymi prvkami |
| 🎤 [`prezentacie/`](prezentacie/) | Quarto prezentácie pre každú tému |

> 🔗 **Prepojené s [SaIT – Senzometria v R](https://github.com/senzorika/SaIT):** ku každej kapitole sú odkazy na praktické cvičenia v R (skripty SK/EN + [teória s grafmi](https://senzorika.github.io/SaIT/teoria/index.html)). Súhrnná mapa je [nižšie](#prepojenie-so-sait--senzometria-v-r).
>
> ✅ **Revízia 09/2026:** obsah bol skontrolovaný — prepočítané tabuľky a príklady, opravené odkazy na normy ISO a predpisy, odstránené neoveriteľné citácie. Zoznam opráv: [Overenie zdrojov](overenie/overenie_zdrojov.md#2-výsledky-kontroly-092026).

## Rýchly prístup

### Markdown kapitoly

- **Literatúra:** [Prehľad literatúry o vnímaní chutí](literatura/prehľad_literatúry_chuť.md)
- **Laboratórium:** [Podmienky laboratória](laboratorium/podmienky_laboratória.md)
- **ISO metódy:** [Prehľad ISO metód](iso_metody/prehľad_iso_metód.md)
- **Metódy:** [Komplexný sprievodca metódami](metody/metody_senzoriky.md)
- **Diskriminačné metódy:** [Samostatná kapitola](metody/diskriminacne_metody.md)
- **Deskriptívne profily:** [Samostatná kapitola](metody/deskriptivne_profily.md)
- **Škálovanie:** [Samostatná kapitola](metody/skalovanie.md)
- **Spotrebiteľská senzorická veda:** [Samostatná kapitola](metody/spotrebiteľska_senzoricka_veda.md)
- **Claims:** [Senzorické claims](claims/senzorické_claims.md)
- **Shelf-life:** [Senzorická trvanlivosť](shelf_life/sensory_shelf_life.md)
- **Vzorce:** [Vzorce a parametre](vzorce/vzorce_a_parametre.md)
- **Overenie:** [Overenie zdrojov](overenie/overenie_zdrojov.md)

### HTML verzie (s vizuálnymi prvkami)

- [Literatúra o chuti](html/literatura_chut.html)
- [Podmienky laboratória](html/laboratorium.html)
- [ISO metódy](html/iso_metody.html)
- [Senzorické metódy](html/metody_senzoriky.html)
- [Diskriminačné metódy](html/diskriminacne_metody.html)
- [Deskriptívne profily](html/deskriptivne_profily.html)
- [Škálovanie](html/skalovanie.html)
- [Spotrebiteľská senzorická veda](html/spotrebiteľska_veda.html)
- [Senzorické claims](html/claims.html)
- [Shelf-life](html/shelf_life.html)
- [Vzorce a parametre](html/vzorce.html)
- [Overenie zdrojov](html/overenie.html)

### Quarto prezentácie

- [Literatúra o chuti](prezentacie/literatura_chut.qmd)
- [Podmienky laboratória](prezentacie/laboratorium.qmd)
- [ISO metódy](prezentacie/iso_metody.qmd)
- [Senzorické metódy](prezentacie/metody_senzoriky.qmd)
- [Diskriminačné metódy](prezentacie/diskriminacne_metody.qmd)
- [Deskriptívne profily](prezentacie/deskriptivne_profily.qmd)
- [Škálovanie](prezentacie/skalovanie.qmd)
- [Spotrebiteľská senzorická veda](prezentacie/spotrebiteľska_veda.qmd)
- [Senzorické claims](prezentacie/claims.qmd)
- [Shelf-life](prezentacie/shelf_life.qmd)
- [Vzorce a parametre](prezentacie/vzorce.qmd)
- [Overenie zdrojov](prezentacie/overenie.qmd)

## Prepojenie so SaIT – Senzometria v R

[SaIT](https://github.com/senzorika/SaIT) je sesterský repozitár s praktickými cvičeniami zo senzometrie v R (R skript SK + EN, teoretická stránka s grafmi, prednáškové slajdy). SAP vysvetľuje **metódy a ich použitie**, SaIT ukazuje **štatistické vyhodnotenie v R**.

| Kapitola SAP | Cvičenia SaIT (📖 teória) | Prednáška SaIT |
|---|---|---|
| [Literatúra o chuti](literatura/prehľad_literatúry_chuť.md) | [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) inštrumentálne vs. senzorické · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) text mining | [Úvod do senzometrie a R](https://senzorika.github.io/SaIT/prezentacie/sk/01_uvod.html) |
| [Podmienky laboratória](laboratorium/podmienky_laboratória.md) | [5d](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) neúplné bloky · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) veľkosť panelu · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) výkonnosť panelu | [Panel ako merací prístroj](https://senzorika.github.io/SaIT/prezentacie/sk/04_panel.html) |
| [ISO metódy](iso_metody/prehľad_iso_metód.md) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Senzorické metódy (sprievodca)](metody/metody_senzoriky.md) | 5a – 18 (mapa v [kap. 9](metody/metody_senzoriky.md#9-prepojenie-s-praktickými-cvičeniami-v-r-sait)) | všetky |
| [Diskriminačné metódy](metody/diskriminacne_metody.md) | [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) binomický test · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′, test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) sila testu · [19](https://senzorika.github.io/SaIT/teoria/cvicenie19.html) prípadová štúdia | [Rozlišovacie testy a Thurstonov model](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Deskriptívne profily](metody/deskriptivne_profily.md) | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) ANOVA · [7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) PCA · [15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) zmiešané modely · [17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) CATA · [18](https://senzorika.github.io/SaIT/teoria/cvicenie18.html) TDS/TCATA | [Viacrozmerné metódy](https://senzorika.github.io/SaIT/prezentacie/sk/05_viacrozmerne_metody.html) · [Rýchle a temporálne metódy](https://senzorika.github.io/SaIT/prezentacie/sk/07_rychle_temporalne_metody.html) |
| [Škálovanie](metody/skalovanie.md) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) interval spoľahlivosti · [4](https://senzorika.github.io/SaIT/teoria/cvicenie04.html) grafy · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) JAR · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) d′ | [Testovanie hypotéz](https://senzorika.github.io/SaIT/prezentacie/sk/02_testovanie_hypotez.html) |
| [Spotrebiteľská senzorická veda](metody/spotrebiteľska_senzoricka_veda.md) | [8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) segmentácia · [9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) CA · [11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) TURF, pref. mapa · [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) · [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Senzorické claims](claims/senzorické_claims.md) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) test podobnosti · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | [Rozlišovacie testy](https://senzorika.github.io/SaIT/prezentacie/sk/03_rozlisovacie_testy.html) |
| [Shelf-life](shelf_life/sensory_shelf_life.md) | [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) Kaplan-Meier, cut-off · [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) prípadová štúdia | [Spotrebiteľský výskum](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) |
| [Vzorce a parametre](vzorce/vzorce_a_parametre.md) | [2](https://senzorika.github.io/SaIT/teoria/cvicenie02.html) · [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html) · [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · [6](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) · [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) · [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html) · [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) · [16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) | — |
| [Overenie zdrojov](overenie/overenie_zdrojov.md) | kontrolné výpočty: [5a](https://senzorika.github.io/SaIT/teoria/cvicenie05a.html), [10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html), [13](https://senzorika.github.io/SaIT/teoria/cvicenie13.html), [14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) | — |

Ďalšie: [datasety](https://github.com/senzorika/SaIT/tree/master/datasety) · [Shiny aplikácie (PCA, TDS, TCATA, NPS, LDA)](https://github.com/senzorika/SaIT/tree/master/Senzometricke_appky) · [anglické verzie cvičení](https://senzorika.github.io/SaIT/theory_EN/index.html)

## O repozitári

Tento repozitár obsahuje komplexné materiály o senzorické analýze potravín vrátane:
- Prehľadu najnovšej literatúry o vnímaní chutí
- Podmienok pre senzorické laboratórium
- Prehľadu ISO metód
- Všetkých senzorických metód (rozlišovacie, deskriptívne, časovo intenzívne, spotrebiteľské, QC, NPD)
- Senzorických claims a ich overovania
- Senzorických testov trvanlivosti
- Výpočtov a vzorcov
- Overenia zdrojov a pravdivosti informácií
- HTML verzií kapitol s vizuálnymi prvkami (SVG grafy, diagramy, tabuľky)
- Quarto prezentácií pre každú tému

---

*Vytvorené s ❤️ pre senzorickú komunitu*
