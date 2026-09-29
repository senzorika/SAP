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
| **Ovocie a zelenina** | Zrnie, hniloba, strata chuti | 3-14 dní |
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
- S(t) = pravdepodobnosť preživania (akceptovateľnosti) v čase t
- dᵢ = počet "udalostí" (zamietnutí) v čase tᵢ
- nᵢ = počet "rizikových" (testovaných) v čase tᵢ
```

**Interpretácia:**

```
S(t) = 0.80 → 80% produktov je stále akceptovateľných v čase t
S(t) = 0.50 → Mediánová shelf-life (50% produktov je stále akceptovateľných)
S(t) = 0.10 → 10% produktov je stále akceptovateľných (koniec shelf-life)
```

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
Akceptovateľná úroveň: S(t) = 0.50 (50% spotrebiteľov akceptuje)

t₅₀ = η × (-ln(0.5))^(1/β) = η × (0.693)^(1/β)

Akceptovateľná úroveň: S(t) = 0.10 (10% spotrebiteľov akceptuje)

t₁₀ = η × (-ln(0.10))^(1/β) = η × (2.303)^(1/β)
```

### 2.3 Accelerated Shelf-Life Testing (ASLT)

**Princíp:** ASLT je metóda, ktorá urýchli prirodzenú degradáciu produktov zvýšením teploty (a/alebo vlhkosti, svetla) a následne extrapoluje výsledky na normálne podmienky skladovania pomocou Arrheniusovho modelu.

**Q10 Model:**

```
Q10 = (Shelf-life pri T₁) / (Shelf-life pri T₂)

Kde:
- T₂ = T₁ + 10°C
- Q10 = koeficient urýchlenia degradácie

Vzťah:
Shelf-life(T₂) = Shelf-life(T₁) / Q10^((T₁-T₂)/10)
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
Q10 = exp(Ea / (R × T × (T + 10))) × 10

alebo aproximatívne:

Q10 ≈ exp(10 × Ea / (R × T²))
```

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
| **β < 1** | Ranná smrteľnosť | Chlieb (rýchle stárnutie na začiatku) |
| **β = 1** | Konštantná hazard | Nápoje (konštantná rýchlosť degradácie) |
| **β > 1** | Starnutie | Mliečne výrobky (rastúca rýchlosť degradácie) |

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

1. **Viac bodov na začiatku** – degradácia je rýchlejšia v prvých dňoch
2. **Menej bodov na konci** – degradácia spomaľuje
3. **Minimálne 5 časových bodov** – pre spoľahlivý odhad
4. **Kontrolné body** – na overenie linearity degradácie

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
| **Spotrebiteľský test** | 100 | 150-200 |
| **JAR test** | 100 | 150-200 |
| **Preference test** | 100 | 150-200 |

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
| **Chlieb a pečivo** | 1.5-2.5 | Stárnutie |
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
Pri 20°C (293 K): k₁ = 0.0056 deň⁻¹
Pri 30°C (303 K): k₂ = 0.0168 deň⁻¹

Ea = -8.314 × ln(0.0168/0.0056) / (1/303 - 1/293)
Ea = -8.314 × ln(3.0) / (0.003300 - 0.003413)
Ea = -8.314 × 1.0986 / (-0.000113)
Ea = 80,870 J/mol = 80.9 kJ/mol
```

**Typické Ea hodnoty:**

| Typ reakcie | Ea (kJ/mol) |
|-------------|-------------|
| **Oxidácia tuku** | 60-100 |
| **Enzymatická degradácia** | 40-80 |
| **Mikrobiologický rast** | 80-120 |
| **Stárnutie chleba** | 100-150 |
| **Vitamínová degradácia** | 60-100 |

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
Shelf-life = ln(S₀/S) / k

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
Mediánová shelf-life (S(t) = 0.50):
t₅₀ = η × (ln 2)^(1/β) = η × (0.693)^(1/β)

Shelf-life pri S(t) = 0.10:
t₁₀ = η × (ln 10)^(1/β) = η × (2.303)^(1/β)
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
t₁₀ = η × (ln 10)^(1/β)
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
| **Panelisti** | 12 trénovaných |
| **Opakovania** | 3 |
| **Atribúty** | Chuť, vôňa, textúra, celková akceptabilita |
| **Škála** | 0-10 bodov |

**Výsledky:**

| Čas (dni) | Chuť (priemer) | Vôňa (priemer) | Textúra (priemer) | Akceptabilita (%) |
|------------|----------------|----------------|-------------------|-------------------|
| 0 | 8.5 | 8.2 | 8.0 | 100 |
| 7 | 8.0 | 7.8 | 7.5 | 95 |
| 14 | 7.2 | 7.0 | 6.8 | 85 |
| 21 | 6.5 | 6.2 | 6.0 | 70 |
| 28 | 5.8 | 5.5 | 5.2 | 55 |
| 35 | 5.0 | 4.8 | 4.5 | 35 |
| 42 | 4.2 | 4.0 | 3.8 | 15 |

**Weibull fit:**

```
β = 2.3 (rastúca hazard)
η = 28.5 dní

t₅₀ = 28.5 × (0.693)^(1/2.3) = 28.5 × 0.87 = 24.8 dní
t₁₀ = 28.5 × (2.303)^(1/2.3) = 28.5 × 1.38 = 39.3 dní
```

**Záver:** Shelf-life jogurtu = 25 dní (mediánová shelf-life)

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

**Weibull fit:**

```
β = 1.8 (rastúca hazard)
η = 3.2 dní

t₅₀ = 3.2 × (0.693)^(1/1.8) = 3.2 × 0.82 = 2.6 dní
t₁₀ = 3.2 × (2.303)^(1/1.8) = 3.2 × 1.28 = 4.1 dní
```

**Záver:** Shelf-life chleba = 3 dni (mediánová shelf-life)

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
Ea = -8.314 × ln(3.0) / (1/308 - 1/298)
Ea = -8.314 × 1.0986 / (0.003247 - 0.003356)
Ea = -8.314 × 1.0986 / (-0.000109)
Ea = 83,800 J/mol = 83.8 kJ/mol
```

**Weibull fit (25°C):**

```
β = 2.0 (rastúca hazard)
η = 195 dní

t₅₀ = 195 × (0.693)^(1/2.0) = 195 × 0.83 = 162 dní
t₁₀ = 195 × (2.303)^(1/2.0) = 195 × 1.52 = 296 dní
```

**Záver:** Shelf-life nápoja = 160 dní (mediánová shelf-life pri 25°C)

---

## 6. Interpretácia a reporting

### 6.1 Ako interpretovať výsledky

**Kľúčové ukazovatele:**

| Ukazovateľ | Interpretácia | Akceptačné kritérium |
|------------|---------------|----------------------|
| **Mediánová shelf-life** | Čas, pri ktorom 50% produktov je stále akceptovateľných | Závisí od produktu |
| **t₁₀** | Čas, pri ktorom 10% produktov je stále akceptovateľných | Koniec shelf-life |
| **β (Weibull)** | Tvar degradácie | β > 1 = starnutie |
| **Q10** | Závislosť od teploty | Typicky 2-4 |
| **Ea** | Energia aktivácie | Typicky 60-120 kJ/mol |

**Interpretácia β:**

```
β < 1: Ranná smrteľnosť
- Degradácia je rýchla na začiatku, potom spomaľuje
- Príklad: Chlieb (rýchle stárnutie v prvých hodinách)

β = 1: Konštantná hazard
- Degradácia je lineárna v čase
- Príklad: Nápoje (konštantná rýchlosť oxidácie)

β > 1: Starnutie
- Degradácia sa zrýchľuje s časom
- Príklad: Mliečne výrobky (rastúca rýchlosť kysnutia)
```

### 6.2 Ako určiť "best before" dátum

**Postup:**

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
| **Kľúčové potraviny** | 0.7 | Vysoká spotrebiteľská rizika |
| **Bežné potraviny** | 0.8 | Štandardná ochrana |
| **Konzervy** | 0.9 | Nízka rizika |
| **Mrazené výrobky** | 0.75 | Závisí od reťaznice chladenia |

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
- Panelisti: 12 trénovaných
- Opakovania: 3

## Výsledky

### Kaplan-Meierov odhad
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
- β = 2.3
- η = 28.5 dní
- Kvalita fitu: Anderson-Darling p = 0.12

### Shelf-life
- Mediánová shelf-life (t₅₀): 24.8 dní
- t₁₀: 39.3 dní
- Odporúčaný "best before": 20 dní (bezpečnostný faktor 0.8)

## Záver
- Shelf-life produktu pri 4°C: 25 dní
- Odporúčaný "best before" dátum: 20 dni od výroby
- Hlavný degradáciu atribút: Chuť a vôňa
```

---

## 7. Kľúčové zdroje

### 7.1 Normy a štandardy

| Norma | Názov | Relevancia |
|-------|-------|------------|
| **ISO 16741:2015** | Sensory analysis – Shelf-life testing | Hlavná norma pre sensory shelf-life |
| **ISO 8586:2012** | Sensory analysis – General guidelines for the selection, training and monitoring of assessors | Výber a tréning panelistov |
| **ISO 11035:1994** | Sensory analysis – Identification and selection of descriptors for establishing a sensory profile | Deskriptívna analýza |
| **ISO 11136:2014** | Sensory analysis – General guidance for conducting hedonic tests | Spotrebiteľské testy |
| **ISO 4120:2004** | Sensory analysis – Methodology – Triangle test | Trojuholníkový test |
| **ISO 10399:2017** | Sensory analysis – Methodology – Duo-trio test | Duo-trio test |
| **ISO 13299:2016** | Sensory analysis – Methodology – General guidance for establishing a sensory profile | Deskriptívna analýza |

### 7.2 Publikácie

| Autor(i) | Rok | Názov | Vydavateľ |
|----------|-----|-------|-----------|
| Lawless, H.T. & Heymann, H. | 2010 | Sensory Evaluation of Food: Principles and Practices | Springer |
| Hough, G. | 2010 | Sensory Shelf Life Estimation | CRC Press |
| Gacula, M.C. & Singh, J. | 1984 | Statistical Methods in Food and Consumer Research | Academic Press |
| Robertson, G.L. | 2012 | Food Packaging: Principles and Practice | CRC Press |
| Man, D. & Jones, A. | 2000 | Shelf Life Evaluation of Foods | Aspen Publishers |
| Kilcast, D. & Subramaniam, P. | 2000 | The Stability and Shelf-Life of Food | Woodhead Publishing |
| Taoukis, P.S. et al. | 1997 | Accelerated shelf-life testing | In: Evaluation of Seafood Freshness |

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

*Verzia: 1.0 | Dátum: 2026-09-29 | Autor: SAP - Senzorická Analýza Potravín*
