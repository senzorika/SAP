# Spotrebiteľská senzorická veda

## 1. Úvod do spotrebiteľskej senzorickej vedy

### Čo je spotrebiteľská senzorická veda?

Spotrebiteľská senzorická veda je disciplína, ktorá skúma vzťah medzi senzorickými vlastnosťami produktov a reakciami spotrebiteľov. Zameriava sa na pochopenie toho, ako spotrebiteľi vnímajú, hodnotia a vyberajú produkty na základe ich senzorických vlastností.

### História

| Obdobie | Vývoj |
|---------|-------|
| 1940s | Prvé hedonické testy v armáde (US Army) |
| 1950s | Vývoj 9-bodovej hedonické škály (Peryam & Pilgrim) |
| 1960s | Preference Mapping – Carroll, Greenhoff |
| 1970s | Conjoint Analysis – Green & Rao |
| 1980s | Penalty Analysis – JAR škála |
| 1990s | TURF Analysis, segmentácia spotrebiteľov |
| 2000s | Online testy, automatizácia |
| 2010s | Big data, integrácia s neurovedou |

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
| 9 | Výborne | Najvyššia miera obľúbenosti |
| 8 | Veľmi dobre | |
| 7 | Dobre | |
| 6 | Trochu dobre | |
| 5 | Ani dobré, ani zlé | Neutrálna hodnota |
| 4 | Trochu zlé | |
| 3 | Zlé | |
| 2 | Veľmi zlé | |
| 1 | Hrozne | Najnižšia miera obľúbenosti |

### Počet spotrebiteľov

| Typ testu | Odporúčaný počet | Poznámka |
|-----------|------------------|----------|
| Exploratórny | 50–80 | Rýchly screening |
| Standardný | 100–150 | Väčšina štúdií |
| Robustný | 200+ | Kľúčové rozhodnutia |
| Online | 300+ | Väčšie súbory dát |

### Podmienky testovania

- **Laboratórium:** kontrolované svetlo, teplota, vlhkosť
- **Izolované kabíny:** minimalizácia rušivých vplyvov
- **Náhodné poradie:** eliminácia efektu poradia
- **Anonymita:** spotrebiteľi nepoznajú značku
- **Čas:** obvykle ráno alebo poobede
- **Zákaz korenenia:** spotrebiteľi nesmú kúriť, piť kávu 1 hodinu pred testom

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

Conjoint Analysis sa zvyčajne počíta pomocou **hierarchickej Bayesovej (HB) analýzy**:

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

TURF (Total Unduplicated Reach and Frequency) Analysis je optimalizačná technika, ktorá identifikuje kombináciu produktov, ktorá **maximálny dosiahne čo najväčší počet spotrebiteľov** s minimálnou redundanciou.

### Reach a frequency

- **Reach:** Percento spotrebiteľov, ktorí aspoň jeden produkt z kombinácie preferujú
- **Frequency:** Priemerný počet produktov z kombinácie, ktoré spotrebiteľ preferuje

### Výpočet

TURF sa vypočíta iteračne:

```
TURF = Σ (Reach_i × Frequency_i)
```

Kde:
- Reach_i = percento spotrebiteľov preferujúcich produkt i
- Frequency_i = priemerný počet produktov preferovaných spotrebiteľmi, ktorí preferujú produkt i

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
Penalty = Priemer(JAR) - Priemer(nie JAR)
```

| Kategória | Popis | Penalty |
|-----------|-------|---------|
| Príliš nízka | Atribút je príliš slabý | Záporný |
| JAR | Atribút je práve správny | 0 |
| Príliš vysoká | Atribút je príliš intenzívny | Záporný |

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

Latent class analysis je **modelová prístup** k segmentácii, ktorý:
- Identifikuje latentné (skryté) triedy spotrebiteľov
- Poskytuje pravdepodobnosti príslušnosti ku triedam
- Umožňuje zahrnuť kovariáty (demografia, správanie)

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
- Priemerné hodnotenie: 7.2 (Dobre)
- 65% spotrebiteľov hodnotí 7 alebo vyššie
- Purchase Intent: 58% (4 alebo 5)

**Záver:** Produkt má dobrý vzhľad, odporúča sa spustiť na trh.

### Príklad 2: Optimalizácia cukru v nápoji

**Cieľ:** Nájsť optimálnu úroveň sladkosti.

**Metóda:** JAR škála s 150 spotrebiteľmi, 4 úrovne cukru.

**Výsledky:**
- Úroveň 1: Penalty -1.2 (príliš sladké)
- Úroveň 2: Penalty -0.3 (mierne sladké)
- Úroveň 3: Penalty 0.0 (JAR)
- Úroveň 4: Penalty -0.8 (nesladké)

**Záver:** Úroveň 3 je optimálna, penalty je najnižšia.

### Príklad 3: Segmentácia trhu čokolády

**Cieľ:** Identifikovať segmenty spotrebiteľov čokolády.

**Metóda:** Preference Mapping s 200 spotrebiteľmi.

**Výsledky:**
- Segment 1 (35%): Preferuje horkú čokoládu s nízkou sladkosťou
- Segment 2 (40%): Preferuje mliečnu čokoládu s vysokou sladkosťou
- Segment 3 (25%): Preferuje čokoládu s orechmi

**Záver:** Tri odlišné segmenty s rôznymi preferenciami, odporúča sa cielená marketingová stratégia.
