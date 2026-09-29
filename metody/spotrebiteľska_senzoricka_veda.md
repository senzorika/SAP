# Spotrebiteľská senzorická veda

## 1. Úvod do spotrebiteľskej senzorickej vedy

### Čo je spotrebiteľská senzorická veda?

Spotrebiteľská senzorická veda je disciplína, ktorá skúma vzťah medzi senzorickými vlastnosťami produktov a reakciami spotrebiteľov. Zameriava sa na pochopenie toho, ako spotrebiteľi vnímajú, hodnotia a vyberajú produkty na základe ich senzorických vlastností.

### História

| Obdobie | Vývoj |
|---------|-------|
| 1940s | Prvé hedonické testy v armáde (US Army Quartermaster) |
| 1957 | Publikácia 9-bodovej hedonickej škály (Peryam & Pilgrim) |
| 1971–1972 | Conjoint Analysis (Green & Rao, 1971) · PREFMAP – preferenčné mapovanie (Carroll, 1972) |
| 1990s | Rozšírenie preferenčného mapovania v senzorike (napr. Greenhoff & MacFie, 1994) · TURF z mediálneho plánovania do vývoja produktov |
| 2000s | Penalty analýza JAR dát (ASTM MNL 63, 2009) · online testy |
| 2010s | Rýchle metódy so spotrebiteľmi (CATA), big data, integrácia s neurovedou |

### Význam

- **Redukcia rizika** – znižuje pravdepodobnosť neúspechu produktu na trhu
- **Optimalizácia** – pomáha nájsť optimálnu receptúru
- **Segmentácia** – identifikuje cieľové skupiny spotrebiteľov
- **Inovácia** – poskytuje informácie pre vývoj nových produktov
- **Konkurencieschopnosť** – pomáha sa odlišovať od konkurencie

---

## 2. Hedonické testy

### 9-bodová hedonická škála

Najpoužívanejšia škála na meranie spotrebiteľskej acceptácie:

| Bod | Označenie | Popis |
|-----|-----------|-------|
| 9 | Mimoriadne sa mi páči | Najvyššia miera obľúbenosti |
| 8 | Veľmi sa mi páči | |
| 7 | Stredne sa mi páči | |
| 6 | Trochu sa mi páči | |
| 5 | Ani sa mi páči, ani sa mi nepáči | Neutrálna hodnota |
| 4 | Trochu sa mi nepáči | |
| 3 | Stredne sa mi nepáči | |
| 2 | Veľmi sa mi nepáči | |
| 1 | Mimoriadne sa mi nepáči | Najnižšia miera obľúbenosti |

*Hedonická škála meria **obľúbenosť** („páči sa mi"), nie kvalitu („dobré/zlé") — kotvy typu „výborne/dobre" by menili význam otázky.*

### Počet spotrebiteľov

| Typ testu | Odporúčaný počet | Poznámka |
|-----------|------------------|----------|
| Exploratórny | 50–80 | Rýchly screening (ISO 11136: aspoň ~60 na skupinu) |
| Standardný | 100–150 | Väčšina štúdií |
| Robustný | 200+ | Kľúčové rozhodnutia |
| Online | 300+ | Väčšie súbory dát |

### Podmienky testovania

- **Laboratórium:** kontrolované svetlo, teplota, vlhkosť
- **Izolované kabíny:** minimalizácia rušivých vplyvov
- **Náhodné poradie:** eliminácia efektu poradia
- **Anonymita:** spotrebiteľi nepoznajú značku
- **Čas:** mimo obdobia bezprostredne po jedle
- **Obmedzenia pred testom:** spotrebitelia by nemali fajčiť, jesť, piť kávu ani používať výrazné parfumy aspoň 1 hodinu pred testom

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** porovnanie hedonických hodnotení viacerých produktov — [cvičenie 5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html) · kompletný postup od importu dát — [cvičenie 5c](https://senzorika.github.io/SaIT/teoria/cvicenie05c.html)

### Výpočet prijatia

Priemer hodnotenia sa vypočíta ako:

```
Priemer = Σ(hodnotenie_i) / n
```

Kde hodnotenie_i je hodnotenie i-teho spotrebiteľa a n je počet spotrebiteľov.

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Jednoduché a rýchle | Neinformuje o dôvodoch preferencie |
| Široké využitie | Môže byť ovplyvnené kontextom |
| Porovnateľné výsledky | Hedonické hodnotenie ≠ nákupné správanie |
| Náklady na zber dát | |

---

## 3. Preference Mapping

### Princíp

Preference Mapping je technika, ktorá kombinuje **senzorické dáta** (z trénovaných panelov) s **hedonickými dátami** (od spotrebiteľov) na vytvorenie mapy preferencií. Cieľom je identifikovať optimálne senzorické vlastnosti pre rôzne segmenty spotrebiteľov.

- **Interná mapa (MDPREF):** PCA na matici produkty × spotrebitelia; spotrebitelia sú vektory, senzorické atribúty sa premietnu dodatočne.
- **Externá mapa (PREFMAP):** priestor produktov z deskriptívnej analýzy; obľúbenosť každého spotrebiteľa sa v ňom modeluje regresiou (vektorový alebo ideálny-bod model).

> 🧪 **SaIT:** mapa preferencií — [cvičenie 11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) · PCA — [cvičenie 7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html)

### PCA (Analýza hlavných zložiek)

PCA sa používa na:
- Redukciu dimenzionality senzorických dát
- Identifikáciu hlavných osi variability
- Vizualizáciu produktov v priestore

### PLS (Parciálne najmenšie štvorce)

PLS regression sa používa na:
- Modelovanie vzťahu medzi senzorickými a hedonickými dátami
- Predikciu preferencií na základe senzorických vlastností
- Identifikáciu kľúčových senzorických atribútov

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Vizualizácia preferencií | Vyžaduje dva typy dát |
| Identifikácia optima | Zložitá interpretácia |
| Segmentácia spotrebiteľov | Vyžaduje pokročilú štatistiku |

---

## 4. Conjoint Analysis

### Princíp

Conjoint Analysis je metóda, ktorá odhaľuje, ako spotrebiteľi kombinujú rôzne **atribúty a úrovne** produktu do celkovej preferencie. Spotrebiteľi hodnotia celé profily produktov, nie jednotlivé atribúty samostatne.

### Part-worth utilities

Part-worth utilities (čiastkové užitky) meria relatívnu hodnotu, ktorú spotrebiteľ pripisuje jednotlivým úrovnám atribútov:

```
Celkový užitek = Σ part-worth utility pre každú úroveň atribútu
```

### Výpočet

Ratingový conjoint sa počíta regresiou (OLS) na úrovni respondenta; výberový (choice-based) conjoint multinomickým logitom, často s **hierarchickým Bayesovým (HB)** odhadom individuálnych užitočností:

```
U(x) = Σ β_j × x_j
```

Kde:
- U(x) = celkový užitek profilu x
- β_j = part-worth utility atribútu j
- x_j = hodnota atribútu j (0 alebo 1)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Realistické rozhodnutie | Zložité navrhovanie experimentu |
| Kvantitatívne údaje | Vyžaduje pokročilú štatistiku |
| Predikcia trhu | Môže byť zahlcujúce pre respondentov |
| Simulácia produktov | |

---

## 5. TURF Analysis

### Princíp

TURF (Total Unduplicated Reach and Frequency) Analysis je optimalizačná technika, ktorá identifikuje kombináciu produktov, ktorá **osloví čo najväčší počet spotrebiteľov** s minimálnou redundanciou.

### Reach a frequency

- **Reach:** Percento spotrebiteľov, ktorí akceptujú aspoň jeden produkt z kombinácie
- **Frequency:** Priemerný počet produktov z kombinácie, ktoré spotrebiteľ akceptuje

### Výpočet

```
1. Pre každého spotrebiteľa a produkt: akceptuje (1) / neakceptuje (0),
   napr. hedonické skóre ≥ 7 alebo "určite/pravdepodobne kúpim"
2. Pre každú kombináciu S veľkosti k:
   Reach(S) = podiel spotrebiteľov s aspoň jednou 1 v kombinácii S
   Frequency(S) = priemerný počet 1 v kombinácii S
3. Optimum = kombinácia s najvyšším Reach (pri zhode rozhoduje Frequency);
   pri veľkom počte kombinácií sa používa greedy (postupné pridávanie) algoritmus
```

(Predošlá verzia uvádzala vzorec „TURF = Σ Reach_i × Frequency_i", ktorý nezodpovedá metóde — reach kombinácie nie je súčtom reach jednotlivých produktov.)

> 🧪 **SaIT:** TURF analýza — [cvičenie 11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Optimalizácia portfólia | Vyžaduje veľký súbor dát |
| Maximálny dosah | Zložité výpočty |
| Redukcia redundancie | Predpokláda nezávislosť produktov |

---

## 6. JAR škála a Penalty Analysis

### Princíp

JAR (Just About Right) škála meria, či je intenzita atribútu **príliš vysoká, príliš nízka, alebo práve správna**. Penalty Analysis kvantifikuje, ako sa zmení celková obľúbenosť, keď atribút nie je "práve správny".

### Výpočet penalty

Penalty sa vypočíta ako:

```
Penalty (pokles) = Priemer liking(JAR) − Priemer liking(nie JAR)
Vážený pokles   = Penalty × podiel respondentov v skupine
```

| Kategória | Popis | Penalty (pokles obľúbenosti) |
|-----------|-------|---------|
| Príliš nízka | Atribút je príliš slabý | Kladné číslo = o koľko bodov je obľúbenosť nižšia než pri JAR |
| JAR | Atribút je práve správny | referencia |
| Príliš vysoká | Atribút je príliš intenzívny | Kladné číslo = o koľko bodov je obľúbenosť nižšia než pri JAR |

Interpretujú sa zvyčajne len skupiny s ≥ 20 % respondentov.

> 🧪 **SaIT:** [cvičenie 12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) (JAR a penalty analýza) · [cvičenie 20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) (prípadová štúdia preferencie a JAR)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Identifikácia optimalizácie | Vyžaduje dostatok respondentov |
| Jednoduchá interpretácia | Len pre atribúty s jednoznačným optimum |
| Akčné odporúčania | Môže byť ovplyvnené kultúrnymi predsudkami |

---

## 7. Purchase Intent

### Princíp

Purchase Intent meria pravdepodobnosť, že spotrebiteľ **kúpi produkt** po jeho vnímaní. Je to proxy metrika pre predikciu tržieb.

### 5-bodová škála

| Bod | Označenie |
|-----|-----------|
| 5 | Určite kúpiem |
| 4 | Pravdepodobne kúpiem |
| 3 | Možno kúpiem, možno nie |
| 2 | Pravdepodobne nekúpiem |
| 1 | Určite nekúpiem |

### Výpočet

```
Purchase Intent (%) = (Počet 4 + 5) / Celkový počet × 100
```

---

## 8. Segmentácia spotrebiteľov

### K-means clustering

K-means clustering rozdeľuje spotrebiteľov do **k klastrov** na základe podobnosti ich preferencií:

```
Minimizova_t Σ Σ ||x_i - μ_j||²
```

Kde:
- x_i = hodnotenie i-teho spotrebiteľa
- μ_j = stred j-teho klastra

### Latent class analysis

Latent class analysis je **modelový prístup** k segmentácii, ktorý:
- Identifikuje latentné (skryté) triedy spotrebiteľov
- Poskytuje pravdepodobnosti príslušnosti ku triedam
- Umožňuje zahrnuť kovariáty (demografia, správanie)

> 🧪 **SaIT:** hierarchické zhlukovanie (Ward) a k-means — [cvičenie 8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html)

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Cielené marketingové stratégie | Vyžaduje veľký súbor dát |
| Personalizácia | Zložitá interpretácia |
| Identifikácia nik | Segmenty môžu byť nestabilné |

---

## 9. Online spotrebiteľské testy

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Rýchly zber dát | Nedostatočná kontrola prostredia |
| Náklady na zber dát | Vyššia miera chýb |
| Väčšie súbory dát | Obmedzená senzorická citlivosť |
| Geografický dosah | Technologické bariéry |
| Automatizácia | |

### Porovnanie s laboratóriom

| Kritérium | Laboratórium | Online |
|-----------|--------------|--------|
| Kontrola prostredia | Vysoká | Nízka |
| Počet respondentov | 50–150 | 300+ |
| Cena | Vysoká | Nízka |
| Rýchlosť | Pomalá | Rýchla |
| Kvalita dát | Vysoká | Stredná |
| Senzorická citlivosť | Vysoká | Nízka |

### Best practices

1. **Pilot test** – vždy spustite pilotný test pred hlavným zberom
2. **Kontrolné otázky** – zahrňte pozornostné kontroly
3. **Krátke testy** – limitujte dĺžku na 15–20 minút
4. **Mobilná optimalizácia** – zabezpečte responzívny dizajn
5. **Inštrukcie** – jasné a jednoduché pokyny
6. **Stimuly** – použite obrázky a video pre lepšiu kontrolu

---

## 10. Porovnanie metód

| Metóda | Typ | Počet resp. | Čas | Cieľ | Vhodné pre |
|--------|-----|-------------|-----|------|------------|
| Hedonická škála | Priama | 100–150 | 15 min | Prijatie | Všetky produkty |
| Preference Mapping | Indirektny | 100–200 | 30 min | Preferencie | Vývoj produktov |
| Conjoint Analysis | Indirektny | 200–500 | 30–45 min | Optimalizácia | Nové produkty |
| TURF | Indirektny | 300+ | 20 min | Portfólio | Marketing |
| JAR + Penalty | Priama | 100–150 | 20 min | Optimalizácia | Existujúce produkty |
| Purchase Intent | Priama | 100–150 | 10 min | Predikcia trhu | Screening |
| Segmentácia | Indirektny | 300+ | 30 min | Segmentácia | Marketing |
| Online testy | Priama | 300+ | 15–20 min | Rýchly screening | Exploratórna fáza |

---

## 11. Výber správnej metody

### Rozhodovacie kritériá

```
                    ┌─────────────────────────────┐
                    │    Aký je cieľ štúdie?      │
                    └──────────────┬──────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │  Prijatie   │         │  Optimalizácia│         │  Predikcia  │
    │  produktu   │         │             │         │  trhu       │
    └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
           │                       │                       │
    ┌──────▼──────┐         ┌──────▼──────┐         ┌──────▼──────┐
    │ Hedonická   │         │  Conjoint   │         │  Purchase   │
    │ škála       │         │  Analysis   │         │  Intent     │
    │             │         │             │         │             │
    └─────────────┘         └─────────────┘         └─────────────┘
```

### Faktory rozhodovania

| Faktor | Odporúčaná metóda |
|--------|-------------------|
| Rýchly screening | Hedonická škála, Online testy |
| Optimalizácia receptúry | Conjoint Analysis, JAR + Penalty |
| Predikcia trhu | Purchase Intent, TURF |
| Segmentácia | Preference Mapping, Segmentačné metódy |
| Nízke náklady | Online testy, Hedonická škála |
| Vysoká presnosť | Conjoint Analysis, Preference Mapping |

---

## 12. Praktické príklady

### Príklad 1: Nový jogurt

**Cieľ:** Overiť prijatie nového jogurta na trhu.

**Metóda:** Hedonická škála s 120 spotrebiteľmi.

**Výsledky:**
- Priemerné hodnotenie: 7.2 (medzi „stredne" a „veľmi sa mi páči")
- 65% spotrebiteľov hodnotí 7 alebo vyššie
- Purchase Intent: 58% (4 alebo 5)

**Záver:** Produkt má dobrú celkovú obľúbenosť. Rozhodnutie o uvedení na trh by malo vychádzať z porovnania s benchmarkom (napr. lídrom kategórie testovaným v tom istom teste), nie z absolútnej hodnoty priemeru.

### Príklad 2: Optimalizácia cukru v nápoji

**Cieľ:** Nájsť optimálnu úroveň sladkosti.

**Metóda:** JAR škála sladkosti + celková obľúbenosť, 150 spotrebiteľov, 4 úrovne cukru (L1 najnižšia → L4 najvyššia).

**Výsledky:**

| Úroveň | % málo sladké | % JAR | % príliš sladké | Priemerná obľúbenosť |
|---|---|---|---|---|
| L1 | 62 | 33 | 5 | 5.6 |
| L2 | 35 | 58 | 7 | 6.4 |
| L3 | 12 | 74 | 14 | 7.1 |
| L4 | 4 | 41 | 55 | 6.2 |

**Záver:** Úroveň L3 má najvyšší podiel JAR odpovedí aj najvyššiu obľúbenosť a žiadna skupina mimo JAR nepresahuje 20 %. Pri L1/L2 penalizuje „málo sladké", pri L4 „príliš sladké". (Ilustračné dáta; predošlá verzia priraďovala „penalty" celým úrovniam cukru, čo nezodpovedá metóde.)

### Príklad 3: Segmentácia trhu čokolády

**Cieľ:** Identifikovať segmenty spotrebiteľov čokolády.

**Metóda:** Preference Mapping s 200 spotrebiteľmi.

**Výsledky:**
- Segment 1 (35%): Preferuje horkú čokoládu s nízkou sladkosťou
- Segment 2 (40%): Preferuje mliečnu čokoládu s vysokou sladkosťou
- Segment 3 (25%): Preferuje čokoládu s orechmi

**Záver:** Tri odlišné segmenty s rôznymi preferenciami, odporúča sa cielená marketingová stratégia.

---

## 13. Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) | Skript |
|---|---|---|
| Hedonické testy – ANOVA, Friedman | [5b](https://senzorika.github.io/SaIT/teoria/cvicenie05b.html), [5c](https://senzorika.github.io/SaIT/teoria/cvicenie05c.html) | [`cvicenie5b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie5b.R) |
| PCA (preferenčné mapovanie) | [7](https://senzorika.github.io/SaIT/teoria/cvicenie07.html) | [`cvicenie7.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie7.R) |
| Segmentácia (Ward, k-means) | [8](https://senzorika.github.io/SaIT/teoria/cvicenie08.html) | [`cvicenie8.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie8.R) |
| Korešpondenčná analýza (produkty × cieľové skupiny) | [9](https://senzorika.github.io/SaIT/teoria/cvicenie09.html) | [`cvicenie9.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie9.R) |
| TURF, mapa preferencií | [11a](https://senzorika.github.io/SaIT/teoria/cvicenie11a.html) | [`cvicenie11a.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie11a.R) |
| Text mining a sentiment recenzií | [11b](https://senzorika.github.io/SaIT/teoria/cvicenie11b.html) | [`cvicenie11b.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie11b.R) |
| JAR, penalty analýza | [12](https://senzorika.github.io/SaIT/teoria/cvicenie12.html) | [`cvicenie12.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie12.R) |
| CATA so spotrebiteľmi | [17](https://senzorika.github.io/SaIT/teoria/cvicenie17.html) | [`cvicenie17.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie17.R) |
| Prípadová štúdia: preferencie a JAR | [20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [`cvicenie20.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie20.R) |
| Net Promoter Score (Shiny) | — | [`NetPromoterScore_app.R`](https://github.com/senzorika/SaIT/blob/master/Senzometricke_appky/NetPromoterScore_app.R) |
| Prednáška | [Spotrebiteľský výskum (slajdy)](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) | — |

---

*Referencie: Peryam, D.R. & Pilgrim, F.J. (1957). Food Technology 11(9), 9–14. | Green, P.E. & Rao, V.R. (1971). Conjoint measurement for quantifying judgmental data. J. Marketing Research 8, 355–363. | Carroll, J.D. (1972). Individual differences and multidimensional scaling. In: Shepard, Romney & Nerlove (Eds.), Multidimensional Scaling, Vol. 1. Seminar Press. | Rothman, L. & Parker, M.J. (2009). ASTM MNL 63. | ISO 11136:2014.*
