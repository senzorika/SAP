# Podmienky senzorického laboratória

> **Repozitár:** SAP – Senzorická Analýza Potravín  
> **Kategória:** Laboratórna dokumentácia  
> **Aktualizované:** 2026  

---

## 1. Návrh laboratória

### 1.1 Požiadavky ISO 8589

Návrh senzorického laboratória upravuje **ISO 8589:2007 (+Amd 1:2014)** (Sensory analysis — General guidance for the design of test rooms). **ISO 8586:2023** sa týka výberu, výcviku a monitorovania hodnotiteľov (kapitola 5), nie priestorov. Senzorické laboratórium má spĺňať nasledovné požiadavky:

> ⚠️ **Poznámka k zdrojom v tejto kapitole:** Predošlá verzia pripisovala takmer všetky číselné parametre (teplota, vlhkosť, lux, dB, počty panelistov, frekvencie kalibrácie) normám ISO 8586 alebo ISO 13299. Tie takéto hodnoty neobsahujú. Stĺpec „Zdroj" bol preto opravený: ISO 8589 dáva väčšinou **kvalitatívne** požiadavky (príjemná, kontrolovaná teplota a vlhkosť; rovnomerné, regulovateľné osvetlenie; bez pachov a hluku), konkrétne čísla sú **odporúčania z praxe** a treba ich prispôsobiť produktu.

- **Oddelenie** prípravnej (kuchyňskej) zóny od senzorického hodnotiaceho priestoru
- **Individuálne hodnotiace kabíny** pre každého panelistu
- **Kontrolované environmentálne podmienky** (teplota, vlhkosť, osvetlenie, vzduch)
- **Nevyhnutnosť eliminácie rušivých vplyvov** (zápachy, hluk, vizuálny stres)
- **Dostatok priestoru** pre pohodlné hodnotenie bez stiesnenia

### 1.2 Layout laboratória

Odporúčaná štruktúra:

```
┌─────────────────────────────────────────────────────────┐
│                    VSTUPNÁ ZÓNA                          │
│              (registrácia, úloženie oblečenia)           │
├─────────────────────────────────────────────────────────┤
│                  PRÍPRAVNÁ ZÓNA                          │
│    (kuchyňa, skladovanie, chladničky, mrazničky)        │
├─────────────────────────────────────────────────────────┤
│              SENZORICKÁ HODNOTIACA ZÓNA                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │Kabín1│ │Kabín2│ │Kabín3│ │Kabín4│ │Kabín5│          │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
├─────────────────────────────────────────────────────────┤
│              ANALYTICKÁ ZÓNA (voliteľné)                 │
│         (textúra, farba, akustika, dotyk)                │
├─────────────────────────────────────────────────────────┤
│              ADMINISTRATÍVNA ZÓNA                        │
│           (riadenie, dokumentácia, IT)                   │
└─────────────────────────────────────────────────────────┘
```

### 1.3 Oddelenie prípravnej a hodnotiacej zóny

| Kritérium | Prípravná zóna | Hodnotiaca zóna |
|-----------|---------------|-----------------|
| Vzduchová výmena | Samostatná | Samostatná |
| Zápachy | Pripustné | Neprípustné |
| Osvetlenie | Funkčné | Kontrolované (biele) |
| Teplota | Funkčná (18–24°C) | Kontrolovaná (20–22°C) |
| Hluk | Tolerovaný | Tlumený |

---

## 2. Podmienky prostredia

### 2.1 Teplota

| Parameter | Hodnota | Tolerancia | Zdroj |
|-----------|---------|------------|-------|
| Teplota vzduchu | 20–22°C | ±1°C | Odporúčanie (ISO 8589: kontrolovaná, príjemná) |
| Teplota pracovných plôch | 20–22°C | ±1°C | Odporúčanie |
| Teplota vzoriek pri podávaní | Špecifická pre produkt | ±2°C | ISO 6658 (rovnaká pre všetky vzorky) |

**Dôležitosť:** Teplota ovplyvňuje vnímanie. Napr. sladkosť sa pri vyššej teplote vzorky vníma intenzívnejšie (mechanizmus cez kanál TRPM5; Talavera et al., 2005, *Nature* 438, 1022–1025) a prchavosť aromatických látok s teplotou rastie. Teplotu miestnosti aj vzoriek preto treba udržiavať konštantnú.

### 2.2 Vlhkosť

| Parameter | Hodnota | Tolerancia | Zdroj |
|-----------|---------|------------|-------|
| Relatívna vlhkosť | 40–60% | ±5% | Odporúčanie (ISO 8589: kontrolovaná, príjemná) |
| Absolútna vlhkosť | 7–11 g/kg | — | Odporúčanie |

**Dôležitosť:** Príliš nízka vlhkosť spôsobuje sucho slizníc, čo ovplyvňuje vnímanie chutí. Príliš vysoká vlhkosť umožňuje rast mikroorganizmov a vytvára zápachy.

### 2.3 Osvetlenie

| Parameter | Hodnota | Tolerancia | Zdroj |
|-----------|---------|------------|-------|
| Osvetlenie na pracovnej ploche | ~300–1000 lux, rovnomerné, regulovateľné | — | Odporúčanie (ISO 8589: rovnomerné, bez tieňov, regulovateľné) |
| Farba osvetlenia | Denné svetlo (D65, ~6500 K) pre hodnotenie farby | vysoké CRI | ISO 11037:2011, ISO 8589 |
| Rovnomernosť | ≥ 0.7 | — | Odporúčanie |

**Dôležitosť:** Farba osvetlenia môže ovplyvniť vnímanie farby potravín. Pre deskriptívnu analýzu farby sa odporúča štandardné osvetlenie D65 (6500 K).

### 2.4 Vzduchová výmena

| Parameter | Hodnota | Zdroj |
|-----------|---------|-------|
| Výmena vzduchu | 6–12 krát/hodinu | Odporúčanie (ISO 8589: priestor bez pachov) |
| Rýchlosť prúdenia vzduchu | < 0.2 m/s | Odporúčanie |
| Tlak | Mierny **pretlak** v hodnotiacej zóne voči prípravni (aby pachy neprenikali dnu) | ISO 8589 / prax |

**Dôležitosť:** Dostatočná výmena vzduchu zabraňuje hromadeniu zápachov a udržuje čistotu vzduchu v hodnotiacej zóne.

### 2.5 Odstránenie zápachov

| Zdroj zápachu | Riešenie |
|---------------|----------|
| Príprava potravín | Samostatná vzduchotechnika s kuchynským odsávačom |
| Odpad | Uzavreté nádoby s nočnou odvozom |
| Čistenie | Použitie bezvónnych čistiacich prostriedkov |
| Osobná hygiena | Zákaz parfémov pre panelistov |

### 2.6 Akustika

| Parameter | Hodnota | Zdroj |
|-----------|---------|-------|
| Hladina hluku | < 40 dB(A) | Odporúčanie (ISO 8589: minimalizovať hluk) |
| Reverberačný čas | < 0.5 s | Odporúčanie |
| Izolácia od vonkajšieho hluku | ≥ 30 dB | Odporúčanie |

**Dôležitosť:** Hluk ruší koncentráciu a môže ovplyvniť vnímanie chutí. Odporúča sa použitie akustických panelov a tlumičov.

---

## 3. Vybavenie

### 3.1 Senzorické kabíny

| Parameter | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Počet kabín | 5–15 (podľa veľkosti panelu) | Odporúčanie |
| Rozstup medzi kabínami | ≥ 1.0 m | Odporúčanie |
| Šírka kabíny | ≥ 0.9 m | Odporúčanie (ISO 8589 uvádza minimálne rozmery pracovnej plochy) |
| Hĺbka pracovnej plochy | ≥ 0.6 m | Odporúčanie |
| Materiály | Bez zápachu, ľahko čistiteľné; steny neutrálne (matné biele/svetlosivé) | ISO 8589 |
| Povrch | Ľahko čistiteľný, odolný proti zápachom | Odporúčanie |
| Osvetlenie | Regulovateľné, možnosť farebného (maskovacieho) svetla | ISO 8589 |
| Komunikácia | Interkom alebo tablet | Odporúčanie |

**Dôležitosť:** Kabíny musia poskytovať neutrálny, izolovaný priestor, ktorý minimalizuje rušivé vplyvy a umožňuje sústredené hodnotenie.

### 3.2 Pracovné plochy a umývačky

| Vybavenie | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Pracovné plochy | Nerdzavejúca oceľ 304 | Odporúčanie |
| Výška pracovnej plochy | 0.85–0.95 m | Ergonomia |
| Umývačky | S nožným ovládaním | Hygiena |
| Mýdlo | Bezvónne, antibakteriálne | Hygiena |
| Rukavice | Jednorazové, bez púdru | Hygiena |
| Papierové utierky | Jednorazové, bez vón | Hygiena |

### 3.3 Príprava vzoriek

| Vybavenie | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Kuchyňa | Samostatná, dobre vetraná | ISO 8589 |
| Chladnička | 0–4°C | HACCP |
| Mraznička | -18°C | HACCP |
| Mikrovlnná rúra, varná doska | Pre ohrev vzoriek | Odporúčanie |
| Váhy | Presnosť ±0.1 g | Odporúčanie |
| Meradlá | Pre objemové meranie | Odporúčanie |
| Teplomery | Presnosť ±0.5°C | Odporúčanie |
| Časovače | Pre časové limity | Odporúčanie |

### 3.4 IT vybavenie

| Vybavenie | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Tablety/PC | Pre každú kabínu | Odporúčanie |
| Senzorický softvér | Compusense, RedJade, SIMS, FIZZ; analýza dát v R (pozri [SaIT](https://github.com/senzorika/SaIT)) | Odporúčanie |
| WiFi | Stabilné pripojenie | Odporúčanie |
| Zálohovanie | Automatické, denne | Dokumentácia |
| Tlačiareň | Pre tlač protokolov | Dokumentácia |

---

## 4. Vzorky a ich príprava

### 4.1 Identifikácia vzoriek

| Parameter | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Kódovanie | Náhodné trojciferné kódy | ISO 6658 |
| Generovanie kódov | Náhodný generátor (napr. RAND) | Odporúčanie |
| Unikátnosť | Každá vzorka má jedinečný kód | ISO 6658 |
| Dvojité slepé kódovanie | Pre testy s kontrolou | Odporúčanie |

**Príklad kódovania:**
```
Vzorka A: 382
Vzorka B: 715
Vzorka C: 249
```

### 4.2 Porcie a podávanie

| Parameter | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Veľkosť porcie | 10–30 g (tekutiny: 10–30 ml), rovnaká pre všetky vzorky | Odporúčanie |
| Typ nádoby | Biele plastové poháre, sklenené poháre | Odporúčanie |
| Farba nádoby | Biele alebo priehľadné (príp. farebné na maskovanie farby) | Odporúčanie |
| Teplota podávania | Špecifická pre produkt, rovnaká pre všetky vzorky | ISO 6658 |
| Pokrytie | Štandardné, jednotné | Odporúčanie |

**Odporúčané teploty podávania:**

| Typ produkt | Teplota podávania |
|-------------|------------------|
| Studené nápoje | 4–8°C |
| Teplé nápoje | 60–65°C |
| Mäsové produkty | 60–70°C |
| Pečivo | Pokojová teplota (20–22°C) |
| Mliečne produkty | 4–8°C |
| Sladkosti | Pokojová teplota (20–22°C) |

### 4.3 Počet vzoriek na panelistu

| Typ testu | Maximálny počet vzoriek | Zdroj |
|-----------|------------------------|-------|
| Deskriptívna analýza | 4–6 na sedenie | Odporúčanie |
| Hedonický test | 4–6 (max. ~8 pri nenáročných produktoch) | Odporúčanie |
| Test rozdielov | 1–2 sady (napr. 1–2 trojice) na sedenie | Odporúčanie |
| Časovo-intenzívna analýza | 3–4 | Odporúčanie |

**Dôležitosť:** Príliš veľa vzoriek spôsobuje únavu a adaptáciu a znižuje kvalitu dát. Odporúča sa prestávka každé 45–60 minút. Ak treba hodnotiť viac vzoriek, než zvládne jeden hodnotiteľ, použite vyvážené neúplné bloky (ISO 29842) — vyhodnotenie Durbinovým testom: [SaIT cvičenie 5d](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html).

### 4.4 Poradie podávania

| Parameter | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Randomizácia | Náhodné poradie pre každého panelistu | ISO 6658 |
| Vyváženosť | Každá vzorka je podávaná v každej pozícii rovnaký počet krát | ISO 6658 |
| Williams design | Vyváženie poradia aj prenosových efektov prvého rádu | Williams (1949) |
| Prenosové efekty (carry-over) | Kontrola vplyvu predchádzajúcej vzorky | Williams design |

**Príklad Williams designu pre 3 vzorky:**

| Panelist | 1. poradie | 2. poradie | 3. poradie |
|----------|-----------|-----------|-----------|
| 1 | A | B | C |
| 2 | B | C | A |
| 3 | C | A | B |
| 4 | A | C | B |
| 5 | B | A | C |
| 6 | C | B | A |

---

## 5. Panelisti

### 5.1 Výber a tréning (ISO 8586)

**Fázy výberu:**

1. **Rekrutácia** – výber kandidátov s dostatočnou citlivosťou
2. **Screening** – testy citlivosti (porozumenie, diskriminácia, reprodukovateľnosť)
3. **Tréning** – systematické vzdelávanie v senzorických metódach
4. **Certifikácia** – overenie výkonnosti

**Kritériá výberu:**

| Kritérium | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Vek | Pevnú hranicu ISO 8586 nestanovuje; zohľadniť vplyv veku na citlivosť | Odporúčanie |
| Zdravie | Zdravý, bez alergií a intolerancií na testované produkty | ISO 8586 |
| Citlivosť | Priemerná alebo nadpriemerná | ISO 8586 |
| Dostupnosť | Pravidelná účasť | ISO 8586 |
| Motivácia | Ochota spolupracovať | ISO 8586 |

### 5.2 Počet panelistov

| Typ testu | Počet panelistov | Zdroj |
|-----------|-----------------|-------|
| Trénovaný panel (deskriptívna analýza) | 8–12 | Bežná prax (ISO 13299) |
| Vybraní hodnotitelia (test rozdielov) | ≥ 24; pri malých rozdieloch a testoch podobnosti výrazne viac | ISO 4120 (výpočet podľa α, β, p_d) |
| Spotrebiteľský test (hedonický) | ≥ 60 na skupinu, bežne 100+ | ISO 11136 |
| Spotrebiteľský test (preferencie) | 100+ (podľa sily testu) | ISO 5495 / ASTM E2263 |
| Expertný panel | 3–5 | Odporúčanie (ISO 8586 definuje expertného hodnotiteľa, nie veľkosť panelu) |

**Dôležitosť:** Trénovaný panel poskytuje presné, reprodukovateľné výsledky, ale nemusí reprezentovať spotrebiteľov. Spotrebiteľský test poskytuje ekologickú validitu, ale je menej presný.

### 5.3 Kalibrácia a monitorovanie výkonnosti

| Parameter | Frekvencia | Zdroj |
|-----------|-----------|-------|
| Test citlivosti | Každých 6 mesiacov | Odporúčanie (ISO 8586: pravidelné monitorovanie) |
| Test opakovateľnosti | Každé 3 mesiace | Odporúčanie (metriky podľa ISO 11132) |
| Test diskriminácie | Každých 6 mesiacov | Odporúčanie (metriky podľa ISO 11132) |
| Kalibrácia s referenčnými vzorkami | Každý mesiac | Odporúčanie |
| Spätná väzba | Po každom teste | ISO 8586 |

**Kritériá výkonnosti:**

Príklad **interných** kritérií (nie sú to hodnoty z ISO); ISO 11132:2021 odporúča hodnotiť výkonnosť cez ANOVA — **diskrimináciu** (F-test produktu pre hodnotiteľa), **zhodu** s panelom (interakcia produkt × hodnotiteľ) a **opakovateľnosť** (reziduálny rozptyl):

| Kritérium | Príklad interného cieľa |
|-----------|---------|
| Diskriminácia | p(F produkt) < 0.05 pre hodnotiteľa pri kľúčových atribútoch |
| Zhoda | nevýznamný príspevok hodnotiteľa k interakcii produkt × hodnotiteľ |
| Opakovateľnosť | nízky reziduálny rozptyl (napr. ICC ≥ 0.7) |

> 🧪 **Precvič v R:** výkonnosť panelu — [SaIT cvičenie 15](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) · hodnotiteľ ako náhodný efekt — [cvičenie 16](https://senzorika.github.io/SaIT/teoria/cvicenie16.html) · koľko hodnotiteľov treba — [cvičenie 14](https://senzorika.github.io/SaIT/teoria/cvicenie14.html)

---

## 6. Hygiena a bezpečnosť

### 6.1 HACCP

**Základné princípy HACCP v senzorickom laboratóriu:**

1. **Analýza nebezpečenstva** – identifikácia potenciálnych rizík
2. **Kritické kontrolné body** – stanovenie CCP
3. **Kritické limity** – stanovenie hodnôt
4. **Monitorovanie** – pravidelné kontroly
5. **Korekčné opatrenia** – akcie pri prekročení limitov
6. **Verifikácia** – overenie účinnosti
7. **Dokumentácia** – záznamy

### 6.2 Alergény

| Alergén | Opatrenie | Zdroj |
|---------|-----------|-------|
| Gluten | Samostatná príprava, označenie | EU Regulation 1169/2011 |
| Mlieko | Samostatná príprava, označenie | EU Regulation 1169/2011 |
| Vajce | Samostatná príprava, označenie | EU Regulation 1169/2011 |
| Orechy (škrupinové plody), arašidy | Samostatná príprava, označenie | EU Regulation 1169/2011 |
| Sója | Samostatná príprava, označenie | EU Regulation 1169/2011 |
| Ryby | Samostatná príprava, označenie | EU Regulation 1169/2011 |

Príloha II nariadenia 1169/2011 uvádza **14 skupín alergénov** (okrem vyššie uvedených aj kôrovce, zeler, horčica, sezam, oxid siričitý a siričitany, vlčí bôb, mäkkýše) — tabuľka je výber.

**Dôležitosť:** Všetky vzorky musia byť jasne označené s informáciami o alergénoch. Panelisti musia byť o zložení informovaní pred testom a dať informovaný súhlas.

### 6.3 Etiketa

| Informácia | Špecifikácia | Zdroj |
|-----------|-------------|-------|
| Názov produktu | Oficiálny názov | EU Regulation 1169/2011 |
| Zloženie | Zoznam surovín | EU Regulation 1169/2011 |
| Alergény | Zvýraznené v zložení | EU Regulation 1169/2011 |
| Trvanlivosť | Dátum minimálnej trvanlivosti | EU Regulation 1169/2011 |
| Podmienky skladovania | Teplota, vlhkosť | EU Regulation 1169/2011 |
| Výrobca | Názov, adresa | EU Regulation 1169/2011 |

---

## 7. Dokumentácia

### 7.1 Protokoly

| Dokument | Obsah | Frekvencia |
|----------|-------|-----------|
| Testovací protokol | Cieľ, metóda, vzorky, panelisti | Každý test |
| Záznam z testu | Dáta, poznámky, pozorovania | Každý test |
| Záznam z prípravy | Postupy, teploty, časy | Každá príprava |
| Záznam z čistenia | Použité prostriedky, časy | Každé čistenie |
| Záznam z kalibrácie | Dátum, výsledky, odchýlky | Podľa plánu |

### 7.2 Záznamy

| Záznam | Uloženie | Doba uchovania |
|--------|----------|----------------|
| Testovacie protokoly | Elektronicky + papier | 5 rokov |
| Záznamy z testov | Elektronicky + papier | 5 rokov |
| Záznamy z prípravy | Elektronicky | 2 roky |
| Záznamy z čistenia | Elektronicky | 2 roky |
| Záznamy z kalibrácie | Elektronicky + papier | 5 rokov |
| Záznamy z tréningu panelistov | Elektronicky | 5 rokov |

### 7.3 Kalibrácia zariadení

| Zariadenie | Frekvencia kalibrácie | Zdroj |
|-----------|----------------------|-------|
| Teplomery | Každých 6 mesiacov | Interný systém kvality (napr. ISO/IEC 17025) |
| Váhy | Každých 6 mesiacov | Interný systém kvality |
| Meradlá | Každých 12 mesiacov | Interný systém kvality |
| Chladničky/mrazničky | Každý mesiac | HACCP |
| Osvetlenie | Každých 12 mesiacov | Odporúčanie |
| Vzduchotechnika | Každých 6 mesiacov | Odporúčanie |

---

## Záver

Tento dokument poskytuje prehľad požiadaviek na senzorické laboratórium vychádzajúci z ISO 8589 (priestory), ISO 8586 (hodnotitelia), ISO 6658 (všeobecná metodika) a ISO 11132 (výkonnosť panelu), doplnený o odporúčania z praxe. Dodržiavanie týchto podmienok je nevyhnutné pre získanie spoľahlivých, reprodukovateľných a validných senzorických dát.

---

## Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) |
|---|---|
| Prostredie R/RStudio pre spracovanie dát z laboratória | [1 – R, RStudio a spolupráca](https://senzorika.github.io/SaIT/teoria/cvicenie01.html) |
| Import dát zo senzorického softvéru (Excel) | [5c – Import dát z Excelu](https://senzorika.github.io/SaIT/teoria/cvicenie05c.html) |
| Neúplné bloky pri veľkom počte vzoriek | [5d – Durbinov test a BIBD](https://senzorika.github.io/SaIT/teoria/cvicenie05d.html) |
| Počet hodnotiteľov | [14 – Sila testu a veľkosť panelu](https://senzorika.github.io/SaIT/teoria/cvicenie14.html) |
| Monitorovanie panelu (ISO 11132) | [15 – Výkonnosť senzorického panelu](https://senzorika.github.io/SaIT/teoria/cvicenie15.html) |
| Audit panelu a návrh experimentu | [20 – Kontrolné prípadové štúdie II](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) |
| Prednáška | [Senzorický panel ako merací prístroj](https://senzorika.github.io/SaIT/prezentacie/sk/04_panel.html) |

---

*Dokument pripravený pre potreby SAP – Senzorická Analýza Potravín. Odporúčame pravidelnú revíziu s ohľadom na zmeny v štandardoch a technológiách.*
