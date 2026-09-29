# Sensory Shelf-Life Testing: Komplexný sprievodca

## Obsah

1. [Úvod do sensory shelf-life](#1-úvod-do-sensory-shelf-life)
2. [Metódy na stanovenie shelf-life](#2-metódy-na-stanovenie-shelf-life)
3. [Dizajn shelf-life štúdie](#3-dizajn-shelf-life-štúdie)
4. [Výpočty a parametre](#4-výpočty-a-parametre)
5. [Praktické príklady](#5-praktické-príklady)
6. [Interpretácia a reporting](#6-interpretácia-a-reporting)
7. [Kľúčové zdroje](#7-kľúčové-zdroje)

---

## 1. Úvod do sensory shelf-life

### 1.1 Čo je sensory shelf-life?

Sensory shelf-life je časový interval, počas ktorého potravinársky produkt udržuje svoje senzorické vlastnosti na úrovni akceptovateľnej pre spotrebiteľa za daných podmienok skladovania. Predstavuje **senzorickú trvanlivosť** produktu – obdobie, počas ktorého produkt "chutí dobre" z hľadiska spotrebiteľa.

Podľa Hougha (2010) trvanlivosť nezávisí len od produktu, ale aj od **spotrebiteľa**: kľúčovou otázkou je, *aká časť spotrebiteľov produkt skladovaný čas t odmietne*. Preto sa v analýze prežitia za „udalosť" považuje **odmietnutie produktu spotrebiteľom** a S(t) je pravdepodobnosť, že spotrebiteľ produkt skladovaný čas t ešte akceptuje. Normou pre senzorické stanovenie trvanlivosti je **ISO 16779:2015**.

> 🧪 **Precvič v R ([SaIT](https://github.com/senzorika/SaIT)):** Kaplan-Meierov odhad pravdepodobnosti akceptácie a cut-off bod — [cvičenie 10](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) · prípadová štúdia senzorickej trvanlivosti — [cvičenie 20](https://senzorika.github.io/SaIT/teoria/cvicenie20.html)

### 1.2 Prečo je sensory shelf-life dôležité?

| Aspekt | Význam |
|--------|--------|
| **Kvalita produktu** | Zaisťuje, že produkt udržuje svoje charakteristiky počas celej trvanlivosti |
| **Spokojnosť spotrebiteľa** | Minimalizuje reklamácie a návraty produktov |
| **Konkurencieschopnosť** | Dlhšia shelf-life = väčšia flexibilita v distribúcii |
| **Straty** | Predlženie shelf-life = zníženie množstva vyradených produktov |
| **Bezpečnosť** | Senzorická degradácia môže indikovať mikrobiologické problémy |

### 1.3 Typy produktov a senzorická degradácia

| Kategória produktu | Typická degradácia | Typická shelf-life |
|--------------------|--------------------|--------------------|
| **Mliečne výrobky** | Kyslosť, oxidácia, textúra | 14-30 dní |
| **Chlieb a pečivo** | Stárnutie (staling), plesnivý | 3-7 dní |
| **Nápoje** | Oxidácia, strata účinnosti, sedimentácia | 6-12 mesiacov |
| **Mäso a mäsové výrobky** | Oxidácia tuku, mikrobiologický rast | 7-14 dní |
| **Ovocie a zelenina** | Vädnutie, hniloba, strata chuti | 3-14 dní |
| **Konzervy** | Korózia, strata textúry | 12-36 mesiacov |
| **Sladkosti** | Oxidácia, strata chuti, textúra | 6-12 mesiacov |

---

## 2. Metódy na stanovenie shelf-life

### 2.1 Kaplan-Meierov odhad (Kaplan-Meier Estimator)

**Princíp:** Kaplan-Meierov odhad je non-parametrická metóda na odhad prežívacej funkcie (survival function) z časových dát. V kontexte shelf-life sa používa na odhad pravdepodobnosti, že produkt zostáva akceptovateľný v danom čase.

**Výpočet:**

```
S(t) = ∏(1 - dᵢ/nᵢ)  pre tᵢ ≤ t

Kde:
- S(t) = pravdepodobnosť, že spotrebiteľ produkt skladovaný čas t akceptuje
- dᵢ = počet "udalostí" (prvých odmietnutí) v čase tᵢ
- nᵢ = počet spotrebiteľov "v riziku" (ešte neodmietli) v čase tᵢ
```

**Interpretácia:**

```
S(t) = 0.80 → 20 % spotrebiteľov by produkt skladovaný čas t odmietlo
S(t) = 0.50 → medián: polovica spotrebiteľov produkt odmietne
S(t) = 0.75 → častá konzervatívnejšia voľba konca trvanlivosti (25 % odmietnutí)
```

Voľba prípustného podielu odmietnutí (25 %, 50 % …) je **rozhodnutie výrobcu** podľa kategórie a rizika, nie štatistická konštanta. Pozn.: keďže spotrebiteľ hodnotí vzorky s rôznou dobou skladovania (často reverzný dizajn), presný čas odmietnutia nepoznáme — dáta sú **intervalovo cenzurované** a Hough (2010) ich odhaduje parametricky (Weibull, log-normálne rozdelenie). Kaplan-Meierov odhad je zjednodušenie vhodné na výučbu a prvý pohľad.

**Príklad výpočtu:**

| Čas (dni) | Testované (nᵢ) | Zamietnuté (dᵢ) | S(t) |
|------------|----------------|-----------------|------|
| 0 | 50 | 0 | 1.00 |
| 7 | 50 | 2 | 0.96 |
| 14 | 48 | 5 | 0.86 |
| 21 | 43 | 8 | 0.70 |
| 28 | 35 | 10 | 0.50 |
| 35 | 25 | 12 | 0.26 |
| 42 | 13 | 8 | 0.10 |

**Mediánová shelf-life:** 28 dní (S(t) = 0.50)

### 2.2 Weibullova distribúcia

**Princíp:** Weibullova distribúcia je flexibilná parametrická distribúcia, ktorá modeluje degradáciu produktu v čase. V kontexte shelf-life sa používa na modelovanie pravdepodobnosti zamietnutia produktu.

**Distribučná funkcia:**

```
F(t) = 1 - exp(-(t/η)^β)

Kde:
- F(t) = pravdepodobnosť zamietnutia v čase t
- η (eta) = charakteristická životnosť (scale parameter)
- β (beta) = tvarový parameter (shape parameter)
```

**Hazard funkcia:**

```
h(t) = (β/η) × (t/η)^(β-1)

Kde:
- h(t) = okamžitá miera zamietnutia v čase t
- β < 1: klesajúca hazard (ranná smrteľnosť)
- β = 1: konštantná hazard (exponenciálna distribúcia)
- β > 1: rastúca hazard (starnutie)
```

**Prepojenie s shelf-life:**

```
Všeobecne: čas, keď podiel akceptujúcich klesne na S:
t_S = η × (−ln S)^(1/β)

S = 0.50 (50 % odmietnutí):  t₅₀ = η × (0.693)^(1/β)
S = 0.75 (25 % odmietnutí):  t₂₅ = η × (0.288)^(1/β)
```

### 2.3 Accelerated Shelf-Life Testing (ASLT)

**Princíp:** ASLT je metóda, ktorá urýchli prirodzenú degradáciu produktov zvýšením teploty (a/alebo vlhkosti, svetla) a následne extrapoluje výsledky na normálne podmienky skladovania pomocou Arrheniusovho modelu.

**Q10 Model:**

```
Q10 = (Shelf-life pri T₁) / (Shelf-life pri T₂)

Kde:
- T₂ = T₁ + 10°C
- Q10 = koeficient urýchlenia degradácie

Vzťah (pre ľubovoľné T₂):
Shelf-life(T₂) = Shelf-life(T₁) / Q10^((T₂ − T₁)/10)
```

**Arrheniusov model:**

```
k = A × exp(-Ea / (R × T))

Kde:
- k = rýchlostná konštanta degradácie
- A = preexponenciálny faktor
- Ea = energia aktivácie (J/mol)
- R = univerzálná plynová konštanta (8.314 J/(mol·K))
- T = absolútna teplota (K)
```

**Vzťah medzi Q10 a Ea:**

```
ln Q10 = 10 × Ea / (R × T × (T + 10))    (T v kelvinoch)

alebo aproximatívne:

Q10 ≈ exp(10 × Ea / (R × T²))
```

> ⚠️ Arrheniusovo správanie nemusí platiť pre všetky procesy: napr. **retrogradácia škrobu (starnutie chleba)** je rýchlejšia pri chladničkovej teplote než pri izbovej, zmeny fázového stavu tuku či vody menia mechanizmus. Extrapolácia z ASLT sa musí overiť aspoň jedným testom v reálnych podmienkach.

### 2.4 Survival Analysis

**Princíp:** Survival analysis je štatistická metóda na analýzu časových dát, kde "udalosť" je zamietnutie produktu. V kontexte shelf-life sa používa na modelovanie pravdepodobnosti akceptácie produktu v čase.

**Prežívacia funkcia:**

```
S(t) = P(T > t) = 1 - F(t)

Kde:
- S(t) = pravdepodobnosť, že produkt je stále akceptovateľný v čase t
- T = čas zamietnutia
- F(t) = distribučná funkcia
```

**Hazard funkcia:**

```
h(t) = f(t) / S(t) = -d/dt [ln S(t)]

Kde:
- h(t) = okamžitá miera zamietnutia
- f(t) = hustota pravdepodobnosti zamietnutia
```

**Cox Proportional Hazards Model:**

```
h(t|X) = h₀(t) × exp(β₁X₁ + β₂X₂ + ... + βₚXₚ)

Kde:
- h₀(t) = základná hazard funkcia
- X = kovariáty (teplota, vlhkosť, svetlo)
- β = regresné koeficienty
```

### 2.5 Cut-off Point Metóda

**Princíp:** Cut-off point metóda definuje konkrétny bod, pri ktorom produkt prestáva byť akceptovateľný. Tento bod sa stanoví na základe senzorického hodnotenia alebo spotrebiteľskej akceptácie.

**Typy cut-off bodov:**

| Typ | Definícia | Použitie |
|-----|-----------|---------|
| **Senzorický cut-off** | Hodnota atribútu, pri ktorej produkt prestáva byť akceptovateľný | Deskriptívna analýza |
| **Spotrebiteľský cut-off** | % spotrebiteľov, ktorí zamietnu produkt | Spotrebiteľský test |
| **Kombinovaný cut-off** | Kombinácia senzorického a spotrebiteľského | Komplexné hodnotenie |

**Stanovenie cut-off bodu:**

```
1. Definujte atribút (napr. "celková akceptabilita")
2. Definujte škálu (napr. 9-bodová hedonickej škála)
3. Definujte cut-off hodnotu (napr. ≥ 6.0)
4. Vypočítajte čas, pri ktorom priemer klesne pod cut-off
```

### 2.6 Weibull Hazard Analysis

**Princíp:** Weibull hazard analysis kombinuje Weibullovu distribúciu s hazard analýzou na modelovanie degradácie produktu.

**Weibull hazard funkcia:**

```
h(t) = (β/η) × (t/η)^(β-1)

Kde:
- β < 1: klesajúca hazard (ranná smrteľnosť)
- β = 1: konštantná hazard (exponenciálna distribúcia)
- β > 1: rastúca hazard (starnutie)
```

**Interpretácia β:**

| β | Typ degradácie | Príklad |
|---|----------------|---------|
| **β < 1** | Klesajúci hazard | Časť spotrebiteľov odmieta produkt hneď od začiatku (napr. nepáči sa im už čerstvý) |
| **β = 1** | Konštantný hazard | Odmietnutia rovnomerne v čase |
| **β > 1** | Rastúci hazard | Typický prípad pri senzorickej trvanlivosti — odmietnutí pribúda so starnutím produktu |

β opisuje rozdelenie **časov odmietnutia spotrebiteľmi**, nie priamo rýchlosť chemickej degradácie.

---

## 3. Dizajn shelf-life štúdie

### 3.1 Časové body (Time Points)

**Princíp:** Časové body sa plánujú tak, aby zachytili celú degradáciu produktu od začiatku do konca shelf-life.

**Odporúčané časové body:**

| Typ produktu | Časové body (dni) | Počet bodov |
|--------------|-------------------|-------------|
| **Krátkodobá shelf-life** (< 30 dní) | 0, 3, 7, 10, 14, 21, 28 | 5-7 |
| **Stredná shelf-life** (30-180 dní) | 0, 14, 30, 60, 90, 120, 180 | 5-7 |
| **Dlhá shelf-life** (> 180 dní) | 0, 30, 60, 90, 120, 180, 240, 360 | 6-8 |

**Pravidlá pre plánovanie:**

1. **Hustejšie body okolo očakávaného konca trvanlivosti** – tam, kde spotrebitelia začínajú produkt odmietať, je informácia pre odhad najcennejšia (Hough, 2010)
2. **Aj body za očakávaným koncom** – aby krivka odmietnutí dosiahla aspoň ~50 %
3. **Minimálne 5–6 časových bodov** – pre spoľahlivý odhad
4. **Reverzný dizajn** – vzorky rôzneho veku sa pripravia postupne a hodnotia v jeden deň (odstraňuje vplyv dňa a panelu)

### 3.2 Počet vzoriek na časový bod

| Parameter | Minimum | Odporúčané |
|-----------|---------|------------|
| **Počet vzoriek** | 3 | 5-10 |
| **Počet panelistov** | 8-10 | 12-15 |
| **Počet opakovaní** | 2 | 3 |
| **Celkový počet hodnotení** | 24 | 45-90 |

### 3.3 Podmienky skladovania

| Parameter | Typické podmienky | Akcelerované podmienky |
|-----------|-------------------|----------------------|
| **Teplota** | 4°C, 20°C, 25°C | 30°C, 35°C, 40°C |
| **Vlhkosť** | 50% RH, 60% RH | 75% RH, 85% RH |
| **Svetlo** | Tmavé, normálne svetlo | UV svetlo, intenzívne svetlo |
| **Atmosféra** | Vzduch, vákum | N₂, CO₂, modifikovaná atmosféra |

### 3.4 Kontrolné vzorky

**Účel:** Kontrolné vzorky slúžia na overenie, či degradácia je skutočne spôsobená časom a nie inými faktormi.

**Typy kontrolných vzoriek:**

| Typ | Popis | Použitie |
|-----|-------|----------|
| **Negatívna kontrola** | Vzorka skladovaná v ideálnych podmienkach | Overenie stability |
| **Pozitívna kontrola** | Vzorka s pridaným degradáčným faktorom | Overenie citlivosti testu |
| **Referenčná vzorka** | Vzorka s známou shelf-life | Kalibrácia |

### 3.5 Počet panelistov

| Typ testu | Minimálny počet | Odporúčaný počet |
|-----------|-----------------|------------------|
| **Deskriptívna analýza** | 8 | 12-15 |
| **Spotrebiteľský test akceptácie (analýza prežitia)** | ~50 (Hough, 2010) | 50-100 |
| **JAR test** | 100 | 150-200 |
| **Preference test** | 100 | 150-200 |

Pravdepodobnosť akceptácie/odmietnutia musia určovať **spotrebitelia**; trénovaný panel popisuje, *ktoré* atribúty sa menia, ale nevie povedať, kedy to spotrebiteľ odmietne.

---

## 4. Výpočty a parametre

### 4.1 Q10 Koeficient

**Definícia:** Q10 je faktor, ktorý udáva, koľkokrát sa zvýši rýchlosť degradácie pri zvýšení teploty o 10°C.

**Vzorec:**

```
Q10 = (Shelf-life pri T₁) / (Shelf-life pri T₂)

Kde:
- T₂ = T₁ + 10°C
```

**Výpočet Q10 z dát:**

```
Ak máme shelf-life pri 20°C = 180 dní a pri 30°C = 60 dní:

Q10 = 180 / 60 = 3.0

Interpretácia: Pri zvýšení teploty o 10°C sa rýchlosť degradácie zvýši 3×
```

**Typické Q10 hodnoty pre potravináre:**

| Kategória produktu | Typické Q10 | Poznámka |
|--------------------|-------------|----------|
| **Mliečne výrobky** | 2-4 | Závisí od obsahu tuku |
| **Chlieb a pečivo** | — | Starnutie (retrogradácia) nesleduje Arrheniusa — v chladničke je rýchlejšie |
| **Nápoje** | 2-3 | Oxidácia |
| **Mäso** | 2-4 | Oxidácia tuku, mikrobiologický rast |
| **Ovocie a zelenina** | 2-3 | Enzymatická degradácia |
| **Konzervy** | 1.5-2.5 | Korózia, textúra |
| **Sladkosti** | 2-3 | Oxidácia, strata chuti |

### 4.2 Energia Aktivácie (Ea)

**Definícia:** Energia aktivácie je minimálna energia potrebná na spustenie degradáčnej reakcie. Vyššia Ea = väčšia závislosť od teploty.

**Vzorec z Arrheniusovho modelu:**

```
Ea = -R × ln(k₂/k₁) / (1/T₂ - 1/T₁)

Kde:
- R = 8.314 J/(mol·K)
- k₁, k₂ = rýchlostné konštanty pri teplotách T₁, T₂
- T₁, T₂ = absolútne teploty (K)
```

**Výpočet Ea:**

```
Pri 20°C (293.15 K): k₁ = 0.0056 deň⁻¹
Pri 30°C (303.15 K): k₂ = 0.0168 deň⁻¹

Ea = -8.314 × ln(0.0168/0.0056) / (1/303.15 - 1/293.15)
Ea = -8.314 × 1.0986 / (0.0032987 - 0.0034112)
Ea = -8.314 × 1.0986 / (-0.0001125)
Ea ≈ 81,200 J/mol ≈ 81 kJ/mol
```

**Orientačné Ea hodnoty** (veľký rozptyl podľa matrice; zdroj: Taoukis et al., 1997; Labuza):

| Typ reakcie | Ea (kJ/mol) |
|-------------|-------------|
| **Oxidácia lipidov** | 40-100 |
| **Enzymatické reakcie** | 40-130 |
| **Rast mikroorganizmov** | 80-120 (len v rozsahu rastových teplôt) |
| **Maillardovo hnednutie** | 100-200 |
| **Degradácia vitamínov** | 40-130 |
| **Starnutie chleba** | nie je arrheniovské (záporná teplotná závislosť pri 0–20 °C) |

### 4.3 Arrheniusov Model

**Kompletný vzorec:**

```
k = A × exp(-Ea / (R × T))

Kde:
- k = rýchlostná konštanta degradácie (deň⁻¹)
- A = preexponenciálny faktor (deň⁻¹)
- Ea = energia aktivácie (J/mol)
- R = 8.314 J/(mol·K)
- T = absolútna teplota (K)
```

**Lineárna forma:**

```
ln(k) = ln(A) - Ea / (R × T)

Toto je lineárna rovnica: y = a + bx
Kde:
- y = ln(k)
- x = 1/T
- a = ln(A)
- b = -Ea/R
```

**Výpočet shelf-life z Arrheniusovho modelu:**

```
Pre reakciu 1. rádu (kvalita klesá exponenciálne):
Shelf-life = ln(S₀/S) / k

Pre reakciu 0. rádu (kvalita klesá lineárne):
Shelf-life = (S₀ − S) / k

Kde:
- S₀ = počiatočná hodnota atribútu
- S = cut-off hodnota atribútu
- k = rýchlostná konštanta degradácie
```

### 4.4 Weibullove Parametre

**Weibullova distribučná funkcia:**

```
F(t) = 1 - exp(-(t/η)^β)

Kde:
- η (eta) = charakteristická životnosť (scale parameter)
- β (beta) = tvarový parameter (shape parameter)
```

**Odhad parametrov:**

```
Metóda maximálnej vierohodnosti (MLE):

ln L(β, η) = n × ln(β) - n × β × ln(η) + (β-1) × Σln(tᵢ) - Σ(tᵢ/η)^β

Riešením parciálnych derivácií:
∂lnL/∂β = 0
∂lnL/∂η = 0

Dostaneme:
η = (Σtᵢ^β / n)^(1/β)
β sa rieši numericky
```

**Výpočet shelf-life z Weibullovho modelu:**

```
Mediánová shelf-life (S(t) = 0.50, 50 % odmietnutí):
t₅₀ = η × (ln 2)^(1/β) = η × (0.693)^(1/β)

Shelf-life pri S(t) = 0.75 (25 % odmietnutí):
t₂₅ = η × (−ln 0.75)^(1/β) = η × (0.288)^(1/β)
```

### 4.5 Median Survival Time

**Definícia:** Median survival time je čas, pri ktorom 50% produktov je stále akceptovateľných.

**Výpočet z Kaplan-Meierovho odhadu:**

```
Nájdite čas t, pri ktorom S(t) = 0.50

Ak S(t) klesne z 0.60 na 0.40 medzi t₁ a t₂:
t₅₀ = t₁ + (t₂ - t₁) × (0.60 - 0.50) / (0.60 - 0.40)
```

**Výpočet z Weibullovho modelu:**

```
t₅₀ = η × (ln 2)^(1/β)
```

### 4.6 Ako vypočítať shelf-life z dát

**Krok 1: Zber dát**

```
Zberte senzorické dáta v pravidelných časových intervaloch
Pre každý časový bod zaznamenajte:
- Hodnotenie atribútu (napr. celková akceptabilita)
- Počet panelistov
- Podmienky skladovania
```

**Krok 2: Výpočet prežívacej funkcie**

```
Pre každý časový bod vypočítajte S(t) pomocou Kaplan-Meierovho odhadu
```

**Krok 3: Fit Weibullovho modelu**

```
Odhadnite parametre β a η pomocou MLE
Overte kvalitu fitu (QQ plot, Anderson-Darling test)
```

**Krok 4: Výpočet shelf-life**

```
t₅₀ = η × (ln 2)^(1/β)
t₂₅ = η × (−ln 0.75)^(1/β)
```

**Krok 5: Extrapolácia na normálne podmienky**

```
Použite Arrheniusov model na extrapoláciu z akcelerovaných podmienok na normálne
```

---

## 5. Praktické príklady

### 5.1 Shelf-life test na jogurte

**Produkt:** Jogurt s jahodami, skladovaný pri 4°C

**Dizajn:**

| Parameter | Hodnota |
|-----------|---------|
| **Časové body** | 0, 7, 14, 21, 28, 35, 42 dní |
| **Počet vzoriek** | 5 na časový bod |
| **Panelisti** | 12 trénovaných (profil) + 60 spotrebiteľov (akceptácia) |
| **Opakovania** | 3 (trénovaný panel) |
| **Atribúty** | Chuť, vôňa, textúra (panel); akceptujem / neakceptujem (spotrebitelia) |
| **Škála** | 0-10 bodov (panel) |

**Výsledky:**

| Čas (dni) | Chuť (priemer) | Vôňa (priemer) | Textúra (priemer) | Akceptujúci spotrebitelia (%) |
|------------|----------------|----------------|-------------------|-------------------|
| 0 | 8.5 | 8.2 | 8.0 | 100 |
| 7 | 8.0 | 7.8 | 7.5 | 95 |
| 14 | 7.2 | 7.0 | 6.8 | 85 |
| 21 | 6.5 | 6.2 | 6.0 | 70 |
| 28 | 5.8 | 5.5 | 5.2 | 55 |
| 35 | 5.0 | 4.8 | 4.5 | 35 |
| 42 | 4.2 | 4.0 | 3.8 | 15 |

**Weibull fit** (nelineárna regresia S(t) = exp(−(t/η)^β) na podiely akceptujúcich):

```
β = 2.29 (rastúci hazard)
η = 33.6 dní

t₅₀ = 33.6 × (0.693)^(1/2.29) = 33.6 × 0.852 = 28.6 dní
t₂₅ = 33.6 × (0.288)^(1/2.29) = 33.6 × 0.581 = 19.5 dní
```

**Záver:** Mediánová senzorická trvanlivosť jogurtu pri 4 °C ≈ 29 dní; pri kritériu 25 % odmietnutí ≈ 19–20 dní.

> Predošlá verzia uvádzala β = 2.3, η = 28.5 a t₅₀ = 24.8 dňa — tieto parametre nezodpovedali uvedeným dátam (pri 28 dňoch akceptovalo 55 %, model predpovedal 38 %) a obsahovali aj aritmetickú chybu (0.693^(1/2.3) = 0.853, nie 0.87).

### 5.2 Shelf-life test na chlebe

**Produkt:** Hrubý chlieb, skladovaný pri 20°C

**Dizajn:**

| Parameter | Hodnota |
|-----------|---------|
| **Časové body** | 0, 1, 2, 3, 5, 7, 10 dní |
| **Počet vzoriek** | 5 na časový bod |
| **Panelisti** | 10 trénovaných |
| **Opakovania** | 2 |
| **Atribúty** | Staling, chuť, textúra, celková akceptabilita |
| **Škála** | 0-10 bodov |

**Výsledky:**

| Čas (dni) | Staling (priemer) | Chuť (priemer) | Textúra (priemer) | Akceptabilita (%) |
|------------|-------------------|----------------|-------------------|-------------------|
| 0 | 1.0 | 8.5 | 8.0 | 100 |
| 1 | 2.5 | 7.8 | 7.2 | 90 |
| 2 | 4.0 | 7.0 | 6.5 | 75 |
| 3 | 5.5 | 6.2 | 5.8 | 55 |
| 5 | 7.0 | 5.0 | 4.5 | 30 |
| 7 | 8.0 | 4.0 | 3.5 | 10 |
| 10 | 9.0 | 3.0 | 2.5 | 0 |

**Weibull fit** (nelineárna regresia na podiely akceptujúcich):

```
β = 1.60 (rastúci hazard)
η = 4.27 dní

t₅₀ = 4.27 × (0.693)^(1/1.60) = 4.27 × 0.795 = 3.4 dní
t₂₅ = 4.27 × (0.288)^(1/1.60) = 4.27 × 0.459 = 2.0 dni
```

**Záver:** Mediánová senzorická trvanlivosť chleba ≈ 3 dni; pri kritériu 25 % odmietnutí ≈ 2 dni. (Predošlé parametre β = 1.8, η = 3.2 nezodpovedali dátam a t₁₀ = 4.1 bolo prepočítané chybne — správne 5.1.)

### 5.3 Shelf-life test na nápoji

**Produkt:** Pomarančový džús, skladovaný pri 25°C

**Dizajn:**

| Parameter | Hodnota |
|-----------|---------|
| **Časové body** | 0, 30, 60, 90, 120, 180, 240, 360 dní |
| **Počet vzoriek** | 5 na časový bod |
| **Panelisti** | 12 trénovaných |
| **Opakovania** | 3 |
| **Atribúty** | Oxidácia, chuť, vôňa, farba, celková akceptabilita |
| **Škála** | 0-10 bodov |

**Akcelerované podmienky:**

| Teplota | Shelf-life (dni) |
|---------|------------------|
| 25°C | 180 |
| 35°C | 60 |
| 45°C | 20 |

**Výpočet Q10:**

```
Q10 (25→35°C) = 180 / 60 = 3.0
Q10 (35→45°C) = 60 / 20 = 3.0

Priemerné Q10 = 3.0
```

**Výpočet Ea:**

```
Ea = -8.314 × ln(3.0) / (1/308.15 - 1/298.15)
Ea = -8.314 × 1.0986 / (0.0032452 - 0.0033540)
Ea = -8.314 × 1.0986 / (-0.0001088)
Ea ≈ 83,900 J/mol ≈ 84 kJ/mol
```

Pozn.: Konštantné Q10 = 3 v celom rozsahu 25–45 °C by znamenalo mierne rastúcu Ea — pri tak širokom rozsahu treba Arrheniusov model overiť grafom ln k vs. 1/T.

**Weibull fit (25°C):**

```
β = 2.0 (rastúci hazard)
η = 195 dní

t₅₀ = 195 × (0.693)^(1/2.0) = 195 × 0.833 = 162 dní
t₂₅ = 195 × (0.288)^(1/2.0) = 195 × 0.536 = 105 dní
```

**Záver:** Shelf-life nápoja = 160 dní (mediánová shelf-life pri 25°C)

---

## 6. Interpretácia a reporting

### 6.1 Ako interpretovať výsledky

**Kľúčové ukazovatele:**

| Ukazovateľ | Interpretácia | Akceptačné kritérium |
|------------|---------------|----------------------|
| **Mediánová shelf-life (t₅₀)** | Čas, keď produkt odmietne 50 % spotrebiteľov | Závisí od produktu |
| **t₂₅** | Čas, keď produkt odmietne 25 % spotrebiteľov | Častá konzervatívnejšia hranica |
| **β (Weibull)** | Tvar degradácie | β > 1 = starnutie |
| **Q10** | Závislosť od teploty | Typicky 2-4 |
| **Ea** | Energia aktivácie | Typicky 60-120 kJ/mol |

**Interpretácia β:**

```
β < 1: Klesajúci hazard
- Odmietnutia sú najčastejšie na začiatku (časť spotrebiteľov produkt odmieta hneď)

β = 1: Konštantný hazard (exponenciálne rozdelenie)
- Pravdepodobnosť odmietnutia v ďalšom časovom úseku je stále rovnaká

β > 1: Rastúci hazard
- Odmietnutí pribúda so starnutím produktu — typický prípad
```

### 6.2 Ako určiť "best before" dátum

**Postup:**

Najprv rozlíšte typ dátumu (Nariadenie (EÚ) č. 1169/2011, čl. 24): **„spotrebujte do"** (dátum spotreby) pri mikrobiologicky rýchlo podliehajúcich potravinách určuje **mikrobiologická bezpečnosť**, nie senzorika. Senzorická trvanlivosť je podkladom najmä pre **„spotrebujte najlepšie do"** (dátum minimálnej trvanlivosti).

Priamejší postup je zvoliť prípustný podiel odmietnutí (napr. 25 %) a vziať zodpovedajúci čas t₂₅. Alternatívne (firemná prax, nie norma):

```
1. Vypočítajte mediánovú shelf-life (t₅₀)
2. Aplikujte bezpečnostný faktor (typicky 0.7-0.8)
3. Zaokrúhlite nadol na celé dni

Bezpečnostný faktor:
- Konzervatívny: 0.7 (30% rezerva)
- Štandardný: 0.8 (20% rezerva)
- Agresívny: 0.9 (10% rezerva)

Príklad:
t₅₀ = 162 dní
Bezpečnostný faktor = 0.8
Best before = 162 × 0.8 = 129.6 ≈ 129 dní
```

**Tabuľka bezpečnostných faktorov:**

| Typ produktu | Odporúčaný faktor | Dôvod |
|--------------|-------------------|-------|
| **Citlivé potraviny** | 0.7 | Vyššie riziko reklamácií |
| **Bežné potraviny** | 0.8 | Štandardná rezerva |
| **Konzervy** | 0.9 | Nízke riziko |
| **Mrazené výrobky** | 0.75 | Závisí od chladiaceho reťazca |

*Ilustračné hodnoty firemnej praxe, nie normatívne požiadavky.*

### 6.3 Správa z shelf-life štúdie

**Formát správy:**

```markdown
# Správa zo shelf-life štúdie

## Metadata
- Dátum: 2026-09-29
- Produkt: Jogurt s jahodami
- Skladovacia teplota: 4°C
- Testovacia metóda: Deskriptívna analýza + Survival analysis

## Dizajn
- Časové body: 0, 7, 14, 21, 28, 35, 42 dní
- Počet vzoriek: 5 na časový bod
- Panelisti: 12 trénovaných (profil), 60 spotrebiteľov (akceptácia)
- Opakovania: 3 (trénovaný panel)

## Výsledky

### Podiel akceptujúcich spotrebiteľov S(t)
| Čas (dni) | S(t) |
|------------|------|
| 0 | 1.00 |
| 7 | 0.95 |
| 14 | 0.85 |
| 21 | 0.70 |
| 28 | 0.55 |
| 35 | 0.35 |
| 42 | 0.15 |

### Weibull model
- β = 2.29
- η = 33.6 dní
- Kvalita fitu: vizuálna kontrola + test (napr. Anderson-Darling)

### Shelf-life
- Mediánová shelf-life (t₅₀): 28.6 dní
- t₂₅ (25 % odmietnutí): 19.5 dní
- Odporúčaný dátum minimálnej trvanlivosti: 19 dní (kritérium 25 % odmietnutí)

## Záver
- Senzorická trvanlivosť pri 4°C: 19 dní (25 % odmietnutí), medián 28 dní
- Dátum musí zohľadniť aj mikrobiologické výsledky
- Hlavný atribút degradácie: Chuť a vôňa
```

---

## 7. Kľúčové zdroje

### 7.1 Normy a štandardy

| Norma | Názov | Relevancia |
|-------|-------|------------|
| **ISO 16779:2015** | Sensory analysis – Assessment (determination and verification) of the shelf life of foodstuffs | Hlavná norma pre sensory shelf-life |
| **ISO 8586:2023** | Sensory analysis – General guidelines for the selection, training and monitoring of selected assessors and expert sensory assessors | Výber a tréning panelistov |
| **ISO 11035:1994** | Sensory analysis – Identification and selection of descriptors for establishing a sensory profile by a multidimensional approach | Deskriptívna analýza |
| **ISO 11136:2014** | Sensory analysis – Methodology – General guidance for conducting hedonic tests with consumers in a controlled area | Spotrebiteľské testy |
| **ISO 4120:2021** | Sensory analysis – Methodology – Triangle test | Trojuholníkový test |
| **ISO 10399:2017** | Sensory analysis – Methodology – Duo-trio test | Duo-trio test |
| **ISO 13299:2016** | Sensory analysis – Methodology – General guidance for establishing a sensory profile | Deskriptívna analýza |

### 7.2 Publikácie

| Autor(i) | Rok | Názov | Vydavateľ |
|----------|-----|-------|-----------|
| Lawless, H.T. & Heymann, H. | 2010 | Sensory Evaluation of Food: Principles and Practices | Springer |
| Hough, G. | 2010 | Sensory Shelf Life Estimation of Food Products | CRC Press |
| Gacula, M.C. & Singh, J. | 1984 | Statistical Methods in Food and Consumer Research | Academic Press |
| Robertson, G.L. | 2012 | Food Packaging: Principles and Practice | CRC Press |
| Man, C.M.D. & Jones, A.A. (eds.) | 2000 | Shelf Life Evaluation of Foods (2nd ed.) | Aspen Publishers |
| Kilcast, D. & Subramaniam, P. (eds.) | 2000 | The Stability and Shelf-Life of Food | Woodhead Publishing |
| Taoukis, P.S., Labuza, T.P. & Saguy, I.S. | 1997 | Kinetics of food deterioration and shelf-life prediction | In: Valentas, Rotstein & Singh (eds.), Handbook of Food Engineering Practice, CRC Press |

### 7.3 Kľúčové koncepty a skratky

| Skratka | Význam |
|---------|--------|
| **ASLT** | Accelerated Shelf-Life Testing |
| **Q10** | Temperature coefficient |
| **Ea** | Activation energy |
| **KM** | Kaplan-Meier |
| **JAR** | Just-About-Right |
| **RH** | Relative Humidity |
| **MLE** | Maximum Likelihood Estimation |
| **CI** | Confidence Interval |
| **SD** | Standard Deviation |

---

## Záver

Sensory shelf-life testing je komplexný proces, ktorý kombinuje senzorickú analýzu, štatistické modelovanie a techniky urýchleného starnutia. Kľúčové princípy:

1. **Správny dizajn** – dostatočný počet časových bodov, vzoriek a panelistov
2. **Vhodná štatistická analýza** – Kaplan-Meier, Weibull, Arrhenius
3. **Bezpečnostný faktor** – konzervatívny prístup k stanoveniu "best before"
4. **Kompletná dokumentácia** – všetky dáta a výsledky musia byť zdokumentované

Dodržiavanie týchto princípov zaisťuje spoľahlivé a reprodukovateľné výsledky, ktoré môžu byť použité na stanovenie trvanlivosti produktov.

---

## Prepojenie s praktickými cvičeniami v R (SaIT)

| Téma | Cvičenie [SaIT](https://github.com/senzorika/SaIT) | Skript |
|---|---|---|
| Kaplan-Meierov odhad, cut-off bod | [10 – Analýza prežitia a senzorická trvanlivosť](https://senzorika.github.io/SaIT/teoria/cvicenie10.html) | [`cvicenie10.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie10.R) |
| Regresia senzorických dát v čase | [6 – Korelácia a lineárna regresia](https://senzorika.github.io/SaIT/teoria/cvicenie06.html) | [`cvicenie6.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie6.R) |
| Prípadová štúdia senzorickej trvanlivosti | [20 – Kontrolné prípadové štúdie II](https://senzorika.github.io/SaIT/teoria/cvicenie20.html) | [`cvicenie20.R`](https://github.com/senzorika/SaIT/blob/master/cvicenie20.R) |
| Prednáška | [Spotrebiteľský výskum (vrátane trvanlivosti)](https://senzorika.github.io/SaIT/prezentacie/sk/06_spotrebitelsky_vyskum.html) | — |

---

*Verzia: 1.1 (overená a prelinkovaná so SaIT) | Dátum: 2026-09-29 | Autor: SAP - Senzorická Analýza Potravín*
