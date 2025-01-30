# FJSX24-React-Vecka5
Prestandaoptimering

# Prestandaoptimering

## Övningar

## Övning 1: Lazy Loading & Suspense
- Mål: Lära sig att använda React.lazy och Suspense för att förbättra prestanda genom kod-splitting.
- Uppgift:
  - Skapa en React-komponent som heter HeavyComponent.jsx.
  - Gör så att HeavyComponent laddas först när användaren klickar på en knapp.
  - Använd lazy() och Suspense för att dynamiskt importera HeavyComponent.

## Övning 2: Memoization med React.memo och useMemo
- Mål: Förstå onödig omrendering och hur man optimerar prestanda genom memoization.
- Uppgift:
  - Skapa en komponent ExpensiveCalculation.jsx som gör en tung beräkning.
  - Använd useMemo för att optimera beräkningen, så att den inte körs om i onödan.
  - Lägg till en räknare (useState) som inte ska trigga omrendering av beräkningen.
 
## Övning 3: Förbättra prestandan med React.memo
- Mål: Förstå hur React.memo kan förhindra onödig omrendering av barnkomponenter.
- Uppgift:
  - Skapa en komponent ChildComponent.jsx som bara renderas om dess props ändras.
  - Använd React.memo för att förhindra omrendering när en icke-relevant state ändras.
  - Lägg till en knapp som ändrar en state som inte ska påverka ChildComponent.

## Vad studenterna lär sig
- Övning:	
1 📝 Lazy Loading
2 📝 Memoization
3 📝 React.memo	
- Koncept	
1 React.lazy() + Suspense
2 useMemo()
3 React.memo()


- Lärdom
1 Förbättrad sidladdning genom kod-splitting
2 Optimerad beräkning & prestandaförbättring
3 Undvika onödiga omrenderingar
		
- Dessa tre övningar ger studenterna en praktisk förståelse för prestandaförbättringar i React, samtidigt som de får jobba med state, props och hooks i verkliga scenarion. 🚀
