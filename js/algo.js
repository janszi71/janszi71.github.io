/*
KÁVÉFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
    KÁVÉ HOZZÁADÁSA
ENDIF
IF NINCS ELÉG VÍZ THEN
    VÍZ HOZZÁADÁSA
ENDIF
WHILE NEM MELEGEDETT FEL
    10 MP VÁRAKOZÁS
ENDWHILE
CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
/*


/*
Összegzés alogritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);


/*
Számlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0){
        db++;
    }
}
console.log("Even numbers: ", db);

/*
Pl. a 3-nál nagyobb szám összesen
*/
let count = 0;
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] > 3) {
    count++;
  }
}
console.log("Háromnál nagyobb szám összesen: ", count);
 
/*
Összevonva a kettő egy függvényben - én általam
*/
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0){
        db++;
    } else {
        if (numericArray[i] > 3) {
            count++;
        }
    }
}
console.log("Even numbers(2): ", db, "\nHáromnál nagyobb szám összesen(2): ", count);


/*
Szélsőérték keresése algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest);

/*
Megfordítva a biggest (legkisebb érték)
*/
let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: ", smallest);

/*
Egy függvényben a kettő - én írtam meg
*/
let biggestTwo = smallestTwo = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggestTwo) {
        biggestTwo = numericArray[i];
    } else {
        if (numericArray[i] < smallestTwo) {
            smallestTwo = numericArray[i];
        }
    }
}
console.log("The biggest(2) element: ", biggestTwo, "\nThe smallest(2) element: ", smallestTwo);


/*
Eldöntés tétele (algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let contains = false;
for (let i = 0; i < numericArray.length && !contains; i++) { 
                 // && (ÉS) !contains vagy && contains == false - mindkettő jó. Ez az ÉS feltétel
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("This array contains 5: ", contains);

/*
Ha nem létezik a szám:
*/
let containsTwo = false;
for (let i = 0; i < numericArray.length && !contains; i++) { 
                 // && (ÉS) !contains vagy && contains == false - mindkettő jó. Ez az ÉS feltétel
    if (numericArray[i] == 15) {
        containsTwo = true;
    }
}
console.log("This array contains 15: ", containsTwo);