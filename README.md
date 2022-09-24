# ITF20319-Software-Engingeering-og-Testing

## Oblig 2 og 3

Jeg lagde mappen `.github/workflows` hvor jeg skrev `node.js.yml`.

Det er satt opp Continuous Integration (CI) slik at hver gang noen pusher til main eller lager et PR til main, vil flyten kjøre.

Den vil gjøre alle `run:` kommandoene både på Node.js versjon 14, 16 og 18. Dette for å sikre bred kompabilitet og testdekning.

Først i flyten vil `npm install -g npm` bli kjørt, for å sikre at videre `npm` kommandoer vil fungere.

Deretter vil `npm ci` installere avhengigheter og pakker fra `package-lock.json`. Dette er foretrukket ovenfor `npm install` som kan føre til en annerledes pakkestruktur, og ikke noe man burde kjøre i produksjonsmiljø. `npm ci` sikrer at man får helt lik pakkestruktur, og det er viktig at testene reflekterer det som skal ut i produksjonsmiljø.

Til slutt kjøres kommandoen `npm test` som egentlig bare er en alias definert i `package.json` for kommandoen `mocha`. Mocha vil da finne mappen `/test` og kjøre alle tester definert i filer i denne mappen.

Dersom noen av testene skulle feile, på enten versjon 14, 16 eller 18 av Node.js, vil sjekkene feile i sin helhet.
